import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Code, Trophy } from 'lucide-react';

const SOCIALS = [
  { icon: Github, href: 'https://github.com/sabarish-j', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sabarishwaran-j-a5b844322/', label: 'LinkedIn' },
  { icon: Code, href: 'https://leetcode.com/u/_sabari_/', label: 'LeetCode' },
  { icon: Trophy, href: 'https://www.hackerrank.com/profile/sabaritheking15', label: 'HackerRank' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden scroll-snap-section"
    >
      <div className="absolute inset-0 bg-aurora opacity-30" />
      <div className="absolute inset-0 bg-grid animate-grid-fade" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-royal-400/60">
            07 — Contact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Let&apos;s Build
          <br />
          <span className="text-gradient-royal">Something Great</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-white/30 mb-8 max-w-lg mx-auto leading-relaxed"
        >
          Open to opportunities, collaborations, and conversations about building
          the next generation of digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <a
            href="mailto:sabarishwaran.jp15@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl text-sm font-semibold text-dark-900 group"
            style={{
              background: 'linear-gradient(135deg, #9c5cff 0%, #00d4ff 100%)',
              boxShadow: '0 0 30px rgba(156, 92, 255, 0.3)',
              color: '#0a0a0f',
            }}
          >
            <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
        >
          <a
            href="mailto:sabarishwaran.jp15@gmail.com"
            className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
          >
            <Mail size={14} className="text-royal-400" />
            <span className="text-sm">sabarishwaran.jp15@gmail.com</span>
          </a>
          <a
            href="tel:+919500735737"
            className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
          >
            <Phone size={14} className="text-emerald-400" />
            <span className="text-sm">+91 95007 35737</span>
          </a>
          <div className="flex items-center gap-2 text-white/30">
            <MapPin size={14} className="text-neon-blue" />
            <span className="text-sm">Namakkal, Tamil Nadu</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-3"
        >
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-glow text-white/40 hover:text-white/70 transition-all"
              title={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-14 pt-6 border-t border-white/[0.04]"
        >
          <p className="text-[10px] text-white/15 tracking-wider">
            Designed & Built by Sabarishwaran J — {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
