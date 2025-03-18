
const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="w-8 h-8 rounded-full bg-ajent-blue/10 border border-ajent-blue/30 flex items-center justify-center mr-2 overflow-hidden flex-shrink-0">
        <img 
          src="/lovable-uploads/1dfe0312-2f79-4005-aec4-b2cf3c439ebe.png"
          alt="AI Support Assistant"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-ajent-gray rounded-lg p-3">
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-ajent-blue/60 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-ajent-blue/60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-ajent-blue/60 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
