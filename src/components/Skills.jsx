import React from 'react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-transparent border-t border-slate-800/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
            // Core Proficiencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            <span>Skills( )</span>
            <span className="text-slate-600 font-mono text-xl">{'{ ... }'}</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>{cat.title}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-dark-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
