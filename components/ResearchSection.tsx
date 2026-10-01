import React, { useState } from 'react';
import { BookOpen, ExternalLink, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

export const ResearchSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="publications" className="py-20 px-6 border-b border-[#E8E2D5] bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-[#1C3A2D] uppercase mb-2">
            04. Peer-Reviewed Scholarship
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B2620] tracking-tight">
            Publications & Presentations
          </h2>
          <p className="text-sm text-[#46544C] mt-2 max-w-2xl">
            Co-authored scholarship spanning municipal GIS flood mitigation, predictive machine learning on NYC Open Data, and VR human-computer interaction.
          </p>
        </div>

        {/* Academic Presentation Banner */}
        <div className="bg-white border border-[#E8E2D5] rounded-3xl p-6 mb-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#FBF7EE] border border-[#EADDC2] text-[#C59B4B] flex items-center justify-center shrink-0">
              <Award size={22} />
            </div>
            <div>
              <div className="font-serif font-bold text-[#1B2620] text-base">Conference & Scholar Presentations</div>
              <div className="text-xs text-[#46544C] mt-0.5">
                Presented research findings at <strong className="text-[#1B2620]">IEEE SusTech 2025</strong> and the <strong className="text-[#1B2620]">2024 NSF S-STEM Scholar & PI Meeting</strong> in Washington, D.C.
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-[#1C3A2D] font-bold bg-[#EAF1ED] px-3 py-1 rounded-full shrink-0">
            3 Papers Co-Authored
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-5">
          {PUBLICATIONS.map((pub) => {
            const isExpanded = expandedId === pub.id;

            return (
              <div
                key={pub.id}
                className="bg-white border border-[#E8E2D5] rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#1C3A2D]/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono mb-2">
                      <span className="font-bold text-[#1C3A2D] bg-[#FAF7F2] border border-[#E8E2D5] px-2 py-0.5 rounded">
                        {pub.category}
                      </span>
                      <span className="text-[#D8D1C3]">·</span>
                      <span className="text-[#76857C]">{pub.year}</span>
                      <span className="text-[#D8D1C3]">·</span>
                      <span className="text-[#46544C] font-sans">{pub.relatedField}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1B2620] leading-snug">
                      "{pub.title}"
                    </h3>
                  </div>

                  <div className="text-xs font-mono text-[#76857C] shrink-0 md:text-right font-medium">
                    {pub.venue.includes('(') ? pub.venue.split('(')[0] : pub.venue}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#46544C] leading-relaxed mt-2.5">
                  {pub.description}
                </p>

                {/* Highlights Toggle */}
                {pub.highlights && (
                  <div className="mt-4 pt-3.5 border-t border-[#F0ECE3]">
                    <button
                      onClick={() => toggleExpand(pub.id)}
                      className="flex items-center gap-1.5 text-xs font-medium text-[#1C3A2D] hover:text-[#142C22] transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={14} />
                          Hide Methodology Details
                        </>
                      ) : (
                        <>
                          <ChevronDown size={14} />
                          View Methodology & Presentation Notes
                        </>
                      )}
                    </button>

                    {isExpanded && (
                      <ul className="mt-3 space-y-2 text-xs text-[#46544C] bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#E8E2D5]">
                        {pub.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1C3A2D] mt-1.5 shrink-0"></span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
