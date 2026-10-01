import React, { useState } from 'react';
import { Mail, Copy, Check, Linkedin, Github, ArrowUpRight, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 border-b border-[#E8E2D5] bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <div className="text-xs font-mono font-bold tracking-widest text-[#1C3A2D] uppercase mb-2">
            06. Contact & Inquiries
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1B2620] tracking-tight">
            Let's Start a Conversation
          </h2>
          <p className="text-sm sm:text-base text-[#46544C] mt-3 max-w-xl mx-auto leading-relaxed">
            I am currently open to Software Engineering opportunities, backend distributed systems positions, and research collaborations.
          </p>
        </div>

        {/* Central Clean Email Showcase Card */}
        <div className="bg-white border border-[#E8E2D5] rounded-3xl p-8 sm:p-10 shadow-xs max-w-2xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5]">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#EAF1ED] text-[#1C3A2D] flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono text-[#76857C] uppercase tracking-wider">
                  Direct Inquiries
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-mono font-bold text-[#1B2620] hover:text-[#1C3A2D] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#1B2620] bg-white hover:bg-[#FAF7F2] border border-[#D8D1C3] rounded-xl transition-colors shadow-2xs"
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#FAF7F2] bg-[#1C3A2D] hover:bg-[#142C22] rounded-xl transition-colors shadow-2xs"
              >
                <Send size={13} />
                <span>Send Mail</span>
              </a>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl border border-[#E8E2D5] bg-[#FAF7F2] hover:bg-white hover:border-[#1C3A2D]/40 transition-all text-xs font-medium text-[#1B2620]"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin size={18} className="text-[#1C3A2D]" />
                <div className="text-left">
                  <div className="font-serif font-bold text-sm">LinkedIn</div>
                  <div className="text-[11px] text-[#76857C] font-mono">Connect professionally</div>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-[#76857C]" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl border border-[#E8E2D5] bg-[#FAF7F2] hover:bg-white hover:border-[#1C3A2D]/40 transition-all text-xs font-medium text-[#1B2620]"
            >
              <div className="flex items-center gap-2.5">
                <Github size={18} className="text-[#1C3A2D]" />
                <div className="text-left">
                  <div className="font-serif font-bold text-sm">GitHub</div>
                  <div className="text-[11px] text-[#76857C] font-mono">View code repositories</div>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-[#76857C]" />
            </a>
          </div>

          {/* Location & Eligibility Footnote */}
          <div className="pt-4 border-t border-[#F0ECE3] text-xs text-[#76857C] flex flex-wrap items-center justify-center gap-2 font-mono">
            <span>{PERSONAL_INFO.citizenship} (No sponsorship required)</span>
            <span className="text-[#D8D1C3]">·</span>
            <span>Based in {PERSONAL_INFO.location}</span>
            <span className="text-[#D8D1C3]">·</span>
            <span>Available for Immediate Placement</span>
          </div>
        </div>
      </div>
    </section>
  );
};
