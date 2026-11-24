import React from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowRight, Mail, FileDown, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Intro Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs sm:text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Quality Assurance &amp; Software Testing</span>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">{personalData.name}</span>
        </h1>
        
        <p className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6">
          {personalData.role}
        </p>

        {/* Short Tagline */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
          {personalData.tagline}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-dark-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/10"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
          >
            <FileDown className="w-4 h-4 text-emerald-400" />
            <span>View Resume</span>
          </button>
        </div>

        {/* Simple 3 Highlight Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="p-3 rounded-xl bg-dark-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Manual &amp; Functional Testing</span>
          </div>
          <div className="p-3 rounded-xl bg-dark-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Web &amp; Mobile Validation</span>
          </div>
          <div className="p-3 rounded-xl bg-dark-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>API Testing (Postman)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
