import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Cpu, GitPullRequest, Bot, TrendingUp, BarChart3, Smartphone, Filter } from 'lucide-react';
import { PROJECTS } from '../constants';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ml' | 'systems' | 'web'>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'ml') {
      return (
        proj.id === 'citibike-ml' ||
        proj.id === 'nyc-opendata' ||
        proj.id === 'turing-bot'
      );
    }
    if (filter === 'systems') {
      return (
        proj.id === 'prism' ||
        proj.id === '8puzzle' ||
        proj.id === 'citibike-ml'
      );
    }
    if (filter === 'web') {
      return (
        proj.id === 'nyc-opendata' ||
        proj.id === 'focus-flow' ||
        proj.id === 'prism'
      );
    }
    return true;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'prism':
        return <GitPullRequest size={18} />;
      case 'citibike-ml':
        return <TrendingUp size={18} />;
      case 'nyc-opendata':
        return <BarChart3 size={18} />;
      case '8puzzle':
        return <Cpu size={18} />;
      case 'turing-bot':
        return <Bot size={18} />;
      case 'focus-flow':
        return <Smartphone size={18} />;
      default:
        return <Cpu size={18} />;
    }
  };

  return (
    <section id="projects" className="py-20 px-6 border-b border-[#E8E2D5] bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-[#1C3A2D] uppercase mb-2">
              03. Technical Systems & Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B2620] tracking-tight">
              Featured Technical Projects
            </h2>
            <p className="text-sm text-[#46544C] mt-2 max-w-2xl">
              From AST-aware AI code review engines and time-series Citi Bike demand modeling to heuristic state exploration algorithms and full-stack GIS dashboards.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#E8E2D5] rounded-2xl overflow-x-auto shrink-0 shadow-2xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                filter === 'all'
                  ? 'bg-[#1C3A2D] text-[#FAF7F2]'
                  : 'text-[#46544C] hover:text-[#1B2620]'
              }`}
            >
              All ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('ml')}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                filter === 'ml'
                  ? 'bg-[#1C3A2D] text-[#FAF7F2]'
                  : 'text-[#46544C] hover:text-[#1B2620]'
              }`}
            >
              Big Data & ML
            </button>
            <button
              onClick={() => setFilter('systems')}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                filter === 'systems'
                  ? 'bg-[#1C3A2D] text-[#FAF7F2]'
                  : 'text-[#46544C] hover:text-[#1B2620]'
              }`}
            >
              Backend Systems
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                filter === 'web'
                  ? 'bg-[#1C3A2D] text-[#FAF7F2]'
                  : 'text-[#46544C] hover:text-[#1B2620]'
              }`}
            >
              Web & Mobile
            </button>
          </div>
        </div>

        {/* Responsive Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((proj) => {
            return (
              <div
                key={proj.id}
                className="flex flex-col justify-between bg-white border border-[#E8E2D5] rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#1C3A2D]/40 transition-all group"
              >
                <div>
                  {/* Top Bar of Project Card */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#F0ECE3]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] border border-[#E8E2D5] text-[#1C3A2D] flex items-center justify-center transition-colors group-hover:bg-[#1C3A2D] group-hover:text-[#FAF7F2]">
                        {getProjectIcon(proj.id)}
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#76857C]">
                        {proj.period}
                      </span>
                    </div>

                    {proj.highlightMetric && (
                      <span className="text-[10px] font-mono font-semibold text-[#1C3A2D] bg-[#EAF1ED] px-2.5 py-0.5 rounded-full">
                        {proj.highlightMetric}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-serif font-bold text-[#1B2620] tracking-tight mb-1 group-hover:text-[#1C3A2D] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  {proj.subtitle && (
                    <div className="text-xs font-medium text-[#C59B4B] mb-3">
                      {proj.subtitle} {proj.isTeam && <span className="text-[#76857C] font-normal font-mono">· Team</span>}
                    </div>
                  )}

                  {/* Technologies: Zero-Pill Discipline */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#76857C] mb-5">
                    {proj.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="text-[#46544C]">{tech}</span>
                        {tIdx < proj.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-[#D8D1C3]">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#46544C] leading-relaxed mb-6">
                    {proj.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D8D1C3] mt-2 shrink-0"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link: Direct to GitHub */}
                <div className="pt-4 border-t border-[#F0ECE3] flex items-center justify-between">
                  {proj.githubUrl ? (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-[#1C3A2D] hover:text-[#142C22] transition-colors font-mono"
                    >
                      <Github size={15} />
                      <span>View on GitHub</span>
                      <ArrowUpRight size={13} className="text-[#76857C]" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-[#76857C]">NYIT Big Data Project</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
