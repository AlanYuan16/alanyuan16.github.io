import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Printer } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, PROJECTS, PUBLICATIONS } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const textContent = `
ALAN YUAN
${PERSONAL_INFO.location} | ${PERSONAL_INFO.citizenship} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.portfolio} | ${PERSONAL_INFO.linkedin} | ${PERSONAL_INFO.github}

TECHNICAL SKILLS
- Languages: ${SKILL_CATEGORIES[0].skills.join(', ')}
- Frameworks & Libraries: ${SKILL_CATEGORIES[1].skills.join(', ')}
- Cloud & Databases: ${SKILL_CATEGORIES[2].skills.join(', ')}
- Tools: ${SKILL_CATEGORIES[3].skills.join(', ')}

EXPERIENCE
${EXPERIENCES.map(e => `${e.role} | ${e.period}
${e.company}${e.department ? `, ${e.department}` : ''} | ${e.location}
${e.bullets.map(b => `• ${b}`).join('\n')}`).join('\n\n')}

TECHNICAL PROJECTS
${PROJECTS.map(p => `${p.title} | ${p.technologies.join(', ')} | ${p.period}
${p.bullets.map(b => `• ${b}`).join('\n')}`).join('\n\n')}

PUBLICATIONS
IEEE & Springer Publications (2024 – 2025)
${PUBLICATIONS.map(pub => `• ${pub.venue}: "${pub.title}"`).join('\n')}

EDUCATION
${PERSONAL_INFO.education.school} | ${PERSONAL_INFO.education.location}
${PERSONAL_INFO.education.degree} | GPA: ${PERSONAL_INFO.education.gpa} | ${PERSONAL_INFO.education.honors} | ${PERSONAL_INFO.education.period}
Awards: ${(PERSONAL_INFO.education.awards || []).join(', ')}

${PERSONAL_INFO.priorEducation ? `${PERSONAL_INFO.priorEducation.school} | ${PERSONAL_INFO.priorEducation.location}
${PERSONAL_INFO.priorEducation.degree} | GPA: ${PERSONAL_INFO.priorEducation.gpa} | ${PERSONAL_INFO.priorEducation.honors} | ${PERSONAL_INFO.priorEducation.period}` : ''}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#162720]/70 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E8E2D5] overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#E8E2D5] bg-[#FAF7F2] print:hidden">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#1C3A2D] text-[#FAF7F2] flex items-center justify-center font-serif text-[11px] font-bold">
              袁
            </div>
            <span className="text-xs font-serif font-bold text-[#1B2620]">Official Resume</span>
            <span className="text-[#D8D1C3]">·</span>
            <span className="text-xs font-mono text-[#76857C]">Alan Yuan · Brooklyn, NY</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1B2620] bg-white hover:bg-[#FAF7F2] border border-[#D8D1C3] rounded-lg transition-colors shadow-2xs"
            >
              {copied ? <Check size={13} className="text-emerald-700" /> : <Copy size={13} />}
              <span>{copied ? 'Copied Plaintext' : 'Copy Plaintext'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#FAF7F2] bg-[#1C3A2D] hover:bg-[#142C22] rounded-lg transition-colors shadow-2xs"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#76857C] hover:text-[#1B2620] hover:bg-[#FAF7F2] transition-colors ml-1"
              aria-label="Close resume modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans text-slate-800 leading-normal max-w-3xl mx-auto w-full print:p-0">
          {/* Header */}
          <div className="text-center pb-5 mb-5 border-b border-slate-300">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-1 font-serif">Alan Yuan</h1>
            <div className="text-xs text-slate-600 flex flex-wrap items-center justify-center gap-2 font-medium">
              <span>{PERSONAL_INFO.location}</span>
              <span className="text-slate-300">|</span>
              <span>{PERSONAL_INFO.citizenship}</span>
              <span className="text-slate-300">|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#1C3A2D] hover:underline font-semibold">{PERSONAL_INFO.email}</a>
              <span className="text-slate-300">|</span>
              <a href={PERSONAL_INFO.portfolio} target="_blank" rel="noreferrer" className="text-[#1C3A2D] hover:underline">Portfolio</a>
              <span className="text-slate-300">|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#1C3A2D] hover:underline">LinkedIn</a>
              <span className="text-slate-300">|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#1C3A2D] hover:underline">GitHub</a>
            </div>
          </div>

          {/* Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-serif">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1">
              <div>
                <strong className="text-slate-900">Languages: </strong>
                <span className="text-slate-700">{SKILL_CATEGORIES[0].skills.join(', ')}</span>
              </div>
              <div>
                <strong className="text-slate-900">Frameworks & Libraries: </strong>
                <span className="text-slate-700">{SKILL_CATEGORIES[1].skills.join(', ')}</span>
              </div>
              <div>
                <strong className="text-slate-900">Cloud & Databases: </strong>
                <span className="text-slate-700">{SKILL_CATEGORIES[2].skills.join(', ')}</span>
              </div>
              <div>
                <strong className="text-slate-900">Tools: </strong>
                <span className="text-slate-700">{SKILL_CATEGORIES[3].skills.join(', ')}</span>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 font-serif">
              Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{exp.role}</span>
                    <span className="font-normal text-slate-500 font-mono text-[11px]">{exp.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-slate-600 italic text-[11px] mb-1.5">
                    <span>{exp.company}{exp.department ? `, ${exp.department}` : ''}</span>
                    <span className="not-italic">{exp.location}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 font-serif">
              Technical Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <div className="flex items-center gap-1.5">
                      <span>{proj.title}</span>
                      <span className="font-normal text-slate-500">| {proj.technologies.join(', ')}</span>
                      {proj.isTeam && <span className="font-normal text-slate-400">| (Team)</span>}
                    </div>
                    <span className="font-normal text-slate-500 font-mono text-[11px]">{proj.period}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700 mt-1.5">
                    {proj.bullets.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-serif">
              Publications
            </h2>
            <div className="text-xs">
              <div className="flex justify-between font-bold text-slate-900 mb-1">
                <span>IEEE & Springer Publications</span>
                <span className="font-normal text-slate-500 font-mono text-[11px]">2024 – 2025</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-slate-700">
                <li>
                  <strong className="text-slate-900">IEEE SusTech 2025: </strong>
                  "Visualization Tool for NYC Open Data Platform" (First Author) | "Impact Analysis of NYC Flash Floods Using Machine Learning" (Co-Author)
                </li>
                <li>
                  <strong className="text-slate-900">Springer 2024: </strong>
                  "Evaluation Tool for Cybersickness Mitigation Techniques in Virtual Reality Environments" (Co-Author)
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2 font-serif">
              Education
            </h2>
            <div className="text-xs space-y-3">
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>{PERSONAL_INFO.education.school}</span>
                  <span className="font-normal text-slate-500 text-[11px]">{PERSONAL_INFO.education.location}</span>
                </div>
                <div className="flex justify-between text-slate-700 text-[11px] mt-0.5">
                  <span>
                    {PERSONAL_INFO.education.degree} | GPA: <strong className="font-mono text-slate-900">{PERSONAL_INFO.education.gpa}</strong> | {PERSONAL_INFO.education.honors}
                  </span>
                  <span className="font-mono text-slate-500">{PERSONAL_INFO.education.period}</span>
                </div>
                <div className="text-slate-600 mt-1 text-[11px]">
                  * <strong>Awards: </strong> {(PERSONAL_INFO.education.awards || []).join(', ')}
                </div>
              </div>

              {PERSONAL_INFO.priorEducation && (
                <div className="pt-2 border-t border-dashed border-slate-200">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{PERSONAL_INFO.priorEducation.school}</span>
                    <span className="font-normal text-slate-500 text-[11px]">{PERSONAL_INFO.priorEducation.location}</span>
                  </div>
                  <div className="flex justify-between text-slate-700 text-[11px] mt-0.5">
                    <span>
                      {PERSONAL_INFO.priorEducation.degree} | GPA: <strong className="font-mono text-slate-900">{PERSONAL_INFO.priorEducation.gpa}</strong> | {PERSONAL_INFO.priorEducation.honors}
                    </span>
                    <span className="font-mono text-slate-500">{PERSONAL_INFO.priorEducation.period}</span>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
