import type {
  FeaturedProject,
  ProjectCategory,
  RepositoryItem,
} from '../data/portfolioData';

export type ThemeMode = 'light' | 'dark';

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function resolveInitialTheme(
  stored: string | null | undefined,
  prefersDark: boolean,
): ThemeMode {
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  return prefersDark ? 'dark' : 'light';
}

export function filterFeaturedProjects(
  projects: FeaturedProject[],
  category: ProjectCategory,
): FeaturedProject[] {
  if (category === 'All') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function filterRepositories(
  repositories: RepositoryItem[],
  category: ProjectCategory,
  searchQuery: string,
): RepositoryItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return repositories.filter((repo) => {
    const matchesCategory = category === 'All' || repo.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      repo.name,
      repo.displayTitle,
      repo.description,
      repo.language,
      repo.category,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function validateContactForm(
  values: ContactFormValues,
): { isValid: boolean; errors: ContactFormErrors } {
  const errors: ContactFormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedSubject = values.subject.trim();
  const trimmedMessage = values.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!emailPattern.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (trimmedSubject.length < 3) {
    errors.subject = 'Please add a short subject line.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please write a message of at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateAtsResumePlainText(): string {
  return [
    'KRISHNA PRIYA S',
    'Software Development Engineer | Full-Stack & Applied AI Systems',
    'Coimbatore, Tamil Nadu, India | +91 9047547774 | krishnapriyasri04@gmail.com',
    'GitHub: https://github.com/krishnapriyasri2004 | LinkedIn: https://linkedin.com/in/krishnapriyas',
    '',
    'SUMMARY',
    'Full-Stack Software Development Engineer (M.Sc. DCS, 8.65 CGPA) specializing in scalable React, Next.js, TypeScript, Node.js (Fastify), and Python (FastAPI) web applications, self-hosted LLM/RAG pipelines (pgvector), and interactive 3D clinical visualization systems.',
    '',
    'TECHNICAL SKILLS',
    '- Languages & Core CS: Python, TypeScript, JavaScript (ES6+), SQL, Java, Data Structures & Algorithms, OOPS, DBMS, Operating Systems, System Design',
    '- Frontend & 3D: React.js, Next.js, Vite, HTML5, CSS3, Tailwind CSS, Interactive 3D Web Modeling (Three.js / GLB)',
    '- Backend & Infrastructure: Node.js, Fastify, Express.js, FastAPI, RESTful APIs, Multi-Tenant Architecture, On-Premise Server Deployment, Docker, GCP (Cloud Run, Cloud Functions), Vercel, Railway',
    '- AI, LLMs & Databases: Self-Hosted Local LLMs (Ollama), RAG, BAAI BGE-M3 Embeddings, Prompt Engineering, Deterministic JSON Schema Validation, Dialogflow CX, PostgreSQL (pgvector, Neon DB), MySQL, Google BigQuery, MongoDB, Firestore, SQLite',
    '- Analytics & Engineering Tooling: Pandas, NumPy, PySpark, Power BI (DAX), Tableau, MS Excel, Git, GitHub, Jira, Confluence, Functional & Regression Testing',
    '',
    'PROFESSIONAL EXPERIENCE',
    'Software Development Engineer (SDE) | Nebula KnowLab (Apr 2026 - Nov 2026 | Coimbatore, Tamil Nadu)',
    '- Independently developed and deployed the WORK section of ECI on on-premise company servers to streamline organizational workflows and employee productivity.',
    '- Built modular full-stack interfaces using React, Next.js, TypeScript, Node.js (Fastify), and PostgreSQL (Neon DB) for project pipelines, Kanban boards, daily planning, scheduling, attendance, quality reviews, and support tickets.',
    '- Integrated self-hosted local LLMs (Ollama) and BAAI BGE-M3 vector embeddings (pgvector) to automate daily check-ins into structured 8-hour time logs and live Kanban cards with zero external API data exposure.',
    '- Engineered an interactive 3D Human Anatomy modeling web application (3D GLB models) and an AI Clinical Documentation & SOAP Notes platform reducing physician documentation time by over 50%.',
    '- Built automated quotation-to-Purchase-Order PDF generation workflows for The Lakshmi Mills Company Limited using Python and REST APIs.',
    '',
    'Software Product Development Intern | Kallos Solutions Pvt. Ltd. (Jun 2024 - Nov 2024 | Chennai, Tamil Nadu)',
    '- Engineered and refactored reusable frontend UI components using HTML5, CSS3, and JavaScript for the Stragiliti low-code enterprise SaaS suite.',
    '- Resolved cross-browser rendering and state-management defects across ERP modules; analyzed sales call data from Salesforce and AWS Redshift; executed functional and regression test suites.',
    '',
    'Data Analyst Intern | Technocolabs Software Pvt. Ltd. (Jul 2024 - Sep 2024 | Remote)',
    '- Built a loan risk prediction model using PySpark and Neural Networks achieving 98% accuracy on Lending Club records and created an interactive Power BI dashboard.',
    '',
    'PROJECTS',
    '- Delivery Route Optimization System (React, Next.js, TypeScript, MySQL, Docker): Implemented Dynamic Programming, Greedy, Backtracking, and Knapsack algorithms reducing transit time by 31%, travel distance by 23%, and sustaining 99.7% uptime for 100+ users.',
    '- Weather-Pulse Real-Time Streaming Dashboard (Python, BigQuery, Power BI): Automated ETL pipeline with OpenWeatherMap API, BigQuery schema storage, and Power BI DAX extreme weather alerts.',
    '- Pirate Adventure Strategy Game (Next.js, TypeScript, React, Tailwind CSS): Interactive browser strategy game applying Nash Equilibrium, Mixed Strategy, and Backtracking algorithms.',
    '',
    'EDUCATION',
    '- M.Sc. in Decision and Computing Sciences (5-Year Integrated) | Coimbatore Institute of Technology (2021 - 2026) | CGPA: 8.65 / 10.0',
    '- Crescent Castle Public School (ISC Syllabus), Ooty | HSC: 88% | SSLC: 84%',
    '',
    'CERTIFICATIONS & LEADERSHIP',
    '- Certifications: Databricks Generative AI Fundamentals, Databricks Fundamentals, IBM Machine Learning with Python, Accenture Forage Data Analytics, HackerRank SQL & Problem Solving, Scaler Java DSA, Pragyan NIT Trichy Conversational Data Analytics.',
    '- Leadership: Technical Workshop Lead for Healthcare & Enterprise AI (2026); Student Internship Coordinator, CIT (2024); Professional Service Director & Event Coordinator, RAC CIT (2023).',
  ].join('\n');
}
