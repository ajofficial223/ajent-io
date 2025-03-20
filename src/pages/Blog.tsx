
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Blog</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-12">
          Stay updated with the latest insights on AI technology, best practices, and industry trends.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog post placeholders */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-ajent-dark-light border border-ajent-blue/20 hover:border-ajent-blue/40 rounded-xl overflow-hidden transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-ajent-blue/20 to-ajent-blue/5"></div>
              <div className="p-6">
                <span className="text-xs text-ajent-blue bg-ajent-blue/10 px-3 py-1 rounded-full">AI Insights</span>
                <h3 className="text-xl font-bold text-white mt-3 mb-2">The Future of AI in Business Automation</h3>
                <p className="text-ajent-silver/80 mb-4">Exploring how emerging AI technologies are transforming business processes and creating new opportunities...</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-ajent-silver/60">June 12, 2023</span>
                  <Button variant="ghost" className="text-ajent-blue hover:text-ajent-blue/80">Read More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
