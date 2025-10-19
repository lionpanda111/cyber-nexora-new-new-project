import { motion } from "framer-motion";
import { Shield, Lock, Network, Eye, GraduationCap, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import AttackDefenseAnimation from "@/components/AttackDefenseAnimation";
import ProtectionAnimation from "@/components/ProtectionAnimation";
import HeroFloatingIcons from "@/components/HeroFloatingIcons";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-cyber-bg.jpg";
import heroCyberSecurity from "@/assets/hero-cyber-security.jpg";

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: "Web Application VAPT",
      description: "Comprehensive vulnerability assessment and penetration testing for web applications to identify and remediate security flaws.",
      path: "/services/web-vapt"
    },
    {
      icon: Lock,
      title: "Mobile Application VAPT",
      description: "In-depth security testing for iOS and Android applications, ensuring robust protection against mobile-specific threats.",
      path: "/services/mobile-vapt"
    },
    {
      icon: Network,
      title: "Network Security Audit",
      description: "Thorough examination of network infrastructure to detect vulnerabilities and strengthen defense mechanisms.",
      path: "/services/network-audit"
    },
    {
      icon: Eye,
      title: "SOC & Threat Monitoring",
      description: "24/7 security operations center services with real-time threat detection and incident response capabilities.",
      path: "/services/soc-monitoring"
    },
    {
      icon: GraduationCap,
      title: "Cyber Awareness Training",
      description: "Comprehensive training programs to educate employees about cybersecurity best practices and threat awareness.",
      path: "/services/training"
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response and recovery services to minimize damage and restore normal operations after security incidents.",
      path: "/services/incident-response"
    }
  ];

  const stats = [
    { label: "Enterprises Secured", value: "500+" },
    { label: "Vulnerabilities Fixed", value: "10,000+" },
    { label: "Security Audits", value: "1,200+" },
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        </div>

        {/* Cyber Security Illustration - Improved spacing */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <img 
            src={heroCyberSecurity} 
            alt="Cyber Security" 
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
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 shadow-[0_0_30px_rgba(51,204,255,0.4)] hover:shadow-[0_0_40px_rgba(51,204,255,0.6)] transition-all">
                  Get Started <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link to="/services/web-vapt" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 border-primary/50 hover:bg-primary/10">
                  Our Services
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

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive cybersecurity solutions tailored to protect your business from evolving threats
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} animation="scale-in">
                <Link to={service.path}>
                  <Card className="p-5 sm:p-6 h-full hover:shadow-[0_0_30px_rgba(51,204,255,0.2)] transition-all duration-300 group cursor-pointer border-border hover:border-primary/50">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{service.description}</p>
                    <div className="flex items-center text-sm sm:text-base text-primary font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 group-hover:ml-2 transition-all" />
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Protection Animation */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <ProtectionAnimation />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Why Choose <span className="text-gradient">Cyber Nexora</span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                  We combine cutting-edge technology with expert knowledge to deliver unparalleled cybersecurity solutions.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Certified security professionals with extensive industry experience",
                    "Advanced testing methodologies aligned with international standards",
                    "Comprehensive reports with actionable remediation guidance",
                    "24/7 support and continuous monitoring capabilities",
                    "Proven track record with 98% client satisfaction rate"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                      <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                <Link to="/about">
                  <Button size="lg" className="mt-6 sm:mt-8 w-full sm:w-auto bg-primary hover:bg-primary/90">
                    Learn More About Us <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
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
    </div>
  );
};

export default Home;
