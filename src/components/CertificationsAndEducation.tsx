import React from 'react';
import { CERTIFICATIONS, EDUCATION } from '../data';
import { 
  Award, 
  GraduationCap, 
  Code2, 
  Globe, 
  Trophy, 
  Building2, 
  Calendar, 
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const CertificationsAndEducation: React.FC = () => {
  const getCertIcon = (type: string) => {
    switch (type) {
      case 'udemy':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'hackerrank':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'freecodecamp':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 text-blue-600" />;
      default:
        return <Award className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 md:py-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Certifications */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-2.5 mb-6 text-slate-900">
            <Award className="w-5 h-5 text-blue-600 stroke-[2.2]" />
            <h2 className="text-xl font-bold tracking-tight">Certifications</h2>
          </div>

          <div className="space-y-3.5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-xs hover:border-blue-200 hover:shadow-sm transition-all flex items-start gap-4"
              >
                <div className="mt-0.5 p-2 rounded-lg bg-blue-50/70 text-blue-600 shrink-0">
                  {getCertIcon(cert.icon)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-2.5 mb-6 text-slate-900">
            <GraduationCap className="w-5 h-5 text-blue-600 stroke-[2.2]" />
            <h2 className="text-xl font-bold tracking-tight">Education</h2>
          </div>

          <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:border-blue-200 transition-all overflow-hidden">
            
            {/* Background Graduation Cap Watermark matching screenshot */}
            <div className="absolute right-4 bottom-2 opacity-[0.07] pointer-events-none select-none">
              <GraduationCap className="w-44 h-44 text-slate-900" />
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {EDUCATION.degree}
              </h3>
              
              <div className="text-sm font-semibold text-blue-600 mb-3">
                {EDUCATION.institution}
              </div>

              <div className="space-y-1 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{EDUCATION.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{EDUCATION.location}</span>
                </div>
              </div>

              {EDUCATION.details && (
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  {EDUCATION.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-xs text-slate-500 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
