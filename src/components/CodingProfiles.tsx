import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Code, Trophy } from 'lucide-react';

const PROFILES = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/sabarish-j',
    color: 'text-white/70',
    border: 'border-white/10',
    glow: 'shadow-[0_0_15px_rgba(255,255,255,0.05)]',
    desc: 'Open source contributions & projects',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/sabarishwaran-j-a5b844322/',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    glow: 'shadow-[0_0_15px_rgba(59,130,246,0.1)]',
    desc: 'Professional network & experience',
  },
  {
    name: 'LeetCode',
    icon: Code,
    href: 'https://leetcode.com/u/_sabari_/',
    color: 'text-amber-400',
    border: 'border-amber-500/20',
    glow: 'shadow-[0_0_15px_rgba(245,158,11,0.1)]',
    desc: 'Algorithm & data structure challenges',
  },
  {
    name: 'HackerRank',
    icon: Trophy,
    href: 'https://www.hackerrank.com/profile/sabaritheking15',
    color: 'text-green-400',
    border: 'border-green-500/20',
    glow: 'shadow-[0_0_15px_rgba(34,197,94,0.1)]',
    desc: 'Coding proficiency & certifications',
  },
];

export default function CodingProfiles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="profiles"
      className="relative section-padding overflow-hidden scroll-snap-section"
    >
      <div className="absolute inset-0 bg-aurora opacity-25" />
      <div className="absolute inset-0 bg-grid animate-grid-fade" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-royal-400/60">
            06 — Coding Profiles
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Coding <span className="text-gradient-royal">Presence</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {PROFILES.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`glass rounded-2xl p-5 border ${profile.border} ${profile.glow} group hover-glow block`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl bg-white/[0.03] border ${profile.border} shrink-0`}>
                  <profile.icon size={20} className={profile.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white/80 group-hover:text-white transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-white/30 mt-0.5 truncate">{profile.desc}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
