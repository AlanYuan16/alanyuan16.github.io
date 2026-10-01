
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", subtitle }) => {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{title}</h2>
          <div className="w-12 h-1 bg-purple-600 mb-4 rounded-full"></div>
          {subtitle && <p className="text-slate-500 text-lg">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
