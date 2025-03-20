
import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
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
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-futura text-gradient">
            AJent<span className="text-ajent-blue">.</span>io
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="group relative">
            <button 
              className="flex items-center space-x-1 text-ajent-silver hover:text-ajent-blue transition-colors"
              onClick={() => navigate('/ai-agents')}
            >
              <span>AI Agents</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute top-full pt-2 left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="glass-card rounded-md p-2">
                <Link to="/ai-agents#lead" className="block px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Lead Generation</Link>
                <Link to="/ai-agents#customer" className="block px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Customer Service</Link>
                <Link to="/ai-agents#sales" className="block px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Sales Automation</Link>
              </div>
            </div>
          </div>
          
          <Link to="/explore-agents" className="text-ajent-silver hover:text-ajent-blue transition-colors">
            Agent Library
          </Link>
          
          <Link to="/resources" className="text-ajent-silver hover:text-ajent-blue transition-colors">
            Resources
          </Link>
          
          <Link to="/pricing" className="text-ajent-silver hover:text-ajent-blue transition-colors">
            Pricing
          </Link>
          
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
            <button 
              className="flex items-center justify-between w-full text-ajent-silver hover:text-ajent-blue transition-colors"
              onClick={() => {
                navigate('/ai-agents');
                setIsMenuOpen(false);
              }}
            >
              <span>AI Agents</span>
              <ChevronDown size={16} />
            </button>
            <div className="mt-2 pl-4 space-y-2">
              <Link 
                to="/ai-agents#lead" 
                className="block py-2 text-ajent-silver hover:text-ajent-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Lead Generation
              </Link>
              <Link 
                to="/ai-agents#customer" 
                className="block py-2 text-ajent-silver hover:text-ajent-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Customer Service
              </Link>
              <Link 
                to="/ai-agents#sales" 
                className="block py-2 text-ajent-silver hover:text-ajent-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sales Automation
              </Link>
            </div>
          </div>
          
          <Link 
            to="/explore-agents" 
            className="py-2 border-b border-white/10 text-ajent-silver hover:text-ajent-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Agent Library
          </Link>
          
          <Link 
            to="/resources" 
            className="py-2 border-b border-white/10 text-ajent-silver hover:text-ajent-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          
          <Link 
            to="/pricing" 
            className="py-2 border-b border-white/10 text-ajent-silver hover:text-ajent-blue transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          
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
