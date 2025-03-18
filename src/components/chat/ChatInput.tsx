
import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
}

const ChatInput = ({ onSendMessage, isTyping }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    onSendMessage(inputValue);
    setInputValue('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-ajent-gray/20">
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="w-full bg-ajent-gray/50 backdrop-blur-sm border border-white/10 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-ajent-blue/50 text-ajent-silver"
        />
        <button 
          type="submit" 
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-ajent-blue hover:text-ajent-purple transition-colors"
          disabled={isTyping}
        >
          <Send size={18} />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
