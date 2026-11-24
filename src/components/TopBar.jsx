import React from 'react';
import { personalData } from '../data/portfolioData';
import { Phone, Mail, MapPin } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export default function TopBar() {
  return (
    <div className="bg-dark-900 border-b border-slate-800 text-slate-400 text-xs py-2 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Contact Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href={personalData.phoneTel}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{personalData.phone}</span>
          </a>

          <a
            href={`mailto:${personalData.email}`}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{personalData.email}</span>
          </a>

          <span className="hidden md:flex items-center gap-1.5 text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{personalData.location}</span>
          </span>
        </div>

        {/* Social & Status */}
        <div className="flex items-center gap-4">
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{personalData.statusBadge}</span>
          </span>
        </div>

      </div>
    </div>
  );
}
