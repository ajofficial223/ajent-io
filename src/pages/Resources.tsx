
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const resourcesData = [
  {
    id: 1,
    title: "Getting Started with AI Agents",
    description: "Learn the basics of AI agents and how to integrate them into your business workflow.",
    type: "Guide",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Advanced AI Agent Configuration",
    description: "Discover how to customize and fine-tune your AI agents for optimal performance.",
    type: "Tutorial",
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "AI Agents ROI Calculator",
    description: "Calculate the potential return on investment when implementing AI agents in your business.",
    type: "Tool",
    readTime: "Interactive"
  },
  {
    id: 4,
    title: "Case Study: Retail Industry",
    description: "How a retail chain increased customer engagement by 45% with AI-powered personalization.",
    type: "Case Study",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "AI Ethics and Best Practices",
    description: "Understanding responsible AI use and implementing ethical guidelines in your organization.",
    type: "Whitepaper",
    readTime: "15 min read"
  },
  {
    id: 6,
    title: "Integrating AI Agents with CRM Systems",
    description: "Step-by-step guide to connecting your AI agents with popular CRM platforms.",
    type: "Tutorial",
    readTime: "12 min read"
  }
];

const Resources = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Resources</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Explore our collection of guides, tutorials, case studies, and tools to help you get the most out of your AI agents.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((resource) => (
            <Card key={resource.id} className="bg-ajent-dark-light border border-ajent-blue/20 hover:border-ajent-blue/40 transition-all duration-300 reveal-item opacity-0 translate-y-4">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-ajent-blue/20 text-ajent-blue">
                    {resource.type}
                  </span>
                  <span className="text-xs text-ajent-silver/60">
                    {resource.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-white">{resource.title}</CardTitle>
                <CardDescription className="text-ajent-silver/80">{resource.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  className="w-full bg-ajent-blue hover:bg-ajent-blue-dark transition-colors"
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
