
import { useEffect, useRef } from 'react';
import { UserCheck, TrendingUp, Repeat } from 'lucide-react';

const PersonalizedJourneys = () => {
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
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ajent-blue/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ajent-blue/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Visual representation of journey */}
          <div className="lg:w-1/2 reveal-text">
            <div className="glass-card rounded-xl p-8 border border-white/10 blue-purple-glow max-w-lg mx-auto">
              {/* Journey visualization */}
              <div className="relative py-8">
                {/* Journey steps */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-ajent-blue via-ajent-purple to-ajent-blue"></div>
                
                {/* Step 1 */}
                <div className="relative mb-12 pl-16">
                  <div className="absolute left-6 w-5 h-5 bg-ajent-blue rounded-full border-2 border-ajent-dark top-1 blue-glow"></div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <h4 className="text-lg font-medium mb-1 text-ajent-blue">Initial Contact</h4>
                    <p className="text-sm text-ajent-silver/80">
                      AI agent engages the visitor, capturing initial preferences and needs.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative mb-12 pl-16">
                  <div className="absolute left-6 w-5 h-5 bg-ajent-purple rounded-full border-2 border-ajent-dark top-1 purple-glow"></div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <h4 className="text-lg font-medium mb-1 text-ajent-purple">Personalized Recommendations</h4>
                    <p className="text-sm text-ajent-silver/80">
                      Based on user data, AI provides tailored product/service suggestions.
                    </p>
                    <div className="mt-3 flex space-x-2">
                      <span className="inline-block px-2 py-1 bg-ajent-purple/10 text-ajent-purple text-xs rounded">
                        Product Match: 92%
                      </span>
                      <span className="inline-block px-2 py-1 bg-ajent-blue/10 text-ajent-blue text-xs rounded">
                        Interest Score: High
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative pl-16">
                  <div className="absolute left-6 w-5 h-5 bg-ajent-blue rounded-full border-2 border-ajent-dark top-1 blue-glow"></div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <h4 className="text-lg font-medium mb-1 text-ajent-blue">Continuous Optimization</h4>
                    <p className="text-sm text-ajent-silver/80">
                      AI learns from interactions, continually improving the customer experience.
                    </p>
                    <div className="mt-2 w-full bg-ajent-gray/30 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-ajent-blue to-ajent-purple h-1.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="mt-1 text-right text-xs text-ajent-silver/60">Learning Progress: 85%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content text */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-ajent-purple/10 border border-ajent-purple/20 text-ajent-purple text-sm font-medium font-mono reveal-text">
              ADAPTIVE EXPERIENCE
            </div>
            <h2 className="text-3xl md:text-4xl font-futura mb-4 reveal-text">Personalized Customer Journeys</h2>
            <p className="text-ajent-silver/80 reveal-text">
              Our AI agents adapt in real-time to each customer's behavior and preferences, creating dynamic experiences that feel personal, relevant, and engaging at every touchpoint.
            </p>
            
            <div className="space-y-6 mt-8">
              {[
                {
                  icon: <UserCheck className="h-6 w-6" />,
                  title: "Behavior-Based Adaptation",
                  description: "AI agents learn from each interaction and adjust their approach based on customer preferences and history."
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Intelligent Recommendations",
                  description: "Dynamically suggest products, services, or content that match each customer's specific needs and interests."
                },
                {
                  icon: <Repeat className="h-6 w-6" />,
                  title: "Continuous Improvement",
                  description: "The system gets smarter over time, becoming more effective at anticipating and addressing customer needs."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 reveal-text"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 bg-ajent-purple/10 text-ajent-purple p-2 rounded">
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

export default PersonalizedJourneys;
