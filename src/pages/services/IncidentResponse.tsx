import { AlertTriangle, CheckCircle2, ArrowRight, Zap, Shield, Activity, FileSearch } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import incidentImg from "@/assets/incident-response.jpg";

const IncidentResponse = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div>
                <div className="inline-flex items-center gap-2 bg-destructive/10 px-4 py-2 rounded-full mb-6">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span className="text-sm font-semibold text-destructive">Emergency Response</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Incident <span className="text-gradient">Response</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Rapid response and recovery services to minimize damage and restore normal operations after security incidents.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-destructive hover:bg-destructive/90 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                    Emergency Contact <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right">
              <img src={incidentImg} alt="Incident Response" className="rounded-2xl shadow-2xl" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Rapid Response", desc: "24/7 emergency incident handling" },
              { icon: FileSearch, title: "Forensic Analysis", desc: "Deep investigation and evidence collection" },
              { icon: Shield, title: "Containment", desc: "Stop threats from spreading" },
              { icon: Activity, title: "Recovery", desc: "Restore operations quickly" }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="p-6 text-center hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all">
                  <item.icon className="w-12 h-12 text-destructive mx-auto mb-4" />
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

export default IncidentResponse;
