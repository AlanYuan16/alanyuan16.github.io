export interface Experience {
  id: string;
  role: string;
  company: string;
  department?: string;
  location: string;
  period: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
  tags?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  period: string;
  technologies: string[];
  bullets: string[];
  githubUrl?: string;
  isTeam?: boolean;
  highlightMetric?: string;
  paperLink?: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  category: 'IEEE' | 'Springer';
  description: string;
  highlights?: string[];
  relatedField: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export interface DegreeItem {
  school: string;
  location: string;
  degree: string;
  gpa: string;
  honors?: string;
  period: string;
  awards?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  citizenship: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
  education: DegreeItem;
  priorEducation?: DegreeItem;
}

export interface VerifiedHighlight {
  title: string;
  metric: string;
  description: string;
  badge: string;
}
