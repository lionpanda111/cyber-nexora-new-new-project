import { Shield, Lock, Network, Eye, GraduationCap, AlertTriangle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Web Application VAPT",
      description: "Comprehensive vulnerability assessment and penetration testing for web applications to identify and remediate security flaws before attackers exploit them.",
      features: ["OWASP Top 10 Testing", "Business Logic Flaws", "Authentication & Authorization", "SQL Injection & XSS"],
      path: "/services/web-vapt"
    },
    {
      icon: Lock,
      title: "Mobile Application VAPT",
      description: "In-depth security testing for iOS and Android applications, ensuring robust protection against mobile-specific threats and vulnerabilities.",
      features: ["Static & Dynamic Analysis", "Data Storage Security", "API Security Testing", "Reverse Engineering"],
      path: "/services/mobile-vapt"
    },
    {
      icon: Network,
      title: "Network Security Audit",
      description: "Thorough examination of network infrastructure to detect vulnerabilities, misconfigurations, and strengthen overall defense mechanisms.",
      features: ["Network Scanning", "Firewall Analysis", "Wireless Security", "Configuration Review"],
      path: "/services/network-audit"
    },
    {
      icon: Eye,
      title: "SOC & Threat Monitoring",
      description: "24/7 security operations center services with real-time threat detection, analysis, and incident response capabilities.",
      features: ["Real-time Monitoring", "Threat Intelligence", "Incident Management", "SIEM Integration"],
      path: "/services/soc-monitoring"
    },
    {
      icon: GraduationCap,
      title: "Cyber Awareness Training",
      description: "Comprehensive training programs to educate employees about cybersecurity best practices and enhance organizational security culture.",
      features: ["Phishing Awareness", "Social Engineering", "Security Best Practices", "Compliance Training"],
      path: "/services/training"
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response and recovery services to minimize damage, contain threats, and restore normal operations after security incidents.",
      features: ["24/7 Emergency Response", "Forensic Analysis", "Containment Strategies", "Recovery Planning"],
      path: "/services/incident-response"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Cybersecurity Services"
        description="Comprehensive cybersecurity services including VAPT, penetration testing, network security audits, SOC monitoring, and incident response. Protect your business with CyberNexora's expert security solutions in Gujarat, India."
        keywords="VAPT Services, Penetration Testing, Network Security Audit, SOC Monitoring, Cyber Defense Solutions"
        canonical="https://www.cybernexora.com/services"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive cybersecurity solutions designed to protect your business from evolving digital threats
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} animation="scale-in">
                <Card className="p-8 h-full hover:shadow-[0_0_30px_rgba(51,204,255,0.2)] transition-all duration-300 border-border hover:border-primary/50">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link to={service.path}>
                        <Button className="bg-primary hover:bg-primary/90">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <Card className="p-12 text-center bg-gradient-to-br from-card to-card/50 border-primary/30">
              <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We offer tailored cybersecurity services to meet your specific requirements. Contact us to discuss your needs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Services;
