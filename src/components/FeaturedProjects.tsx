import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data';
import { Code, ExternalLink, Image as ImageIcon, CheckCircle, Shield, Sparkles, Terminal, FileBox, Play } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 md:py-24 border-t border-slate-200/60 bg-white/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Featured Personal Projects
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Complex applications built to solve specific technical challenges.
          </p>
        </div>

        {/* 2 Column Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Banner / Preview Area (Matching the soft lavender/periwinkle placeholder in screenshot) */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-[16/9] w-full bg-[#e8ecf8] flex items-center justify-center cursor-pointer overflow-hidden group-hover:bg-[#dfe5f5] transition-colors"
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Optional subtle overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

                  {/* Hover interactive hint */}
                  <div className="absolute bottom-3 right-3 z-10 px-3 py-1 rounded-md bg-white/90 text-[11px] font-semibold text-slate-700 shadow-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                    <Play className="w-3 h-3 text-blue-600 fill-blue-600" />
                    <span>Explore Project</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7">
                  {/* Title and Top Action Links */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors"
                    >
                      {project.title}
                    </h3>

                    {/* Action Link Icons */}
                    <div className="flex items-center gap-2 text-slate-500">
                      {project.githubUrl && (<a
                        href={project.githubUrl}
                        target='_blank'
                        title="View Architecture & Code Details"
                        className="p-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
                      >
                        <Code className="w-4 h-4" />
                      </a>
                      )}
                      {project.liveDemoUrl && (<a
                        href={project.liveDemoUrl}
                        target='_blank'
                        title="Interactive Project Demo"
                        className="p-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Features Subheading */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                      Key Features
                    </h4>
                    <ul className="space-y-1.5">
                      {project.keyFeatures.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Tech Tags */}
              <div className="px-6 sm:px-7 pb-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-50/80 text-blue-700 border border-blue-100/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
