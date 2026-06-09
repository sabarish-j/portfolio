import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface SkillGroup {
  title: string;
  color: string;
  glowClass: string;
  items: string[];
}

const SKILLS: SkillGroup[] = [
  {
    title: 'Frontend',
    color: 'text-royal-300',
    glowClass: 'glow-border',
    items: ['React.js', 'Next.js'],
  },
  {
    title: 'Backend',
    color: 'text-neon-blue',
    glowClass: 'glow-border-blue',
    items: ['Node.js', 'Nest.js'],
  },
  {
    title: 'Mobile',
    color: 'text-emerald-400',
    items: ['React Native'],
    glowClass: 'border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1),inset_0_0_15px_rgba(16,185,129,0.05)]',
  },
  {
    title: 'Cloud & Tools',
    color: 'text-neon-gold',
    glowClass: 'glow-border-gold',
    items: ['Google Cloud Platform', 'Firebase', 'AWS Basics', 'GitHub', 'Bitbucket', 'Jira'],
  },
  {
    title: 'Languages',
    color: 'text-pink-400',
    glowClass: 'border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.1),inset_0_0_15px_rgba(236,72,153,0.05)]',
    items: ['Java', 'SQL', 'C'],
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <div
      className="perspective-1000"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className={className}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      className="relative section-padding overflow-hidden scroll-snap-section"
    >
      <div className="absolute inset-0 bg-aurora opacity-30" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-royal-400/60">
            02 — Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Tech <span className="text-gradient-royal">Arsenal</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + gi * 0.1 }}
            >
              <TiltCard className={`glass rounded-2xl p-5 ${group.glowClass} hover-glow`}>
                <h3 className={`text-sm font-bold tracking-[0.2em] uppercase mb-4 ${group.color}`}>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium text-white/60 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:bg-white/[0.08] hover:text-white/80 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
