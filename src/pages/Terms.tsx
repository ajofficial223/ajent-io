
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Terms of Service</h1>
        </div>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8 mb-12">
          <p className="text-ajent-silver/80 mb-6">
            Last Updated: June 15, 2023
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-ajent-silver/80">
                Welcome to AJent.io. These Terms of Service govern your use of our website and services. 
                By accessing or using our services, you agree to be bound by these Terms. If you disagree 
                with any part of the terms, you may not access the service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use of Our Services</h2>
              <p className="text-ajent-silver/80 mb-4">
                Our services are designed to provide AI-powered automation solutions for businesses. 
                You may use our services only as permitted by law and according to these Terms.
              </p>
              <p className="text-ajent-silver/80">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration</h2>
              <p className="text-ajent-silver/80">
                To access certain features of our services, you may be required to register for an account. 
                You must provide accurate and complete information and keep your account details secure.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Privacy Policy</h2>
              <p className="text-ajent-silver/80">
                Your use of our services is also governed by our Privacy Policy, which is incorporated by reference. 
                Please review our Privacy Policy to understand our practices.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-ajent-silver/80">
                All content, features, and functionality of our services are owned by AJent.io and are protected 
                by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
