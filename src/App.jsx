import React, { useState } from 'react';
import QABackground from './components/QABackground';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Global QA Blueprint & Tech Background */}
      <QABackground />

      {/* Quick Contact Header Bar (Phone, Email, LinkedIn, Location) */}
      <TopBar />

      {/* Clean Sticky Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* About Me */}
        <About />

        {/* Core QA Skills */}
        <Skills />

        {/* Work Experience */}
        <Experience />

        {/* Projects / Domains Tested */}
        <Projects />

        {/* Academic Education & Languages */}
        <Education />

        {/* Upskilling & Learning */}
        <Learning />

        {/* Contact Me */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Document Modal */}
      {isResumeModalOpen && (
        <ResumeModal onClose={() => setIsResumeModalOpen(false)} />
      )}
    </div>
  );
}
