import { Shield, Lock, Code, Bug, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import secureDevelopmentHero from "@/assets/secure-development-hero.jpg";

const SecureDevelopment = () => {
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

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-12">
            <img 
              src={secureDevelopmentHero} 
              alt="Secure Development - Shield with code and cybersecurity" 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl mb-8 border border-primary/20"
            />
            <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Secure <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We build websites & applications secure by design—using cyber security best practices at every stage: threat modeling, secure coding, automated security testing, and continuous protection. All deliverables are pre-tested for vulnerabilities before delivery to clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          <AnimatedSection>
            <Card className="p-12 text-center bg-gradient-to-br from-card to-card/50 border-primary/30">
              <h2 className="text-4xl font-bold mb-6">Build Secure Applications</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Partner with us to develop applications that are secure from the ground up
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default SecureDevelopment;
