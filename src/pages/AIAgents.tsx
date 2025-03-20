
import { useEffect } from 'react';
import { ArrowLeft, Users, HeadphonesIcon, Pencil, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const agentCategories = [
  {
    id: 1,
    title: "Lead Generation AI",
    description: "Automate prospecting and qualification with AI that finds and engages potential customers.",
    icon: Users
  },
  {
    id: 2,
    title: "Customer Service AI",
    description: "Deliver 24/7 support with AI agents that handle inquiries, resolve issues and escalate when needed.",
    icon: HeadphonesIcon
  },
  {
    id: 3,
    title: "Content Creation AI",
    description: "Generate blog posts, social media content, and marketing materials tailored to your brand voice.",
    icon: Pencil
  },
  {
    id: 4,
    title: "Sales Automation AI",
    description: "Convert leads to customers with personalized outreach, follow-ups, and objection handling.",
    icon: ShoppingCart
  }
];

const AIAgents = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Setup scroll reveal animations
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
      
      const elements = document.querySelectorAll('.reveal-item');
      elements.forEach(el => {
        observer.observe(el);
      });
    };
    
    setupObserver();
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCategoryClick = (categoryId: number) => {
    navigate('/explore-agents');
  };

  return (
    <div className="min-h-screen bg-ajent-dark text-ajent-silver overflow-hidden">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="flex items-center text-ajent-silver hover:text-ajent-blue mr-4"
            onClick={handleBackClick}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold font-futura">AI Agent Categories</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Explore our AI agent categories, each designed to solve specific business challenges.
          Select a category to view the specialized agents within it.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agentCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id} 
                className="bg-ajent-dark-light border border-ajent-blue/20 hover:border-ajent-blue/40 rounded-xl p-6 transition-all duration-300 reveal-item opacity-0 translate-y-4 cursor-pointer"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-ajent-blue/10 overflow-hidden flex items-center justify-center">
                    <IconComponent size={40} className="text-ajent-blue" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-ajent-silver/80">{category.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button 
                    className="bg-ajent-blue hover:bg-ajent-blue-dark transition-colors"
                  >
                    Explore Agents
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIAgents;
