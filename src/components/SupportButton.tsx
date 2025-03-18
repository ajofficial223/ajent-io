
import { MessageCircle, X } from 'lucide-react';
import ChatWindow from './chat/ChatWindow';
import { useChat } from '@/hooks/use-chat';

const SupportButton = () => {
  const { isOpen, messages, isTyping, toggleChat, sendMessage } = useChat();
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button 
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 btn-glow ${
          isOpen ? 'bg-ajent-purple text-white rotate-90' : 'bg-ajent-blue text-white'
        }`}
        aria-label="Chat with support"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <ChatWindow 
          messages={messages}
          isTyping={isTyping}
          onClose={toggleChat}
          onSendMessage={sendMessage}
        />
      )}
    </div>
  );
};

export default SupportButton;
