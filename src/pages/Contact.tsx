
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleBackClick = () => {
    navigate(-1);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Convert subject to agent_type (using "custom" as default)
      const { error } = await supabase
        .from('demo_requests')
        .insert({
          name: formData.name,
          email: formData.email,
          agent_type: 'custom', // Default to custom for contact form
          message: `Subject: ${formData.subject}\n\n${formData.message}`
        });
        
      if (error) {
        console.error("Error submitting contact form:", error);
        throw error;
      }
      
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error in form submission:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Contact Us</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Have questions or need assistance? Reach out to our team and we'll be happy to help.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ajent-silver mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-ajent-dark/60 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ajent-blue/50 text-ajent-silver"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ajent-silver mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-ajent-dark/60 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ajent-blue/50 text-ajent-silver"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-ajent-silver mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-ajent-dark/60 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ajent-blue/50 text-ajent-silver"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ajent-silver mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-ajent-dark/60 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ajent-blue/50 text-ajent-silver"
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-ajent-blue hover:bg-ajent-blue-dark transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-4 text-ajent-blue w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-ajent-silver/80">info@ajent.io</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 text-ajent-blue w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-ajent-silver/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 text-ajent-blue w-5 h-5 mt-1" />
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-ajent-silver/80">
                      123 AI Innovation Street<br />
                      Tech City, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-ajent-dark-light border border-ajent-blue/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-ajent-silver/80">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ajent-silver/80">Saturday:</span>
                  <span className="text-white">10:00 AM - 2:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ajent-silver/80">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
