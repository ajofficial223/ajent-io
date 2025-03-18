
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const SupportButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; time: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleChat = () => setIsOpen(!isOpen);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const userMessage = {
      text: inputValue,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    try {
      // Send message to webhook with proper content type and payload format
      const response = await fetch('https://ajtestingwork.app.n8n.cloud/webhook-test/AJent.io', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputValue,
          userId: 'website-visitor',
          timestamp: new Date().toISOString()
        }),
      });
      
      // Wait for webhook response
      if (response.ok) {
        try {
          const data = await response.json();
          
          // Add short delay to simulate typing
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: data.response || "Thank you for your message! Our team will get back to you shortly.",
              isUser: false,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
            setIsTyping(false);
          }, 1500);
        } catch (parseError) {
          console.error("Error parsing webhook response:", parseError);
          
          // Fallback if JSON parsing fails
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Thank you for your message! Our team will get back to you shortly.",
              isUser: false,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
            setIsTyping(false);
          }, 1500);
        }
      } else {
        throw new Error('Webhook response was not ok');
      }
    } catch (error) {
      console.error("Error sending message to webhook:", error);
      
      // Add fallback bot response after error
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "I'm having trouble connecting right now. Please try again later or contact us directly at support@ajent.io.",
          isUser: false,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setIsTyping(false);
      }, 1000);
    }
  };
  
  useEffect(() => {
    // Add initial bot message when chat is first opened
    if (isOpen && messages.length === 0) {
      setMessages([{
        text: "Hi there! I'm the AJent.io support assistant. How can I help you today?",
        isUser: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
    
    // Scroll to bottom of chat on new messages
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);
  
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
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 glass-card rounded-xl border border-white/20 overflow-hidden shadow-2xl animate-fade-in">
          {/* Chat header */}
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
              onClick={toggleChat}
              className="text-ajent-silver/60 hover:text-ajent-silver"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-4 scrollbar-none bg-ajent-dark/30 backdrop-blur-md">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
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
              ))}
              
              {isTyping && (
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
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Chat input */}
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
        </div>
      )}
    </div>
  );
};

export default SupportButton;
