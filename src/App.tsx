import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebVAPT from "./pages/services/WebVAPT";
import MobileVAPT from "./pages/services/MobileVAPT";
import NetworkAudit from "./pages/services/NetworkAudit";
import SOCMonitoring from "./pages/services/SOCMonitoring";
import Training from "./pages/services/Training";
import IncidentResponse from "./pages/services/IncidentResponse";
import EndpointSecurity from "./pages/services/EndpointSecurity";
import SecureDevConsulting from "./pages/services/SecureDevConsulting";
import DeepfakeDetection from "./pages/services/DeepfakeDetection";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-vapt" element={<WebVAPT />} />
          <Route path="/services/mobile-vapt" element={<MobileVAPT />} />
          <Route path="/services/network-audit" element={<NetworkAudit />} />
          <Route path="/services/soc-monitoring" element={<SOCMonitoring />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/incident-response" element={<IncidentResponse />} />
          <Route path="/services/endpoint-security" element={<EndpointSecurity />} />
          <Route path="/services/secure-dev-consulting" element={<SecureDevConsulting />} />
          <Route path="/services/deepfake-detection" element={<DeepfakeDetection />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
