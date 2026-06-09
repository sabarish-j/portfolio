import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Download, X, FileText } from 'lucide-react';

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative section-padding overflow-hidden scroll-snap-section">
        <div className="absolute inset-0 bg-aurora opacity-20" />

        <div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-royal-400/60">
              Resume
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            My <span className="text-gradient-royal">Resume</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-white/40 mb-8 max-w-lg mx-auto"
          >
            A comprehensive overview of my skills, experience, and achievements.
          </motion.p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="px-8 py-3.5 glass glow-border rounded-xl text-sm font-semibold text-white/80 hover:text-white hover-glow flex items-center gap-2"
            >
              <FileText size={16} className="text-royal-400" />
              Preview Resume
            </motion.button>

            <motion.a
              href="/Sabarishwaran_J.pdf"
              download="Sabarishwaran_J_Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-xl text-sm font-semibold text-dark-900 flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #9c5cff 0%, #00d4ff 100%)',
                boxShadow: '0 0 30px rgba(156, 92, 255, 0.3)',
              }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
              className="relative z-10 w-full max-w-2xl glass-strong glow-border rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
                <h3 className="text-lg font-bold text-white/80">Resume Preview</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-lg hover:bg-white/[0.05] text-white/40 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Resume content */}
              <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-6">
                {/* Header */}
                <div className="text-center border-b border-white/[0.06] pb-4">
                  <h1 className="text-2xl font-bold text-gradient-royal mb-1">Sabarishwaran J</h1>
                  <p className="text-sm text-white/40">Full Stack Developer | Mobile App Developer</p>
                  <p className="text-xs text-white/25 mt-2">Namakkal, TN | sabarishwaran.jp15@gmail.com | +91 8248387507</p>
                  <p className="text-xs text-white/25">
                    <a href="https://github.com/sabarish-j" className="hover:text-royal-400">github.com/sabarish-j</a>
                    {' | '}
                    <a href="https://linkedin.com/in/sabarishwaran-j-a5b844322" className="hover:text-royal-400">linkedin.com/in/sabarishwaran-j</a>
                  </p>
                </div>

                {/* Professional Summary */}
                <div>
                  <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-royal-400/60 mb-3">Professional Summary</h2>
                  <p className="text-xs text-white/40 leading-relaxed glass rounded-xl p-4">
                    Results-driven Full Stack Developer with hands-on production experience building scalable web and mobile applications using React.js, Next.js, Node.js, Nest.js, and React Native. Proven ability to develop real-time features, integrate third-party APIs, and manage cloud-based backends with Google Cloud Spanner.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-royal-400/60 mb-3">Experience</h2>
                  <div className="glass rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-semibold text-white/70">Full Stack Developer Intern</h3>
                      <span className="text-[10px] text-white/25">Oct 2025 — May 2026</span>
                    </div>
                    <p className="text-xs text-white/30 mb-2">Soft Suave</p>
                    <div className="space-y-1">
                      {['Developed responsive UIs with Next.js and React Native across web and mobile', 'Built scalable backend services with Nest.js implementing REST APIs', 'Worked with Google Cloud Spanner for high availability database management', 'Contributed to code reviews, debugging, and deployment processes'].map((item, i) => (
                        <p key={i} className="text-xs text-white/25">• {item}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-royal-400/60 mb-3">Technical Skills</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { title: 'Languages', items: 'Java, C, SQL' },
                      { title: 'Frontend', items: 'React.js, Next.js' },
                      { title: 'Backend', items: 'Node.js, Nest.js' },
                      { title: 'Mobile', items: 'React Native (iOS & Android)' },
                      { title: 'Cloud & Tools', items: 'GCP, Firebase, AWS, Git' },
                      { title: 'Version Control', items: 'GitHub, Bitbucket, Jira' },
                    ].map(({ title, items }) => (
                      <div key={title} className="glass rounded-lg p-3">
                        <p className="text-[10px] font-semibold text-white/50 mb-1">{title}</p>
                        <p className="text-xs text-white/25">{items}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-royal-400/60 mb-3">Projects</h2>
                  <div className="space-y-3">
                    <div className="glass rounded-lg p-3">
                      <p className="text-xs font-semibold text-white/50">Pet Development Application</p>
                      <p className="text-[10px] text-white/25 mt-1">React.js | Node.js | REST API</p>
                      <ul className="text-[10px] text-white/20 mt-2 space-y-1">
                        <li>• Managed 500+ pet profiles with JWT authentication & role-based access control</li>
                        <li>• Built 15+ reusable React components reducing dev time by 30%</li>
                        <li>• Deployed Node.js backend supporting 100+ concurrent users</li>
                      </ul>
                    </div>
                    <div className="glass rounded-lg p-3">
                      <p className="text-xs font-semibold text-white/50">Expense Calculator – Mobile App</p>
                      <p className="text-[10px] text-white/25 mt-1">React Native | Cross-Platform (iOS & Android)</p>
                      <ul className="text-[10px] text-white/20 mt-2 space-y-1">
                        <li>• Built cross-platform app with 10+ categories, CRUD, & budget tracking</li>
                        <li>• Designed intuitive UI with charts, validated by 20+ users</li>
                        <li>• Optimized rendering reducing load time by 35%</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-royal-400/60 mb-3">Education</h2>
                  <div className="space-y-2">
                    <div className="glass rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <p className="text-xs font-semibold text-white/50">B.E. Computer Science & Engineering</p>
                        <span className="text-[10px] text-white/25">2026 | 7.72 CGPA</span>
                      </div>
                      <p className="text-[10px] text-white/25 mt-1">Rathinam Technical Campus, Coimbatore</p>
                    </div>
                    <div className="glass rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <p className="text-xs font-semibold text-white/50">HSC</p>
                        <span className="text-[10px] text-white/25">2022 | 91.5%</span>
                      </div>
                      <p className="text-[10px] text-white/25 mt-1">Reliance Matriculation Hr. Sec. School, Namakkal</p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-royal-400/60 mb-3">Certifications</h2>
                  <div className="flex gap-2 flex-wrap">
                    {['DataCamp: Intermediate Java', 'Intermediate SQL', 'Intermediate Git'].map(c => (
                      <span key={c} className="px-3 py-1 text-[10px] text-white/30 bg-white/[0.03] rounded-md border border-white/[0.06]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
