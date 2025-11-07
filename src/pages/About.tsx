import { Shield, Target, Users, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import whoWeAre3d from "@/assets/who-we-are-3d.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of our clients above all else, implementing industry-leading practices."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering exceptional results through continuous improvement and innovation."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Building lasting partnerships by understanding and exceeding client expectations."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical standards in all our engagements."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="About Us"
        description="Learn about CyberNexora, Gujarat's leading cybersecurity company. We are trusted cyber defense experts in Surat providing comprehensive security solutions to businesses across India."
        keywords="About CyberNexora, Cybersecurity Company Gujarat, Security Experts Surat"
        canonical="https://www.cybernexora.com/about"
      />
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About <span className="text-gradient">Cyber Nexora</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Leading the future of cybersecurity with innovative solutions and expert guidance to protect businesses from evolving digital threats.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <AnimatedSection animation="slide-in-left">
              <Card className="p-6 sm:p-8 h-full border-primary/30">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  To empower organizations with robust cybersecurity solutions that protect their digital assets, ensure business continuity, and build trust with their stakeholders. We strive to make enterprise-grade security accessible and effective for businesses of all sizes.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <Card className="p-6 sm:p-8 h-full border-secondary/30">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  To be the most trusted cybersecurity partner globally, recognized for our innovation, expertise, and unwavering commitment to protecting digital ecosystems. We envision a future where every organization operates securely in the digital realm.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center">Who We Are</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground order-2 lg:order-1">
                  <p>
                    Cyber Nexora is a cybersecurity company based in Surat, Gujarat, specializing in VAPT, security audits, and cyber defense solutions
                  </p>
                  <p>
                    Our skilled professionals help businesses identify and fix vulnerabilities, ensuring strong digital protection through reliable and modern security practices.
                  </p>
                  <p>
                    We deliver reliable cybersecurity solutions through expert-driven VAPT, audits, and defense strategies to help businesses stay secure and resilient.
                  </p>
                </div>
                <div className="relative order-1 lg:order-2">
                  <img 
                    src={whoWeAre3d} 
                    alt="Cyber Nexora cybersecurity team and digital protection" 
                    className="rounded-lg shadow-[0_0_30px_rgba(51,204,255,0.2)] sm:shadow-[0_0_50px_rgba(51,204,255,0.3)] w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              The principles that guide our work and define our commitment to excellence
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-5 sm:p-6 text-center h-full hover:shadow-[0_0_30px_rgba(51,204,255,0.2)] transition-all duration-300 border-border hover:border-primary/50">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  { title: "Certified Professionals", desc: "OSCP, CEH, CISSP certified security experts" },
                  { title: "Industry Standards", desc: "Compliance with ISO 27001, OWASP, NIST frameworks" },
                  { title: "Advanced Tools", desc: "Latest security testing tools and methodologies" },
                  { title: "Proven Methodology", desc: "Systematic approach to vulnerability identification" },
                  { title: "Comprehensive Reporting", desc: "Detailed findings with remediation guidance" },
                  { title: "Continuous Support", desc: "Ongoing assistance and security monitoring" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default About;
