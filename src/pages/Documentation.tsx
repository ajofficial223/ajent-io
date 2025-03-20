
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Documentation = () => {
  const navigate = useNavigate();

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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Documentation</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Comprehensive guides and API references to help you implement and maximize your AJent AI solutions.
        </p>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>
          <p className="text-ajent-silver/80 mb-4">
            Welcome to the AJent.io documentation. Here you'll find everything you need to get started with our AI agents,
            integrate them into your systems, and customize them to your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Button className="bg-ajent-blue hover:bg-ajent-blue-dark transition-colors">API Reference</Button>
            <Button className="bg-ajent-blue hover:bg-ajent-blue-dark transition-colors">Integration Guides</Button>
            <Button className="bg-ajent-blue hover:bg-ajent-blue-dark transition-colors">Best Practices</Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
