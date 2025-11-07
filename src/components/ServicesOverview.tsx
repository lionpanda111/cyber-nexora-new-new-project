import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Network, Eye, GraduationCap, AlertTriangle, Code, Brain, Server, ChevronDown, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

interface Service {
  icon: any;
  title: string;
  description: string;
  subServices: {
    name: string;
    path: string;
    description: string;
  }[];
}

const ServicesOverview = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: Shield,
      title: "Vulnerability Assessment & Penetration Testing",
      description: "Comprehensive security testing across web, mobile, and network infrastructure",
      subServices: [
        {
          name: "Web Application VAPT",
          path: "/services/web-vapt",
          description: "In-depth testing of web applications for security vulnerabilities"
        },
        {
          name: "Mobile Application VAPT",
          path: "/services/mobile-vapt",
          description: "Security assessment for iOS and Android applications"
        },
        {
          name: "Network Security Audit",
          path: "/services/network-audit",
          description: "Comprehensive network infrastructure security evaluation"
        }
      ]
    },
    {
      icon: Eye,
      title: "Security Operations & Monitoring",
      description: "24/7 threat monitoring and incident response capabilities",
      subServices: [
        {
          name: "SOC & Threat Monitoring",
          path: "/services/soc-monitoring",
          description: "Real-time security operations center services"
        },
        {
          name: "Incident Response",
          path: "/services/incident-response",
          description: "Rapid response to security incidents and breaches"
        }
      ]
    },
    {
      icon: Server,
      title: "Endpoint & Infrastructure Security",
      description: "Advanced protection for endpoints and critical infrastructure",
      subServices: [
        {
          name: "Endpoint Security & Ransomware Defense",
          path: "/services/endpoint-security",
          description: "Multi-layer protection against ransomware and endpoint threats"
        }
      ]
    },
    {
      icon: Code,
      title: "Secure Development Services",
      description: "Build security into your development lifecycle",
      subServices: [
        {
          name: "Secure Development & Consulting",
          path: "/services/secure-dev-consulting",
          description: "Secure application development and expert DevSecOps guidance"
        }
      ]
    },
    {
      icon: GraduationCap,
      title: "Security Awareness & Training",
      description: "Empower your team with cybersecurity knowledge",
      subServices: [
        {
          name: "Cyber Awareness Training & Phishing Simulation",
          path: "/services/training",
          description: "Comprehensive training programs and simulated attacks"
        }
      ]
    },
    {
      icon: Brain,
      title: "Advanced Threat Detection",
      description: "AI-powered detection of sophisticated threats",
      subServices: [
        {
          name: "Deepfake Detection & Analysis",
          path: "/services/deepfake-detection",
          description: "Identify and analyze AI-generated misinformation"
        }
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
          >
            Comprehensive cybersecurity solutions tailored to protect your business from evolving threats
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="group relative overflow-hidden border-border/50 hover:border-primary/60 transition-all duration-500 bg-card/50 backdrop-blur-sm h-full"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-700 pointer-events-none" />
                  
                  {/* Main Service Card */}
                  <div
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="relative p-6 sm:p-7 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Icon with animation */}
                        <motion.div 
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center mb-5 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300"
                          whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        >
                          <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                        </motion.div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <motion.div 
                          className="flex items-center gap-2 text-sm font-semibold text-primary"
                          whileHover={{ x: 5 }}
                        >
                          <span>{expandedService === index ? "Hide" : "Explore"} Services</span>
                          <motion.div
                            animate={{ rotate: expandedService === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Sub-Services */}
                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-border/50"
                      >
                        <div className="p-5 bg-gradient-to-b from-card/40 to-card/20 space-y-2">
                          {service.subServices.map((subService, subIndex) => (
                            <motion.div
                              key={subIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.1 }}
                            >
                              <Link
                                to={subService.path}
                                className="block p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 group/sub border border-transparent hover:border-primary/30"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 group-hover/sub:scale-150 transition-transform" />
                                  <div className="flex-1">
                                    <h4 className="font-bold text-sm sm:text-base mb-1 group-hover/sub:text-primary transition-colors flex items-center gap-2">
                                      {subService.name}
                                      <ArrowRight className="w-4 h-4 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                                    </h4>
                                    <p className="text-xs sm:text-sm text-muted-foreground">
                                      {subService.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
