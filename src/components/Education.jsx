import React from 'react';
import { educationData, languagesData } from '../data/portfolioData';
import { GraduationCap, Languages, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-dark-900/25 border-t border-slate-800/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
            // Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            <span>Education( )</span>
            <span className="text-slate-600 font-mono text-xl">{'{ ... }'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Degrees (2 columns) */}
          <div className="md:col-span-2 space-y-4">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card border border-slate-800 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {edu.institution}
                  </p>
                  <span className="text-xs font-mono text-cyan-400 mt-1 block">
                    {edu.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Languages (1 column) */}
          <div className="p-5 rounded-2xl glass-card border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-sm mb-4">
                <Languages className="w-4 h-4 text-emerald-400" />
                <span>Languages</span>
              </div>
              <div className="space-y-2">
                {languagesData.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-2.5 rounded-lg bg-dark-900 border border-slate-800 text-xs text-slate-200 font-mono"
                  >
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
