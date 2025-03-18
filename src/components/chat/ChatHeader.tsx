
import { X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="bg-ajent-gray p-4 border-b border-white/10 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-ajent-blue/10 border border-ajent-blue/30 flex items-center justify-center mr-3 overflow-hidden">
          <img 
            src="/lovable-uploads/1dfe0312-2f79-4005-aec4-b2cf3c439ebe.png"
            alt="AI Support Assistant"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-ajent-silver">AJent Support</h3>
          <p className="text-xs text-ajent-silver/60">Typically replies in minutes</p>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="text-ajent-silver/60 hover:text-ajent-silver"
        aria-label="Close chat"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default ChatHeader;
