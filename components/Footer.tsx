import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="py-14 px-6 bg-[#FAF7F2] text-xs text-[#76857C]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#1C3A2D] text-[#FAF7F2] flex items-center justify-center font-serif text-xs font-bold">
            袁
          </div>
          <div>
            <span className="font-serif font-bold text-sm text-[#1B2620]">Alan Yuan</span>
            <span className="mx-2 text-[#D8D1C3]">·</span>
            <span>Software Engineer & Researcher</span>
            <span className="mx-2 text-[#D8D1C3]">·</span>
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-6 font-medium">
          <button
            onClick={onOpenResume}
            className="hover:text-[#1C3A2D] transition-colors"
          >
            Full Resume
          </button>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1C3A2D] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1C3A2D] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#1C3A2D] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
