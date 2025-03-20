
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CaseStudies = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Case Studies</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Explore real-world examples of how businesses are transforming their operations with AJent's AI solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((study) => (
            <div key={study} className="bg-ajent-dark-light border border-ajent-blue/20 hover:border-ajent-blue/40 rounded-xl overflow-hidden transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-ajent-blue/20 to-ajent-blue/5"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-ajent-blue bg-ajent-blue/10 px-3 py-1 rounded-full">E-commerce</span>
                  <span className="text-xs text-ajent-silver/60 bg-ajent-silver/10 px-3 py-1 rounded-full">Lead Generation</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">How OnlineStore Increased Conversions by 37%</h3>
                <p className="text-ajent-silver/80 mb-4">
                  OnlineStore implemented our AI-powered lead generation agent to engage with website visitors
                  and qualify potential customers, resulting in a 37% increase in conversions.
                </p>
                <Button className="w-full bg-ajent-blue hover:bg-ajent-blue-dark transition-colors">
                  Read Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
