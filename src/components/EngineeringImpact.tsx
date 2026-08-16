import React, { useState } from 'react';
import { ENGINEERING_METRICS } from '../data';
import { TrendingUp, Zap, Sparkles } from 'lucide-react';

export const EngineeringImpact: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="impact" className="py-20 md:py-24 max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Engineering Impact
        </h2>
        <p className="text-slate-500 text-sm sm:text-base">
          Measurable improvements and technical achievements across various projects.
        </p>
      </div>

      {/* 3x2 Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ENGINEERING_METRICS.map((metric, idx) => (
          <div
            key={metric.id}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300/80 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Metric Value */}
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight mb-3 group-hover:scale-105 transition-transform duration-200 origin-left">
                {metric.value}
              </div>

              {/* Metric Title */}
              <h3 className="text-[15px] font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {metric.title}
              </h3>

              {/* Metric Description */}
              <p className="text-[13px] text-slate-500 leading-relaxed">
                {metric.description}
              </p>
            </div>

            {/* Subtle bottom decorative line */}
            <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px] text-slate-400">Impact Metric #0{idx + 1}</span>
              <TrendingUp className="w-3.5 h-3.5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
