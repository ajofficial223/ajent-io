
import { useEffect, useRef } from 'react';

const TrustedBy = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };
    
    observerRef.current = new IntersectionObserver(callback, {
      threshold: 0.1
    });
    
    const elements = document.querySelectorAll('.reveal-text');
    elements.forEach(el => {
      observerRef.current?.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observerRef.current?.unobserve(el);
      });
    };
  }, []);
  
  // Define company logos with their names
  const companyLogos = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Reddit", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/2560px-Reddit_logo_new.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
  ];
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ajent-blue/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ajent-blue/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal-text">
          <h2 className="text-2xl md:text-3xl font-futura mb-2">Trusted By Industry Leaders</h2>
          <p className="text-ajent-silver/70 max-w-2xl mx-auto">
            Powering AI automation for businesses worldwide
          </p>
        </div>
        
        {/* Animated logos marquee */}
        <div className="relative overflow-hidden py-8 my-8">
          <div className="logos-slide-track animate-marquee flex">
            {/* First set of logos */}
            {companyLogos.map((company, index) => (
              <div 
                key={`logo-1-${index}`}
                className="mx-6 h-12 flex items-center bg-white/5 px-6 py-3 rounded-lg"
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-6 sm:h-8 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            
            {/* Duplicate logos for seamless loop */}
            {companyLogos.map((company, index) => (
              <div 
                key={`logo-2-${index}`}
                className="mx-6 h-12 flex items-center bg-white/5 px-6 py-3 rounded-lg"
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-6 sm:h-8 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              quote: "AJent.io revolutionized our customer support process, reducing response time by 80% while maintaining high customer satisfaction.",
              author: "Sarah Johnson",
              title: "CTO, TechCorp"
            },
            {
              quote: "Implementing AI agents for lead qualification helped us increase our sales pipeline efficiency by 65% within just two months.",
              author: "Michael Chen",
              title: "VP of Sales, GrowthTech"
            },
            {
              quote: "The ability to customize our AI agent to match our brand voice has been invaluable for maintaining consistent customer experiences.",
              author: "Emma Rodriguez",
              title: "Marketing Director, BrandX"
            }
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl reveal-text"
              style={{ transitionDelay: `${(index + 6) * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 text-ajent-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.17 6C9.58 6 9.92 6.34 9.92 6.75C9.92 7.16 9.58 7.5 9.17 7.5H7.5V12.5C7.5 13.33 8.17 14 9 14C9.83 14 10.5 13.33 10.5 12.5C10.5 11.67 9.83 11 9 11V9.5C10.66 9.5 12 10.84 12 12.5C12 14.16 10.66 15.5 9 15.5C7.34 15.5 6 14.16 6 12.5V7.5H4.83C4.42 7.5 4.08 7.16 4.08 6.75C4.08 6.34 4.42 6 4.83 6H9.17ZM19.17 6C19.58 6 19.92 6.34 19.92 6.75C19.92 7.16 19.58 7.5 19.17 7.5H17.5V12.5C17.5 13.33 18.17 14 19 14C19.83 14 20.5 13.33 20.5 12.5C20.5 11.67 19.83 11 19 11V9.5C20.66 9.5 22 10.84 22 12.5C22 14.16 20.66 15.5 19 15.5C17.34 15.5 16 14.16 16 12.5V7.5H14.83C14.42 7.5 14.08 7.16 14.08 6.75C14.08 6.34 14.42 6 14.83 6H19.17Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="flex-grow text-ajent-silver/90 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-ajent-silver">{testimonial.author}</p>
                  <p className="text-sm text-ajent-silver/60">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
