import React from 'react';
import { personalData } from '../data/portfolioData';
import { Phone, Mail } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export default function About() {
  const qaWatermarkTerms = [
    { text: 'expect(status).toBe(200)', top: '8%', left: '52%' },
    { text: 'assert.isTrue(valid)', top: '16%', left: '28%' },
    { text: 'Regression Suite', top: '24%', left: '64%' },
    { text: 'Boundary Value', top: '32%', left: '16%' },
    { text: 'test.describe()', top: '38%', left: '72%' },
    { text: 'Postman API', top: '46%', left: '26%' },
    { text: 'Jira // Defect Track', top: '54%', left: '58%' },
    { text: '{% cross_browser %}', top: '60%', left: '8%' },
    { text: 'Playwright E2E', top: '68%', left: '42%' },
    { text: 'SELECT * FROM users', top: '76%', left: '68%' },
    { text: 'UAT Sign-off ✓', top: '82%', left: '14%' },
    { text: 'AI Test Eval', top: '88%', left: '54%' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-transparent border-t border-slate-800/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Main Framed Card (Inspired by friend's layout, tailored for QA) */}
        <div className="relative overflow-hidden rounded-2xl bg-dark-900/70 backdrop-blur-xl border border-slate-800/90 shadow-2xl shadow-cyan-500/10 p-6 sm:p-10 md:p-12">
          
          {/* Faint QA Keyword & Circuit Background inside the card */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-35">
            {/* Subtle vertical & horizontal circuit traces */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(6, 182, 212, 0.06) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '120px 120px'
              }}
            />
            {qaWatermarkTerms.map((term, idx) => (
              <span
                key={idx}
                className="hidden sm:block absolute font-mono text-xs md:text-sm text-cyan-500/20 whitespace-nowrap"
                style={{ top: term.top, left: term.left }}
              >
                {term.text}
              </span>
            ))}
          </div>

          {/* Foreground Content */}
          <div className="relative z-10">
            
            {/* Section Header: About ( ) { */}
            <h2 className="text-xl sm:text-2xl font-mono font-semibold mb-8">
              <span className="text-cyan-400">About</span>{' '}
              <span className="text-white">( ) {'{'}</span>
            </h2>

            {/* Centered Glowing Summary Box */}
            <div className="max-w-3xl mx-auto mb-10 p-6 sm:p-8 rounded-xl bg-dark-950/85 border border-slate-800/90 shadow-[0_0_45px_rgba(6,182,212,0.12)] text-center">
              <p className="font-mono text-sm sm:text-base text-slate-200 leading-relaxed">
                <span className="text-cyan-400 font-semibold">QA Executive &amp; Quality Specialist</span>{' '}
                focused on web, mobile, and API validation, delivering thoroughly tested,{' '}
                <span className="text-emerald-400 font-medium">user-friendly</span>, and reliable software products with structured execution.
              </p>
            </div>

            {/* Detailed Narrative Paragraphs (Monospace, highlighted QA terms) */}
            <div className="max-w-3xl mx-auto space-y-6 font-mono text-xs sm:text-sm md:text-[15px] text-slate-300 leading-relaxed sm:leading-loose">
              <p>
                I'm a dedicated QA professional with end-to-end testing ownership across{' '}
                <span className="text-cyan-400 font-semibold">web and mobile applications</span>,{' '}
                specializing in understanding business requirements and validating real-world user workflows across{' '}
                <span className="text-cyan-400 font-semibold">E-commerce, Travel, Fitness, and Healthcare</span>{' '}
                domains. I design detailed{' '}
                <span className="text-cyan-400 font-semibold">test scenarios and test cases</span>{' '}
                to catch defects early and support confident product releases.
              </p>

              <p>
                Beyond manual functional, regression, and exploratory testing, I validate backend services with{' '}
                <span className="text-emerald-400 font-semibold">Postman API testing</span>{' '}
                and inspect application behavior using{' '}
                <span className="text-emerald-400 font-semibold">Chrome DevTools &amp; Jira</span>.{' '}
                Embracing modern quality engineering, I explore{' '}
                <span className="text-emerald-400 font-semibold">AI-assisted testing</span>{' '}
                to brainstorm edge cases, generate test data, and streamline documentation without cutting corners.
              </p>

              <p>
                Continuously expanding my technical toolkit in{' '}
                <span className="text-cyan-400 font-semibold">Playwright, JavaScript, and SQL</span>{' '}
                — committed to maintaining high product stability, clear developer communication, and seamless user experiences.
              </p>
            </div>

            {/* Bottom Quick Contact Icon Row */}
            <div className="mt-10 pt-4 flex items-center justify-center gap-6 text-slate-300">
              <a
                href={personalData.phoneTel}
                className="hover:text-cyan-400 transition-colors p-1.5"
                title={`Call ${personalData.phone}`}
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="hover:text-emerald-400 transition-colors p-1.5"
                title={`Email ${personalData.email}`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors p-1.5"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Closing Brace */}
            <div className="mt-4 font-mono text-xl sm:text-2xl font-semibold text-white">
              {'}'}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
