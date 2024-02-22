import {useChat} from "ai/react";
import { cn } from "@/lib/utils";

interface AiChatBotProps {
    open: boolean;
    onClose: () => void
}

export default function AiChatBot({open, onClose}: AiChatBotProps) {
    const {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        setMessages,
        isLoading,
        error
    } = useChat(); // /api/chat

    return <div className={cn("bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-36")}></div>
}

