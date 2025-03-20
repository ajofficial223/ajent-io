
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cookies = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Cookie Policy</h1>
        </div>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8 mb-12">
          <p className="text-ajent-silver/80 mb-6">
            Last Updated: June 15, 2023
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
              <p className="text-ajent-silver/80">
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                a website. They are widely used to make websites work more efficiently and provide information 
                to the website owners.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-ajent-silver/80 mb-4">
                We use cookies for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-ajent-silver/80 space-y-2">
                <li>Ensuring the website functions properly</li>
                <li>Remembering your preferences and settings</li>
                <li>Understanding how you use our website</li>
                <li>Improving your experience on our website</li>
                <li>Providing personalized content and advertisements</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-white">Essential Cookies</h3>
                  <p className="text-ajent-silver/80">
                    These cookies are necessary for the website to function properly and cannot be turned off in our systems.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white">Performance Cookies</h3>
                  <p className="text-ajent-silver/80">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white">Functional Cookies</h3>
                  <p className="text-ajent-silver/80">
                    These cookies enable the website to provide enhanced functionality and personalization.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white">Targeting Cookies</h3>
                  <p className="text-ajent-silver/80">
                    These cookies may be set through our site by our advertising partners to build a profile of your interests.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cookies;
