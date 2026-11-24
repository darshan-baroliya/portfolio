import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-dark-900/25 border-t border-slate-800/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
            // Professional History
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            <span>Experience( )</span>
            <span className="text-slate-600 font-mono text-xl">{'{ ... }'}</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative border-l-2 border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-dark-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 transition-colors">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-900 w-fit">
                    {exp.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                  <span className="text-slate-300 font-medium">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
