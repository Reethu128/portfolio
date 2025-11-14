import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-accent opacity-10 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
          
          <motion.div 
            className="backdrop-blur-xl bg-card/50 border border-border rounded-3xl p-8 md:p-12 shadow-card hover:shadow-glow transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Contact Info */}
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <motion.a 
                  href="mailto:reethupriya537@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group cursor-pointer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div 
                    className="p-2 rounded-lg bg-primary/20"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      reethupriya537@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a 
                  href="tel:+917013226320"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all group cursor-pointer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.div 
                    className="p-2 rounded-lg bg-secondary/20"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Phone className="w-5 h-5 text-secondary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium group-hover:text-secondary transition-colors">
                      +91 7013226320
                    </p>
                  </div>
                </motion.a>

                <motion.div 
                  className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-2 rounded-lg bg-accent/20">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">
                      Visakhapatnam, India 530017
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
                
                <motion.a 
                  href="https://github.com/Reethu128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group cursor-pointer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <motion.div 
                    className="p-2 rounded-lg bg-primary/20"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      github.com/Reethu128
                    </p>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://www.linkedin.com/in/reethu-priya-m-684a6a291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all group cursor-pointer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <motion.div 
                    className="p-2 rounded-lg bg-secondary/20"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Linkedin className="w-5 h-5 text-secondary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground font-medium group-hover:text-secondary transition-colors">
                      linkedin.com/in/reethu-priya-m
                    </p>
                  </div>
                </motion.a>

                <motion.div 
                  className="p-4 rounded-xl bg-accent/10 border border-accent/20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0,
                    boxShadow: ["0 0 0 0 rgba(52, 211, 153, 0.4)", "0 0 0 20px rgba(52, 211, 153, 0)", "0 0 0 0 rgba(52, 211, 153, 0.4)"]
                  } : {}}
                  transition={{ duration: 0.5, delay: 1.1, boxShadow: { duration: 2, repeat: Infinity } }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-sm text-muted-foreground mb-2">Availability</p>
                  <p className="text-foreground font-medium">
                    Open to full-time opportunities and exciting projects
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button 
                size="lg"
                className="w-full md:w-auto bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground font-semibold px-12 shadow-lg"
                onClick={() => window.location.href = 'mailto:reethupriya537@gmail.com'}
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Send Me an Email
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
