
import { useEffect, useRef } from 'react';
import { Server, Database, LineChart, Zap, Settings } from 'lucide-react';

const AutomationPlatform = () => {
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
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-ajent-blue/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-ajent-purple/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-text">
          <div className="inline-block px-3 py-1 rounded-full bg-ajent-blue/10 border border-ajent-blue/20 text-ajent-blue text-sm font-medium font-mono mb-4">
            CENTRALIZED SOLUTION
          </div>
          <h2 className="text-3xl md:text-4xl font-futura mb-4">AI Automation Platform</h2>
          <p className="text-ajent-silver/80">
            Our comprehensive platform provides a central hub for managing your AI agents, analyzing performance data, and optimizing your automated workflows—all with enterprise-grade security and scalability.
          </p>
        </div>
        
        {/* Platform visualization */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-8 border border-white/10 blue-purple-glow reveal-text">
            {/* Platform visualization grid */}
            <div className="grid grid-cols-3 gap-4">
              {/* Central hub */}
              <div className="col-span-3 glass-card rounded-lg p-4 mb-4 text-center relative">
                <div className="absolute inset-0 opacity-20 overflow-hidden rounded-lg">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ajent-blue to-ajent-purple"></div>
                </div>
                <div className="relative z-10">
                  <Settings className="w-8 h-8 text-ajent-blue mx-auto mb-2" />
                  <h3 className="text-lg font-medium">AI Command Center</h3>
                  <p className="text-sm text-ajent-silver/70">Centralized management and analytics dashboard</p>
                </div>
              </div>
              
              {/* Connected components */}
              {[
                { icon: <Server className="w-6 h-6" />, title: "Agent Deployment", desc: "Deploy and manage agents" },
                { icon: <Database className="w-6 h-6" />, title: "Data Repository", desc: "Secure data storage" },
                { icon: <LineChart className="w-6 h-6" />, title: "Analytics Engine", desc: "Performance metrics" }
              ].map((item, index) => (
                <div key={index} className="bg-ajent-dark/60 border border-white/5 rounded-lg p-4 text-center">
                  <div className="bg-ajent-blue/10 p-2 rounded inline-block mb-2 text-ajent-blue">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-medium">{item.title}</h4>
                  <p className="text-xs text-ajent-silver/70">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Connection lines with animated pulses */}
            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(0, 191, 255, 0.7)" />
                    <stop offset="100%" stopColor="rgba(138, 43, 226, 0.7)" />
                  </linearGradient>
                  
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  
                  <circle id="pulse" cx="0" cy="0" r="3" fill="#00BFFF">
                    <animate attributeName="r" values="3;8;3" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </defs>
                
                {/* Connection lines would be drawn here in a real implementation */}
                <g fill="none" stroke="url(#line-gradient)" strokeWidth="1.5" filter="url(#glow)">
                  <path d="M200,120 L100,200" strokeDasharray="5,5">
                    <use href="#pulse" x="150" y="160" />
                  </path>
                  <path d="M200,120 L200,200" strokeDasharray="5,5">
                    <use href="#pulse" x="200" y="160" />
                  </path>
                  <path d="M200,120 L300,200" strokeDasharray="5,5">
                    <use href="#pulse" x="250" y="160" />
                  </path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Integration features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal-text">
            <div className="bg-ajent-blue/10 p-3 rounded inline-block mb-4 text-ajent-blue">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-futura mb-3">Seamless Integration</h3>
            <p className="text-ajent-silver/80 mb-4">
              Connect your AI agents with your existing business tools and workflows without disrupting your operations.
            </p>
            <ul className="space-y-2">
              {[
                "CRM platforms (Salesforce, HubSpot)",
                "Communication tools (Slack, Teams, Discord)",
                "Marketing automation (Mailchimp, Marketo)",
                "E-commerce platforms (Shopify, WooCommerce)",
                "Custom APIs and webhooks"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-ajent-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-ajent-silver/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="reveal-text">
            <div className="bg-ajent-purple/10 p-3 rounded inline-block mb-4 text-ajent-purple">
              <LineChart className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-futura mb-3">Data-Driven Insights</h3>
            <p className="text-ajent-silver/80 mb-4">
              Make informed decisions based on comprehensive analytics from your AI agent interactions.
            </p>
            <ul className="space-y-2">
              {[
                "Conversation quality and sentiment analysis",
                "Agent performance and efficiency metrics",
                "Customer engagement and satisfaction tracking",
                "ROI and conversion rate optimization",
                "Custom reporting and data visualization"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-ajent-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-ajent-silver/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationPlatform;
