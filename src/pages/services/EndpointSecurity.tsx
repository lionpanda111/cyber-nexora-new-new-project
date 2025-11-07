import { Shield, Lock, AlertTriangle, FileSearch, Activity, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import endpointSecurityImg from "@/assets/endpoint-security.jpg";

const EndpointSecurity = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered defense against malware, ransomware, and zero-day exploits"
    },
    {
      icon: Lock,
      title: "Ransomware Defense",
      description: "Proactive detection and isolation of ransomware attacks before encryption"
    },
    {
      icon: AlertTriangle,
      title: "Real-time Monitoring",
      description: "24/7 endpoint monitoring with instant threat detection and response"
    },
    {
      icon: FileSearch,
      title: "Behavioral Analysis",
      description: "AI-powered behavioral analysis to identify suspicious activities"
    },
    {
      icon: Activity,
      title: "Automated Response",
      description: "Immediate containment and remediation of detected threats"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  Endpoint Security & <span className="text-gradient">Ransomware Defense</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                  Protect every endpoint in your organization with advanced threat detection, ransomware defense, and automated incident response capabilities.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Secure Your Endpoints
                  </Button>
                </Link>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-[0_0_50px_rgba(51,204,255,0.3)]">
                <img src={endpointSecurityImg} alt="Endpoint Security" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Key Capabilities</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive endpoint protection with cutting-edge security technologies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="p-6 h-full hover:shadow-[0_0_30px_rgba(51,204,255,0.2)] transition-all duration-300 border-border hover:border-primary/50">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Ransomware Protection Details */}
      <AnimatedSection delay={0.3}>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
                Multi-Layer Ransomware Defense
              </h2>
              <div className="space-y-4">
                {[
                  "Pre-execution detection using behavioral analysis and machine learning",
                  "Real-time encryption activity monitoring and automatic backup protection",
                  "Network segmentation to prevent lateral movement of ransomware",
                  "Automated incident response with immediate threat isolation",
                  "Post-incident forensics and recovery assistance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-card to-card/50 border-primary/30">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Strengthen Your Endpoint Security?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today to learn how we can protect your organization from ransomware and advanced threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/50">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default EndpointSecurity;
