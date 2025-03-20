
import { useEffect, useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: 49,
    billingPeriod: "monthly",
    description: "Perfect for small businesses just getting started with AI",
    features: [
      "3 AI Agents",
      "500 interactions per month",
      "Standard response time",
      "Email support",
      "Basic analytics"
    ],
    isPopular: false,
    ctaText: "Get Started"
  },
  {
    id: 2,
    name: "Standard",
    price: 99,
    billingPeriod: "monthly",
    description: "Ideal for growing businesses with moderate AI needs",
    features: [
      "10 AI Agents",
      "2,000 interactions per month",
      "Fast response time",
      "Email & chat support",
      "Advanced analytics",
      "Custom agent training"
    ],
    isPopular: true,
    ctaText: "Try Free for 14 Days"
  },
  {
    id: 3,
    name: "Premium",
    price: 199,
    billingPeriod: "monthly",
    description: "For businesses requiring high-volume AI assistance",
    features: [
      "Unlimited AI Agents",
      "10,000 interactions per month",
      "Priority response time",
      "24/7 priority support",
      "Advanced analytics & reporting",
      "Custom agent training",
      "API access",
      "Dedicated account manager"
    ],
    isPopular: false,
    ctaText: "Contact Sales"
  }
];

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Setup scroll reveal animations
    const setupObserver = () => {
      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      };
      
      const observer = new IntersectionObserver(callback, {
        threshold: 0.1
      });
      
      const elements = document.querySelectorAll('.reveal-item');
      elements.forEach(el => {
        observer.observe(el);
      });
    };
    
    setupObserver();
  }, []);

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
          <h1 className="text-3xl md:text-4xl font-bold font-futura">Pricing Plans</h1>
        </div>
        
        <p className="text-xl text-ajent-silver/80 max-w-3xl mb-8">
          Choose the plan that's right for your business. All plans include access to our core AI agent technology.
        </p>
        
        {/* Billing toggle */}
        <div className="flex justify-center items-center mb-12">
          <span className={`mr-3 ${!annualBilling ? 'text-white' : 'text-ajent-silver/70'}`}>Monthly</span>
          <button 
            className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors ${annualBilling ? 'bg-ajent-blue' : 'bg-ajent-dark-light'}`}
            onClick={() => setAnnualBilling(!annualBilling)}
          >
            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${annualBilling ? 'translate-x-7' : ''}`} />
          </button>
          <span className={`ml-3 ${annualBilling ? 'text-white' : 'text-ajent-silver/70'}`}>
            Annual <span className="text-ajent-blue">(Save 20%)</span>
          </span>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`relative rounded-xl overflow-hidden reveal-item opacity-0 translate-y-4 ${
              plan.isPopular ? 'border-2 border-ajent-blue transform md:-translate-y-4 md:scale-105' : 'border border-ajent-blue/20'
            }`}>
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-ajent-blue text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="bg-ajent-dark-light p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-ajent-silver/80 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${annualBilling ? Math.round(plan.price * 0.8) : plan.price}</span>
                  <span className="text-ajent-silver/80">/{plan.billingPeriod}</span>
                </div>
                <Button className="w-full bg-ajent-blue hover:bg-ajent-blue-dark transition-colors">
                  {plan.ctaText}
                </Button>
              </div>
              <div className="bg-ajent-dark p-6">
                <p className="font-medium text-white mb-4">Features include:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-ajent-blue mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
