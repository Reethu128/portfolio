import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypingAnimation } from "./TypingAnimation";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  },
};

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background that follows mouse */}
      <motion.div 
        className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-gradient-secondary opacity-20 blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(200_98%_55%_/_0.1),transparent_50%)]" />
      
      <motion.div className="container mx-auto px-4 z-10" style={{ y, opacity }}>
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <div className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              REETHU PRIYA M
            </motion.h1>
            <motion.div variants={itemVariants}>
              <p className="text-2xl md:text-3xl text-primary font-semibold mb-2">
                <TypingAnimation 
                  texts={[
                    "Full Stack Developer",
                    "AI Enthusiast",
                    "Problem Solver",
                    "Tech Innovator"
                  ]}
                  className="text-primary"
                />
              </p>
            </motion.div>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Software developer with expertise in full-stack development, AI-driven applications, 
              and multi-system integration. Building innovative solutions with React, Flask, and modern technologies.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center pt-6"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground font-semibold px-8 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Get In Touch
                </motion.span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-foreground hover:bg-primary/10 font-semibold px-8 hover:border-secondary transition-all"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 justify-center pt-8"
            variants={itemVariants}
          >
            {[
              { href: "https://github.com/Reethu128", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/reethu-priya-m-684a6a291", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:reethupriya537@gmail.com", icon: Mail, label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                className="p-4 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:shadow-glow cursor-pointer relative overflow-hidden group"
                aria-label={social.label}
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.3,
                  rotate: 360,
                  transition: { duration: 0.5, type: "spring" }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <social.icon className="w-6 h-6 text-foreground relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
