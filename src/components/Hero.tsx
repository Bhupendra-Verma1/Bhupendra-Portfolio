import React from 'react';
import { PERSONAL_INFO } from '../data';
import { ArrowDownRight, Download, Terminal, Coffee, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
            {PERSONAL_INFO.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
            {PERSONAL_INFO.heroDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all duration-150 active:scale-98"
            >
              View Projects
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-blue-700 bg-blue-50/80 hover:bg-blue-100/90 active:bg-blue-200/80 border border-blue-100 rounded-lg transition-all duration-150 active:scale-98"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Developer Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[28px] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-black shadow-xl ring-1 ring-slate-800/80 group">
            
            {/* Ambient Background Lighting */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />

            {/* Neon Java Developer Coffee Sign Graphic */}
            <div className="absolute top-7 left-7 z-10 select-none">
              <div className="relative flex flex-col items-center bg-slate-950/60 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.35)]">
                {/* Steaming Coffee Icon with Neon Glow */}
                <div className="relative mb-1">
                  <Coffee className="w-7 h-7 text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
                  {/* Subtle steam particles */}
                  <span className="absolute -top-1 left-2 w-1.5 h-1.5 bg-cyan-200 rounded-full blur-[1px] animate-pulse" />
                  <span className="absolute -top-2 left-4 w-1 h-1 bg-cyan-300 rounded-full blur-[1px] animate-ping" />
                </div>
                
                {/* Neon Code Text */}
                <div className="text-[11px] font-mono font-bold tracking-tight text-cyan-300 drop-shadow-[0_0_6px_rgba(6,182,212,0.9)]">
                  &#123; JAVA &#125;
                </div>
                <div className="text-[9px] font-mono font-semibold tracking-wider text-cyan-200/90 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] uppercase">
                  Developer
                </div>
              </div>
            </div>

            {/* Developer Portrait Image / Illustration Container */}
            <div className="absolute inset-0 flex items-end justify-center">
              <img
                src="../../assets/images/Profile_Image.png"
                alt="Bhupendra Verma - Full-Stack Java Developer"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                onError={(e) => {
                  // Fallback to high quality vector developer portrait if network image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              
              {/* Subtle gradient vignette to blend base */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Floating Status Pill */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-950/75 backdrop-blur-md border border-slate-700/50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-xs font-medium text-slate-200">Open for Opportunities</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400/90 font-medium">Spring Boot &bull; React</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
