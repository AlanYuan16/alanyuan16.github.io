import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutEducation } from './components/AboutEducation';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1B2620] antialiased">
      {/* Top Bar Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />

        <AboutEducation />

        <ExperienceSection />

        <ProjectsSection />

        <ResearchSection />

        <SkillsSection />

        <ContactSection />
      </main>

      {/* Clean Molly Tea Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Official 1:1 Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export default App;
