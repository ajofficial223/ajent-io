
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GDPR = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">GDPR Compliance</h1>
        </div>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8 mb-12">
          <p className="text-ajent-silver/80 mb-6">
            Last Updated: June 15, 2023
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to GDPR</h2>
              <p className="text-ajent-silver/80">
                At AJent.io, we are committed to ensuring the privacy and protection of your personal data in compliance 
                with the General Data Protection Regulation (GDPR). This page outlines our approach to GDPR compliance 
                and your rights under this regulation.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights Under GDPR</h2>
              <p className="text-ajent-silver/80 mb-4">
                Under the GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-ajent-silver/80 space-y-2">
                <li>The right to be informed about how we use your personal data</li>
                <li>The right to access your personal data</li>
                <li>The right to rectification if your personal data is inaccurate or incomplete</li>
                <li>The right to erasure (the "right to be forgotten")</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to the processing of your personal data</li>
                <li>Rights related to automated decision-making and profiling</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Process Your Data</h2>
              <p className="text-ajent-silver/80">
                We only collect and process personal data when we have a lawful basis to do so. This may include:
              </p>
              <ul className="list-disc pl-6 text-ajent-silver/80 space-y-2 mt-4">
                <li>When you have given consent</li>
                <li>When processing is necessary for the performance of a contract</li>
                <li>When processing is necessary for compliance with a legal obligation</li>
                <li>When processing is necessary to protect vital interests</li>
                <li>When processing is necessary for legitimate interests</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GDPR;
