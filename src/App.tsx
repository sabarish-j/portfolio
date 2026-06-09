import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleField from './components/ParticleField';
import CursorGlow from './components/CursorGlow';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Resume from './components/Resume';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP scroll triggers after a delay for loading
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 2500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <ParticleField />
      <CursorGlow />
      <Navigation />

      <main ref={mainRef} className="relative scroll-snap-container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
    </>
  );
}

export default App;
