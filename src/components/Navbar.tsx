import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/cyber-nexora-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Web Application VAPT", path: "/services/web-vapt" },
    { name: "Mobile Application VAPT", path: "/services/mobile-vapt" },
    { name: "Network Security Audit", path: "/services/network-audit" },
    { name: "SOC & Threat Monitoring (Managed SOC/SIEM)", path: "/services/soc-monitoring" },
    { name: "Endpoint Security & Ransomware Defense", path: "/services/endpoint-security" },
    { name: "Cyber Awareness Training & Phishing Simulation", path: "/services/training" },
    { name: "Incident Response", path: "/services/incident-response" },
    { name: "Secure Development & Consulting", path: "/services/secure-dev-consulting" },
    { name: "Deepfake Detection & Analysis", path: "/services/deepfake-detection" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="CyberNexora Logo - Leading Cybersecurity Company in Gujarat" className="h-12 w-12 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">CyberNexora</span>
              <span className="text-xs text-muted-foreground">YOUR NEX-GEN CYBER SHIELD</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/about" ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  location.pathname.startsWith("/services") ? "text-primary" : "text-foreground"
                }`}
              >
                Services
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <>
                    {/* Backdrop overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
                      style={{ top: '80px' }}
                    />
                    {/* Dropdown menu */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-80 bg-card/98 backdrop-blur-xl rounded-lg shadow-2xl border border-primary/20 py-3 z-50"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setIsServicesOpen(false);
                          }}
                          className="block px-5 py-3 text-sm hover:bg-primary/10 transition-all duration-200 hover:translate-x-1 border-l-2 border-transparent hover:border-primary"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/case-studies"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/case-studies" ? "text-primary" : "text-foreground"
              }`}
            >
              Case Studies
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/contact" ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a 
              href="https://cybersecuritynews.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(51,204,255,0.3)] hover:shadow-[0_0_30px_rgba(51,204,255,0.5)] transition-all">
                Explore Latest Cybersecurity Updates →
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-md z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Sidebar Menu */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-card/98 backdrop-blur-xl shadow-2xl z-50 lg:hidden border-l border-primary/20"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-5 border-b border-border/50">
                    <div className="flex items-center space-x-2">
                      <img src={logo} alt="CyberNexora" className="h-8 w-8" />
                      <div>
                        <h1 className="text-base font-bold text-primary">CyberNexora</h1>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Your Nex-Gen Cyber Shield</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-foreground hover:text-primary transition-colors p-1"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex-1 overflow-y-auto py-6 px-2">
                    <Link 
                      to="/" 
                      className="block px-5 py-3.5 text-base font-medium hover:bg-primary/10 transition-all duration-200 rounded-lg mx-2 mb-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      to="/about" 
                      className="block px-5 py-3.5 text-base font-medium hover:bg-primary/10 transition-all duration-200 rounded-lg mx-2 mb-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    
                    {/* Mobile Services Dropdown */}
                    <div className="mx-2 mb-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex items-center justify-between px-5 py-3.5 text-base font-medium hover:bg-primary/10 transition-all duration-200 rounded-lg"
                      >
                        Services
                        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-accent/30 rounded-lg mt-2 border border-primary/10"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block px-5 py-3 text-sm hover:bg-primary/10 transition-all duration-200 border-l-2 border-transparent hover:border-primary"
                                onClick={() => {
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                  setIsMobileMenuOpen(false);
                                  setIsServicesOpen(false);
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <Link 
                      to="/case-studies" 
                      className="block px-5 py-3.5 text-base font-medium hover:bg-primary/10 transition-all duration-200 rounded-lg mx-2 mb-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Case Studies
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block px-5 py-3.5 text-base font-medium hover:bg-primary/10 transition-all duration-200 rounded-lg mx-2 mb-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    
                    <div className="pt-4 px-4">
                      <a 
                        href="https://cybersecuritynews.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg">
                          Latest Cyber News →
                        </Button>
                      </a>
                    </div>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
