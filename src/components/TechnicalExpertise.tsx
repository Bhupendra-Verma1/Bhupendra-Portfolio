import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data';
import { Server, Layout, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export const TechnicalExpertise: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-slate-700" />;
      case 'Database':
        return <Database className="w-5 h-5 text-slate-700" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-slate-700" />;
      default:
        return <Server className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Technical Expertise
        </h2>
        <p className="text-slate-500 text-sm sm:text-base">
          The tools and technologies I use to build robust applications.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Backend Development (Prominent with Blue Badges) */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-blue-200 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <Server className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Backend Development
                </h3>
              </div>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-600/30" />
                <span className="w-2 h-2 rounded-full bg-blue-600" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {SKILL_CATEGORIES[0].skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    selectedSkill === skill
                      ? 'bg-blue-800 text-white ring-2 ring-blue-400 ring-offset-1'
                      : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-xs'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Frontend */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-blue-200 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Layout className="w-5 h-5 text-slate-700" />
              <h3 className="text-base font-bold text-slate-900">
                Frontend
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {SKILL_CATEGORIES[1].skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedSkill === skill
                      ? 'bg-blue-100 text-blue-800 border-blue-300 ring-1 ring-blue-300'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 active:scale-95'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: Databases */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-blue-200 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Database className="w-5 h-5 text-slate-700" />
              <h3 className="text-base font-bold text-slate-900">
                Databases
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {SKILL_CATEGORIES[2].skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedSkill === skill
                      ? 'bg-blue-100 text-blue-800 border-blue-300 ring-1 ring-blue-300'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 active:scale-95'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Card 4: Tools */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-blue-200 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Wrench className="w-5 h-5 text-slate-700" />
              <h3 className="text-base font-bold text-slate-900">
                Tools
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {SKILL_CATEGORIES[3].skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedSkill === skill
                      ? 'bg-blue-100 text-blue-800 border-blue-300 ring-1 ring-blue-300'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 active:scale-95'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
