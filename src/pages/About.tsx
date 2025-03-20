
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">About Us</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-ajent-silver/80 mb-6">
              At AJent.io, we're on a mission to democratize AI for businesses of all sizes. We believe that 
              powerful AI tools should be accessible, affordable, and easy to implement without requiring 
              deep technical expertise.
            </p>
            <p className="text-ajent-silver/80">
              Our goal is to help businesses transform their customer interactions, automate repetitive tasks, 
              and unlock new opportunities through intelligent AI agents that deliver real value.
            </p>
          </div>
          <div className="bg-gradient-to-br from-ajent-blue/20 to-ajent-blue/5 rounded-xl"></div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with AI, always seeking new ways to solve business challenges."
              },
              {
                title: "Accessibility",
                description: "We're committed to making advanced AI technology accessible to businesses of all sizes, not just tech giants."
              },
              {
                title: "Integrity",
                description: "We prioritize ethical AI development and are transparent about how our technology works and the data it uses."
              }
            ].map((value, index) => (
              <div key={index} className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-ajent-silver/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-ajent-blue/20 to-ajent-blue/5"></div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-white">Jane Doe</h3>
                  <p className="text-ajent-blue">Co-Founder & CEO</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
