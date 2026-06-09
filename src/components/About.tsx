import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Sparkles } from 'lucide-react';

const STORY_ITEMS = [
  'Passionate about web and mobile development, building digital products that push boundaries.',
  'Deep interest in scalable, immersive digital products that deliver real-world impact.',
  'Experience building production-level applications with modern engineering practices.',
  'Focused on responsive UI/UX and modern software engineering principles.',
  'Goal: Become a highly skilled creative software engineer crafting next-gen experiences.',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden scroll-snap-section"
    >
      <div className="absolute inset-0 bg-aurora opacity-40" />
      <div className="absolute inset-0 bg-grid animate-grid-fade" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-royal-400/60">
            01 — About
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold leading-tight mb-6"
            >
              Building the
              <br />
              <span className="text-gradient-royal">future of digital</span>
              <br />
              experiences
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3 mb-6"
            >
              <div className="flex items-center gap-3 text-white/40">
                <MapPin size={14} className="text-royal-400" />
                <span className="text-sm">Namakkal, Tamil Nadu</span>
              </div>
              <a
                href="mailto:sabarishwaran.jp15@gmail.com"
                className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors group"
              >
                <Mail size={14} className="text-neon-blue group-hover:scale-110 transition-transform" />
                <span className="text-sm">sabarishwaran.jp15@gmail.com</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="glass glow-border rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-neon-gold" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neon-gold/80">
                  Vision
                </span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                I believe great software is an art form — where engineering precision
                meets creative expression. Every line of code is a brushstroke in a larger
                digital masterpiece.
              </p>
            </motion.div>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {STORY_ITEMS.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className="relative pl-7 border-l border-royal-400/20 group hover:border-royal-400/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-royal-400/30 -translate-x-[4.5px] group-hover:bg-royal-400/70 group-hover:shadow-[0_0_8px_rgba(156,92,255,0.4)] transition-all" />
                <p className="text-sm md:text-base text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
