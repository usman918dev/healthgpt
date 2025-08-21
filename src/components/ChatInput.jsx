import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex space-x-2 p-4 bg-white shadow-lg border"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
        className="flex-1 min-w-0 rounded-xl p-4 border focus:border-primary focus:ring-primary"
      />
      <button
        type="submit"
        disabled={disabled || !message.trim()}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <PaperAirplaneIcon className="h-5 w-5" />
      </button>
    </form>
  );
};

export default ChatInput;
