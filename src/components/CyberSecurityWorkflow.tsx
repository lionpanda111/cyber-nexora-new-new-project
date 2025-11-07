import { motion } from "framer-motion";
import { Shield, Search, AlertTriangle, Lock, CheckCircle, RefreshCw, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

const CyberSecurityWorkflow = () => {
  const stages = [
    {
      icon: Search,
      title: "Discovery",
      description: "Comprehensive security analysis of your infrastructure",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: AlertTriangle,
      title: "Detection",
      description: "Identify vulnerabilities and potential attack vectors",
      color: "from-cyan-500 to-teal-500",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Defense",
      description: "Deploy robust security measures and controls",
      color: "from-teal-500 to-green-500",
      delay: 0.2
    },
    {
      icon: Lock,
      title: "Secure",
      description: "Strengthen defenses and eliminate weaknesses",
      color: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: CheckCircle,
      title: "Validation",
      description: "Verify security effectiveness through rigorous testing",
      color: "from-emerald-500 to-violet-500",
      delay: 0.4
    },
    {
      icon: RefreshCw,
      title: "Monitoring",
      description: "24/7 surveillance and proactive threat response",
      color: "from-violet-500 to-blue-500",
      delay: 0.5
    }
  ];

  return (
    <div className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="text-gradient">Protection Cycle</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A comprehensive, continuous approach to securing your digital ecosystem through six critical stages
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced 3D Cyber Shield Animation */}
          <div className="relative flex items-center justify-center mb-20">
            <motion.div
              className="relative w-72 h-72 sm:w-96 sm:h-96"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Outermost rotating network ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-primary/20 rounded-full"
                style={{
                  boxShadow: "0 0 30px rgba(51, 204, 255, 0.3), inset 0 0 30px rgba(51, 204, 255, 0.1)",
                }}
              >
                {/* Network nodes */}
                {[0, 90, 180, 270].map((angle) => (
                  <motion.div
                    key={angle}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: angle / 360 }}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translateX(140px) translateY(-50%)`,
                      boxShadow: "0 0 10px rgba(51, 204, 255, 0.8)",
                    }}
                  />
                ))}
              </motion.div>

              {/* Second layer - Cyber grid */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 border-2 border-cyan-400/30 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)",
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.2)",
                }}
              />

              {/* Middle rotating shield layer */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity },
                }}
                className="absolute inset-12 border-4 border-primary/40 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, rgba(51, 204, 255, 0.1), transparent, rgba(51, 204, 255, 0.1))",
                  boxShadow: "0 0 40px rgba(51, 204, 255, 0.4), inset 0 0 20px rgba(51, 204, 255, 0.2)",
                }}
              />

              {/* Inner defense ring */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-16 border-4 border-blue-400/60 rounded-full"
                style={{
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.3)",
                }}
              />

              {/* Center shield with enhanced glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotateY: [0, 10, 0, -10, 0],
                    filter: [
                      "drop-shadow(0 0 30px rgba(51, 204, 255, 0.6))",
                      "drop-shadow(0 0 50px rgba(51, 204, 255, 1))",
                      "drop-shadow(0 0 30px rgba(51, 204, 255, 0.6))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Shield className="w-28 h-28 sm:w-40 sm:h-40 text-primary" />
                </motion.div>
              </div>

              {/* Digital data streams */}
              {[0, 120, 240].map((angle, index) => (
                <motion.div
                  key={angle}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15 - index * 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <motion.div
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translateX(130px) translateY(-50%)`,
                      background: "radial-gradient(circle, rgba(51, 204, 255, 1), rgba(51, 204, 255, 0))",
                      boxShadow: "0 0 15px rgba(51, 204, 255, 1)",
                    }}
                  />
                </motion.div>
              ))}

              {/* Scanning beam effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, rgba(51, 204, 255, 0.3) 10%, transparent 20%)",
                }}
              />

              {/* Ambient glow */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-cyan-500/10 to-transparent blur-3xl animate-pulse" />
              
              {/* Grid pattern overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(51, 204, 255, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(51, 204, 255, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                  maskImage: "radial-gradient(circle, black 40%, transparent 70%)",
                }}
              />
            </motion.div>
          </div>

          {/* Workflow stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: stage.delay }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Card className="group relative p-6 h-full border-border/50 hover:border-primary/60 transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-shadow`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <stage.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                          {stage.title}
                        </h3>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: stage.delay + 0.3 }}
                        >
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    {/* Step number */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Each stage seamlessly flows into the next, creating an unbreakable cycle of protection that adapts to emerging threats in real-time.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityWorkflow;
