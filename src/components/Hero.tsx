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

        {/* Right Developer Image Section */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px]">

            {/* Decorative background frame */}
            <div className="absolute -right-4 -bottom-4 w-full h-full rounded-[32px] border border-blue-200/70 bg-blue-50/40" />

            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-[32px] bg-slate-900 shadow-[0_25px_70px_-20px_rgba(15,23,42,0.35)] ring-1 ring-slate-200">

              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={PERSONAL_INFO.image}
                  alt="Bhupendra Verma - Full-Stack Java Developer"
                  className="
            absolute inset-0
            w-full h-full
            object-cover
            object-center
            transition-transform duration-700
            group-hover:scale-[1.02]
          "
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Very subtle bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none" />

                {/* Small Java badge */}
                <div className="absolute top-5 left-5">
                  <div className="
            flex items-center gap-2
            rounded-full
            bg-slate-950/80
            backdrop-blur-md
            border border-white/10
            px-3.5 py-2
            shadow-lg
          ">
                    <Coffee className="w-4 h-4 text-cyan-400" />

                    <span className="text-xs font-mono font-semibold text-white">
                      JAVA
                    </span>

                    <span className="text-slate-500">/</span>

                    <span className="text-xs font-medium text-cyan-300">
                      Developer
                    </span>
                  </div>
                </div>

                {/* Bottom image information */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-end">

                  {/* <div>
                    <p className="text-sm font-semibold text-white">
                      Bhupendra Verma
                    </p>

                    <p className="mt-0.5 text-xs text-slate-300">
                      Full-Stack Java Developer
                    </p>
                  </div> */}

                  <div className="
            flex items-center gap-2
            rounded-full
            bg-white/10
            backdrop-blur-md
            border border-white/10
            px-3 py-1.5
          ">
                    <span className="
              h-2 w-2 rounded-full
              bg-emerald-400
              shadow-[0_0_8px_rgba(52,211,153,0.8)]
            " />

                    <span className="text-[11px] font-medium text-white">
                      Available
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Technology Card */}
            <div className="
      absolute
      -bottom-8
      -left-7
      hidden sm:block
      rounded-2xl
      bg-white
      px-4 py-3
      shadow-[0_15px_40px_-15px_rgba(15,23,42,0.25)]
      ring-1 ring-slate-200
    ">
              <div className="flex items-center gap-3">

                <div className="
          flex h-9 w-9 items-center justify-center
          rounded-xl
          bg-blue-50
          text-blue-600
        ">
                  <span className="font-mono text-sm font-bold">
                    {"</>"}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    Primary Stack
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-slate-800">
                    Java • Spring Boot • React
                  </p>
                </div>

              </div>
            </div>

            {/* Small decorative code element */}
            <div className="
      absolute
      -top-5
      -right-5
      hidden md:flex
      h-14 w-14
      items-center justify-center
      rounded-2xl
      bg-slate-950
      shadow-xl
      ring-4 ring-white
    ">
              <span className="font-mono text-sm text-cyan-400">
                {"{}"}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
