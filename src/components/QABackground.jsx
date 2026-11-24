import React from 'react';
import { CheckCircle2, ShieldCheck, Terminal, Check, Sparkles } from 'lucide-react';

export default function QABackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-[#07090E]" />

      {/* Layer 1: QA Blueprint / Test Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.08) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 16px 16px, 16px 16px'
        }}
      />

      {/* Layer 2: Subtle Dot Matrix */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(rgba(16, 185, 129, 0.35) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Layer 3: Ambient Colored Glowing Light Orbs (Cyan & Emerald) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 -left-20 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Layer 4: Ambient Floating QA Status Watermarks (Marginal & High-Tech) */}
      <div className="hidden xl:block">
        {/* Top Left Watermark */}
        <div className="absolute top-28 left-6 text-slate-600/40 font-mono text-[11px] flex items-center gap-2 p-2 rounded-lg border border-slate-800/40 bg-dark-900/20 backdrop-blur-sm animate-float-slow">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/60" />
          <span>RUN: e2e_suite // 100% PASS</span>
        </div>

        {/* Top Right Watermark */}
        <div className="absolute top-44 right-8 text-slate-600/40 font-mono text-[11px] flex items-center gap-2 p-2 rounded-lg border border-slate-800/40 bg-dark-900/20 backdrop-blur-sm animate-float-slow" style={{ animationDelay: '2.5s' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 animate-ping"></span>
          <span>ASSERT(status === 200)</span>
        </div>

        {/* Mid Left Watermark */}
        <div className="absolute top-[38%] left-8 text-slate-600/40 font-mono text-[11px] flex items-center gap-2 p-2 rounded-lg border border-slate-800/40 bg-dark-900/20 backdrop-blur-sm animate-float-slow" style={{ animationDelay: '4s' }}>
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400/60" />
          <span>ZERO_DEFECT_TOLERANCE</span>
        </div>

        {/* Mid Right Watermark */}
        <div className="absolute top-[52%] right-6 text-slate-600/40 font-mono text-[11px] flex items-center gap-2 p-2 rounded-lg border border-slate-800/40 bg-dark-900/20 backdrop-blur-sm animate-float-slow" style={{ animationDelay: '1.5s' }}>
          <Terminal className="w-3.5 h-3.5 text-emerald-400/60" />
          <span>REGRESSION: 0 FLAKY</span>
        </div>

        {/* Bottom Left Watermark */}
        <div className="absolute top-[72%] left-6 text-slate-600/40 font-mono text-[11px] flex items-center gap-2 p-2 rounded-lg border border-slate-800/40 bg-dark-900/20 backdrop-blur-sm animate-float-slow" style={{ animationDelay: '3s' }}>
          <Check className="w-3.5 h-3.5 text-emerald-400/60" />
          <span>UAT_SIGN_OFF: APPROVED</span>
        </div>

        {/* Bottom Right Watermark */}
        <div className="absolute top-[85%] right-8 text-slate-600/40 font-mono text-[11px] flex items-center gap-2 p-2 rounded-lg border border-slate-800/40 bg-dark-900/20 backdrop-blur-sm animate-float-slow" style={{ animationDelay: '5s' }}>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400/60" />
          <span>API_COVERAGE: 100%</span>
        </div>
      </div>

      {/* Layer 5: Subtle Horizontal Test Pipeline Scan Line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.015] to-transparent pointer-events-none" />
    </div>
  );
}
