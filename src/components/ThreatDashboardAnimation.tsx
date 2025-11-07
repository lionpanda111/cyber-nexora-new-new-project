import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ThreatDashboardAnimation = () => {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [counters, setCounters] = useState({
    detected: 0,
    blocked: 0,
    open: 0,
    mitigated: 0
  });

  const [threats, setThreats] = useState([
    { type: "Phishing attempt", status: "Blocked", time: "2m ago", color: "text-destructive" },
    { type: "Vulnerability scan", status: "Mitigated", time: "5m ago", color: "text-primary" },
    { type: "Suspicious login", status: "Under review", time: "8m ago", color: "text-yellow-500" }
  ]);

  // Animate counters on mount
  useEffect(() => {
    if (shouldReduceMotion) {
      setCounters({ detected: 1248, blocked: 1021, open: 7, mitigated: 1014 });
      return;
    }

    const targetValues = { detected: 1248, blocked: 1021, open: 7, mitigated: 1014 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        detected: Math.floor(targetValues.detected * progress),
        blocked: Math.floor(targetValues.blocked * progress),
        open: Math.floor(targetValues.open * progress),
        mitigated: Math.floor(targetValues.mitigated * progress)
      });

      if (currentStep >= steps) clearInterval(interval);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  // Update counters periodically
  useEffect(() => {
    if (shouldReduceMotion) return;

    const updateInterval = setInterval(() => {
      setCounters(prev => ({
        detected: prev.detected + Math.floor(Math.random() * 3),
        blocked: prev.blocked + Math.floor(Math.random() * 2),
        open: Math.max(1, prev.open + (Math.random() > 0.7 ? 1 : -1)),
        mitigated: prev.mitigated + Math.floor(Math.random() * 2)
      }));
    }, 10000);

    return () => clearInterval(updateInterval);
  }, [shouldReduceMotion]);

  // Network map animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || shouldReduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.3;

    const threats: Array<{ angle: number; distance: number; active: boolean; progress: number }> = [];
    for (let i = 0; i < 6; i++) {
      threats.push({
        angle: (i * Math.PI * 2) / 6,
        distance: radius + 40,
        active: false,
        progress: 0
      });
    }

    const shields: Array<{ x: number; y: number; opacity: number; size: number }> = [];

    let rotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw globe
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, "rgba(51, 204, 255, 0.2)");
      gradient.addColorStop(1, "rgba(51, 204, 255, 0.05)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = "rgba(51, 204, 255, 0.4)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Grid lines
      ctx.strokeStyle = "rgba(51, 204, 255, 0.2)";
      ctx.lineWidth = 1;
      for (let i = -2; i <= 2; i++) {
        const y = centerY + (i * radius) / 3;
        const width = Math.sqrt(radius * radius - ((i * radius) / 3) ** 2) * 2;
        ctx.beginPath();
        ctx.ellipse(centerX, y, width / 2, width / 8, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Update threats
      threats.forEach((threat, index) => {
        const angleWithRotation = threat.angle + rotation * 0.3;
        const x = centerX + Math.cos(angleWithRotation) * threat.distance;
        const y = centerY + Math.sin(angleWithRotation) * threat.distance;

        if (!threat.active && Math.random() < 0.008) {
          threat.active = true;
          threat.progress = 0;
        }

        if (threat.active) {
          // Threat pulse
          ctx.fillStyle = `rgba(239, 68, 68, ${0.8 - threat.progress * 0.5})`;
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();

          // Attack line
          const targetX = centerX + Math.cos(angleWithRotation) * (radius + threat.progress * (threat.distance - radius));
          const targetY = centerY + Math.sin(angleWithRotation) * (radius + threat.progress * (threat.distance - radius));
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(targetX, targetY);
          ctx.strokeStyle = `rgba(239, 68, 68, ${0.6 - threat.progress * 0.6})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          threat.progress += 0.015;

          if (threat.progress >= 0.95) {
            shields.push({
              x: centerX + Math.cos(angleWithRotation) * radius,
              y: centerY + Math.sin(angleWithRotation) * radius,
              opacity: 1,
              size: 15
            });
            threat.active = false;
          }
        }
      });

      // Draw shields
      shields.forEach((shield, index) => {
        if (shield.opacity > 0) {
          ctx.fillStyle = `rgba(34, 197, 94, ${shield.opacity})`;
          ctx.strokeStyle = `rgba(34, 197, 94, ${shield.opacity * 0.8})`;
          ctx.lineWidth = 2;
          
          ctx.beginPath();
          ctx.moveTo(shield.x, shield.y - shield.size);
          ctx.lineTo(shield.x + shield.size, shield.y);
          ctx.lineTo(shield.x, shield.y + shield.size * 1.2);
          ctx.lineTo(shield.x - shield.size, shield.y);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          shield.size += 0.3;
          shield.opacity -= 0.015;

          if (shield.opacity <= 0) shields.splice(index, 1);
        }
      });

      rotation += 0.003;
      requestAnimationFrame(animate);
    };

    animate();
  }, [shouldReduceMotion]);

  const counterCards = [
    { label: "Threats Detected", value: counters.detected, color: "text-destructive" },
    { label: "Threats Blocked", value: counters.blocked, color: "text-primary" },
    { label: "Incidents Open", value: counters.open, color: "text-yellow-500" },
    { label: "Mitigations Completed", value: counters.mitigated, color: "text-green-500" }
  ];

  return (
    <div className="w-full bg-card/30 rounded-lg p-6 border border-border">
      {/* Counters */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {counterCards.map((counter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-background/50 rounded-lg p-4 border border-border"
          >
            <div className={`text-3xl font-bold mb-1 ${counter.color}`}>
              {counter.value.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">{counter.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Network Map and Threats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Network Map */}
        <div className="lg:col-span-2 bg-background/50 rounded-lg p-4 border border-border">
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">NETWORK MAP</h3>
          <canvas
            ref={canvasRef}
            className="w-full h-64"
            style={{ background: "transparent" }}
          />
        </div>

        {/* Latest Threats */}
        <div className="bg-background/50 rounded-lg p-4 border border-border">
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">LATEST EVENTS</h3>
          <div className="space-y-3">
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-background rounded-lg p-3 border border-border"
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-medium">{threat.type}</span>
                  <span className="text-xs text-muted-foreground">{threat.time}</span>
                </div>
                <div className={`text-xs font-semibold ${threat.color}`}>
                  {threat.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatDashboardAnimation;
