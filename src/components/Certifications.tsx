import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const CERTS = [
  { name: 'Intermediate Java', color: 'text-orange-400', border: 'border-orange-500/20', glow: 'shadow-[0_0_15px_rgba(251,146,60,0.1)]' },
  { name: 'Intermediate SQL', color: 'text-neon-blue', border: 'border-cyan-500/20', glow: 'shadow-[0_0_15px_rgba(0,212,255,0.1)]' },
  { name: 'Intermediate Git', color: 'text-royal-300', border: 'border-royal-500/20', glow: 'shadow-[0_0_15px_rgba(156,92,255,0.1)]' },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="certifications"
      className="relative section-padding overflow-hidden scroll-snap-section"
    >
      <div className="absolute inset-0 bg-aurora opacity-20" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-royal-400/60">
            05 — Certifications
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Validated <span className="text-gradient-royal">Skills</span>
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`glass rounded-2xl p-5 border ${cert.border} ${cert.glow} text-center group hover-glow`}
            >
              <div className="mb-3 flex justify-center">
                <div className={`p-2.5 rounded-xl bg-white/[0.03] border ${cert.border}`}>
                  <Award size={18} className={cert.color} />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white/70 group-hover:text-white/90 transition-colors">
                {cert.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
