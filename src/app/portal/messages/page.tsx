"use client";

import { useState } from "react";
import { ClientPortalShell } from "@/components/portal/client-shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Send, MessageCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

const mockFirm = {
  name: "Smith & Associates",
  logoUrl: null,
  primaryColor: "#1E3A5F",
  accentColor: "#3B82F6",
};

const mockClient = {
  name: "Acme Corp",
  email: "sarah@acme.com",
};

interface Message {
  id: string;
  content: string;
  fromFirm: boolean;
  createdAt: Date;
  projectName?: string;
}

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hi Sarah, we've uploaded the Q4 engagement letter for your review. Please let us know if you have any questions.",
    fromFirm: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    projectName: "Q4 Tax Filing",
  },
  {
    id: "2",
    content: "Thanks! I'll review it today and get back to you.",
    fromFirm: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60),
  },
  {
    id: "3",
    content: "Quick question - should I also include the supplementary schedules from last quarter?",
    fromFirm: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 30),
  },
];

export default function PortalMessagesPage() {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: String(Date.now()),
      content: newMessage,
      fromFirm: false,
      createdAt: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <ClientPortalShell firm={mockFirm} client={mockClient}>
      <div className="flex flex-col h-[calc(100vh-8rem)] lg:h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="p-4 md:p-6 border-b bg-white">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Messages
          </h1>
          <p className="text-sm text-muted-foreground">
            Chat with your team at {mockFirm.name}
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.fromFirm ? "justify-start" : "justify-end"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] md:max-w-[70%]",
                  message.fromFirm ? "" : ""
                )}
              >
                {message.projectName && message.fromFirm && (
                  <Badge variant="secondary" className="mb-1 text-xs">
                    {message.projectName}
                  </Badge>
                )}
                <Card
                  className={cn(
                    "p-3",
                    message.fromFirm
                      ? "bg-white"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                </Card>
                <p
                  className={cn(
                    "text-xs mt-1",
                    message.fromFirm
                      ? "text-muted-foreground"
                      : "text-muted-foreground text-right"
                  )}
                >
                  {message.fromFirm ? mockFirm.name : "You"} ·{" "}
                  {formatDistanceToNow(message.createdAt, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={!newMessage.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </ClientPortalShell>
  );
}
