import { Shield, Lock, Code, FileCheck, AlertTriangle, CheckCircle, Bug } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import secureDevConsulting from "@/assets/secure-dev-consulting.jpg";
import secureDevelopmentHero from "@/assets/secure-development-hero.jpg";

const SecureDevConsulting = () => {
  const secureSteps = [
    {
      icon: AlertTriangle,
      title: "Threat Modeling",
      description: "Comprehensive analysis of potential security threats during the design phase to prevent vulnerabilities before development begins."
    },
    {
      icon: Code,
      title: "Secure Coding",
      description: "Implementation of security best practices and secure coding standards throughout the development lifecycle."
    },
    {
      icon: Bug,
      title: "Security Testing",
      description: "Automated and manual security testing to identify and fix vulnerabilities before deployment."
    },
    {
      icon: Shield,
      title: "Security by Design",
      description: "Security integrated into every stage of development, not added as an afterthought."
    },
    {
      icon: CheckCircle,
      title: "Pre-Delivery Testing",
      description: "All deliverables undergo rigorous security testing and vulnerability assessment before client delivery."
    },
    {
      icon: Lock,
      title: "Continuous Protection",
      description: "Ongoing security monitoring and updates to protect against emerging threats post-deployment."
    }
  ];

  const consultingServices = [
    {
      icon: Shield,
      title: "Security Architecture Review",
      description: "Comprehensive evaluation of your application architecture, identifying security gaps and providing actionable recommendations for improvement."
    },
    {
      icon: Code,
      title: "Secure Code Review",
      description: "Deep analysis of your codebase to identify vulnerabilities, insecure patterns, and compliance issues with detailed remediation guidance."
    },
    {
      icon: Lock,
      title: "DevSecOps Implementation",
      description: "Integration of security practices into your CI/CD pipeline, automating security testing and ensuring continuous security validation."
    },
    {
      icon: FileCheck,
      title: "Compliance & Standards",
      description: "Guidance on meeting industry standards (OWASP, PCI-DSS, ISO 27001) and regulatory requirements for secure development."
    }
  ];

  const approach = [
    "Assessment of current development practices and security posture",
    "Identification of security gaps and vulnerability patterns",
    "Customized roadmap for secure development implementation",
    "Training and knowledge transfer to development teams",
    "Ongoing support and security consultation"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <img 
                src={secureDevelopmentHero} 
                alt="Secure Development - Shield with code and cybersecurity" 
                className="w-full rounded-2xl shadow-2xl border border-primary/20"
              />
              <img 
                src={secureDevConsulting} 
                alt="Secure Development Consulting - Expert guidance on secure coding and DevSecOps" 
                className="w-full rounded-2xl shadow-2xl border border-primary/20"
              />
            </div>
            <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Secure Development & <span className="text-gradient">Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We build websites & applications secure by design and provide expert guidance to integrate security into every phase of your software development lifecycle
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Secure Development Process */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Secure Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Security best practices at every stage: threat modeling, secure coding, automated testing, and continuous protection
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secureSteps.map((step, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 0.1}>
                <Card className="p-8 h-full border-primary/30">
                  <step.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Security Consulting Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert guidance to strengthen your development practices and security posture
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {consultingServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-8 h-full border-primary/30 hover:border-primary/50 transition-all">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Approach Section */}
          <AnimatedSection>
            <Card className="p-12 bg-gradient-to-br from-card to-card/50 border-primary/30">
              <h2 className="text-4xl font-bold mb-8 text-center">Our Approach</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {approach.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <Card className="p-12 text-center bg-gradient-to-br from-card to-card/50 border-primary/30">
              <h2 className="text-4xl font-bold mb-6">Ready to Build Secure Applications?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Partner with us to develop applications that are secure from the ground up and get expert consulting
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline">
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

export default SecureDevConsulting;
