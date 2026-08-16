import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Linkedin, Github, CheckCircle2, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES, CERTIFICATIONS, EDUCATION, PROJECTS } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    const link = document.createElement("a");

    link.href = PERSONAL_INFO.resume;
    link.download = "Bhupendra-Verma-Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">

      {/* Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">

        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-2 text-xs font-semibold text-slate-600 font-mono">
              Bhupendra_Verma_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-2xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Area */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:overflow-visible">

          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-bold text-blue-600 mt-1">
              {PERSONAL_INFO.title}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 mt-3 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-600 hover:underline">
                <Linkedin className="w-3.5 h-3.5" />
                {PERSONAL_INFO.linkedin}
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-blue-600 hover:underline">
                <Github className="w-3.5 h-3.5" />
                {PERSONAL_INFO.github}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.aboutParagraphs[0]}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              Professional Experience
            </h2>

            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-blue-500 pl-4 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      {exp.role} <span className="text-blue-600 font-semibold">&bull; {exp.company}</span>
                    </h3>
                    <span className="text-xs font-medium text-slate-500">{exp.period}</span>
                  </div>

                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {exp.summary}
                  </p>

                  {exp.keyProjects && (
                    <div className="mt-2.5 space-y-1.5 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      {exp.keyProjects.map((p, i) => (
                        <div key={i} className="text-xs">
                          <span className="font-bold text-slate-800">{p.name}:</span>{' '}
                          <span className="text-slate-600">{p.details}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 mt-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] bg-slate-100 text-slate-700 rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Code className="w-3.5 h-3.5 text-blue-600" />
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-800">Backend: </span>
                <span className="text-slate-600">Java, Spring Boot, Spring Security, Hibernate/JPA, REST APIs, OAuth2, JWT</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-800">Frontend: </span>
                <span className="text-slate-600">ReactJS, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-800">Databases: </span>
                <span className="text-slate-600">SQL Server, PostgreSQL, MySQL, MongoDB Atlas</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-800">DevOps & Tools: </span>
                <span className="text-slate-600">Docker, Git, GitHub, Maven, Postman</span>
              </div>
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Code className="w-3.5 h-3.5 text-blue-600" />
              Personal Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="p-3.5 rounded-lg bg-slate-50 border border-slate-100"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {project.title}
                      </h3>

                      <p className="text-[10px] font-medium text-blue-600 mt-0.5">
                        {project.category}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] font-semibold text-slate-600 hover:text-blue-600 hover:underline"
                        >
                          GitHub
                        </a>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] font-semibold text-blue-600 hover:underline"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  {project.keyFeatures?.length > 0 && (
                    <div className="mt-2.5">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500 mb-1">
                        Key Features
                      </p>

                      <ul className="space-y-0.5">
                        {project.keyFeatures.map((feature) => (
                          <li
                            key={feature}
                            className="text-[10px] text-slate-600 flex items-start gap-1.5"
                          >
                            <span className="mt-1 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technology Tags */}
                  {project.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] bg-white text-blue-600 border border-blue-100 rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                Education
              </h2>
              <div className="text-xs space-y-1">
                <p className="font-bold text-slate-900">{EDUCATION.degree}</p>
                <p className="text-blue-600 font-medium">{EDUCATION.institution}</p>
                <p className="text-slate-500">{EDUCATION.period} &bull; {EDUCATION.location}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                Certifications
              </h2>
              <div className="text-xs space-y-1.5 text-slate-700">
                {CERTIFICATIONS.map((c) => (
                  <div key={c.id} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-blue-600 mt-0.5 shrink-0" />
                    <span><strong>{c.title}</strong> — <span className="text-slate-500">{c.issuer}</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
          >
            Print Resume
          </button>
        </div>

      </div>
    </div>
  );
};
