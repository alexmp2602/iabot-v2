"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatBox";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setChatBoxOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg text-white"
      >
        <Bot size={24} />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
