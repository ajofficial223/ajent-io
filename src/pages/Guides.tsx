
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Guides = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Guides</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Step-by-step tutorials and guides to help you get the most out of AJent's AI solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Getting Started", "Integration Basics", "Customizing Your AI", "Advanced Features", "Data Privacy", "Best Practices"].map((guide, index) => (
            <div key={index} className="bg-ajent-dark-light border border-ajent-blue/20 hover:border-ajent-blue/40 rounded-xl p-6 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">{guide}</h3>
              <p className="text-ajent-silver/80 mb-4">
                Learn how to effectively implement and utilize our AI solutions for your business needs.
              </p>
              <Button variant="ghost" className="text-ajent-blue hover:text-ajent-blue/80">Read Guide</Button>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Guides;
