import { Monitor, ShoppingCart, Smartphone, Zap, Palette, Code2, Cloud, TestTube, ShieldCheck, CreditCard, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import webAppDevHero from "@/assets/web-app-dev-hero.jpg";
import customWebDev from "@/assets/custom-web-dev.jpg";
import ecommerceDev from "@/assets/ecommerce-dev.jpg";
import mobileAppDev from "@/assets/mobile-app-dev.jpg";
import pwaDev from "@/assets/pwa-dev.jpg";
import uiUxDesign from "@/assets/ui-ux-design.jpg";
import apiIntegration from "@/assets/api-integration.jpg";
import devopsCloud from "@/assets/devops-cloud.jpg";
import qaTesting from "@/assets/qa-testing.jpg";
import securityHardening from "@/assets/security-hardening.jpg";
import paymentIntegration from "@/assets/payment-integration.jpg";

const WebAppDevelopment = () => {
  const services = [
    {
      icon: Monitor,
      title: "Custom Website / Application Development",
      description: "End-to-end custom websites & web apps built to your workflow: backend, frontend, hosting, and integrations.",
      image: customWebDev,
      alt: "Custom web application development dashboard"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce (WordPress / Shopify) Site Development",
      description: "Scalable online stores using WooCommerce / Shopify with payment & inventory sync.",
      image: ecommerceDev,
      alt: "Ecommerce website product listings and checkout"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development (iOS & Android)",
      description: "Native & cross-platform mobile apps with push, offline sync and analytics.",
      image: mobileAppDev,
      alt: "Mobile app mockups on phone screens"
    },
    {
      icon: Zap,
      title: "PWA (Progressive Web Apps)",
      description: "Fast, installable PWAs that work offline and load instantly.",
      image: pwaDev,
      alt: "Progressive Web App install prompt"
    },
    {
      icon: Palette,
      title: "UI / UX Design",
      description: "User-first design, wireframes, prototypes and developer-ready assets.",
      image: uiUxDesign,
      alt: "UI/UX wireframe and prototype"
    },
    {
      icon: Code2,
      title: "API Integration & Microservices",
      description: "Secure API design, third-party integrations and microservice architecture.",
      image: apiIntegration,
      alt: "API integrations and microservice architecture diagram"
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud Deployment",
      description: "CI/CD pipelines, containerization and cloud deployments (AWS/GCP/Azure).",
      image: devopsCloud,
      alt: "DevOps cloud deployment pipeline"
    },
    {
      icon: TestTube,
      title: "QA, Testing & Maintenance",
      description: "Automated testing, manual QA and ongoing support packages.",
      image: qaTesting,
      alt: "QA testing and automation"
    },
    {
      icon: ShieldCheck,
      title: "Security Hardening & Pen-Testing",
      description: "App hardening, secure code reviews and penetration testing.",
      image: securityHardening,
      alt: "Security hardening and vulnerability scan"
    },
    {
      icon: CreditCard,
      title: "Third-party Integrations (payments, CRMs)",
      description: "Razorpay, Stripe, PayPal, CRM & ERP connectors.",
      image: paymentIntegration,
      alt: "Payment gateway integration"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <img 
              src={webAppDevHero} 
              alt="Web & App Development - Modern coding and mobile app development" 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl mb-8 border border-primary/20"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Web & App <span className="text-gradient">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Modern, secure, and high-performance web solutions tailored to your business needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-6">
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg overflow-hidden bg-card">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4 text-left w-full">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                      <div className="order-2 lg:order-1">
                        <img 
                          src={service.image} 
                          alt={service.alt}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div className="order-1 lg:order-2 flex flex-col justify-center">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <a 
                          href="#contact" 
                          className="text-primary hover:text-primary-glow transition-colors font-medium inline-flex items-center gap-2"
                        >
                          Learn more <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                        </a>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default WebAppDevelopment;
