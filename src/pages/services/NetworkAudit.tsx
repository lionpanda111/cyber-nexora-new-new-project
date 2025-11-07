import { Network, CheckCircle2, ArrowRight, FileText, Target, AlertTriangle, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import networkSecurityImg from "@/assets/network-security.jpg";

const NetworkAudit = () => {
  const benefits = [
    "Identify network infrastructure vulnerabilities",
    "Strengthen firewall and security configurations",
    "Prevent unauthorized network access",
    "Ensure compliance with security standards",
    "Protect against network-based attacks",
    "Improve overall security posture"
  ];

  const process = [
    {
      icon: FileText,
      title: "Network Discovery",
      description: "Comprehensive mapping of network topology, devices, and services to understand your infrastructure landscape."
    },
    {
      icon: Target,
      title: "Vulnerability Scanning",
      description: "Automated and manual testing to identify security weaknesses, misconfigurations, and outdated systems."
    },
    {
      icon: AlertTriangle,
      title: "Penetration Testing",
      description: "Simulated attacks to validate vulnerabilities and assess the effectiveness of security controls."
    },
    {
      icon: Shield,
      title: "Reporting & Hardening",
      description: "Detailed findings with prioritized recommendations and network hardening guidelines."
    }
  ];

  const testingAreas = [
    {
      title: "Network Infrastructure",
      items: ["Router security", "Switch configuration", "Network segmentation", "VLAN security"]
    },
    {
      title: "Firewall & IDS/IPS",
      items: ["Firewall rules", "ACL configuration", "Intrusion detection", "Traffic filtering"]
    },
    {
      title: "Wireless Security",
      items: ["WiFi encryption", "Rogue access points", "WPA/WPA2/WPA3", "Guest network isolation"]
    },
    {
      title: "Network Services",
      items: ["DNS security", "DHCP configuration", "VPN security", "Remote access"]
    }
  ];

  const deliverables = [
    "Executive summary report",
    "Detailed technical findings",
    "Network topology diagram",
    "Risk assessment matrix",
    "Hardening recommendations",
    "Compliance gap analysis"
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Network Security Audit Services"
        description="Comprehensive network security audits to identify vulnerabilities and strengthen your infrastructure. Expert network penetration testing and security assessments."
        keywords="Network Security Audit, Network Penetration Testing, Infrastructure Security"
        canonical="https://www.cybernexora.com/services/network-audit"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Network className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Network Infrastructure Security</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Network Security <span className="text-gradient">Audit</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Comprehensive network infrastructure assessment to identify vulnerabilities and strengthen your defense mechanisms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(51,204,255,0.3)]">
                      Get Started <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <img 
                src={networkSecurityImg} 
                alt="Network Security Audit" 
                className="rounded-2xl shadow-2xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Why Network Security Audit?</h2>
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

      {/* Testing Process */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Audit Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Systematic network security assessment methodology
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

      {/* Testing Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Audit</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete network infrastructure security assessment
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingAreas.map((area, index) => (
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
              <h2 className="text-4xl font-bold mb-12 text-center">What You'll Receive</h2>
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
                <h2 className="text-4xl font-bold mb-6">Strengthen Your Network Security</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get a comprehensive network security audit to protect your infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 shadow-[0_0_30px_rgba(51,204,255,0.4)]">
                      Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/case-studies">
                    <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                      View Case Studies
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default NetworkAudit;
