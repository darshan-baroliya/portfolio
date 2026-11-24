import React from 'react';
import { learningTopics } from '../data/portfolioData';
import { Sparkles, Terminal, Database, Code2 } from 'lucide-react';

export default function Learning() {
  const getIcon = (idx) => {
    if (idx === 0) return <Code2 className="w-5 h-5 text-emerald-400" />;
    if (idx === 1) return <Database className="w-5 h-5 text-cyan-400" />;
    return <Sparkles className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="learning" className="py-16 md:py-24 bg-transparent border-t border-slate-800/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
            // Growth &amp; Development
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
            <span>Upskilling( )</span>
            <span className="text-slate-600 font-mono text-xl">{'{ ... }'}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Areas of active study to bring automated testing and AI-accelerated workflows to engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningTopics.map((topic, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-400 border border-slate-800">
                    {topic.level}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
