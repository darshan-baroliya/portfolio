import React, { useEffect, useState } from 'react';
import { X, Bug, ShieldAlert, CheckCircle, Copy, Check, Terminal, ExternalLink } from 'lucide-react';

export default function BugReportModal({ project, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project || !project.sampleBugReport) return null;

  const { bugId, summary, severity, priority, environment, stepsToReproduce, expectedResult, actualResult } = project.sampleBugReport;

  const handleCopy = () => {
    const reportText = `[${bugId}] ${summary}
Severity: ${severity} | Priority: ${priority}
Environment: ${environment}

Steps to Reproduce:
${stepsToReproduce.join('\n')}

Expected Result:
${expectedResult}

Actual Result:
${actualResult}`;

    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSeverityBadgeClass = (sev) => {
    if (sev === 'Critical') return 'bg-rose-950/80 border-rose-800 text-rose-300';
    if (sev === 'High') return 'bg-amber-950/80 border-amber-800 text-amber-300';
    return 'bg-blue-950/80 border-blue-800 text-blue-300';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-dark-900 border border-slate-700 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-dark-950/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Bug className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/60">
                  {bugId}
                </span>
                <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${getSeverityBadgeClass(severity)}`}>
                  {severity}
                </span>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                  {priority}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title="Copy bug report text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Ticket'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Summary / Title */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {summary}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Associated Case Study: <span className="text-cyan-400">{project.title}</span>
            </p>
          </div>

          {/* Environment Spec */}
          <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800">
            <span className="text-xs font-mono uppercase text-slate-400 block mb-1">Environment</span>
            <span className="text-xs sm:text-sm font-mono text-slate-300">{environment}</span>
          </div>

          {/* Steps to Reproduce */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Steps to Reproduce
            </h4>
            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800/90 font-mono text-xs sm:text-sm space-y-2 text-slate-300">
              {stepsToReproduce.map((step, idx) => (
                <div key={idx} className="leading-relaxed">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Expected vs Actual Diff Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Expected Result */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase font-semibold mb-2">
                <CheckCircle className="w-4 h-4" /> Expected Result
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {expectedResult}
              </p>
            </div>

            {/* Actual Result */}
            <div className="p-4 rounded-xl bg-rose-950/25 border border-rose-800/50">
              <div className="flex items-center gap-1.5 text-xs font-mono text-rose-400 uppercase font-semibold mb-2">
                <ShieldAlert className="w-4 h-4" /> Actual Result (Defect)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {actualResult}
              </p>
            </div>

          </div>

          {/* QA Resolution & Sign-Off Status */}
          <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Status: <strong className="text-emerald-400 font-bold">VERIFIED &amp; RESOLVED</strong></span>
            <span className="text-slate-500">Regression Suite: Passed ✓</span>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-dark-950/80 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
