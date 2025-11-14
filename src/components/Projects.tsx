import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Train, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "MindTrack",
    description: "AI-based wellness journaling app with REST API integration and advanced data visualization. Built with Flask, React, and PostgreSQL to help users track mental health patterns.",
    icon: Brain,
    tags: ["Flask", "React.js", "PostgreSQL", "REST API", "Visualization"],
    color: "primary"
  },
  {
    title: "TrainVision",
    description: "AI-based railway scheduling system using advanced heuristics for optimization and delay analysis. Led team to develop intelligent solution for efficient train management.",
    icon: Train,
    tags: ["Flask", "React.js", "AI/ML", "Optimization", "Scheduling"],
    color: "secondary"
  },
  {
    title: "Multi-System Data Sync Gateway",
    description: "Enterprise-grade data synchronization solution integrating multiple APIs, databases, and file systems with JWT authentication, role-based access control, and real-time updates.",
    icon: Database,
    tags: ["APIs", "JWT", "Real-time", "PostgreSQL", "Integration"],
    color: "accent"
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Innovative solutions built with cutting-edge technologies
          </motion.p>
          
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <Card 
                  className="backdrop-blur-xl bg-card/50 border-border hover:shadow-glow transition-all duration-500 overflow-hidden group cursor-pointer"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <motion.div 
                        className={`p-4 rounded-2xl bg-${project.color}/10 border border-${project.color}/20 shrink-0`}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, 180, 360],
                          transition: { duration: 0.6 }
                        }}
                      >
                        <project.icon className={`w-8 h-8 text-${project.color}`} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          className="text-2xl font-bold text-foreground mb-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p 
                          className="text-foreground leading-relaxed mb-4"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        >
                          {project.description}
                        </motion.p>
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                        >
                          {project.tags.map((tag, tagIndex) => (
                            <motion.div
                              key={tagIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ 
                                duration: 0.3, 
                                delay: index * 0.2 + 0.5 + tagIndex * 0.05 
                              }}
                              whileHover={{ 
                                scale: 1.15,
                                rotate: [0, -10, 10, 0],
                                transition: { duration: 0.3 }
                              }}
                            >
                              <Badge 
                                variant="secondary"
                                className={`bg-${project.color}/10 border border-${project.color}/30 text-foreground hover:bg-${project.color}/20 transition-colors cursor-pointer`}
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
