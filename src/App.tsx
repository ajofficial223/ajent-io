
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExploreAgents from "./pages/ExploreAgents";
import AIAgents from "./pages/AIAgents";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Terms from "./pages/Terms";
import About from "./pages/About";

// Add additional page imports for footer links
import CaseStudies from "./pages/CaseStudies";
import Documentation from "./pages/Documentation"; 
import Guides from "./pages/Guides";
import Webinars from "./pages/Webinars";
import CustomSolutions from "./pages/CustomSolutions";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import PressKit from "./pages/PressKit";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import GDPR from "./pages/GDPR";
import Security from "./pages/Security";
import SocialMedia from "./pages/SocialMedia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore-agents" element={<ExploreAgents />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Blog and Resources */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/webinars" element={<Webinars />} />
          
          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/press-kit" element={<PressKit />} />
          <Route path="/custom-solutions" element={<CustomSolutions />} />
          
          {/* Legal */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/security" element={<Security />} />
          
          {/* Social Media */}
          <Route path="/social/:platform" element={<SocialMedia />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
