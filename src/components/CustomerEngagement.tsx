
import { useEffect, useRef } from 'react';
import { MessageCircle, Clock, Share2 } from 'lucide-react';

const CustomerEngagement = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };
    
    observerRef.current = new IntersectionObserver(callback, {
      threshold: 0.1
    });
    
    const elements = document.querySelectorAll('.reveal-text');
    elements.forEach(el => {
      observerRef.current?.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observerRef.current?.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section className="py-20 relative tech-bg overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-ajent-blue rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-ajent-purple rounded-full"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-ajent-blue rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-ajent-purple rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Chat simulation */}
          <div className="lg:w-1/2 reveal-text">
            <div className="glass-card rounded-xl overflow-hidden border border-white/10 blue-purple-glow">
              <div className="bg-ajent-gray p-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-ajent-purple"></div>
                  <span className="font-medium">AJent Support</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
              </div>
              
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto scrollbar-none">
                {/* Bot message */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-ajent-blue/20 rounded-full flex items-center justify-center text-ajent-blue">
                    <Bot />
                  </div>
                  <div className="bg-ajent-gray rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Hi there! I'm your AJent assistant. How can I help you today?</p>
                    <div className="mt-1 text-xs text-ajent-silver/50">10:30 AM</div>
                  </div>
                </div>
                
                {/* User message */}
                <div className="flex items-start justify-end space-x-3">
                  <div className="bg-ajent-blue/20 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">I'd like to know more about your pricing plans for e-commerce businesses.</p>
                    <div className="mt-1 text-xs text-ajent-silver/50">10:31 AM</div>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 bg-ajent-purple/20 rounded-full flex items-center justify-center text-ajent-purple">
                    <User />
                  </div>
                </div>
                
                {/* Bot message with options */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-ajent-blue/20 rounded-full flex items-center justify-center text-ajent-blue">
                    <Bot />
                  </div>
                  <div className="space-y-2 max-w-[80%]">
                    <div className="bg-ajent-gray rounded-lg p-3">
                      <p className="text-sm">For e-commerce businesses, we offer three plans:</p>
                      <ul className="mt-2 text-sm space-y-1 list-disc pl-4">
                        <li>Starter: $99/mo - Basic customer support and product recommendations</li>
                        <li>Growth: $299/mo - Advanced support, product recommendations, and order management</li>
                        <li>Enterprise: Custom pricing - Fully customized solution for high-volume stores</li>
                      </ul>
                      <p className="mt-2 text-sm">Would you like more details about any specific plan?</p>
                      <div className="mt-1 text-xs text-ajent-silver/50">10:32 AM</div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="px-3 py-1.5 text-xs bg-ajent-blue/20 hover:bg-ajent-blue/30 text-ajent-blue rounded-md transition-colors">
                        Starter Details
                      </button>
                      <button className="px-3 py-1.5 text-xs bg-ajent-blue/20 hover:bg-ajent-blue/30 text-ajent-blue rounded-md transition-colors">
                        Growth Details
                      </button>
                      <button className="px-3 py-1.5 text-xs bg-ajent-blue/20 hover:bg-ajent-blue/30 text-ajent-blue rounded-md transition-colors">
                        Enterprise Details
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Message input */}
                <div className="mt-4 border-t border-white/10 pt-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="w-full bg-ajent-gray border border-white/10 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-ajent-blue/50 text-sm"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-ajent-blue">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="lg:w-1/2 space-y-6 order-first lg:order-last">
            <div className="inline-block px-3 py-1 rounded-full bg-ajent-blue/10 border border-ajent-blue/20 text-ajent-blue text-sm font-medium font-mono reveal-text">
              SEAMLESS COMMUNICATION
            </div>
            <h2 className="text-3xl md:text-4xl font-futura mb-4 reveal-text">AI-Powered Customer Engagement</h2>
            <p className="text-ajent-silver/80 reveal-text">
              Create meaningful connections with your customers through intelligent, conversational AI that understands context, remembers past interactions, and provides real value in every conversation.
            </p>
            
            <div className="space-y-6 mt-8">
              {[
                {
                  icon: <MessageCircle className="h-6 w-6" />,
                  title: "Conversational AI",
                  description: "Natural, human-like conversations with intelligent understanding of customer intent."
                },
                {
                  icon: <Clock className="h-6 w-6" />,
                  title: "24/7 Availability",
                  description: "Provide instant responses to customer inquiries at any time, improving satisfaction."
                },
                {
                  icon: <Share2 className="h-6 w-6" />,
                  title: "Multi-Platform Integration",
                  description: "Deploy your AI agents across WhatsApp, website chat, social media, and more."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 reveal-text"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 bg-ajent-blue/10 text-ajent-blue p-2 rounded">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">{feature.title}</h3>
                    <p className="text-ajent-silver/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Bot and User components for the chat interface
const Bot = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 5H18C18 6.7 16.7 8 15 8H9C7.3 8 6 6.7 6 5H3C2.4 5 2 5.4 2 6V11C2 11.6 2.4 12 3 12H6V19H18V12H21C21.6 12 22 11.6 22 11V6C22 5.4 21.6 5 21 5Z" fill="currentColor"/>
  </svg>
);

const User = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
  </svg>
);

export default CustomerEngagement;
