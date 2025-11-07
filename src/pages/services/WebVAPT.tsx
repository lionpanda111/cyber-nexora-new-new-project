import { Shield, CheckCircle2, ArrowRight, FileText, Target, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import socMonitoring from "@/assets/soc-monitoring.jpg";

const WebVAPT = () => {
  const benefits = [
    "Identify vulnerabilities before attackers do",
    "Comply with security standards and regulations",
    "Protect sensitive customer and business data",
    "Prevent financial losses from security breaches",
    "Build trust with customers and stakeholders",
    "Reduce risk of reputational damage"
  ];

  const process = [
    {
      icon: FileText,
      title: "Planning & Reconnaissance",
      description: "We begin by understanding your application architecture, business logic, and security requirements. This phase includes information gathering and threat modeling."
    },
    {
      icon: Target,
      title: "Vulnerability Assessment",
      description: "Comprehensive scanning and manual testing to identify security weaknesses including OWASP Top 10 vulnerabilities, misconfigurations, and logic flaws."
    },
    {
      icon: AlertTriangle,
      title: "Penetration Testing",
      description: "Skilled security professionals simulate real-world attacks to exploit identified vulnerabilities and assess their potential impact on your organization."
    },
    {
      icon: FileText,
      title: "Reporting & Remediation",
      description: "Detailed report with findings, risk ratings, and actionable remediation guidance. We provide ongoing support to verify fixes and improve security posture."
    }
  ];

  const testingAreas = [
    {
      title: "Authentication & Authorization",
      items: ["Broken authentication", "Session management flaws", "Password policy weaknesses", "Access control issues"]
    },
    {
      title: "Input Validation",
      items: ["SQL Injection", "Cross-Site Scripting (XSS)", "Command Injection", "XML External Entities (XXE)"]
    },
    {
      title: "Business Logic",
      items: ["Workflow vulnerabilities", "Rate limiting bypasses", "Payment manipulation", "Privilege escalation"]
    },
    {
      title: "Security Configuration",
      items: ["Default credentials", "Unnecessary services", "Error handling", "Security headers"]
    }
  ];

  const deliverables = [
    "Executive summary for management",
    "Detailed technical findings report",
    "Risk assessment and prioritization",
    "Step-by-step remediation guidance",
    "Proof-of-concept demonstrations",
    "Re-testing after fixes (optional)"
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Web Application VAPT Services"
        description="Comprehensive web application vulnerability assessment and penetration testing services. Protect your web apps from OWASP Top 10 threats and security vulnerabilities with CyberNexora's expert VAPT services in Gujarat, India."
        keywords="Web Application VAPT, Penetration Testing, OWASP Testing, Web Security, Application Security Testing"
        canonical="https://www.cybernexora.com/services/web-vapt"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Web Application Security</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Web Application <span className="text-gradient">VAPT</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Comprehensive vulnerability assessment and penetration testing to secure your web applications against evolving cyber threats.
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
                src={socMonitoring} 
                alt="Web Application Security Testing" 
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
              <h2 className="text-4xl font-bold mb-12 text-center">Why Web Application VAPT?</h2>
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
            <h2 className="text-4xl font-bold mb-4">Our Testing Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to identify and mitigate security vulnerabilities
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
            <h2 className="text-4xl font-bold mb-4">What We Test</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage of all critical security aspects
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
                <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Web Application?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Contact us today for a consultation and learn how we can help protect your web applications.
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

export default WebVAPT;
