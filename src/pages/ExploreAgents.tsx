
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const agentsData = [
  {
    id: 1,
    title: "SEO Content Writer AI",
    description: "Generate SEO-optimized content that ranks well in search engines while engaging your audience.",
    webhook: "https://hook.example.com/seo-writer"
  },
  {
    id: 2,
    title: "Copywriter AI",
    description: "Create compelling copy for ads, landing pages, and marketing materials that converts visitors to customers.",
    webhook: "https://hook.example.com/copywriter"
  },
  {
    id: 3,
    title: "Personalized Email Writer AI",
    description: "Craft personalized email campaigns that speak directly to your customers and increase engagement.",
    webhook: "https://hook.example.com/email-writer"
  },
  {
    id: 4,
    title: "Social Media Content AI",
    description: "Generate engaging posts, captions, and hashtags optimized for different social media platforms.",
    webhook: "https://hook.example.com/social-media"
  },
  {
    id: 5,
    title: "Product Description AI",
    description: "Create compelling product descriptions that highlight benefits and features to boost conversions.",
    webhook: "https://hook.example.com/product-desc"
  },
  {
    id: 6,
    title: "Customer Support AI",
    description: "Automate responses to common customer inquiries with natural, helpful AI-generated answers.",
    webhook: "https://hook.example.com/support"
  }
];

const ExploreAgents = () => {
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

  const handleTryAgent = (webhook: string) => {
    console.log(`Connecting to webhook: ${webhook}`);
    // Here you would implement the actual webhook connection
    window.open(webhook, '_blank');
  };

  return (
    <div className="min-h-screen bg-ajent-dark text-ajent-silver overflow-hidden">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="flex items-center text-ajent-silver hover:text-ajent-blue mr-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Explore AI Agents</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Discover our powerful AI agents designed to automate and enhance your business processes.
          Each agent is specialized for specific tasks and can be integrated seamlessly into your workflow.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentsData.map((agent) => (
            <Card key={agent.id} className="bg-ajent-dark-light border border-ajent-blue/20 hover:border-ajent-blue/40 transition-all duration-300 reveal-item opacity-0 translate-y-4">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">{agent.title}</CardTitle>
                <CardDescription className="text-ajent-silver/80">{agent.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  className="w-full bg-ajent-blue hover:bg-ajent-blue-dark transition-colors"
                  onClick={() => handleTryAgent(agent.webhook)}
                >
                  Try It
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

export default ExploreAgents;
