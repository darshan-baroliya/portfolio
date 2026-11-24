import React from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-dark-950/80 backdrop-blur-sm border-t border-slate-800/80 text-slate-500 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-semibold text-slate-400">{personalData.name}</span> — {personalData.role}
        </div>
        <div className="flex items-center gap-4">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title="Back to Top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
