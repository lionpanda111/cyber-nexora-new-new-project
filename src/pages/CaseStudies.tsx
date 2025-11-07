import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { ArrowRight, Building2, ShieldCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Platform Security Overhaul",
      industry: "E-Commerce",
      challenge: "A leading e-commerce platform experienced multiple security incidents affecting customer trust and exposing sensitive payment data. They needed comprehensive security testing and remediation.",
      approach: "Conducted thorough web application VAPT, identified 47 vulnerabilities including critical SQL injection and XSS flaws. Implemented secure coding practices and deployed WAF solutions.",
      solution: "Remediated all critical and high-severity vulnerabilities within 30 days. Implemented continuous security monitoring and established secure SDLC processes.",
      results: [
        "100% resolution of critical vulnerabilities",
        "Zero security incidents in 12 months post-remediation",
        "35% improvement in security posture score",
        "PCI-DSS compliance achieved"
      ],
      icon: Building2
    },
    {
      title: "Financial Services Infrastructure Audit",
      industry: "Banking & Finance",
      challenge: "A regional bank needed to meet regulatory compliance requirements and strengthen their network security infrastructure against sophisticated threats.",
      approach: "Performed comprehensive network security audit, penetration testing of internal and external networks, and assessed security controls against industry standards.",
      solution: "Identified and addressed 62 security gaps, implemented network segmentation, deployed advanced threat detection systems, and established SOC capabilities.",
      results: [
        "Achieved regulatory compliance certification",
        "45% reduction in security incidents",
        "Enhanced threat detection capabilities",
        "Improved incident response time by 60%"
      ],
      icon: ShieldCheck
    },
    {
      title: "Healthcare Mobile App Security Enhancement",
      industry: "Healthcare",
      challenge: "A healthcare provider's mobile application handling patient data needed comprehensive security testing to ensure HIPAA compliance and protect sensitive health information.",
      approach: "Conducted mobile application VAPT for both iOS and Android platforms, including static and dynamic analysis, API security testing, and data protection assessment.",
      solution: "Identified 23 security vulnerabilities including insecure data storage and weak authentication. Implemented encryption, secure authentication, and data protection mechanisms.",
      results: [
        "HIPAA compliance achieved",
        "100% of vulnerabilities remediated",
        "Enhanced user authentication security",
        "Improved app security rating to 4.8/5"
      ],
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Case Studies"
        description="Explore CyberNexora's successful cybersecurity case studies. See how we've helped businesses across India strengthen their security posture and protect against cyber threats."
        keywords="Cybersecurity Case Studies, Security Success Stories, VAPT Results"
        canonical="https://www.cybernexora.com/case-studies"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-world success stories demonstrating our expertise in securing digital assets and protecting businesses from cyber threats
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-8 lg:p-12 hover:shadow-[0_0_30px_rgba(51,204,255,0.2)] transition-all border-border hover:border-primary/50">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <study.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {study.industry}
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary">Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary">Approach</h3>
                        <p className="text-muted-foreground">{study.approach}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary">Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">Results</h3>
                      <div className="space-y-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-muted-foreground">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <Card className="p-12 text-center bg-gradient-to-br from-card to-card/50 border-primary/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who trust us to protect their digital assets. Let's discuss how we can help you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 shadow-[0_0_30px_rgba(51,204,255,0.4)]">
                      Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/services/web-vapt">
                    <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                      View Services
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

export default CaseStudies;
