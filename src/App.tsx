import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebVAPT from "./pages/services/WebVAPT";
import MobileVAPT from "./pages/services/MobileVAPT";
import NetworkAudit from "./pages/services/NetworkAudit";
import WebAppDevelopment from "./pages/services/WebAppDevelopment";
import SOCMonitoring from "./pages/services/SOCMonitoring";
import Training from "./pages/services/Training";
import IncidentResponse from "./pages/services/IncidentResponse";
import SecureDevelopment from "./pages/services/SecureDevelopment";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          <Route path="/services/web-app-development" element={<WebAppDevelopment />} />
          <Route path="/services/secure-development" element={<SecureDevelopment />} />
          <Route path="/services/soc-monitoring" element={<SOCMonitoring />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/incident-response" element={<IncidentResponse />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
