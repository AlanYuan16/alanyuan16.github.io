import React, { useState } from 'react';
import { Search, Code2, Layers, Database, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allSkillsFlat = SKILL_CATEGORIES.flatMap(cat =>
    cat.skills.map(skill => ({ skill, category: cat.name }))
  );

  const filteredSkills = allSkillsFlat.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = item.skill.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="skills" className="py-20 px-6 border-b border-[#E8E2D5] bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-mono font-bold tracking-widest text-[#1C3A2D] uppercase mb-2">
            05. Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B2620] tracking-tight">
            Technical Toolchain & Skills
          </h2>
          <p className="text-sm text-[#46544C] mt-2 max-w-2xl">
            Proficiencies across backend engineering, cloud databases, asynchronous APIs, machine learning pipelines, and modern frontend tools.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Segmented Controls for Category Filtering */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#E8E2D5] rounded-2xl overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#1C3A2D] text-[#FAF7F2] shadow-2xs'
                  : 'text-[#46544C] hover:text-[#1B2620]'
              }`}
            >
              All Skills ({allSkillsFlat.length})
            </button>
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-colors ${
                  selectedCategory === cat.name
                    ? 'bg-[#1C3A2D] text-[#FAF7F2] shadow-2xs'
                    : 'text-[#46544C] hover:text-[#1B2620]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#76857C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. FastAPI, Supabase)..."
              className="pl-9 pr-3.5 py-2 text-xs rounded-2xl border border-[#E8E2D5] bg-white text-[#1B2620] focus:outline-none focus:ring-2 focus:ring-[#1C3A2D]/20 focus:border-[#1C3A2D] w-full sm:w-64 transition-all"
            />
          </div>
        </div>

        {/* Categorized Displays or Filtered Results */}
        {selectedCategory === 'all' && !searchQuery ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map(cat => (
              <div
                key={cat.name}
                className="bg-white border border-[#E8E2D5] rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-[#1B2620] flex items-center gap-2">
                    {cat.name === 'Languages' && <Code2 size={18} className="text-[#1C3A2D]" />}
                    {cat.name === 'Frameworks & Libraries' && <Layers size={18} className="text-[#1C3A2D]" />}
                    {cat.name === 'Cloud & Databases' && <Database size={18} className="text-[#1C3A2D]" />}
                    {cat.name === 'Tools & Infrastructure' && <Wrench size={18} className="text-[#1C3A2D]" />}
                    {cat.name}
                  </h3>
                  <span className="text-xs font-mono text-[#76857C]">
                    {cat.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-[#46544C] leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills as clean unboxed inline elements */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#FAF7F2] border border-[#E8E2D5] text-[#2C3831] rounded-lg text-xs font-mono font-medium hover:border-[#1C3A2D]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#E8E2D5] rounded-3xl p-7 shadow-xs">
            <div className="text-xs font-mono text-[#76857C] mb-4">
              Found {filteredSkills.length} matches:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {filteredSkills.map(({ skill, category }) => (
                <div
                  key={skill}
                  className="px-3.5 py-1.5 bg-[#FAF7F2] border border-[#E8E2D5] rounded-xl text-xs font-mono flex items-center gap-2"
                >
                  <span className="font-semibold text-[#1B2620]">{skill}</span>
                  <span className="text-[10px] text-[#76857C] font-sans">({category})</span>
                </div>
              ))}
              {filteredSkills.length === 0 && (
                <p className="text-xs text-[#76857C] py-4">No matching technical skills found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
