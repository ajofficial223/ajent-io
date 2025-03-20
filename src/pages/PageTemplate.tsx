
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// This is a template file that can be used to create other pages quickly
// Copy this file and rename both the file and the component name

const PageTemplate = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Page Title</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Page description goes here.
        </p>
        
        <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Content Section</h2>
          <p className="text-ajent-silver/80">
            Content goes here.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PageTemplate;
