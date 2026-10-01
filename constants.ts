import { PersonalInfo, SkillCategory, Experience, Project, Publication, VerifiedHighlight } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Alan Yuan",
  title: "Software Engineer & Researcher",
  tagline: "Building high-integrity backend data systems, AST diff pipelines, and machine learning infrastructure.",
  email: "alanyuan402@gmail.com",
  citizenship: "US Citizen",
  location: "Brooklyn, NY",
  linkedin: "https://www.linkedin.com/in/alan-yuan/",
  github: "https://github.com/AlanYuan16",
  portfolio: "https://alan-yuan.vercel.app",
  education: {
    school: "New York Institute of Technology",
    location: "Manhattan, NY",
    degree: "Bachelor of Science in Computer Science",
    honors: "Summa Cum Laude",
    gpa: "3.82 / 4.0",
    period: "Sept 2022 – Dec 2025",
    awards: [
      "NSF FASTRAC Scholarship",
      "Presidential Honor List (Every Semester)",
      "Dean's Honor List (Every Semester)"
    ]
  },
  priorEducation: {
    school: "Kingsborough Community College (CUNY)",
    location: "Brooklyn, NY",
    degree: "Associate of Arts in Liberal Arts",
    gpa: "3.7+ / 4.0",
    honors: "Honor Roll & Dean's List",
    period: "Sept 2018 – May 2022"
  }
};

