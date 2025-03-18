
import { useEffect, useRef } from 'react';
import { Bot, MessageSquare, Calendar, CreditCard, ShoppingCart, Stethoscope, DollarSign, Home, BarChart } from 'lucide-react';

const AgentsOverview = () => {
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
  
  // Agent features
  const agentFeatures = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Lead Qualification",
      description: "Identify and prioritize high-value prospects automatically based on custom criteria."
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Customer Support",
      description: "Provide instant 24/7 support with intelligent routing to human agents when needed."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Appointment Scheduling",
      description: "Eliminate back-and-forth emails with automated scheduling that integrates with your calendar."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Sales Assistance",
      description: "Guide prospects through your sales process with personalized recommendations."
    }
  ];
  
  // Industry solutions
  const industries = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-commerce",
      description: "Boost sales with personalized product recommendations and instant customer support."
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare",
      description: "Streamline appointment scheduling and provide basic patient information 24/7."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Banking",
      description: "Enhance customer experiences with secure account management and financial advice."
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Real Estate",
      description: "Qualify leads and schedule property viewings automatically for interested prospects."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "SaaS",
      description: "Increase trial conversions with targeted onboarding and technical support."
    }
  ];
  
  return (
    <section id="agents" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ajent-blue/10 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ajent-purple/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-text">
          <div className="inline-block px-3 py-1 rounded-full bg-ajent-purple/10 border border-ajent-purple/20 text-ajent-purple text-sm font-medium font-mono mb-4">
            INTELLIGENT AUTOMATION
          </div>
          <h2 className="text-3xl md:text-4xl font-futura mb-4">What Are AI Agents?</h2>
          <p className="text-ajent-silver/80">
            AI Agents are plug-and-play intelligent assistants that automate repetitive tasks, engage with customers, and provide valuable insights for your business—all while adapting to your specific needs and industry requirements.
          </p>
        </div>
        
        {/* Agent Capabilities */}
        <div className="mb-20">
          <h3 className="text-2xl font-futura mb-8 text-center reveal-text">Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 reveal-text agent-card"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-ajent-blue/10 p-3 rounded-lg inline-block mb-4 text-ajent-blue">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{feature.title}</h4>
                <p className="text-ajent-silver/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Industries Served */}
        <div>
          <h3 className="text-2xl font-futura mb-8 text-center reveal-text">Industries Served</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="border border-white/10 hover:border-ajent-blue/30 bg-white/5 hover:bg-white/8 rounded-xl p-6 transition-all duration-300 reveal-text flex items-center group"
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-ajent-blue/20 to-ajent-purple/20 p-3 rounded-lg mr-4 text-ajent-blue group-hover:text-ajent-purple transition-colors duration-300">
                  {industry.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">{industry.title}</h4>
                  <p className="text-sm text-ajent-silver/70">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsOverview;
