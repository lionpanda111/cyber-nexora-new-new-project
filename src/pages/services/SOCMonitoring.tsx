import { Eye, CheckCircle2, ArrowRight, Clock, Shield, AlertTriangle, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import socCenterImg from "@/assets/soc-center.jpg";
import { motion } from "framer-motion";

const SOCMonitoring = () => {
  const benefits = [
    "24/7 real-time threat monitoring",
    "Rapid incident detection and response",
    "Continuous security event analysis",
    "Reduce mean time to detect (MTTD)",
    "Expert security analysts on-demand",
    "Comprehensive threat intelligence"
  ];

  const process = [
    {
      icon: Clock,
      title: "Continuous Monitoring",
      description: "Round-the-clock surveillance of your IT infrastructure with advanced SIEM technology and real-time alerting."
    },
    {
      icon: AlertTriangle,
      title: "Threat Detection",
      description: "Advanced analytics and machine learning to identify potential threats and suspicious activities instantly."
    },
    {
      icon: Activity,
      title: "Incident Analysis",
      description: "Expert security analysts investigate alerts, correlate events, and determine threat severity and impact."
    },
    {
      icon: Shield,
      title: "Response & Remediation",
      description: "Immediate action to contain threats, detailed incident reports, and guidance for remediation."
    }
  ];

  const capabilities = [
    {
      title: "Log Management",
      items: ["Centralized log collection", "Log correlation", "Retention and archiving", "Compliance reporting"]
    },
    {
      title: "Threat Intelligence",
      items: ["Global threat feeds", "IOC monitoring", "Threat hunting", "Dark web monitoring"]
    },
    {
      title: "Incident Response",
      items: ["24/7 alert handling", "Forensic analysis", "Containment procedures", "Recovery support"]
    },
    {
      title: "Compliance Monitoring",
      items: ["PCI-DSS compliance", "HIPAA monitoring", "GDPR requirements", "SOC 2 controls"]
    }
  ];

  const deliverables = [
    "24/7 security monitoring service",
    "Real-time threat alerts",
    "Monthly security reports",
    "Incident response support",
    "Threat intelligence briefings",
    "Dedicated security analyst team"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Eye className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">24/7 Security Operations</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  SOC & Threat <span className="text-gradient">Monitoring</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Round-the-clock security operations center services with real-time threat detection and expert incident response.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(51,204,255,0.3)]">
                      Get Started <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="relative">
                <img 
                  src={socCenterImg} 
                  alt="SOC Monitoring" 
                  className="rounded-2xl shadow-2xl"
                />
                {/* Live Status Indicator */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm border border-green-500 rounded-lg px-4 py-2 flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-500">Live Monitoring</span>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Why SOC Monitoring?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How SOC Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuous security monitoring and threat response cycle
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-6 h-full relative hover:shadow-[0_0_30px_rgba(51,204,255,0.2)] transition-all border-border hover:border-primary/50">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mt-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">SOC Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security operations coverage
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((area, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <AnimatedSection>
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">What You Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="p-12 text-center bg-gradient-to-br from-card to-card/50 border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Start 24/7 Monitoring Today</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get enterprise-grade security monitoring with our expert SOC team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 shadow-[0_0_30px_rgba(51,204,255,0.4)]">
                      Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default SOCMonitoring;
