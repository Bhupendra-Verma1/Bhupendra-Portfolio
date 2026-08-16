import React from 'react';
import { PERSONAL_INFO } from '../data';
import { 
  Compass, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Workflow, 
  Code2, 
  Target 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getFocusIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-600" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-blue-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-16 md:py-20 border-t border-slate-200/60 bg-white/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: About Me Bio */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-5">
              About Me
            </h2>
            
            <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
              {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Core Focus Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:border-blue-200 transition-colors">
              
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-6 text-slate-900">
                <Target className="w-5 h-5 text-blue-600 stroke-[2.2]" />
                <h3 className="text-base font-bold tracking-tight">Core Focus</h3>
              </div>

              {/* Items List */}
              <div className="space-y-5">
                {PERSONAL_INFO.coreFocus.map((item) => (
                  <div key={item.id} className="flex items-start gap-3.5 group">
                    <div className="mt-0.5 shrink-0 p-1.5 rounded-lg bg-blue-50/60 text-blue-600 group-hover:bg-blue-100/80 transition-colors">
                      {getFocusIcon(item.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[13px] text-slate-500 leading-snug mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
