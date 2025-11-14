import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Explosion {
  id: number;
  x: number;
  y: number;
  particles: Array<{ angle: number; distance: number; size: number; color: string }>;
}

export const ClickExplosion = () => {
  const [explosions, setExplosions] = useState<Explosion[]>([]);

  useEffect(() => {
    let explosionId = 0;

    const handleClick = (e: MouseEvent) => {
      const colors = [
        "hsl(200 98% 55%)",  // primary
        "hsl(280 85% 65%)",  // secondary
        "hsl(160 85% 55%)",  // accent
      ];

      const particles = Array.from({ length: 20 }, () => ({
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * 100 + 50,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));

      const newExplosion: Explosion = {
        id: explosionId++,
        x: e.clientX,
        y: e.clientY,
        particles,
      };

      setExplosions(prev => [...prev, newExplosion]);

      setTimeout(() => {
        setExplosions(prev => prev.filter(exp => exp.id !== newExplosion.id));
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <AnimatePresence>
      {explosions.map((explosion) => (
        <div key={explosion.id} className="fixed inset-0 pointer-events-none z-[9997]">
          {explosion.particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                left: explosion.x,
                top: explosion.y,
              }}
              initial={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                x: Math.cos(particle.angle) * particle.distance,
                y: Math.sin(particle.angle) * particle.distance,
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      ))}
    </AnimatePresence>
  );
};
