
import { ArrowLeft, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PressKit = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Press Kit</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Download official AJent.io brand assets, logos, and media resources.
        </p>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Brand Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Logo Package",
                description: "Download our logo in various formats (PNG, SVG, EPS) with both light and dark variations.",
                size: "5.2 MB"
              },
              {
                title: "Brand Guidelines",
                description: "Comprehensive guidelines for using our brand assets correctly in your publications.",
                size: "3.8 MB"
              },
              {
                title: "Product Screenshots",
                description: "High-resolution screenshots of our platform and AI agents in action.",
                size: "12.4 MB"
              },
              {
                title: "Founder Photos",
                description: "Professional headshots and action shots of AJent.io's founding team.",
                size: "8.7 MB"
              }
            ].map((asset, index) => (
              <div key={index} className="border border-white/10 rounded-lg p-4">
                <h3 className="text-lg font-bold text-white mb-2">{asset.title}</h3>
                <p className="text-ajent-silver/80 mb-4">{asset.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ajent-silver/60">{asset.size}</span>
                  <Button variant="ghost" className="text-ajent-blue hover:text-ajent-blue/80 flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Press Contact</h2>
          <p className="text-ajent-silver/80 mb-4">
            For press inquiries, please contact our media relations team:
          </p>
          <p className="text-white">media@ajent.io</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PressKit;
