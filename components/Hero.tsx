import React from 'react';
import { ArrowUpRight, FileText, Github, Linkedin, Mail, Sparkles, Award, BookOpen, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, VERIFIED_HIGHLIGHTS } from '../constants';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden border-b border-[#E8E2D5] bg-[#FAF7F2]">
      {/* Subtle Oriental Pattern / Silk Texture Atmosphere */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#1C3A2D0D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#1C3A2D]/[0.03] blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Location & Title Subtitle */}
        <div className="flex items-center gap-2.5 mb-5 text-xs font-mono tracking-widest text-[#1C3A2D] uppercase font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#C59B4B]"></span>
          <span>Brooklyn, NY</span>
          <span className="text-[#C59B4B]">·</span>
          <span>Software Engineer & Researcher</span>
        </div>

        {/* Hero Title & Subheading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#1B2620] tracking-tight leading-[1.08] text-balance">
              Carpe diem. Take chances, chase your goals, and make every moment count.
            </h1>

            <p className="text-base sm:text-lg text-[#46544C] leading-relaxed max-w-2xl font-sans">
              I am a Software Engineer and Researcher specializing in distributed backend systems, AST-aware diff chunking pipelines, and applied machine learning. Co-author of three peer-reviewed publications across IEEE and Springer, and proud NSF FASTRAC Scholar.
            </p>

            {/* Action Buttons: Clean & Elegant */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenResume}
                className="px-6 py-3 bg-[#1C3A2D] hover:bg-[#142C22] text-[#FAF7F2] rounded-xl text-xs font-medium transition-all flex items-center gap-2 shadow-xs hover:shadow-sm"
              >
                <FileText size={14} />
                View Complete Resume
              </button>

              <a
                href="#projects"
                className="px-5 py-3 border border-[#D8D1C3] bg-white hover:bg-[#F6F2E9] text-[#1B2620] rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                Explore Technical Work
                <ArrowUpRight size={14} className="text-[#76857C]" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-5 py-3 border border-transparent hover:border-[#E8E2D5] text-[#46544C] hover:text-[#1C3A2D] rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <Mail size={14} />
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Quiet Academic Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-[#76857C]">
              <span>{PERSONAL_INFO.citizenship}</span>
              <span className="text-[#D8D1C3]">·</span>
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-[#D8D1C3]">·</span>
              <span className="text-[#1C3A2D] font-medium">NYIT Summa Cum Laude (GPA 3.82)</span>
            </div>
          </div>

          {/* Right Column: Signature Verified Highlights (As requested by user) */}
          <div
            id="highlights"
            className="lg:col-span-4 bg-white border border-[#E8E2D5] rounded-3xl p-6 shadow-xs space-y-5 relative overflow-hidden"
          >
            {/* Top Botanical / Seal Accent */}
            <div className="flex items-center justify-between pb-4 border-b border-[#F0ECE3]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#FAF7F2] border border-[#E8E2D5] text-[#1C3A2D] flex items-center justify-center font-serif text-xs font-bold">
                  茉
                </div>
                <span className="text-xs font-serif font-bold tracking-wider text-[#1B2620] uppercase">
                  Verified Highlights
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold text-[#C59B4B] bg-[#FBF7EE] border border-[#EADDC2] px-2 py-0.5 rounded-full">
                Distinction
              </span>
            </div>

            {/* The 3 User-Specified Verified Highlights */}
            <div className="space-y-4">
              {VERIFIED_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5] hover:border-[#1C3A2D]/30 transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1C3A2D]">
                      0{idx + 1}. {item.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#C59B4B]">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1B2620] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#46544C] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] font-serif italic text-[#76857C]">
                "Excellence sustained across research, scholarship & coursework"
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
