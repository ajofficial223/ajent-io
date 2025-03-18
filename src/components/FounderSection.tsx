
import { useEffect, useRef } from 'react';

const FounderSection = () => {
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
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0,0 L40,0 L40,40 L0,40 L0,0" stroke="rgba(0, 191, 255, 0.1)" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Founder image */}
          <div className="md:w-2/5 reveal-text">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-ajent-blue/30 to-ajent-purple/30 rounded-2xl blur-lg opacity-70 animate-pulse-glow"></div>
              <div className="relative glass-card rounded-2xl p-1 border border-white/20 overflow-hidden">
                <div className="aspect-square bg-ajent-gray rounded-xl overflow-hidden">
                  {/* Placeholder for founder image */}
                  <div className="w-full h-full bg-ajent-gray flex items-center justify-center">
                    <div className="text-6xl font-futura text-ajent-blue">AJ</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-ajent-blue/10 backdrop-blur-md border border-ajent-blue/20 flex items-center justify-center text-ajent-blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 5H18C18 6.7 16.7 8 15 8H9C7.3 8 6 6.7 6 5H3C2.4 5 2 5.4 2 6V11C2 11.6 2.4 12 3 12H6V19H18V12H21C21.6 12 22 11.6 22 11V6C22 5.4 21.6 5 21 5Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute -bottom-2 -left-2 w-20 h-6 rounded-full bg-ajent-purple/10 backdrop-blur-md border border-ajent-purple/20 flex items-center justify-center text-ajent-purple text-xs font-mono">
                FOUNDER
              </div>
            </div>
          </div>
          
          {/* Founder info */}
          <div className="md:w-3/5 space-y-6 glass-card rounded-xl p-8 border border-white/10">
            <div className="space-y-1 reveal-text">
              <h2 className="text-3xl font-futura">Avishkar Jadhav</h2>
              <p className="text-ajent-silver/70 font-medium">Graphic Designer & AI Agent Creator</p>
            </div>
            
            <div className="space-y-4 text-ajent-silver/80 reveal-text">
              <p>
                At AJent.io, we're on a mission to transform how businesses connect with their customers through intelligent AI agents that provide real value, not just automated responses.
              </p>
              <p>
                I founded this company out of a passion for combining beautiful design with powerful AI technology to create solutions that feel personal, intuitive, and effective.
              </p>
              <p>
                Our vision is to make advanced AI technology accessible to businesses of all sizes, helping them automate routine tasks while enhancing customer experiences through personalization at scale.
              </p>
            </div>
            
            <div className="pt-4 flex space-x-4 reveal-text">
              {['LinkedIn', 'Twitter', 'Instagram'].map((platform, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-white/5 hover:bg-white/10 text-ajent-silver hover:text-ajent-blue border border-white/10 hover:border-ajent-blue/30 px-4 py-2 rounded-md transition-all duration-300 text-sm"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
