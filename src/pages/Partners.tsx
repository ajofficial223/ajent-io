
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Partners = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Partners</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Collaborate with AJent to bring cutting-edge AI solutions to your clients or integrate our technology with your platform.
        </p>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Our Partnership Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integration Partners",
                description: "Integrate our AI agents into your existing platforms and services to add value for your customers."
              },
              {
                title: "Reseller Partners",
                description: "Add AJent's AI solutions to your portfolio and provide comprehensive AI capabilities to your clients."
              },
              {
                title: "Strategic Alliances",
                description: "Collaborate on joint solutions and marketing initiatives to drive innovation in the AI space."
              }
            ].map((program, index) => (
              <div key={index} className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-ajent-silver/80 mb-4">{program.description}</p>
                <Button className="w-full bg-ajent-blue hover:bg-ajent-blue-dark transition-colors">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Partners;
