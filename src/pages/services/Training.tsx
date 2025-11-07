import { GraduationCap, CheckCircle2, ArrowRight, Users, BookOpen, Target, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import trainingImg from "@/assets/training-session.jpg";

const Training = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">Security Education</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Cyber Awareness <span className="text-gradient">Training</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Comprehensive training programs to educate employees about cybersecurity best practices and build a security-aware culture.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(51,204,255,0.3)]">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right">
              <img src={trainingImg} alt="Cyber Training" className="rounded-2xl shadow-2xl" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Phishing Awareness", desc: "Recognize and report phishing attempts" },
              { icon: BookOpen, title: "Security Best Practices", desc: "Learn essential security habits" },
              { icon: Target, title: "Compliance Training", desc: "Meet regulatory requirements" },
              { icon: Award, title: "Certification Programs", desc: "Industry-recognized certifications" }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="p-6 text-center hover:shadow-[0_0_30px_rgba(51,204,255,0.2)] transition-all">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
