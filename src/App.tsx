import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EngineeringImpact } from './components/EngineeringImpact';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { TechnicalExpertise } from './components/TechnicalExpertise';
import { FeaturedProjects } from './components/FeaturedProjects';
import { CertificationsAndEducation } from './components/CertificationsAndEducation';
import { ContactBanner } from './components/ContactBanner';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#f9fafc] text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Fixed Navigation Header */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* About Me & Core Focus */}
        <AboutSection />

        {/* Engineering Impact Metrics */}
        <EngineeringImpact />

        {/* Professional Experience Timeline */}
        <ProfessionalExperience />

        {/* Technical Expertise Bento */}
        <TechnicalExpertise />

        {/* Featured Personal Projects */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Certifications & Education */}
        <CertificationsAndEducation />

        {/* Contact Banner */}
        <ContactBanner onOpenContactModal={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
