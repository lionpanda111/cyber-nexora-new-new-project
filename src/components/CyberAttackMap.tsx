import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Attack {
  id: number;
  x: number;
  y: number;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
}

const CyberAttackMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [attacks, setAttacks] = useState<Attack[]>([]);
  const [stats, setStats] = useState({
    blocked: 0,
    detected: 0,
    monitored: 0,
  });

  // Major cities coordinates (approximate)
  const cities = [
    { name: "New York", x: 25, y: 35 },
    { name: "London", x: 50, y: 30 },
    { name: "Tokyo", x: 85, y: 35 },
    { name: "Sydney", x: 87, y: 75 },
    { name: "Mumbai", x: 65, y: 50 },
    { name: "São Paulo", x: 35, y: 70 },
    { name: "Moscow", x: 60, y: 25 },
    { name: "Dubai", x: 60, y: 45 },
    { name: "Singapore", x: 75, y: 55 },
    { name: "Los Angeles", x: 15, y: 38 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate random attack
    const generateAttack = () => {
      const source = cities[Math.floor(Math.random() * cities.length)];
      const target = cities[Math.floor(Math.random() * cities.length)];
      
      if (source === target) return;

      const newAttack: Attack = {
        id: Date.now() + Math.random(),
        x: 0,
        sourceX: (source.x / 100) * canvas.width,
        sourceY: (source.y / 100) * canvas.height,
        targetX: (target.x / 100) * canvas.width,
        targetY: (target.y / 100) * canvas.height,
        y: 0,
      };

      setAttacks((prev) => [...prev.slice(-20), newAttack]);
      setStats((prev) => ({
        blocked: prev.blocked + 1,
        detected: prev.detected + 1,
        monitored: prev.monitored + 1,
      }));
    };

    // Generate attacks periodically
    const attackInterval = setInterval(generateAttack, 2000);

    // Animation loop
    let animationFrame: number;
    let progress = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw world map dots
      cities.forEach((city) => {
        const x = (city.x / 100) * canvas.width;
        const y = (city.y / 100) * canvas.height;

        // City pulse
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(51, 204, 255, 0.8)";
        ctx.fill();

        // Pulse ring
        ctx.beginPath();
        ctx.arc(x, y, 4 + Math.sin(Date.now() / 500) * 3, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(51, 204, 255, 0.3)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw attack lines
      attacks.forEach((attack) => {
        progress += 0.02;
        const t = (Math.sin(Date.now() / 1000 + attack.id) + 1) / 2;
        
        const currentX = attack.sourceX + (attack.targetX - attack.sourceX) * t;
        const currentY = attack.sourceY + (attack.targetY - attack.sourceY) * t;

        // Draw attack line
        const gradient = ctx.createLinearGradient(
          attack.sourceX,
          attack.sourceY,
          currentX,
          currentY
        );
        gradient.addColorStop(0, "rgba(255, 0, 100, 0)");
        gradient.addColorStop(0.5, "rgba(255, 0, 100, 0.8)");
        gradient.addColorStop(1, "rgba(255, 0, 100, 0)");

        ctx.beginPath();
        ctx.moveTo(attack.sourceX, attack.sourceY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw moving dot
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 0, 100, 1)";
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 0, 100, 0.8)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      clearInterval(attackInterval);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [attacks]);

  return (
    <div className="relative w-full h-[600px] bg-card/50 rounded-2xl overflow-hidden border border-primary/20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(10,10,30,0.95) 100%)" }}
      />
      
      {/* Stats Overlay */}
      <div className="absolute top-6 left-6 space-y-3 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-background/80 backdrop-blur-sm border border-primary/30 rounded-lg p-4"
        >
          <div className="text-sm text-muted-foreground mb-1">Threats Blocked</div>
          <div className="text-3xl font-bold text-gradient">{stats.blocked.toLocaleString()}</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-background/80 backdrop-blur-sm border border-secondary/30 rounded-lg p-4"
        >
          <div className="text-sm text-muted-foreground mb-1">Attacks Detected</div>
          <div className="text-3xl font-bold text-secondary">{stats.detected.toLocaleString()}</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4"
        >
          <div className="text-sm text-muted-foreground mb-1">Systems Monitored</div>
          <div className="text-3xl font-bold text-foreground">{stats.monitored.toLocaleString()}</div>
        </motion.div>
      </div>

      {/* Title */}
      <div className="absolute top-6 right-6 z-10">
        <div className="bg-background/80 backdrop-blur-sm border border-primary/30 rounded-lg px-6 py-3">
          <div className="text-sm text-muted-foreground mb-1">Real-Time Threat Map</div>
          <div className="text-lg font-bold text-gradient">Global Cyber Defense</div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-8 z-10">
        <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow"></div>
          <span className="text-sm text-muted-foreground">Secure Nodes</span>
        </div>
        <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-destructive/30 rounded-lg px-4 py-2">
          <div className="w-3 h-3 rounded-full bg-destructive animate-pulse-glow"></div>
          <span className="text-sm text-muted-foreground">Active Threats</span>
        </div>
      </div>
    </div>
  );
};

export default CyberAttackMap;
