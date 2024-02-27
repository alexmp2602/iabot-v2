import { getVectorStore } from "@/lib/astradb";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  PromptTemplate,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { Redis } from "@upstash/redis";
import {
  LangChainStream,
  StreamingTextResponse,
  Message as VercelChatMessage,
} from "ai";
import { UpstashRedisCache } from "langchain/cache/upstash_redis";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const chatHistory = messages
      .slice(0, -1)
      .map((m: VercelChatMessage) =>
        m.role === "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content),
      );

    const currentMessageContent = messages[messages.length - 1].content;

    const cache = new UpstashRedisCache({
      client: Redis.fromEnv(),
    });

    const { stream, handlers } = LangChainStream();

    const chatModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      streaming: true,
      callbacks: [handlers],
      verbose: true,
      cache,
    });

    const rephrasingModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      verbose: true,
      cache,
    });

    const retriever = (await getVectorStore()).asRetriever();

    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Dada la conversación anterior, genera una consulta de búsqueda para obtener información relevante para la pregunta actual. " +
          "No omitas ninguna palabra clave relevante. Solo devuelve la consulta y ningún otro texto.",
      ],
    ]);

    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
      llm: rephrasingModel,
      retriever,
      rephrasePrompt,
    });

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "Eres un chatbot para el sitio web de IABOT. Te haces pasar por el propietario del sitio web. " +
          "Responde a las preguntas del usuario basándote en el contexto a continuación. " +
          "Siempre que tenga sentido, proporciona los datos de contacto relevantes en respuesta a las preguntas del usuario. " +
          "Formatea tus mensajes en formato markdown.\n\n" +
          "Contexto:\n{contexto}",
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page URL: {url}\n\nPage content:\n{page_content}",
      ),
      documentSeparator: "\n--------\n",
    });

    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrieverChain,
    });

    retrievalChain.invoke({
      input: currentMessageContent,
      chat_history: chatHistory,
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Error Interno del servidor" },
      { status: 500 },
    );
  }
}
