import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { Phone, Mail, MapPin, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark-900/25 border-t border-slate-800/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
            // Let's Connect
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            <span>Contact( )</span>
            <span className="text-slate-600 font-mono text-xl">{'{ ... }'}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Available for QA roles, projects, or discussions on software quality and testing best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Direct Details */}
          <div className="space-y-4">
            
            {/* Phone */}
            <a
              href={personalData.phoneTel}
              className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Phone / Mobile</span>
                <span className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {personalData.phone}
                </span>
              </div>
            </a>

            {/* Email */}
            <div className="p-5 rounded-2xl glass-card border border-slate-800 flex items-center justify-between gap-4">
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-4 group min-w-0"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors truncate block">
                    {personalData.email}
                  </span>
                </div>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg shrink-0"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-blue-500/40 transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">LinkedIn Profile</span>
                <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  darshan-baroliya-189b59179
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Location: {personalData.location}</span>
            </div>

          </div>

          {/* Quick Message Box */}
          <div className="p-6 rounded-2xl glass-card border border-slate-800">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Message Ready!</h3>
                <p className="text-xs text-slate-300">
                  Click below to send via your email client.
                </p>
                <a
                  href={`mailto:${personalData.email}?subject=QA Portfolio Inquiry&body=${encodeURIComponent(`Hi Darshan,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-dark-950 font-bold text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-sm font-bold text-white mb-2">Send a Quick Message</h3>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-xs bg-dark-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 text-xs bg-dark-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message or opportunity details..."
                    className="w-full px-3 py-2 text-xs bg-dark-900 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-dark-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
