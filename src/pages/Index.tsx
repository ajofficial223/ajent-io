
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import AgentsOverview from '../components/AgentsOverview';
import CustomerEngagement from '../components/CustomerEngagement';
import AutomationPlatform from '../components/AutomationPlatform';
import PersonalizedJourneys from '../components/PersonalizedJourneys';
import FounderSection from '../components/FounderSection';
import SupportButton from '../components/SupportButton';
import Footer from '../components/Footer';
import CursorTracker from '../components/CursorTracker';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading for smoother animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Set up scroll reveal animations
    const setupObserver = () => {
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      };
      
      const observer = new IntersectionObserver(callback, {
        threshold: 0.1
      });
      
      const elements = document.querySelectorAll('.reveal-text');
      elements.forEach(el => {
        observer.observe(el);
      });
    };
    
    // Initialize after loading
    if (!isLoading) {
      setupObserver();
    }
    
    return () => clearTimeout(timer);
  }, [isLoading]);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-ajent-dark flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-4xl font-bold font-futura text-gradient mb-4">
            AJent<span className="text-ajent-blue">.</span>io
          </div>
          <div className="w-16 h-16 border-4 border-ajent-blue/30 border-t-ajent-blue rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-ajent-dark text-ajent-silver overflow-hidden">
      {/* Custom cursor */}
      <CursorTracker />
      
      {/* Main Content */}
      <div className="relative">
        <Navbar />
        <Hero />
        <TrustedBy />
        <AgentsOverview />
        <CustomerEngagement />
        <AutomationPlatform />
        <PersonalizedJourneys />
        <FounderSection />
        <Footer />
        
        {/* Support chat button */}
        <SupportButton />
      </div>
    </div>
  );
};

export default Index;