export const VERIFIED_HIGHLIGHTS: VerifiedHighlight[] = [
  {
    title: "3x Research Publications",
    metric: "3 Papers",
    badge: "IEEE & Springer",
    description: "Co-authored 3 peer-reviewed publications spanning urban open data visualization, machine learning flood analysis, and VR cybersickness; presented findings at IEEE SusTech 2025."
  },
  {
    title: "NSF FASTRAC Scholar",
    metric: "NSF Award",
    badge: "National Honor",
    description: "Awarded the highly competitive National Science Foundation FASTRAC scholarship; presented research directly at the 2024 NSF S-STEM Scholar & PI Meeting in Washington, D.C."
  },
  {
    title: "High GPA Award Throughout Entire College Career",
    metric: "3.82 GPA",
    badge: "Summa Cum Laude",
    description: "Maintained sustained academic excellence across his entire undergraduate career, earning Summa Cum Laude along with Presidential and Dean's Honor List distinctions every single semester."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    description: "Core programming languages for distributed services, ML pipelines, and web systems",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "PHP", "Bash", "Dart"]
  },
  {
    name: "Frameworks & Libraries",
    description: "Backend architectures, asynchronous APIs, scientific computing, and reactive frontend",
    skills: ["FastAPI", "Flask", "Node.js", "SQLAlchemy", "React", "Next.js", "Angular", "React Native", "PyTorch", "NumPy", "Pandas", "Scikit-learn"]
  },
  {
    name: "Cloud & Databases",
    description: "Relational, cloud storage, real-time databases, and infrastructure",
    skills: ["AWS", "PostgreSQL", "MySQL", "SQLite", "Supabase", "Firebase", "NoSQL"]
  },
  {
    name: "Tools & Infrastructure",
    description: "Containerization, DevOps pipelines, testing suites, and API protocols",
    skills: ["Git", "Docker", "Linux", "CI/CD", "REST APIs", "WebSockets", "JWT/OAuth", "Postman", "Pytest", "Jest", "Gemini CLI", "Agile/Scrum"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "swe-research",
    role: "Software Engineer – Research",
    company: "New York Institute of Technology",
    department: "Network & Innovation Lab",
    location: "Manhattan, NY",
    period: "July 2024 – Dec 2025",
    bullets: [
      "Engineered full-stack data visualization platforms contributing to 3 peer-reviewed publications across IEEE and Springer.",
      "Developed Python/Pandas data pipelines processing 500+ NYC open datasets, enabling ML models achieving 82% classification accuracy.",
      "Collaborated with NYU researchers on flood sensor data integration and geospatial analytics for urban resilience research.",
      "Migrated the lab website's profile images to Supabase and built role-based CRUD administrative tools, eliminating code edits for routine updates.",
      "Mentored junior researchers on software best practices and delivered features across 2-week Agile sprints."
    ],
    metrics: [
      { label: "Publications Co-Authored", value: "3 Papers" },
      { label: "Active Dashboard Users", value: "100+ Annual" },
      { label: "ML Model Accuracy", value: "82%" },
      { label: "Cleaned Datasets", value: "500+" }
    ],
    tags: ["Python", "FastAPI", "Supabase", "Pandas", "REST APIs", "PostgreSQL", "Research"]
  },
  {
    id: "si-leader",
    role: "Supplemental Instruction Leader – Data Structures & Algorithms",
    company: "New York Institute of Technology",
    location: "Manhattan, NY",
    period: "Sept 2025 – Dec 2025",
    bullets: [
      "Led weekly structured problem-solving sessions for 10+ undergraduates covering arrays, linked lists, stacks, queues, trees, graphs, recursion, sorting algorithms, and asymptotic analysis.",
      "Designed interview-style coding exercises covering DFS, BFS, dynamic programming, hash maps, two pointers, and sliding-window techniques.",
      "Students demonstrated up to 25% improvement in exam performance following session participation; contributed to a 15% increase in course completion rates."
    ],
    metrics: [
      { label: "Cohort Score Gain", value: "+25%" },
      { label: "Course Completion Boost", value: "+15%" },
      { label: "Core Topics Covered", value: "9 DSA Domains" }
    ],
    tags: ["Data Structures", "Algorithms", "DFS / BFS", "Dynamic Programming", "Teaching", "Mentorship"]
  },
  {
    id: "peer-mentor",
    role: "Peer Mentor – Computer Science",
    company: "New York Institute of Technology",
    location: "Manhattan, NY",
    period: "2024 – 2025",
    bullets: [
      "Provided individualized support on coursework, debugging strategies, and technical interview preparation for CS students.",
      "Guided students through data structures, algorithms, and software engineering fundamentals at their own pace.",
      "Facilitated pair programming and code reviews to build strong debugging discipline."
    ],
    metrics: [
      { label: "Mentorship Focus", value: "CS Fundamentals" },
      { label: "Practice", value: "Pair Programming" }
    ],
    tags: ["Mentorship", "Debugging", "Code Review", "Pedagogy"]
  },
  {
    id: "urep-assistant",
    role: "Undergraduate Research Assistant (UREP)",
    company: "New York Institute of Technology",
    location: "Manhattan, NY",
    period: "Oct 2023 – May 2024",
    bullets: [
      "Rebuilt a core React component library with WCAG 2.1 AA compliance, improving accessibility audit scores by 35%.",
      "Debugged a Folium heat map where color intensity was inverted relative to underlying data values, tracing the issue to the colormap direction and fixing it by reversing the color scale.",
      "Reduced QA-reported UI bugs by 30% through test-driven development and structured code reviews.",
      "Conducted a literature review of existing urban visualization tools, contributing to a first-author IEEE SusTech 2025 publication and co-authored Springer 2024 VR research."
    ],
    metrics: [
      { label: "Accessibility Score Gain", value: "+35%" },
      { label: "Bug Density Reduction", value: "-30%" },
      { label: "Publication Outcome", value: "IEEE & Springer" }
    ],
    tags: ["Python", "Folium", "GIS & Mapping", "React", "WCAG 2.1 AA", "TDD"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "prism",
    title: "PRism",
    subtitle: "Context-Aware AI Code Review Engine & Pipeline",
    period: "Jan 2026 – Present",
    technologies: ["Python", "FastAPI", "SQLite", "Gemini AI", "TypeScript", "Next.js 14"],
    bullets: [
      "Engineered a Python diff chunker that splits large PRs without breaking function context for coherent AI review on arbitrarily large diffs.",
      "Built an async FastAPI backend with webhook handling, a background task queue, and commit-SHA idempotency to prevent duplicate reviews on retries; shipped the pipeline with CI-safe retry handling.",
      "Added exponential backoff for Gemini calls, SHA256 diff caching, and per-IP rate limiting to protect the review pipeline.",
      "Developed a Next.js 14 dashboard in TypeScript with severity filters, code-quality trends, and a CLI for local diff review."
    ],
    githubUrl: "https://github.com/AlanYuan16",
    isTeam: false,
    highlightMetric: "Zero-Context-Loss AST Chunker"
  },
  {
    id: "citibike-ml",
    title: "Citi Bike Demand Predictive Analytics",
    subtitle: "Big Data Machine Learning & Time-Series Forecasting",
    period: "Fall 2025",
    technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Gradient Boosted Trees", "ARIMA"],
    bullets: [
      "Developed machine learning models to forecast hourly station-level demand across the Citi Bike network, analyzing millions of trip records from the official MTA system portal.",
      "Engineered temporal features (hour of day, day of week, month, weekend indicator) capturing bimodal morning (8 AM) and evening (5–6 PM) commuting peaks and transit hub concentrations.",
      "Trained and evaluated Linear Regression (R² ≈ 0.11), Gradient Boosted Trees (R² = 0.63), and Random Forest (R² = 0.70, RMSE 5.57, MAE 3.58), explaining 70% of variance.",
      "Implemented ARIMA(4,1,3) time series model with ADF stationarity testing and stepwise AIC parameter minimization, projecting 90-day predictive horizons for station rebalancing."
    ],
    githubUrl: "https://github.com/AlanYuan16",
    isTeam: true,
    highlightMetric: "Random Forest R² = 0.70"
  },
  {
    id: "nyc-opendata",
    title: "NYC Open Data Visualization Tool",
    subtitle: "High-Throughput Municipal Geospatial Platform",
    period: "2024 – 2025",
    technologies: ["Python", "Next.js", "Pandas", "REST APIs", "Folium GIS"],
    bullets: [
      "Engineered full-stack interactive dashboard analyzing open municipal datasets; research findings published in IEEE SusTech 2025.",
      "Engineered automated data batch pipelines cleaning and structuring 500+ datasets for predictive environmental and municipal modeling.",
      "Collaborated with NYU researchers on flood sensor data integration and spatial analysis to evaluate vulnerable storm catchment zones across New York City."
    ],
    githubUrl: "https://github.com/AlanYuan16",
    isTeam: false,
    highlightMetric: "Published at IEEE SusTech"
  },
  {
    id: "8puzzle",
    title: "A* 8-Puzzle Solver",
    subtitle: "High-Performance Heuristic Search Service",
    period: "Oct 2025",
    technologies: ["Python", "Flask", "REST API", "Git", "JavaScript"],
    bullets: [
      "Engineered an A* service with Manhattan Distance heuristic, solving all 181,440 puzzle states with provably optimal paths.",
      "Designed a Flask REST API with priority-queue state exploration, solvability checks before computation, and sub-200ms response times.",
      "Built unit testing suite achieving 85% coverage and deployed the API with complete UML specifications."
    ],
    githubUrl: "https://github.com/AlanYuan16",
    isTeam: true,
    highlightMetric: "181,440 States Verified"
  },
  {
    id: "turing-bot",
    title: "AI Discord Bot – Turing Test Simulation",
    subtitle: "Multi-Server Anonymous Social Turing Game",
    period: "Sept 2025",
    technologies: ["Python", "Discord.py", "Google Gemini API", "REST APIs"],
    bullets: [
      "Built a multi-server Discord bot using the Gemini API and custom prompts to assign anonymous human/AI roles across concurrent sessions.",
      "Architected randomized role assignment and direct-message anonymity to manage concurrent player interactions, achieving 77% complexity reduction.",
      "Documented the system with comprehensive UML and architecture diagrams."
    ],
    githubUrl: "https://github.com/AlanYuan16",
    isTeam: true,
    highlightMetric: "Prompt-Engineered Role Obscurity"
  },
  {
    id: "focus-flow",
    title: "Focus Flow App",
    subtitle: "Cross-Platform Productivity & Pomodoro Architecture",
    period: "Jan 2025 – May 2025",
    technologies: ["TypeScript", "React Native", "Node.js", "Firebase", "JWT"],
    bullets: [
      "Architected cross-platform Pomodoro productivity app with 99.5% uptime developed using 2-week Agile Scrum sprints.",
      "Developed Firebase backend with optimized CRUD operations and JWT authentication, reducing data latency by 60%."
    ],
    githubUrl: "https://github.com/AlanYuan16",
    isTeam: false,
    highlightMetric: "99.5% Uptime Architecture"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-sustech-open-data",
    title: "Visualization Tool for NYC Open Data Platform",
    venue: "IEEE SusTech 2025 (Conference on Technologies for Sustainability)",
    year: "2025",
    category: "IEEE",
    description: "Architected interactive visualization interfaces and high-throughput data processing workflows analyzing massive public municipal datasets for urban sustainability research. (First Author)",
    highlights: [
      "First-author research contribution developed during UREP & Network & Innovation Lab tenure",
      "Presented findings at IEEE SusTech 2025 conference",
      "Presented at 2024 NSF S-STEM Scholar & PI Meeting in Washington, D.C."
    ],
    relatedField: "Urban Data Systems & Visualization"
  },
  {
    id: "pub-sustech-floods",
    title: "Impact Analysis of NYC Flash Floods with Machine Learning",
    venue: "IEEE SusTech 2025",
    year: "2025",
    category: "IEEE",
    description: "Engineered batch Python/Pandas transformation pipelines structuring 500+ hydrological and precipitation records, training predictive models achieving 82% accuracy in flash flood hazard prediction. (Co-Author)",
    highlights: [
      "500+ geospatial and temporal climate datasets cleaned and normalized",
      "82% predictive classification accuracy on vulnerable NYC catchment zones",
      "Co-authored with academic collaborators and presented to national sustainability researchers"
    ],
    relatedField: "Applied Machine Learning & Environmental Analytics"
  },
  {
    id: "pub-springer-vr",
    title: "Evaluation Tool for Cybersickness Mitigation Techniques in Virtual Reality Environments",
    venue: "Springer Nature 2024",
    year: "2024",
    category: "Springer",
    description: "Built backend logging and empirical assessment infrastructure to quantify biometric and user-experience responses to visual field constriction and reference-frame techniques for VR sickness reduction. (Co-Author)",
    highlights: [
      "Adopted data collection infrastructure for empirical VR human-computer interaction studies",
      "Peer-reviewed publication indexed in Springer Nature database"
    ],
    relatedField: "Human-Computer Interaction & VR Systems"
  }
];
