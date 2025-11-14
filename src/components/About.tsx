import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Major Projects" },
  { value: "Full Stack", label: "Developer" },
  { value: "AI-Driven", label: "Applications" },
  { value: "10+", label: "Technologies" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="backdrop-blur-xl bg-card/50 border border-border rounded-3xl p-8 md:p-12 shadow-card hover:shadow-glow transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.p 
              className="text-lg text-foreground leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              As a passionate <span className="text-primary font-semibold">Full Stack Developer</span>, 
              I specialize in creating innovative, AI-driven applications that solve real-world problems. 
              My expertise spans across modern web technologies, backend systems, and intelligent solutions.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With hands-on experience in <span className="text-accent font-semibold">React.js</span>, 
              <span className="text-accent font-semibold"> Flask/FastAPI</span>, and 
              <span className="text-accent font-semibold"> PostgreSQL</span>, I've developed multiple 
              production-ready applications including wellness platforms, AI-based scheduling systems, 
              and complex data synchronization gateways.
            </motion.p>

            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm driven by the challenge of building scalable, efficient solutions and continuously 
              expanding my technical expertise. Whether it's implementing REST/SOAP APIs, optimizing 
              algorithms, or crafting beautiful user interfaces, I'm committed to delivering excellence.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-primary/10 border border-primary/20 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
