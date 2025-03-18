
import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-lg bg-ajent-dark/80 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-futura text-gradient">
            AJent<span className="text-ajent-blue">.</span>io
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="group relative">
            <button className="flex items-center space-x-1 text-ajent-silver hover:text-ajent-blue transition-colors">
              <span>AI Agents</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute top-full pt-2 left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="glass-card rounded-md p-2">
                <a href="#" className="block px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Lead Generation</a>
                <a href="#" className="block px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Customer Service</a>
                <a href="#" className="block px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Sales Automation</a>
              </div>
            </div>
          </div>
          
          <a href="#" className="text-ajent-silver hover:text-ajent-blue transition-colors">
            Agent Library
          </a>
          
          <a href="#" className="text-ajent-silver hover:text-ajent-blue transition-colors">
            Resources
          </a>
          
          <a href="#" className="text-ajent-silver hover:text-ajent-blue transition-colors">
            Pricing
          </a>
          
          <div className="group relative">
            <button className="flex items-center space-x-1 text-ajent-silver hover:text-ajent-blue transition-colors">
              <Globe size={16} />
              <span>EN</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute top-full pt-2 right-0 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="glass-card rounded-md p-2">
                <button className="w-full text-left px-4 py-2 rounded-md hover:bg-white/10 transition-colors">English</button>
                <button className="w-full text-left px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Español</button>
                <button className="w-full text-left px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Français</button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-ajent-silver hover:text-ajent-blue transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-ajent-dark/95 backdrop-blur-xl p-4 flex flex-col z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 md:hidden`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col space-y-4 p-4">
          <div className="border-b border-white/10 pb-4">
            <button className="flex items-center justify-between w-full text-ajent-silver hover:text-ajent-blue transition-colors">
              <span>AI Agents</span>
              <ChevronDown size={16} />
            </button>
            <div className="mt-2 pl-4 space-y-2">
              <a href="#" className="block py-2 text-ajent-silver hover:text-ajent-blue transition-colors">Lead Generation</a>
              <a href="#" className="block py-2 text-ajent-silver hover:text-ajent-blue transition-colors">Customer Service</a>
              <a href="#" className="block py-2 text-ajent-silver hover:text-ajent-blue transition-colors">Sales Automation</a>
            </div>
          </div>
          
          <a href="#" className="py-2 border-b border-white/10 text-ajent-silver hover:text-ajent-blue transition-colors">
            Agent Library
          </a>
          
          <a href="#" className="py-2 border-b border-white/10 text-ajent-silver hover:text-ajent-blue transition-colors">
            Resources
          </a>
          
          <a href="#" className="py-2 border-b border-white/10 text-ajent-silver hover:text-ajent-blue transition-colors">
            Pricing
          </a>
          
          <div className="pt-4">
            <button className="flex items-center space-x-2 text-ajent-silver hover:text-ajent-blue transition-colors">
              <Globe size={16} />
              <span>Language</span>
            </button>
            <div className="mt-2 pl-4 space-y-2">
              <button className="block py-2 text-ajent-silver hover:text-ajent-blue transition-colors">English</button>
              <button className="block py-2 text-ajent-silver hover:text-ajent-blue transition-colors">Español</button>
              <button className="block py-2 text-ajent-silver hover:text-ajent-blue transition-colors">Français</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
