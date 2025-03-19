
import { ArrowRight } from 'lucide-react';
import { SplineScene } from "@/components/ui/spline-scene";
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  
  // This ensures hydration doesn't cause issues with Spline
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-ajent-blue/20 filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-ajent-purple/20 filter blur-3xl opacity-30"></div>
      
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
        
        {/* 3D Robot with Spline - with better error handling */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
          {isClient && (
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
              className="w-full h-full" 
            />
          )}
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
