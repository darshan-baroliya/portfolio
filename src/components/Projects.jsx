import React from 'react';
import { projectsData } from '../data/portfolioData';
import { CheckCircle2, Layers } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-transparent border-t border-slate-800/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
            // Tested Application Domains
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            <span>Projects( )</span>
            <span className="text-slate-600 font-mono text-xl">{'{ ... }'}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Key application domains where I led and executed end-to-end quality assurance workflows.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-cyan-400 block mb-1">
                  {project.domain}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Scope */}
                <div className="mb-4">
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                    QA Scope &amp; Activities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {project.testingScope.map((scope, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-900 text-slate-300 border border-slate-800"
                  >
                    {tool}
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
