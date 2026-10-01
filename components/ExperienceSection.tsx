import React from 'react';
import { Briefcase, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../constants';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 border-b border-[#E8E2D5] bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-[#1C3A2D] uppercase mb-2">
            02. Professional Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B2620] tracking-tight">
            Software Engineering & Research Experience
          </h2>
          <p className="text-sm text-[#46544C] mt-2 max-w-2xl">
            Building backend data infrastructure for peer-reviewed publications, leading data structures instruction, and developing accessibility-first web architectures.
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-white border border-[#E8E2D5] rounded-3xl p-6 sm:p-8 shadow-xs hover:border-[#1C3A2D]/30 transition-all"
            >
              {/* Header: Role, Period, Location */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-5 border-b border-[#F0ECE3]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#C59B4B]">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1B2620] tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#46544C]">
                    <span className="text-[#1C3A2D] font-semibold">{exp.company}</span>
                    {exp.department && (
                      <>
                        <span aria-hidden="true" className="text-[#D8D1C3]">·</span>
                        <span className="text-[#1B2620]">{exp.department}</span>
                      </>
                    )}
                    <span aria-hidden="true" className="text-[#D8D1C3]">·</span>
                    <span className="text-[#76857C] font-mono">{exp.location}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#76857C] font-semibold md:text-right">
                  {exp.period}
                </div>
              </div>

              {/* Quantified Metrics Highlight Bar */}
              {exp.metrics && exp.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-b border-[#F0ECE3] bg-[#FAF7F2] rounded-2xl px-5 my-5">
                  {exp.metrics.map((metric) => (
                    <div key={metric.label} className="space-y-0.5">
                      <div className="text-[#76857C] text-[11px] font-mono">{metric.label}</div>
                      <div className="font-mono font-bold text-[#1C3A2D] text-sm sm:text-base tabular-nums">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Exact Bullets from Resume */}
              <ul className="space-y-3.5 my-5 text-xs sm:text-sm text-[#46544C]">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C3A2D] mt-2 shrink-0"></span>
                    <span className="text-[#2C3831]">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technical Stack Tags (Zero-Pill Discipline) */}
              {exp.tags && (
                <div className="pt-4 border-t border-[#F0ECE3] flex flex-wrap items-center gap-2 text-xs font-mono text-[#76857C]">
                  <span className="text-[#1C3A2D] font-bold">Toolchain:</span>
                  {exp.tags.map((tag, tIdx) => (
                    <React.Fragment key={tag}>
                      <span className="text-[#46544C]">{tag}</span>
                      {tIdx < exp.tags!.length - 1 && (
                        <span aria-hidden="true" className="text-[#D8D1C3]">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
