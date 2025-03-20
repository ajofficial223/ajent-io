
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Webinars = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Webinars</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Join our educational webinars to learn from experts about AI implementation strategies and best practices.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "AI in Customer Service: Transforming Support Experiences",
              date: "June 28, 2023",
              time: "2:00 PM EST",
              status: "Upcoming"
            },
            {
              title: "Leveraging AI for Lead Generation and Qualification",
              date: "May 15, 2023",
              time: "1:00 PM EST",
              status: "Watch Recording"
            },
            {
              title: "Implementing AI Solutions: Technical Best Practices",
              date: "April 10, 2023",
              time: "11:00 AM EST",
              status: "Watch Recording"
            },
            {
              title: "AI Ethics and Data Privacy: What You Need to Know",
              date: "March 22, 2023",
              time: "3:00 PM EST",
              status: "Watch Recording"
            }
          ].map((webinar, index) => (
            <div key={index} className="bg-ajent-dark-light border border-ajent-blue/20 hover:border-ajent-blue/40 rounded-xl p-6 transition-all duration-300">
              <div className="bg-gradient-to-br from-ajent-blue/20 to-ajent-blue/5 h-48 rounded-lg mb-4"></div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-ajent-silver/60">{webinar.date} • {webinar.time}</span>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  webinar.status === "Upcoming" 
                    ? "bg-ajent-blue/10 text-ajent-blue" 
                    : "bg-white/10 text-ajent-silver"
                }`}>
                  {webinar.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
              <Button 
                className={`w-full ${
                  webinar.status === "Upcoming" 
                    ? "bg-ajent-blue hover:bg-ajent-blue-dark" 
                    : "bg-ajent-dark border border-ajent-blue/30 hover:bg-ajent-dark/80"
                } transition-colors`}
              >
                {webinar.status === "Upcoming" ? "Register Now" : "Watch Recording"}
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Webinars;
