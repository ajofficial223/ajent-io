
import { Message } from "@/types/chat";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
      {!message.isUser && (
        <div className="w-8 h-8 rounded-full bg-ajent-blue/10 border border-ajent-blue/30 flex items-center justify-center mr-2 overflow-hidden flex-shrink-0">
          <img 
            src="/lovable-uploads/1dfe0312-2f79-4005-aec4-b2cf3c439ebe.png"
            alt="AI Support Assistant"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className={`max-w-[75%] rounded-lg p-3 ${
        message.isUser 
          ? 'bg-ajent-blue/20 text-white' 
          : 'bg-ajent-gray text-ajent-silver'
      }`}>
        <p className="text-sm">{message.text}</p>
        <p className="text-xs mt-1 opacity-60">{message.time}</p>
      </div>
      {message.isUser && (
        <div className="w-8 h-8 rounded-full bg-ajent-purple/20 flex items-center justify-center ml-2 overflow-hidden flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
