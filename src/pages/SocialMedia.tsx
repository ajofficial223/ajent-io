
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Map of platform names
const platformNames: Record<string, string> = {
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube'
};

const SocialMedia = () => {
  const navigate = useNavigate();
  const { platform } = useParams<{ platform: string }>();
  
  // Get platform display name or default to capitalized platform string
  const platformDisplay = platform ? 
    (platformNames[platform] || platform.charAt(0).toUpperCase() + platform.slice(1)) : 
    'Social Media';

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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">
            {platformDisplay}
          </h1>
        </div>
        
        <div className="text-center py-16">
          <p className="text-xl text-ajent-silver/80 max-w-2xl mx-auto mb-8">
            You're being redirected to our {platformDisplay} page.
            If you're not redirected automatically, please click the button below.
          </p>
          
          <Button 
            className="bg-ajent-blue hover:bg-ajent-blue-dark transition-colors"
            onClick={() => window.open(`https://${platform}.com/ajentai`, '_blank')}
          >
            Visit our {platformDisplay}
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SocialMedia;
