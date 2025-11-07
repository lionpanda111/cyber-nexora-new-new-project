import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { DollarSign, Bug, Zap, Shield, CheckCircle2 } from "lucide-react";

const ProtectionAnimation = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeIssue, setActiveIssue] = useState(0);

  const issues = [
    {
      icon: DollarSign,
      title: "Financial Fraud",
      status: "danger",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30"
    },
    {
      icon: Bug,
      title: "Insecure Development",
      status: "warning",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      icon: Zap,
      title: "Live Cyberattack",
      status: "critical",
      color: "text-red-600",
      bgColor: "bg-red-600/10",
      borderColor: "border-red-600/30"
    }
  ];

  const [securedIssues, setSecuredIssues] = useState<number[]>([]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setSecuredIssues([0, 1, 2]);
      return;
    }

    const interval = setInterval(() => {
      setActiveIssue((prev) => {
        const next = (prev + 1) % issues.length;
        
        // Add to secured after showing
        setTimeout(() => {
          setSecuredIssues((secured) => 
            secured.includes(next) ? secured : [...secured, next]
          );
        }, 1500);
        
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="relative w-full h-full min-h-[350px] sm:min-h-[400px] flex flex-col items-center justify-center p-4 sm:p-8 bg-card/30 rounded-2xl border border-border">
        <div className="mb-6 sm:mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-2">CyberNexora Protection</h3>
          <p className="text-center text-sm sm:text-base text-muted-foreground">Defending against cyber threats</p>
        </div>

        <div className="space-y-2 sm:space-y-3 w-full max-w-md">
          {issues.map((issue, idx) => (
            <div key={idx} className={`p-3 sm:p-4 rounded-lg border ${issue.borderColor} ${issue.bgColor}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <issue.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${issue.color}`} />
                  <span className="text-sm sm:text-base font-medium">{issue.title}</span>
                </div>
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Central Shield - CyberNexora Guardian */}
      <motion.div
        className="relative mb-8 sm:mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Protective waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-primary"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{
              scale: [1, 2, 2.5],
              opacity: [0.6, 0.3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Shield */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_rgba(51,204,255,0.4)]">
          <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
        </div>

        {/* CyberNexora label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs sm:text-sm font-semibold text-primary"
        >
          CyberNexora
        </motion.div>
      </motion.div>

      {/* Active Incidents Dashboard */}
      <div className="w-full max-w-md space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold text-center mb-3 sm:mb-4">Active Incidents</h3>
        
        <AnimatePresence mode="wait">
          {issues.map((issue, idx) => {
            const isActive = idx === activeIssue;
            const isProtected = securedIssues.includes(idx);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: isActive ? 1.02 : 1
                }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-3 sm:p-4 rounded-lg border ${issue.borderColor} ${issue.bgColor} transition-all duration-300`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <motion.div
                      animate={isActive && !isProtected ? {
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}}
                      transition={{ duration: 0.5, repeat: isActive && !isProtected ? Infinity : 0 }}
                    >
                      <issue.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${issue.color}`} />
                    </motion.div>
                    <span className="text-sm sm:text-base font-medium">{issue.title}</span>
                  </div>

                  <AnimatePresence>
                    {isProtected ? (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0 }}
                        transition={{ type: "spring", duration: 0.6 }}
                      >
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                      </motion.div>
                    ) : isActive ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-1"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-xs text-muted-foreground hidden sm:inline">Detecting...</span>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                {/* Protection beam effect */}
                {isActive && !isProtected && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Status text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-muted-foreground px-4"
      >
        CyberNexora actively protects organizations from cyber threats
      </motion.p>
    </div>
  );
};

export default ProtectionAnimation;
