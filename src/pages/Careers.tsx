
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Careers</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Join our innovative team and help shape the future of AI-powered business solutions.
        </p>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Open Positions</h2>
          <div className="space-y-6">
            {["AI Research Scientist", "Full Stack Developer", "Product Manager", "UX/UI Designer"].map((position, index) => (
              <div key={index} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-xl font-bold text-white mb-2">{position}</h3>
                <p className="text-ajent-silver/80 mb-4">
                  We're looking for talented individuals to join our team and help us push the boundaries of AI technology.
                </p>
                <Button variant="ghost" className="text-ajent-blue hover:text-ajent-blue/80">View Details</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers;
