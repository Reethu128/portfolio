import { Users, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const activities = [
  {
    title: "Discipline Committee Co-Head",
    description: "Oversaw campus discipline management for 13,000+ students, ensuring smooth operations and maintaining institutional standards.",
    icon: Users,
    color: "primary"
  },
  {
    title: "Public Relations Member",
    description: "Built and maintained 2,000+ outreach contacts, facilitating effective communication and relationship management.",
    icon: Megaphone,
    color: "secondary"
  }
];

export const Activities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Leadership & Activities
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <motion.div 
                key={index}
                className="backdrop-blur-xl bg-card/50 border border-border rounded-2xl p-8 hover:shadow-glow transition-all duration-500 group"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className={`p-4 rounded-xl bg-${activity.color}/10 border border-${activity.color}/20 shrink-0`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <activity.icon className={`w-6 h-6 text-${activity.color}`} />
                  </motion.div>
                  
                  <div>
                    <motion.h3 
                      className="text-xl font-bold text-foreground mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    >
                      {activity.title}
                    </motion.h3>
                    <motion.p 
                      className="text-foreground leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      {activity.description}
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
