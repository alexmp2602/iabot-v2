import React, { useState } from 'react';
import AIChatBot from './AIChatBot';
import { Button } from './ui/button';
import { Bot } from 'lucide-react';

export default function AIChatButton() {
    const [ChatBotOpen, SetChatBotOpen] = useState(false);

    return (
        <>
            <Button onClick={() => SetChatBotOpen(true) }> 
                <Bot size={24} className="mr-2" />
                AI Chat
            </Button>

            <AIChatBot open={ChatBotOpen} onClose={() => SetChatBotOpen(false)} />
        </>
    )
}