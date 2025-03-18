
import { useEffect, useRef } from 'react';
import { Message } from '@/types/chat';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
  onClose: () => void;
  onSendMessage: (message: string) => void;
}

const ChatWindow = ({ messages, isTyping, onClose, onSendMessage }: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom of chat on new messages
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);
  
  return (
    <div className="absolute bottom-20 right-0 w-80 sm:w-96 glass-card rounded-xl border border-white/20 overflow-hidden shadow-2xl animate-fade-in">
      <ChatHeader onClose={onClose} />
      
      <div className="h-80 overflow-y-auto p-4 scrollbar-none bg-ajent-dark/30 backdrop-blur-md">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          
          {isTyping && <TypingIndicator />}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <ChatInput onSendMessage={onSendMessage} isTyping={isTyping} />
    </div>
  );
};

export default ChatWindow;
