import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

export const AboutEducation: React.FC = () => {
  const { education } = PERSONAL_INFO;

  return (
    <section id="about" className="py-20 px-6 border-b border-[#E8E2D5] bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-[#1C3A2D] uppercase mb-2">
            01. Academic Foundation & Distinctions
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B2620] tracking-tight">
            Scholarly Dedication & Technical Mastery
          </h2>
          <p className="text-sm text-[#46544C] mt-2 max-w-2xl">
            A track record of sustained high academic achievement, peer-reviewed research, and leadership in algorithmic computer science education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-[#46544C] leading-relaxed text-sm sm:text-base">
            <p>
              I graduated <strong className="text-[#1B2620] font-serif font-bold">Summa Cum Laude</strong> from the <strong className="text-[#1B2620]">New York Institute of Technology</strong> with a Bachelor of Science in Computer Science and a cumulative <strong className="text-[#1C3A2D] font-mono font-bold">GPA of 3.82 / 4.0</strong>, earning Presidential and Dean’s Honor List recognitions throughout my entire undergraduate tenure.
            </p>

            <p>
              As a National Science Foundation <strong className="text-[#1B2620]">NSF FASTRAC Scholar</strong>, I spearheaded data engineering infrastructure for research projects at NYIT’s Network & Innovation Lab. My contributions yielded three co-authored papers across IEEE and Springer publications in municipal GIS data analysis, ML-driven flood vulnerability modeling, and virtual reality human-computer interaction.
            </p>

            <p>
              Complementing my research, I served as a <strong className="text-[#1B2620]">Supplemental Instruction Leader</strong> for Data Structures & Algorithms, conducting weekly problem-solving recitations for cohorts of students. By designing visual algorithm diagrams and interview-style exercises from scratch, my cohort achieved up to a 25% exam score improvement.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#76857C]">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#1C3A2D]" />
                Brooklyn, New York
              </span>
              <span className="text-[#D8D1C3]">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#1C3A2D]" />
                Sept 2022 – Dec 2025
              </span>
              <span className="text-[#D8D1C3]">·</span>
              <span className="text-[#1C3A2D] font-medium">US Citizen</span>
            </div>
          </div>

          {/* Right Column: Education & Honor Credentials Card */}
          <div className="lg:col-span-5 bg-white border border-[#E8E2D5] rounded-3xl p-6 sm:p-7 shadow-xs space-y-6">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5] flex items-center justify-center text-[#1C3A2D] shrink-0 shadow-2xs">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1B2620]">{education.school}</h3>
                <p className="text-xs text-[#76857C] font-mono">{education.location}</p>
                <p className="text-xs font-semibold text-[#1C3A2D] mt-1">{education.degree}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#F0ECE3] text-xs">
              <div className="space-y-0.5">
                <div className="text-[#76857C] text-[11px] font-mono">Cumulative GPA</div>
                <div className="font-mono font-bold text-[#1B2620] text-lg tabular-nums">
                  {education.gpa}
                </div>
                <div className="text-[10px] text-[#C59B4B] font-semibold">Highest Honors</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-[#76857C] text-[11px] font-mono">Latin Honors</div>
                <div className="font-serif font-bold text-[#1C3A2D] text-base">{education.honors}</div>
                <div className="text-[10px] text-[#76857C] font-mono">Top Tier of Class</div>
              </div>
            </div>

            {/* Prior Degree */}
            {PERSONAL_INFO.priorEducation && (
              <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D5] text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-[#1B2620]">{PERSONAL_INFO.priorEducation.school}</span>
                  <span className="font-mono text-[11px] text-[#76857C]">{PERSONAL_INFO.priorEducation.location}</span>
                </div>
                <div className="text-[#46544C]">{PERSONAL_INFO.priorEducation.degree}</div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#1C3A2D]">
                  <span>GPA: {PERSONAL_INFO.priorEducation.gpa}</span>
                  <span className="text-[#D8D1C3]">·</span>
                  <span>{PERSONAL_INFO.priorEducation.honors}</span>
                </div>
              </div>
            )}

            <div>
              <div className="text-xs font-serif font-bold uppercase tracking-wider text-[#1B2620] mb-3 flex items-center gap-1.5">
                <Award size={15} className="text-[#C59B4B]" />
                Honors Throughout Entire College Career
              </div>
              <ul className="space-y-2.5 text-xs text-[#46544C]">
                {education.awards && education.awards.map((award) => (
                  <li key={award} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C3A2D] mt-1.5 shrink-0"></span>
                    <span className="font-medium text-[#1B2620]">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
