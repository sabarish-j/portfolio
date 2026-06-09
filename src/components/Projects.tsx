import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  accent: string;
  glowClass: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Pet Development Application',
    description:
      'A comprehensive pet management platform with vaccination tracking, role-based access, and modular reusable UI architecture.',
    tech: ['React.js', 'Node.js', 'REST APIs', 'JWT Auth', 'RBAC'],
    features: ['500+ pet profiles', 'Vaccination tracking', 'Modular reusable UI', 'Scalable backend'],
    accent: 'text-royal-300',
    glowClass: 'glow-border',
  },
  {
    title: 'Expense Calculator',
    description:
      'Cross-platform mobile application for real-time expense tracking with analytics, charts, and monthly budget management.',
    tech: ['React Native', 'Cross-platform', 'Charts', 'CRUD'],
    features: ['iOS & Android', 'Real-time calculations', 'Charts & analytics', 'Monthly budget tracking'],
    accent: 'text-neon-blue',
    glowClass: 'glow-border-blue',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glare: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8, glare: (x + 0.5) * 30 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
      className="perspective-1000"
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0, glare: 0 });
        setHovered(false);
      }}
    >
      <div
        className={`glass rounded-2xl overflow-hidden ${project.glowClass} hover-glow relative`}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background: hovered
              ? `linear-gradient(${135 + tilt.y * 5}deg, transparent 0%, rgba(255,255,255,0.03) ${tilt.glare}%, transparent 100%)`
              : 'none',
            transition: 'background 0.15s',
          }}
        />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-royal-400/30 to-transparent" />

        <div className="p-7 md:p-8">
          <div className="flex items-center justify-between mb-5">
            <span className={`text-xs font-mono tracking-widest ${project.accent} opacity-50`}>
              0{index + 1}
            </span>
            <motion.div
              animate={{ rotate: hovered ? 0 : 45, scale: hovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={16} className="text-white/20" />
            </motion.div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-3">{project.title}</h3>
          <p className="text-sm text-white/40 leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map(t => (
              <span
                key={t}
                className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-white/[0.04] rounded-md border border-white/[0.06] text-white/50"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {project.features.map(f => (
              <div key={f} className="flex items-center gap-2 text-xs text-white/30">
                <div className="w-1 h-1 rounded-full bg-royal-400/40 shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
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
            04 — Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Featured <span className="text-gradient-royal">Work</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
