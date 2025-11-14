import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Intern",
    company: "EDUBOT",
    location: "Vijayawada",
    description: "Developed AI-based projects using Flask, React, and PostgreSQL including MindTrack – a wellness journaling app with REST API and visualization capabilities.",
    color: "primary"
  },
  {
    title: "Project Lead",
    company: "STUDENT INDIAN HACKATHON",
    location: "India",
    description: "Led TrainVision – an AI-based railway scheduling system using Flask, React, and heuristics for optimization and delay analysis.",
    color: "secondary"
  },
  {
    title: "Project Assistant",
    company: "PROFESSOR RESEARCH",
    location: "Research",
    description: "Built Multi-System Data Synchronization Gateway integrating APIs, databases, and file systems with JWT, role-based access, and real-time updates.",
    color: "accent"
  }
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-accent opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          
          {/* Timeline line */}
          <motion.div 
            className="absolute left-8 top-32 bottom-8 w-0.5 bg-gradient-primary opacity-30"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformOrigin: "top" }}
          />
          
          <div className="space-y-8 relative">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="backdrop-blur-xl bg-card/50 border border-border rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group relative"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className={`absolute -left-[41px] top-10 w-4 h-4 rounded-full bg-${exp.color} border-4 border-background`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.5 }}
                />
                
                <div className="flex items-start gap-6">
                  <motion.div 
                    className={`p-4 rounded-xl bg-${exp.color}/10 border border-${exp.color}/20 shrink-0`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Briefcase className={`w-6 h-6 text-${exp.color}`} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3 
                      className="text-2xl font-bold text-foreground mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p 
                      className={`text-lg font-semibold text-${exp.color} mb-1`}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      {exp.company}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-muted-foreground mb-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    >
                      {exp.location}
                    </motion.p>
                    <motion.p 
                      className="text-foreground leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      {exp.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
