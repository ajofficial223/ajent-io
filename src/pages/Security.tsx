
import { ArrowLeft, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Security = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Security</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Learn about the measures we take to ensure the security and privacy of your data.
        </p>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <Shield className="text-ajent-blue w-8 h-8 mr-3" />
            <h2 className="text-2xl font-bold text-white">Our Security Practices</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Data Encryption</h3>
              <p className="text-ajent-silver/80">
                All data transmitted between your systems and AJent.io is encrypted using industry-standard TLS/SSL protocols.
                Data at rest is encrypted using AES-256 encryption.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Access Controls</h3>
              <p className="text-ajent-silver/80">
                We implement strict access controls and follow the principle of least privilege to ensure that only
                authorized personnel can access sensitive data and systems.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Regular Security Audits</h3>
              <p className="text-ajent-silver/80">
                Our systems undergo regular security assessments, vulnerability scans, and penetration testing
                by independent security firms to identify and address potential security issues.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Compliance</h3>
              <p className="text-ajent-silver/80">
                We adhere to industry standards and best practices, including SOC 2, GDPR, and CCPA,
                to ensure the highest level of security and privacy for your data.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Reporting Security Issues</h2>
          <p className="text-ajent-silver/80 mb-6">
            If you believe you've found a security vulnerability in our systems or have concerns about data security,
            please contact our security team immediately. We take all reports seriously and will investigate promptly.
          </p>
          <p className="text-white font-medium mb-2">Contact: security@ajent.io</p>
          <Button 
            className="bg-ajent-blue hover:bg-ajent-blue-dark transition-colors"
            onClick={() => navigate('/contact')}
          >
            Contact Security Team
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Security;
