import { motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Download } from 'lucide-react';

const ROLE_BADGES = [
  { label: 'Full Stack Developer', color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5' },
  { label: 'Mobile Developer', color: 'text-royal-300 border-royal-400/30 bg-royal-400/5' },
  { label: 'Frontend Developer', color: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-snap-section"
    >
      <div className="absolute inset-0 bg-aurora opacity-40" />
      <div className="absolute inset-0 bg-grid animate-grid-fade" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 md:pt-24 pb-10 md:pb-0">
        {/* Role badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {ROLE_BADGES.map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
              className={`inline-flex items-center px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full border ${badge.color}`}
            >
              {badge.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-white">Sabarishwaran J</span>
          <br />
          <span className="text-gradient-shimmer">Building Digital</span>
          <span className="text-white"> Products</span>
          <br />
          <span className="text-white">That Matter</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-sm sm:text-base md:text-lg text-white/45 max-w-xl mx-auto leading-relaxed mb-10"
        >
          I turn ideas into scalable, fast, and beautiful web &amp; mobile apps&nbsp;&mdash; from concept to deployment.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => {
              const el = document.getElementById('projects');
              if (!el) return;
              const top = el.getBoundingClientRect().top + window.scrollY - 68;
              window.scrollTo({ top, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
          >
            View My Projects <ArrowUpRight size={16} />
          </button>
          <a
            href="/Sabarishwaran_J.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass glow-border text-white text-sm font-semibold hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            Download CV <Download size={15} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} className="text-white/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
