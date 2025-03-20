
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CustomSolutions = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Custom Solutions</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Tailored AI solutions designed specifically for your unique business needs and challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Custom AI Solutions?</h2>
            <ul className="space-y-4 text-ajent-silver/80">
              <li className="flex items-start">
                <span className="text-ajent-blue mr-2">•</span>
                <span>Specifically built for your unique business processes and workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-ajent-blue mr-2">•</span>
                <span>Seamless integration with your existing systems and tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-ajent-blue mr-2">•</span>
                <span>Enhanced data security with private model deployment options</span>
              </li>
              <li className="flex items-start">
                <span className="text-ajent-blue mr-2">•</span>
                <span>Ongoing support and optimization from our expert team</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-ajent-blue/20 to-ajent-blue/5 rounded-xl flex items-center justify-center p-8">
            <Button 
              className="bg-ajent-blue hover:bg-ajent-blue-dark transition-colors text-lg py-6 px-8"
              onClick={() => navigate('/contact')}
            >
              Contact Our Solutions Team
            </Button>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Custom Solution Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We work with you to understand your specific needs, challenges, and objectives."
              },
              {
                step: "2",
                title: "Design",
                description: "Our team designs a custom AI solution tailored to your unique requirements."
              },
              {
                step: "3",
                title: "Development",
                description: "We build and test your solution, ensuring it integrates seamlessly with your systems."
              },
              {
                step: "4",
                title: "Deployment & Support",
                description: "We deploy your solution and provide ongoing support and optimization."
              }
            ].map((phase, index) => (
              <div key={index} className="relative bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-6">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-ajent-blue flex items-center justify-center text-white font-bold">
                  {phase.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-ajent-silver/80">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomSolutions;
