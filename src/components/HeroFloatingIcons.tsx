import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Code2, Network, Lock, Database, ShieldCheck } from "lucide-react";

const HeroFloatingIcons = () => {
  const shouldReduceMotion = useReducedMotion();

  const icons = [
    // Left side icons - cybersecurity focused
    { 
      Icon: Lock, 
      x: "15%", 
      y: "25%",
      delay: 0,
      description: "Security Lock"
    },
    { 
      Icon: Database, 
      x: "20%", 
      y: "55%",
      delay: 0.3,
      description: "Data Protection"
    },
    { 
      Icon: ShieldCheck, 
      x: "10%", 
      y: "40%",
      delay: 0.6,
      description: "Firewall"
    },
    // Right side icons - original
    { 
      Icon: Shield, 
      x: "75%", 
      y: "25%",
      delay: 0.2,
      description: "Security"
    },
    { 
      Icon: Code2, 
      x: "80%", 
      y: "55%",
      delay: 0.5,
      description: "Development"
    },
    { 
      Icon: Network, 
      x: "85%", 
      y: "40%",
      delay: 0.8,
      description: "Intelligence"
    }
  ];

  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {icons.map((item, index) => (
          <div
            key={index}
            className="absolute"
            style={{ left: item.x, top: item.y }}
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
              <item.Icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.05, 1],
            y: [0, -8, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            {/* Glowing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-primary/20 blur-md"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
            />
            
            {/* Icon container */}
            <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center backdrop-blur-sm shadow-lg">
              <item.Icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
            </div>

            {/* Animated particles for Code2 icon */}
            {item.Icon === Code2 && (
              <div className="absolute top-8 left-8">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: [0, 4 + i * 2],
                      y: [0, -2]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: item.delay + i * 0.2
                    }}
                  />
                ))}
              </div>
            )}

            {/* Ping waves for Network icon */}
            {item.Icon === Network && (
              <>
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-xl border-2 border-primary"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.6, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: item.delay + i * 1
                    }}
                  />
                ))}
              </>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroFloatingIcons;
