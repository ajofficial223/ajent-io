
import { ArrowRight, Twitter, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-bg opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ajent-blue/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-bold font-futura text-gradient">
                AJent<span className="text-ajent-blue">.</span>io
              </span>
            </Link>
            <p className="text-ajent-silver/70 mb-6">
              Transforming businesses with intelligent AI agents that deliver real value and enhance customer experiences.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter size={18} />, label: "Twitter", url: "https://twitter.com" },
                { icon: <Linkedin size={18} />, label: "LinkedIn", url: "https://linkedin.com" },
                { icon: <Instagram size={18} />, label: "Instagram", url: "https://instagram.com" },
                { icon: <Facebook size={18} />, label: "Facebook", url: "https://facebook.com" },
                { icon: <Youtube size={18} />, label: "YouTube", url: "https://youtube.com" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ajent-silver hover:text-ajent-blue hover:border-ajent-blue/30 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Resources",
                links: [
                  { name: "Blog", url: "/blog" },
                  { name: "Case Studies", url: "/case-studies" },
                  { name: "Documentation", url: "/documentation" },
                  { name: "Guides", url: "/guides" },
                  { name: "Webinars", url: "/webinars" }
                ]
              },
              {
                title: "AI Agents",
                links: [
                  { name: "Lead Generation", url: "/ai-agents#lead" },
                  { name: "Customer Support", url: "/ai-agents#customer" },
                  { name: "Appointment Booking", url: "/ai-agents#appointment" },
                  { name: "Sales Automation", url: "/ai-agents#sales" },
                  { name: "Custom Solutions", url: "/custom-solutions" }
                ]
              },
              {
                title: "Company",
                links: [
                  { name: "About Us", url: "/about" },
                  { name: "Careers", url: "/careers" },
                  { name: "Partners", url: "/partners" },
                  { name: "Contact", url: "/contact" },
                  { name: "Press Kit", url: "/press-kit" }
                ]
              },
              {
                title: "Legal",
                links: [
                  { name: "Terms of Service", url: "/terms" },
                  { name: "Privacy Policy", url: "/privacy" },
                  { name: "Cookie Policy", url: "/cookies" },
                  { name: "GDPR Compliance", url: "/gdpr" },
                  { name: "Security", url: "/security" }
                ]
              }
            ].map((column, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-lg font-medium text-ajent-silver">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link 
                        to={link.url} 
                        className="text-ajent-silver/70 hover:text-ajent-blue transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-16 glass-card rounded-xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-futura mb-2">Stay Updated</h3>
              <p className="text-ajent-silver/70">
                Subscribe to our newsletter for the latest updates on AI technology and product releases.
              </p>
            </div>
            
            <form className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-ajent-dark/60 border border-white/10 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ajent-blue/50 text-ajent-silver"
              />
              <button 
                type="submit" 
                className="bg-ajent-blue hover:bg-ajent-blue-dark text-white px-4 py-2 rounded-r-lg transition-colors duration-300 flex items-center"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 text-center text-ajent-silver/50 text-sm">
          <p>© {new Date().getFullYear()} AJent.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
