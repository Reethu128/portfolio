import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Zap } from "lucide-react";

export const GameScore = () => {
  const [clicks, setClicks] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementText, setAchievementText] = useState("");

  useEffect(() => {
    const handleClick = () => {
      setClicks(prev => prev + 1);
    };

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Achievement triggers
      if (progress > 25 && progress < 26) {
        showAchievementNotification("Explorer! 🗺️");
      } else if (progress > 50 && progress < 51) {
        showAchievementNotification("Halfway Hero! ⚡");
      } else if (progress > 99) {
        showAchievementNotification("Portfolio Master! 🏆");
      }
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (clicks === 10) {
      showAchievementNotification("Clicker! 🖱️");
    } else if (clicks === 50) {
      showAchievementNotification("Super Clicker! ⚡");
    } else if (clicks === 100) {
      showAchievementNotification("Click Master! 🎯");
    }
  }, [clicks]);

  const showAchievementNotification = (text: string) => {
    setAchievementText(text);
    setShowAchievement(true);
    setTimeout(() => setShowAchievement(false), 3000);
  };

  return (
    <>
      {/* Score Display */}
      <motion.div
        className="fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-md rounded-2xl p-4 border border-primary/20 shadow-glow"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Interactions</p>
              <motion.p 
                className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
                key={clicks}
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
              >
                {clicks}
              </motion.p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-accent" />
            <div>
              <p className="text-xs text-muted-foreground">Progress</p>
              <motion.p 
                className="text-2xl font-bold bg-gradient-secondary bg-clip-text text-transparent"
                key={Math.floor(scrollProgress)}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
              >
                {Math.floor(scrollProgress)}%
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Achievement Notification */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            className="fixed top-24 right-4 z-50 bg-gradient-primary rounded-2xl p-6 shadow-glow"
            initial={{ x: 400, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 400, opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary-foreground" />
              <div>
                <p className="text-sm font-semibold text-primary-foreground/80">Achievement Unlocked!</p>
                <p className="text-xl font-bold text-primary-foreground">{achievementText}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
