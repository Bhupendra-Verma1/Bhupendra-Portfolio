import React from 'react';
import { EXPERIENCES } from '../data';
import { Calendar, Briefcase, ChevronRight, Building } from 'lucide-react';

export const ProfessionalExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-24 border-t border-slate-200/60 bg-white/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Professional Experience
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            My journey building enterprise software solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Line (visible on md+) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-slate-200" />

          <div className="space-y-12 md:space-y-16">
            
            {/* Experience 1: ERP Daddy (Left on desktop) */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left Column Content */}
              <div className="md:pr-10 text-left">
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="flex flex-col mb-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      Java Backend Developer
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 mb-1">
                      ERP Daddy
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>Sept 2025 - Present</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Focus on Java/Spring Boot backend, REST APIs, DB optimization, RBAC (Super Admin, Admin, User).
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "SQL Server", "REST APIs"].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Projects Sub-box */}
                  <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/60">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Key Projects
                    </h4>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-bold text-slate-800 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          Normiqo
                        </div>
                        <p className="text-xs text-slate-500 ml-2.5 mt-0.5 leading-snug">
                          CAPA, Audits, Work management, Schedulers, Module expiration.
                        </p>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-slate-800 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          PAYROLL
                        </div>
                        <p className="text-xs text-slate-500 ml-2.5 mt-0.5 leading-snug">
                          Employee data/docs, machine attendance, leave workflows, salary slip, overtime, PF/ESIC reports.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Timeline Center Dot for Item 1 */}
              <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm z-10" />

              {/* Empty Right Column for staggering */}
              <div className="hidden md:block" />
            </div>

            {/* Experience 2: ATF Labs (Right on desktop) */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Empty Left Column for staggering */}
              <div className="hidden md:block" />

              {/* Timeline Center Dot for Item 2 */}
              <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-400/70 border-4 border-white shadow-sm z-10" />

              {/* Right Column Content */}
              <div className="md:pl-10 text-left">
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="flex flex-col mb-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      Software Developer Intern
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 mb-1">
                      ATF Labs
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>May 2025 - August 2025</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    React 18+, reusable components (MUI/Bootstrap), REST APIs, SQL Server/PostgreSQL optimization.
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {["React 18+", "Material UI", "React-Bootstrap", "REST APIs", "SQL Server", "PostgreSQL"].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
