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
    { name: "Web & App Development", path: "/services/web-app-development" },
    { name: "Secure Development", path: "/services/secure-development" },
    { name: "Web Application VAPT", path: "/services/web-vapt" },
    { name: "Mobile Application VAPT", path: "/services/mobile-vapt" },
    { name: "Network Security Audit", path: "/services/network-audit" },
    { name: "SOC & Threat Monitoring", path: "/services/soc-monitoring" },
    { name: "Incident Response", path: "/services/incident-response" },
    { name: "Cyber Awareness Training", path: "/services/training" },
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
            <img src={logo} alt="Cyber Nexora" className="h-12 w-12 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">CyberNexora</span>
              <span className="text-xs text-muted-foreground">Next-Gen Cyber Defence</span>
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
            <div className="relative group">
              <button
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  location.pathname.startsWith("/services") ? "text-primary" : "text-foreground"
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-xl py-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
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
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(51,204,255,0.3)] hover:shadow-[0_0_30px_rgba(51,204,255,0.5)] transition-all">
              Get Started
            </Button>
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
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <Link to="/" className="block text-sm font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/about" className="block text-sm font-medium hover:text-primary transition-colors">
                  About
                </Link>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block pl-4 text-sm hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link to="/case-studies" className="block text-sm font-medium hover:text-primary transition-colors">
                  Case Studies
                </Link>
                <Link to="/contact" className="block text-sm font-medium hover:text-primary transition-colors">
                  Contact
                </Link>
                <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
