import React, { useState, useRef, useEffect } from "react";
import { sendMessage, getHistory, clearHistory } from "../utils/api";
import ChatBubble from "../components/ChatBubble";
import ChatInput from "../components/ChatInput";

const Chat = ({ sessionId = "default-session" }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  // Load conversation history when component mounts
  useEffect(() => {
    const fetchHistory = async () => {
      const history = await getHistory(sessionId);
      setMessages(
        history.map((msg) => ({
          text: msg.message,
          isUser: msg.role === "user",
        }))
      );
    };
    fetchHistory();
  }, [sessionId]);

  const handleSendMessage = async (message) => {
    const newMessage = { text: message, isUser: true };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);

    try {
      const response = await sendMessage(sessionId, message);
      // ✅ always use message + role
      setMessages((prev) => [
        ...prev,
        { text: response.message, isUser: response.role === "user" },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "⚠️ Error: could not send message. Try again later.",
          isUser: false,
        },
      ]);
    }
    setLoading(false);
  };

  const handleClearChat = async () => {
    try {
      await clearHistory(sessionId);
      setMessages([]);
    } catch (err) {
      console.error("Error clearing history:", err);
    }
  };

  return (
    <div className="flex flex-col container mx-auto h-[90vh] max-w-2xl bg-gradient-to-b from-blue-50 to-gray-100 border rounded-2xl shadow-md overflow-hidden">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-3 shadow">
        <h1 className="text-lg font-semibold">HealthGPT Assistant</h1>
        <p className="text-xs text-blue-100">Your AI health companion</p>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatBubble
            key={index}
            message={message.text}
            isUser={message.isUser}
          />
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-xl shadow px-3 py-2">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.15s]" />
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.3s]" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Input */}
      <footer className="border-t bg-white">
        <ChatInput onSendMessage={handleSendMessage} disabled={loading} />
        <p className="text-center p-2 text-xs text-gray-500">
          ⚠️ This chatbot is not a medical professional. Always consult a
          doctor.
        </p>
      </footer>
    </div>
  );
};

export default Chat;
