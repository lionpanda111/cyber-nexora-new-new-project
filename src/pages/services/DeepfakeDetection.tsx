import { Eye, Brain, Shield, AlertCircle, Zap, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import deepfakeDetectionImg from "@/assets/deepfake-detection.jpg";

const DeepfakeDetection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms to detect sophisticated deepfake manipulations"
    },
    {
      icon: Eye,
      title: "Multi-Modal Detection",
      description: "Analysis of video, audio, and image content for comprehensive authenticity verification"
    },
    {
      icon: Shield,
      title: "Real-time Verification",
      description: "Fast processing for immediate deepfake detection and authentication"
    },
    {
      icon: AlertCircle,
      title: "Threat Intelligence",
      description: "Continuous updates on emerging deepfake techniques and attack vectors"
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Detailed forensic reports with confidence scores and manipulation indicators"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  Deepfake Detection & <span className="text-gradient">Analysis</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                  Protect your organization from AI-generated misinformation and deepfake attacks with advanced detection and forensic analysis capabilities.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Request Detection Service
                  </Button>
                </Link>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-[0_0_50px_rgba(51,204,255,0.3)]">
                <img src={deepfakeDetectionImg} alt="Deepfake Detection" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Detection Capabilities</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                Cutting-edge technology to identify and analyze deepfake content
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="p-6 h-full hover:shadow-[0_0_30px_rgba(51,204,255,0.2)] transition-all duration-300 border-border hover:border-primary/50">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Use Cases Section */}
      <AnimatedSection delay={0.3}>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
                Protect Against Deepfake Threats
              </h2>
              <div className="space-y-4">
                {[
                  "Executive impersonation attempts in video calls and messages",
                  "Fraudulent identity verification in financial transactions",
                  "Manipulated media in legal proceedings and evidence",
                  "Brand reputation attacks using fake spokesperson videos",
                  "Social engineering attacks leveraging deepfake audio/video"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Technology Section */}
      <AnimatedSection delay={0.4}>
        <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Detection Technology</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We employ state-of-the-art techniques to identify even the most sophisticated deepfakes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 border-border">
                <h3 className="text-xl font-semibold mb-3">Facial Inconsistency Analysis</h3>
                <p className="text-muted-foreground">Detection of unnatural facial movements, blinking patterns, and micro-expressions</p>
              </Card>
              <Card className="p-6 bg-card/50 border-border">
                <h3 className="text-xl font-semibold mb-3">Audio-Visual Synchronization</h3>
                <p className="text-muted-foreground">Analysis of lip-sync accuracy and audio-visual temporal alignment</p>
              </Card>
              <Card className="p-6 bg-card/50 border-border">
                <h3 className="text-xl font-semibold mb-3">Artifact Detection</h3>
                <p className="text-muted-foreground">Identification of compression artifacts, blending inconsistencies, and manipulation traces</p>
              </Card>
              <Card className="p-6 bg-card/50 border-border">
                <h3 className="text-xl font-semibold mb-3">Behavioral Biometrics</h3>
                <p className="text-muted-foreground">Analysis of unique behavioral patterns and physiological characteristics</p>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-card to-card/50 border-primary/30">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Need Deepfake Detection Services?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us to learn how we can help protect your organization from deepfake threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/50">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default DeepfakeDetection;
