import { motion } from "framer-motion";
import { Shield, Lock, Database, Users, Cookie, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Data Collection & Storage",
      content: "We collect personal information that you voluntarily provide to us when requesting our services, including name, email address, phone number, company details, and technical information related to your security assessments. All data is stored on secure, encrypted servers with restricted access and regular security audits."
    },
    {
      icon: Shield,
      title: "Purpose of Data Usage",
      content: "Your information is used solely to provide cybersecurity services, communicate about your security assessments, send service updates, respond to inquiries, and improve our service offerings. We analyze anonymized data to enhance our security methodologies and threat intelligence capabilities."
    },
    {
      icon: Users,
      title: "User Consent & Rights",
      content: "By using our services, you consent to the collection and processing of your data as described in this policy. You have the right to access, correct, delete, or restrict the processing of your personal information. You may withdraw consent at any time by contacting us directly."
    },
    {
      icon: Lock,
      title: "Data Protection & Security Measures",
      content: "We implement industry-leading security measures including end-to-end encryption, multi-factor authentication, regular security audits, employee security training, and secure data transmission protocols. Our infrastructure complies with ISO 27001, SOC 2, and other international security standards."
    },
    {
      icon: Users,
      title: "Third-Party Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. Data may be shared with trusted service providers who assist in our operations, only under strict confidentiality agreements. We may disclose information when required by law or to protect our rights and security."
    },
    {
      icon: Cookie,
      title: "Cookies Policy",
      content: "We use essential cookies to ensure website functionality, analytics cookies to understand user behavior (with your consent), and functional cookies to remember your preferences. You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Privacy Policy"
        description="Read CyberNexora's privacy policy. Learn how we collect, use, and protect your data. Your privacy and data security are our top priorities as a leading cybersecurity company in Gujarat."
        canonical="https://www.cybernexora.com/privacy"
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
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4">
              Your privacy and data security are our top priorities
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
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                At <span className="text-primary font-semibold">Cyber Nexora</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you interact with our cybersecurity services. As a security-first organization, we apply the same rigorous standards to data privacy that we provide to our clients.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Privacy Sections */}
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

      {/* Contact Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <Card className="p-8 sm:p-10 md:p-12 max-w-3xl mx-auto text-center">
              <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Privacy Questions?</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                If you have any questions about our privacy practices or wish to exercise your data rights, please contact our Data Protection Officer.
              </p>
              <div className="space-y-2 text-sm sm:text-base">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  <a href="mailto:privacy@cybernexora.com" className="text-primary hover:underline">
                    privacy@cybernexora.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Phone:</span>{" "}
                  <a href="tel:+919724264420" className="text-primary hover:underline">
                    +91 9724264420
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

export default Privacy;
