import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="loading-screen"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold tracking-tight"
            >
              <span className="text-gradient-royal">S</span>
              <span className="text-white/30">.</span>
              <span className="text-gradient-royal">J</span>
            </motion.div>
            <div className="loading-bar">
              <div className="loading-bar-inner" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
