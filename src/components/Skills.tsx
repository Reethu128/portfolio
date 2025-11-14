import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C++", "TypeScript", "SQL"],
    color: "primary"
  },
  {
    title: "Frameworks",
    icon: Zap,
    skills: ["Flask", "React.js", "Tailwind CSS"],
    color: "secondary"
  },
  {
    title: "Web & APIs",
    icon: Globe,
    skills: ["REST", "SOAP", "JWT"],
    color: "accent"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "SQLite"],
    color: "primary"
  }
];

const additionalSkills = [
  "Dashboards & Visualization",
  "Greedy Heuristics",
  "Scheduling & Optimization",
  "Adobe Photoshop",
  "Canva",
  "MS Office",
  "Team Leadership"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="backdrop-blur-xl bg-card/50 border border-border rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`p-3 rounded-xl bg-${category.color}/10 border border-${category.color}/20`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Badge 
                        variant="secondary"
                        className={`px-4 py-2 text-sm font-medium bg-${category.color}/10 border border-${category.color}/30 text-foreground hover:bg-${category.color}/20 transition-colors cursor-pointer`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div 
            className="backdrop-blur-xl bg-card/50 border border-border rounded-2xl p-8 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Additional Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Badge 
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium border-primary/30 text-foreground hover:bg-primary/10 transition-colors cursor-pointer"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            className="backdrop-blur-xl bg-card/50 border border-border rounded-2xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { lang: "Telugu", level: "Proficient (C2)", color: "primary" },
                { lang: "English", level: "Advanced (C1)", color: "secondary" },
                { lang: "Hindi", level: "Intermediate (B1)", color: "accent" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`text-center p-4 rounded-xl bg-${item.color}/10 border border-${item.color}/20 cursor-pointer`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, 2, -2, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <p className={`text-xl font-bold text-${item.color} mb-1`}>{item.lang}</p>
                  <p className="text-sm text-muted-foreground">{item.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
