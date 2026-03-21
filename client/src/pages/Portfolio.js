import React, { useEffect, useRef } from 'react';
import { usePortfolio } from './PortfolioContext';
import Navbar      from '../components/Navbar';
import Hero        from '../components/Hero';
import About       from '../components/About';
import Skills      from '../components/Skills';
import Projects    from '../components/Projects';
import Education   from '../components/Education';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Extracurricular from '../components/Extracurricular';
import ResumeSection from '../components/ResumeSection';
import Contact     from '../components/Contact';
import Footer      from '../components/Footer';
import CursorGlow  from '../components/CursorGlow';

export default function Portfolio() {
  const { data, loading } = usePortfolio();

  // Intersection observer for fade-up animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [data]);

  if (loading) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh' }}>
      <div className="spinner" />
    </div>
  );

  if (!data) return null;

  return (
    <>
      <CursorGlow />
      <Navbar hero={data.hero} />
      <main>
        <Hero        hero={data.hero} />
        <About       about={data.about} education={data.education} />
        <Skills      skills={data.skills} />
        <Projects    projects={data.projects} />
        <Education   education={data.education} />
        <Certifications certifications={data.certifications} />
        <Achievements   achievements={data.achievements} />
        <Extracurricular extracurricular={data.extracurricular} />
        <ResumeSection  hero={data.hero} />
        <Contact />
      </main>
      <Footer hero={data.hero} />
    </>
  );
}
