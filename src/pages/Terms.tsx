import { motion } from "framer-motion";
import { Scale, FileText, Shield, AlertTriangle, Lock, Gavel } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "User Obligations & Acceptable Use",
      content: "By accessing our services, you agree to provide accurate information, maintain the confidentiality of your account credentials, use our services only for lawful purposes, comply with all applicable cybersecurity laws and regulations, and not attempt to circumvent security measures or disrupt our services. You acknowledge that our penetration testing and security assessment services must only be conducted on systems you own or have explicit authorization to test."
    },
    {
      icon: Shield,
      title: "Intellectual Property Rights",
      content: "All content, methodologies, reports, tools, and materials provided by Cyber Nexora remain our exclusive intellectual property. Our security assessment reports, vulnerability findings, and recommendations are confidential and licensed to you for internal use only. You may not reproduce, distribute, or disclose our proprietary methodologies without written consent. Any custom tools or scripts developed during engagements remain our property unless otherwise agreed in writing."
    },
    {
      icon: AlertTriangle,
      title: "Service Disclaimer",
      content: "Our cybersecurity services are provided 'as is' without warranties of any kind. While we employ industry-leading methodologies and experienced professionals, we cannot guarantee that all vulnerabilities will be discovered or that your systems will be immune to attacks. Security testing may not detect zero-day vulnerabilities or sophisticated targeted attacks. Our assessments represent a point-in-time evaluation and do not guarantee future security."
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: "Cyber Nexora's total liability for any claims arising from our services shall not exceed the fees paid for the specific service in question. We are not liable for indirect, incidental, consequential, or punitive damages, including business interruption, data loss, or system downtime. Our liability does not cover damages resulting from your failure to implement recommended security measures or from attacks by third parties."
    },
    {
      icon: Lock,
      title: "Confidentiality & Compliance with Cyber Laws",
      content: "We maintain strict confidentiality of all client information, security findings, and business data. All engagements are governed by mutual non-disclosure agreements. We comply with relevant cybersecurity regulations including GDPR, ISO 27001, NIST frameworks, and industry-specific standards. Our testing activities follow responsible disclosure practices and ethical hacking principles. We adhere to all applicable data protection and privacy laws."
    },
    {
      icon: Gavel,
      title: "Termination Policy",
      content: "Either party may terminate services with 30 days written notice. Cyber Nexora reserves the right to suspend or terminate services immediately if you breach these terms, engage in illegal activities, or use our services in ways that could harm our reputation or operations. Upon termination, all confidential materials must be returned or destroyed, outstanding fees become immediately due, and certain provisions including confidentiality and intellectual property rights survive termination."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Terms & Conditions"
        description="Review CyberNexora's terms and conditions. Legal terms governing our cybersecurity services, user obligations, and service agreements."
        canonical="https://www.cybernexora.com/terms"
      />
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4">
              Legal terms governing our cybersecurity services
            </p>
            <p className="text-sm text-muted-foreground">
              Last Updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Card className="p-6 sm:p-8 max-w-4xl mx-auto">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                Welcome to <span className="text-primary font-semibold">Cyber Nexora</span>. These Terms and Conditions govern your use of our cybersecurity services, including vulnerability assessment, penetration testing, security audits, and related offerings.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                By engaging our services, you agree to be bound by these terms. Please read them carefully before proceeding. If you do not agree with any part of these terms, you should not use our services.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-6 sm:p-8 hover:shadow-[0_0_30px_rgba(51,204,255,0.15)] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{section.title}</h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <Card className="p-8 sm:p-10 md:p-12 max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <Gavel className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
                Governing Law & Jurisdiction
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                <p className="leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India, specifically under the jurisdiction of Gujarat State. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat.
                </p>
                <p className="leading-relaxed">
                  We comply with the Information Technology Act, 2000, and all applicable Indian cybersecurity regulations. Our services adhere to international standards including ISO 27001, OWASP guidelines, and NIST cybersecurity frameworks.
                </p>
                <p className="leading-relaxed">
                  For international clients, additional terms may apply based on your local regulations. We are committed to complying with GDPR for European clients and other regional data protection laws as applicable.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Questions about our terms? Contact our legal team:
                </p>
                <p className="text-base">
                  <a href="mailto:legal@cybernexora.com" className="text-primary hover:underline font-medium">
                    legal@cybernexora.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Terms;
