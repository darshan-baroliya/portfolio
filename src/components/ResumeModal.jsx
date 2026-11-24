import React, { useEffect } from 'react';
import { personalData, skillsCategories, experienceData, projectsData, educationData, languagesData } from '../data/portfolioData';
import { X, Printer, Phone, Mail, MapPin, FileText } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-dark-950/95 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-white text-sm">
              Resume — {personalData.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Sheet */}
        <div className="p-6 sm:p-10 bg-slate-950 text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 mb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
              {personalData.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 mt-0.5">
              {personalData.role}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalData.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                {personalData.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
                LinkedIn
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalData.location}
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalData.bio}
            </p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              Skills &amp; Competencies
            </h2>
            <div className="space-y-2 text-xs text-slate-300">
              {skillsCategories.map((c, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-bold text-white w-48 shrink-0">{c.title}:</span>
                  <span className="text-slate-400">{c.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white mb-0.5">
                    <span>{exp.role} — {exp.company}</span>
                    <span className="font-mono text-cyan-400 text-[11px]">{exp.duration}</span>
                  </div>
                  <p className="text-slate-400 mb-2">{exp.description}</p>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    {exp.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Project Domains */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              Tested Project Domains
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {projectsData.map((p) => (
                <div key={p.id} className="p-2.5 rounded-lg bg-dark-900 border border-slate-800">
                  <strong className="text-white block mb-0.5">{p.title}</strong>
                  <p className="text-slate-400 text-[11px]">{p.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                Education
              </h2>
              {educationData.map((edu, i) => (
                <div key={i} className="mb-2">
                  <strong className="text-white block">{edu.degree}</strong>
                  <span className="text-slate-400">{edu.institution} ({edu.duration})</span>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                Languages
              </h2>
              <p className="text-slate-300">{languagesData.join(', ')}</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 px-6 py-3 bg-dark-950/95 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
