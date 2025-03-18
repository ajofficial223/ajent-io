
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the container
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    if (robotRef.current) {
      // Create subtle head-tracking effect
      const moveX = (mousePosition.x - 0.5) * 5; // Subtle movement
      const moveY = (mousePosition.y - 0.5) * 3;
      
      robotRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  }, [mousePosition]);
  
  // Parallax effect for background elements
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      ref={containerRef}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern"></div>
      
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-ajent-blue/20 filter blur-3xl opacity-40 parallax"
        style={{ transform: `translate(${offset * 0.1}px, ${offset * -0.05}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-ajent-purple/20 filter blur-3xl opacity-30 parallax"
        style={{ transform: `translate(${offset * -0.15}px, ${offset * 0.05}px)` }}
      ></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Hero Text */}
        <div className="text-left space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-ajent-blue/10 border border-ajent-blue/20 text-ajent-blue text-sm font-medium font-mono">
            Next-Gen AI For Business
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-futura leading-tight">
            Transform Your Business with{' '} 
            <span className="text-gradient">AI-Powered Agents</span>
          </h1>
          <p className="text-xl text-ajent-silver/80 max-w-lg">
            Automate lead generation, customer service, and sales with intelligent AI assistants tailored for your industry.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#agents" 
              className="inline-flex items-center justify-center px-6 py-3 bg-ajent-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-ajent-blue-dark btn-glow group"
            >
              Explore AI Agents
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="#demo" 
              className="inline-flex items-center justify-center px-6 py-3 border border-ajent-blue/50 hover:border-ajent-blue text-ajent-blue font-medium rounded-lg transition-colors duration-300 hover:bg-ajent-blue/10"
            >
              Request Demo
            </a>
          </div>
        </div>
        
        {/* AI Robot Face - Updated with new image */}
        <div className="relative">
          <div className="relative bg-gradient-to-br from-ajent-gray to-ajent-dark p-8 rounded-2xl border border-white/10 blue-purple-glow aspect-square max-w-md mx-auto overflow-hidden group">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,191,255,0.5),_rgba(138,43,226,0.5))]"></div>
              
              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="circuit-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M10,0 L10,50 M0,10 L50,10 M20,0 L20,50 M0,20 L50,20 M30,0 L30,50 M0,30 L50,30 M40,0 L40,50 M0,40 L50,40" 
                            stroke="rgba(0, 191, 255, 0.5)" 
                            strokeWidth="0.5" 
                            fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
                </svg>
              </div>
            </div>
            
            {/* Robot face - now using the provided image */}
            <div className="relative h-full w-full flex items-center justify-center">
              <img
                ref={robotRef}
                src="/lovable-uploads/a1ed49a3-7fd1-4216-9f5e-f7360cc64747.png"
                alt="AI Robot"
                className="w-full h-full object-contain transition-transform duration-100 ease-out"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-1/12 left-1/4 w-1 h-1 bg-ajent-purple rounded-full animate-pulse"></div>
              <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-ajent-blue rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 bg-ajent-blue rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-1/5 right-1/5 w-1 h-1 bg-ajent-purple rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
          
          {/* Subtle text elements around the robot face */}
          <div className="absolute top-1/4 -left-4 md:-left-12 px-2 py-1 bg-ajent-blue/10 border border-ajent-blue/20 text-xs font-mono rounded text-ajent-blue">
            AI SYSTEM ONLINE
          </div>
          <div className="absolute bottom-1/4 -right-4 md:-right-12 px-2 py-1 bg-ajent-purple/10 border border-ajent-purple/20 text-xs font-mono rounded text-ajent-purple">
            DEEP LEARNING ACTIVE
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7L12 12L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
