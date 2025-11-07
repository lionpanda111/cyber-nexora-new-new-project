import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import AttackDefenseAnimation from "@/components/AttackDefenseAnimation";
import HeroFloatingIcons from "@/components/HeroFloatingIcons";
import ServicesOverview from "@/components/ServicesOverview";
import CyberSecurityWorkflow from "@/components/CyberSecurityWorkflow";
import BookDemoDialog from "@/components/BookDemoDialog";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-cyber-bg.jpg";
import heroCyberSecurity from "@/assets/hero-cyber-security.jpg";
import redTeamAdvanced from "@/assets/red-team-advanced.jpg";

const Home = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const stats = [
    { label: "Enterprises Secured", value: "50+" },
    { label: "Vulnerabilities Fixed", value: "1000+" },
    { label: "Security Audits", value: "50+" },
    { label: "Client Satisfaction", value: "98%" },
  ];

  const features = [
    "Industry-certified security experts",
    "Cutting-edge testing methodologies",
    "Comprehensive reporting and remediation",
    "24/7 support and monitoring"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Home"
        description="CyberNexora is the leading cybersecurity company in Surat, Gujarat. We provide comprehensive cyber defense solutions, VAPT services, penetration testing, SOC monitoring, and security consulting. Protect your business with India's best cyber security experts."
        keywords="Cyber Company in Gujarat, Cybersecurity in Surat, Best Cyber Company in India"
        canonical="https://www.cybernexora.com/"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Cybersecurity background with network security visualization" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        </div>

        {/* Cyber Security Illustration - Improved spacing */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <img 
            src={heroCyberSecurity} 
            alt="Advanced cybersecurity protection and digital defense illustration" 
            className="max-w-xl md:max-w-2xl lg:max-w-3xl w-full opacity-30 object-contain scale-110"
          />
        </div>

        {/* Floating animated icons */}
        <HeroFloatingIcons />

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-gradient glow-text">CyberNexora</span>
                <br />Build. Secure. Scale.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            >
              Protect your digital assets with comprehensive vulnerability assessment, penetration testing, and advanced security services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            >
              <Button 
                size="lg" 
                onClick={() => setIsBookDemoOpen(true)}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 shadow-[0_0_30px_rgba(51,204,255,0.4)] hover:shadow-[0_0_40px_rgba(51,204,255,0.6)] transition-all"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Book a Demo
              </Button>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 border-primary/50 hover:bg-primary/10">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 justify-center px-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:flex"
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Cybersecurity Workflow Section */}
      <AnimatedSection>
        <CyberSecurityWorkflow />
      </AnimatedSection>

      {/* Live Threat Intelligence - Attack/Defense Animation */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Live Threat Intelligence</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
                Watch CyberNexora defend against real-time cyber attacks worldwide
              </p>
            </div>
            <AttackDefenseAnimation />
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-1 sm:mb-2">{stat.value}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Overview Section */}
      <ServicesOverview />

      {/* Red Teaming Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-lg overflow-hidden shadow-[0_0_50px_rgba(51,204,255,0.3)]">
                  <img 
                    src={redTeamAdvanced} 
                    alt="Advanced Red Teaming and Real-World Attack Simulations" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Advanced <span className="text-gradient">Red Teaming</span> & Real-World Attack Simulations
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  We conduct sophisticated, real-world cyber attack simulations that go beyond traditional testing. Our Red Team engagements blend Black Box and Assumed Breach techniques to uncover critical security gaps across your people, processes, and technology—before real attackers do. Our approach evaluates your resilience against advanced threats, exposing blind spots through stealthy, scenario-based penetration tests that validate your detection and response capabilities. Get actionable recommendations, executive summaries, and a strategic security roadmap tailored to your business risk priorities.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="mt-6 sm:mt-8 w-full sm:w-auto bg-primary hover:bg-primary/90">
                    Request Red Team Assessment <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <Card className="p-6 sm:p-8 md:p-10 lg:p-12 text-center bg-gradient-to-br from-card to-card/50 border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Ready to Secure Your Digital Assets?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Get in touch with our security experts today for a comprehensive assessment of your cybersecurity posture.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 shadow-[0_0_30px_rgba(51,204,255,0.4)]">
                      Contact Us <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </Link>
                  <Link to="/case-studies" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 border-primary/50 hover:bg-primary/10">
                      View Case Studies
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </AnimatedSection>

      {/* Book Demo Dialog */}
      <BookDemoDialog isOpen={isBookDemoOpen} onClose={() => setIsBookDemoOpen(false)} />
    </div>
  );
};

export default Home;
