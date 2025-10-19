import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const AttackDefenseAnimation = () => {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // IP address tags state
  const [ipTags, setIpTags] = useState([
    { id: 1, ip: "192.168.1.45", x: 25, y: 20, opacity: 1 },
    { id: 2, ip: "10.0.0.128", x: 65, y: 35, opacity: 1 },
    { id: 3, ip: "172.16.0.94", x: 45, y: 65, opacity: 1 },
    { id: 4, ip: "192.168.0.201", x: 30, y: 75, opacity: 1 }
  ]);

  // Update IP addresses periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setIpTags(prev => prev.map(tag => ({
        ...tag,
        ip: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
        opacity: 1
      })));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Globe center
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const isMobile = canvas.width < 640;
    const globeRadius = Math.min(canvas.width, canvas.height) * (isMobile ? 0.12 : 0.15);
    const entityDistance = isMobile ? Math.min(canvas.width * 0.35, 180) : 260;

    let rotation = 0;

    // Attackers (left side) - responsive positioning
    const attackers = [
      { x: centerX - entityDistance, y: centerY - (isMobile ? 50 : 80), size: isMobile ? 12 : 15, color: "#ef4444" },
      { x: centerX - (entityDistance + 30), y: centerY, size: isMobile ? 12 : 15, color: "#f97316" },
      { x: centerX - (entityDistance - 20), y: centerY + (isMobile ? 50 : 70), size: isMobile ? 12 : 15, color: "#dc2626" }
    ];

    // Defenders (right side) - responsive positioning
    const defenders = [
      { x: centerX + entityDistance, y: centerY - (isMobile ? 50 : 80), size: isMobile ? 12 : 15, color: "#33ccff" },
      { x: centerX + (entityDistance + 30), y: centerY, size: isMobile ? 12 : 15, color: "#06b6d4" },
      { x: centerX + (entityDistance - 20), y: centerY + (isMobile ? 50 : 70), size: isMobile ? 12 : 15, color: "#0ea5e9" }
    ];

    // Attack particles
    const attackParticles: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      blocked: boolean;
    }> = [];

    // Defense shields
    const shields: Array<{
      angle: number;
      radius: number;
      active: boolean;
      opacity: number;
    }> = [];

    // Initialize shields
    for (let i = 0; i < 6; i++) {
      shields.push({
        angle: (i * Math.PI * 2) / 6,
        radius: globeRadius + 30,
        active: false,
        opacity: 0
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotation += 0.005;

      // Draw globe
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);

      // Globe body
      const globeGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, globeRadius);
      globeGradient.addColorStop(0, "rgba(51, 204, 255, 0.2)");
      globeGradient.addColorStop(1, "rgba(6, 182, 212, 0.1)");
      ctx.fillStyle = globeGradient;
      ctx.beginPath();
      ctx.arc(0, 0, globeRadius, 0, Math.PI * 2);
      ctx.fill();

      // Globe grid lines
      ctx.strokeStyle = "rgba(51, 204, 255, 0.3)";
      ctx.lineWidth = 1;

      // Latitude lines
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        const y = (i * globeRadius) / 3;
        const r = Math.sqrt(globeRadius * globeRadius - y * y);
        ctx.ellipse(0, y, r, r * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude lines
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.ellipse(0, 0, globeRadius * 0.3, globeRadius, (i * Math.PI) / 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();

      // Draw attackers (black hats)
      attackers.forEach((attacker) => {
        // Hat
        ctx.fillStyle = attacker.color;
        ctx.beginPath();
        ctx.arc(attacker.x, attacker.y, attacker.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        const attackGlow = ctx.createRadialGradient(
          attacker.x, attacker.y, 0,
          attacker.x, attacker.y, attacker.size * 2
        );
        attackGlow.addColorStop(0, attacker.color + "80");
        attackGlow.addColorStop(1, attacker.color + "00");
        ctx.fillStyle = attackGlow;
        ctx.beginPath();
        ctx.arc(attacker.x, attacker.y, attacker.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw defenders (white hats)
      defenders.forEach((defender) => {
        // Shield shape
        ctx.fillStyle = defender.color;
        ctx.beginPath();
        ctx.arc(defender.x, defender.y, defender.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        const defenderGlow = ctx.createRadialGradient(
          defender.x, defender.y, 0,
          defender.x, defender.y, defender.size * 2
        );
        defenderGlow.addColorStop(0, defender.color + "80");
        defenderGlow.addColorStop(1, defender.color + "00");
        ctx.fillStyle = defenderGlow;
        ctx.beginPath();
        ctx.arc(defender.x, defender.y, defender.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Spawn attack particles randomly
      if (Math.random() < 0.03) {
        const attacker = attackers[Math.floor(Math.random() * attackers.length)];
        const angle = Math.random() * Math.PI * 2;
        const targetX = centerX + Math.cos(angle) * globeRadius;
        const targetY = centerY + Math.sin(angle) * globeRadius;
        
        attackParticles.push({
          x: attacker.x,
          y: attacker.y,
          targetX,
          targetY,
          progress: 0,
          blocked: false
        });
      }

      // Update and draw attack particles
      for (let i = attackParticles.length - 1; i >= 0; i--) {
        const particle = attackParticles[i];
        particle.progress += 0.015;

        if (particle.progress >= 1) {
          attackParticles.splice(i, 1);
          continue;
        }

        const x = particle.x + (particle.targetX - particle.x) * particle.progress;
        const y = particle.y + (particle.targetY - particle.y) * particle.progress;

        // Check if particle is near globe - activate shield
        const distToGlobe = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );

        if (distToGlobe < globeRadius + 30 && !particle.blocked) {
          particle.blocked = true;
          const angle = Math.atan2(y - centerY, x - centerX);
          const shieldIndex = Math.floor(((angle + Math.PI) / (Math.PI * 2)) * 6) % 6;
          shields[shieldIndex].active = true;
          shields[shieldIndex].opacity = 1;
        }

        // Draw particle
        ctx.fillStyle = particle.blocked ? "#06b6d4" : "#ef4444";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Draw line from attacker
        ctx.strokeStyle = particle.blocked ? "rgba(6, 182, 212, 0.3)" : "rgba(239, 68, 68, 0.3)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      // Draw and update shields
      shields.forEach((shield) => {
        if (shield.opacity > 0) {
          const x = centerX + Math.cos(shield.angle) * shield.radius;
          const y = centerY + Math.sin(shield.angle) * shield.radius;

          // Shield arc
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(shield.angle + Math.PI / 2);
          
          ctx.strokeStyle = `rgba(6, 182, 212, ${shield.opacity})`;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(0, 0, 20, -Math.PI / 3, Math.PI / 3);
          ctx.stroke();

          // Shield glow
          const shieldGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, 30);
          shieldGlow.addColorStop(0, `rgba(51, 204, 255, ${shield.opacity * 0.4})`);
          shieldGlow.addColorStop(1, "rgba(51, 204, 255, 0)");
          ctx.fillStyle = shieldGlow;
          ctx.beginPath();
          ctx.arc(0, 0, 30, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();

          shield.opacity -= 0.01;
          if (shield.opacity < 0) {
            shield.opacity = 0;
            shield.active = false;
          }
        }
      });

      // Draw defender protection beams
      defenders.forEach((defender, idx) => {
        if (Math.random() < 0.02) {
          const angle = Math.random() * Math.PI * 2;
          const targetX = centerX + Math.cos(angle) * (globeRadius + 25);
          const targetY = centerY + Math.sin(angle) * (globeRadius + 25);

          ctx.strokeStyle = "rgba(51, 204, 255, 0.15)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(defender.x, defender.y);
          ctx.lineTo(targetX, targetY);
          ctx.stroke();
        }
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

  if (shouldReduceMotion) {
    return (
      <div className="relative w-full h-[400px] sm:h-[500px] bg-card/30 rounded-2xl border border-border flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 border-2 border-primary/30 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-primary/20 border border-primary/50"></div>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground">Live Threat Intelligence Dashboard</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] bg-gradient-to-br from-card/50 to-background rounded-2xl border border-border overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      
      {/* IP Address Tags */}
      {ipTags.map((tag) => (
        <motion.div
          key={tag.id}
          className="absolute pointer-events-none hidden sm:block"
          style={{ left: `${tag.x}%`, top: `${tag.y}%` }}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ 
            opacity: [0, 1, 1, 0.7, 0],
            scale: [0.8, 1, 1, 0.95, 0.9],
            y: [10, 0, 0, -5, -15]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="bg-destructive/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-mono text-white border border-destructive/50 shadow-lg whitespace-nowrap">
            {tag.ip}
          </div>
        </motion.div>
      ))}
      
      {/* Legend */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-2 sm:p-3 space-y-1.5 sm:space-y-2">
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          <span className="text-muted-foreground">Attacks</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-500 rounded-full"></div>
          <span className="text-muted-foreground">Defense</span>
        </div>
      </div>
    </div>
  );
};

export default AttackDefenseAnimation;
