import React from 'react';

const ChatBubble = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] sm:max-w-[70%] px-4 py-2 rounded-xl ${
          isUser
            ? 'bg-primary text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-bl-none'
        } shadow-sm`}
      >
        <p className="text-sm sm:text-base whitespace-pre-wrap break-words">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
