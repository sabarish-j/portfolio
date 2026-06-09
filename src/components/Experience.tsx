import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      className="relative section-padding overflow-hidden scroll-snap-section"
    >
      <div className="absolute inset-0 bg-aurora opacity-20" />
      <div className="absolute inset-0 bg-grid animate-grid-fade" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-royal-400/60">
            03 — Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Professional <span className="text-gradient-royal">Journey</span>
        </motion.h2>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-royal-400/50 via-neon-blue/30 to-transparent origin-top md:-translate-x-px"
          />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex items-start gap-8 md:gap-16"
          >
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
              <div className="w-3 h-3 rounded-full bg-royal-400 shadow-[0_0_12px_rgba(156,92,255,0.6)]" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-3 h-3 rounded-full bg-royal-400"
              />
            </div>

            <div className="ml-16 md:ml-0 md:w-1/2 md:pl-16">
              <div className="glass glow-border rounded-2xl p-6 hover-glow group">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase size={16} className="text-royal-400" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-royal-400/80">
                    Full Stack Developer Intern
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-2 group-hover:text-white transition-colors">
                  Soft Suave
                </h3>

                <div className="flex items-center gap-2 text-white/30 mb-5">
                  <Calendar size={12} />
                  <span className="text-xs">Oct 2025 — May 2026</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    'Building full-stack web applications with React.js and Node.js',
                    'Implementing scalable backend architectures with RESTful APIs',
                    'Developing responsive UI components with modern design patterns',
                    'Collaborating with cross-functional teams on production features',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-neon-blue/60 mt-2 shrink-0" />
                      <span className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
