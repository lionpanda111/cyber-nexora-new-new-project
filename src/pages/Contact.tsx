import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import ThreatDashboardAnimation from "@/components/ThreatDashboardAnimation";
import SEO from "@/components/SEO";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional().or(z.literal("")),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      // Here you would typically send the form data to your backend
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive"
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@cybernexora.com",
      link: "mailto:info@cybernexora.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9724264420",
      link: "tel:+919724264420"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Surat, Gujarat",
      link: null
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Contact Us"
        description="Get in touch with CyberNexora, the leading cybersecurity company in Surat, Gujarat. Contact us for expert cyber defense solutions, VAPT services, and security consulting."
        keywords="Contact CyberNexora, Cybersecurity Company Surat, Security Consulting Gujarat"
        canonical="https://www.cybernexora.com/contact"
      />
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Have questions about our services? We're here to help. Contact us today for a consultation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Live Threat Dashboard */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Live <span className="text-gradient">Threat Defense</span> Dashboard
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Real-time monitoring and protection of your digital infrastructure
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-in">
            <ThreatDashboardAnimation />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-5 sm:p-6 text-center hover:shadow-[0_0_30px_rgba(51,204,255,0.2)] transition-all border-border hover:border-primary/50">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-muted-foreground">{info.content}</p>
                  )}
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slide-in-left">
              <Card className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-background border-border"
                    />
                    {errors.name && (
                      <p className="text-xs sm:text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-background border-border"
                    />
                    {errors.email && (
                      <p className="text-xs sm:text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="bg-background border-border"
                    />
                    {errors.phone && (
                      <p className="text-xs sm:text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="bg-background border-border"
                    />
                    {errors.company && (
                      <p className="text-xs sm:text-sm text-destructive mt-1">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your cybersecurity needs..."
                      rows={5}
                      className="bg-background border-border"
                    />
                    {errors.message && (
                      <p className="text-xs sm:text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(51,204,255,0.3)] text-sm sm:text-base"
                  >
                    Send Message <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </form>
              </Card>
            </AnimatedSection>

            {/* Additional Info */}
            <AnimatedSection animation="slide-in-right">
              <div className="space-y-6 sm:space-y-8">
                <Card className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {[
                      "Fast response time within 24 hours",
                      "Certified security professionals",
                      "Comprehensive security solutions",
                      "Proven track record of success",
                      "Competitive pricing",
                      "24/7 support availability"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Schedule a Consultation</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                    Not sure where to start? Book a free consultation with our security experts to discuss your needs.
                  </p>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base">
                    Book Now
                  </Button>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
