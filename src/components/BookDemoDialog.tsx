import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BookDemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  "Web Application VAPT",
  "Mobile Application VAPT",
  "Network Security Audit",
  "Endpoint Security & Ransomware Defense",
  "SOC & Threat Monitoring (Managed SOC/SIEM)",
  "Cyber Awareness Training & Phishing Simulation",
  "Incident Response",
  "Secure Development & Consulting",
  "Deepfake Detection & Analysis",
  "Other"
];

const BookDemoDialog = ({ isOpen, onClose }: BookDemoDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    remark: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/[^0-9]/g, ""))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Frontend-only submission - show success message
      setIsSubmitted(true);

      // Reset form after 3 seconds and close
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          mobile: "",
          email: "",
          service: "",
          remark: "",
        });
        onClose();
      }, 3000);
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      mobile: "",
      email: "",
      service: "",
      remark: "",
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-40"
          />

          {/* Centered dialog wrapper */}
          <motion.div
            key="dialog-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            {/* Dialog content box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-lg bg-card backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/20 mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking dialog
            >
              {isSubmitted ? (
                // Success Message
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                  <p className="text-muted-foreground text-lg">
                    Your booking has been received. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Book a Demo</h2>
                        <p className="text-sm text-muted-foreground">Schedule a consultation with our team</p>
                      </div>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-accent"
                      aria-label="Close dialog"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className={`bg-background/50 ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>

                    {/* Mobile */}
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-sm font-medium">
                        Mobile Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="mobile"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="Enter your mobile number"
                        className={`bg-background/50 ${errors.mobile ? "border-destructive" : ""}`}
                      />
                      {errors.mobile && <p className="text-xs text-destructive">{errors.mobile}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email ID <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email address"
                        className={`bg-background/50 ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">
                        Service Type <span className="text-destructive">*</span>
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger className={`bg-background/50 ${errors.service ? "border-destructive" : ""}`}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-card backdrop-blur-xl border-primary/20">
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-xs text-destructive">{errors.service}</p>}
                    </div>

                    {/* Remark */}
                    <div className="space-y-2">
                      <Label htmlFor="remark" className="text-sm font-medium">
                        Remark (Optional)
                      </Label>
                      <Textarea
                        id="remark"
                        value={formData.remark}
                        onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
                        placeholder="Any additional information..."
                        className="bg-background/50 min-h-[100px]"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(51,204,255,0.4)] hover:shadow-[0_0_30px_rgba(51,204,255,0.6)] transition-all"
                      size="lg"
                    >
                      Book Demo
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookDemoDialog;
