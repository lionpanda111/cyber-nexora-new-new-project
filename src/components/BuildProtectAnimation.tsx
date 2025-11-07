import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Shield, Lock, Network } from "lucide-react";

const BuildProtectAnimation = () => {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      fromShield: boolean;
    }> = [];

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? "rgba(51, 204, 255, 0.6)" : "rgba(139, 92, 246, 0.6)",
        fromShield: false
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.forEach((other, otherIndex) => {
          if (otherIndex <= index) return;
          
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(51, 204, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [shouldReduceMotion]);

  const codeBlocks = [
    { delay: 0, duration: 3, x: "10%", y: "20%" },
    { delay: 0.5, duration: 3.5, x: "15%", y: "60%" },
    { delay: 1, duration: 4, x: "5%", y: "40%" }
  ];

  const securityIcons = [
    { Icon: Shield, delay: 0.2, x: "85%", y: "30%" },
    { Icon: Lock, delay: 0.6, x: "90%", y: "60%" },
    { Icon: Network, delay: 1, x: "80%", y: "45%" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Canvas for particle connections */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: shouldReduceMotion ? 0 : 0.6 }}
      />

      {/* Code Blocks - Left side */}
      {!shouldReduceMotion && codeBlocks.map((block, index) => (
        <motion.div
          key={`code-${index}`}
          className="absolute"
          style={{ left: block.x, top: block.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            y: [0, -15, 0]
          }}
          transition={{
            duration: block.duration,
            repeat: Infinity,
            delay: block.delay,
            ease: "easeInOut"
          }}
        >
          <div className="w-24 h-16 bg-primary/20 border border-primary/40 rounded-lg p-2">
            <Code2 className="w-6 h-6 text-primary" />
            <div className="mt-1 space-y-1">
              <div className="h-1 bg-primary/40 rounded w-3/4"></div>
              <div className="h-1 bg-primary/40 rounded w-1/2"></div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Security Icons - Right side */}
      {!shouldReduceMotion && securityIcons.map((item, index) => (
        <motion.div
          key={`security-${index}`}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center">
            <item.Icon className="w-8 h-8 text-secondary" />
          </div>
        </motion.div>
      ))}

      {/* Center connection particles */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                left: Math.cos((i * Math.PI * 2) / 8) * 60,
                top: Math.sin((i * Math.PI * 2) / 8) * 60
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Static version for reduced motion */}
      {shouldReduceMotion && (
        <>
          <div className="absolute left-10 top-1/4 w-24 h-16 bg-primary/10 border border-primary/30 rounded-lg"></div>
          <div className="absolute right-10 top-1/3 w-16 h-16 rounded-full bg-secondary/10 border border-secondary/30"></div>
        </>
      )}
    </div>
  );
};

export default BuildProtectAnimation;
