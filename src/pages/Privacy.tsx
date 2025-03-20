
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Privacy Policy</h1>
        </div>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8 mb-12">
          <p className="text-ajent-silver/80 mb-6">
            Last Updated: June 15, 2023
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-ajent-silver/80">
                At AJent.io, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="text-ajent-silver/80 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-ajent-silver/80 space-y-2">
                <li>Register for an account</li>
                <li>Express interest in obtaining information about our products or services</li>
                <li>Participate in activities on our website</li>
                <li>Contact us</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-ajent-silver/80 mb-4">
                We use the information we collect for various business purposes, including:
              </p>
              <ul className="list-disc pl-6 text-ajent-silver/80 space-y-2">
                <li>Providing, operating, and maintaining our website and services</li>
                <li>Improving, personalizing, and expanding our website and services</li>
                <li>Understanding and analyzing how you use our website and services</li>
                <li>Developing new products, services, features, and functionality</li>
                <li>Communicating with you for customer service, updates, and marketing purposes</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-ajent-silver/80">
                We implement appropriate technical and organizational security measures designed to protect 
                the security of any personal information we process. However, no security system is impenetrable, 
                and we cannot guarantee the security of our systems 100%.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
