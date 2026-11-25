export type ProjectCategory = 'All' | 'Applied AI' | 'Full-Stack' | 'Data & BI';

export interface ProfileInfo {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  phone: string;
  email: string;
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  heroImage: string;
}

export interface KeyMetric {
  value: string;
  label: string;
  context: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  period: string;
  organization: string;
  impactMetric: string;
  summary: string;
  challenge: string;
  architecture: string;
  outcomes: string[];
  stack: string[];
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  featuredSpan?: 'wide' | 'standard';
}

export interface RepositoryItem {
  name: string;
  displayTitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  language: string;
  updated: string;
  visibility: 'Public' | 'Private';
  description: string;
  url: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  shortLabel: string;
  summary: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  focus: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  year: string;
  description: string;
}

export const PROFILE: ProfileInfo = {
  name: 'Krishna Priya S',
  role: 'Software Development Engineer',
  tagline: 'Full-Stack Architecture, Local AI Systems & Analytical Engineering.',
  summary:
    'M.Sc. Decision and Computing Sciences graduate (8.65 CGPA) building production React, Next.js, TypeScript, Fastify, and FastAPI systems—from on-premise enterprise workspaces powered by local LLMs and pgvector to interactive 3D clinical visualization and real-time analytics pipelines.',
  location: 'Coimbatore, Tamil Nadu, India',
  phone: '+91 9047547774',
  email: 'krishnapriyasri04@gmail.com',
  githubUrl: 'https://github.com/krishnapriyasri2004',
  githubHandle: 'github.com/krishnapriyasri2004',
  linkedinUrl: 'https://linkedin.com/in/krishnapriyas',
  linkedinHandle: 'linkedin.com/in/krishnapriyas',
  heroImage: '/src/assets/images/hero_editorial_workspace_1795613708824.jpg',
};

export const KEY_METRICS: KeyMetric[] = [
  {
    value: '8.65 / 10',
    label: 'M.Sc. Integrated CGPA',
    context: 'Coimbatore Institute of Technology (2021–2026)',
  },
  {
    value: '>50%',
    label: 'Documentation Time Saved',
    context: 'AI Clinical SOAP Notes platform at Nebula KnowLab',
  },
  {
    value: '31%',
    label: 'Faster Delivery Transit',
    context: '23% distance reduction across multi-stop route optimization',
  },
  {
    value: '98%',
    label: 'Credit Risk Accuracy',
    context: 'PySpark & Neural Network modeling on Lending Club records',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'nebula-knowlab',
    company: 'Nebula KnowLab',
    role: 'Software Development Engineer (SDE)',
    period: 'Apr 2026 – Nov 2026',
    location: 'Coimbatore, Tamil Nadu',
    summary:
      'Led full-stack product engineering and applied AI integration across on-premise enterprise workspaces, clinical 3D healthcare tools, and automated manufacturing workflows.',
    highlights: [
      'Independently developed and deployed the WORK section of ECI on on-premise company servers to streamline organizational workflows and employee productivity across the organization.',
      'Built modular full-stack interfaces using React, Next.js, TypeScript, Node.js (Fastify), and PostgreSQL (Neon DB) covering project pipelines, Kanban task management, daily planning, scheduling, attendance, quality reviews, and support ticket management.',
      'Developed administrative and employee-facing workflows supporting task assignment, progress tracking, team coordination, and real-time operational visibility inside a unified enterprise interface.',
      'Integrated self-hosted local LLMs (Ollama) and BAAI BGE-M3 vector embeddings (pgvector) to automate daily check-ins into structured 8-hour time logs and live Kanban cards with zero external API data exposure.',
      'Engineered an interactive 3D Human Anatomy modeling web application (3D GLB models) assisting clinicians with real-time patient monitoring and symptom visualization, alongside an AI Clinical Documentation & SOAP Notes platform (ai-in-healthcare-app) that reduced physician documentation time by over 50%.',
      'Built automated quotation-to-Purchase-Order PDF generation workflows for enterprise manufacturing clients (The Lakshmi Mills Company Limited) using Python and REST APIs.',
    ],
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Fastify',
      'FastAPI',
      'PostgreSQL (pgvector)',
      'Ollama',
      'Three.js / GLB',
    ],
  },
  {
    id: 'kallos-solutions',
    company: 'Kallos Solutions Pvt. Ltd.',
    role: 'Software Product Development Intern',
    period: 'Jun 2024 – Nov 2024',
    location: 'Chennai, Tamil Nadu',
    summary:
      'Contributed frontend UI engineering, ERP module debugging, and sales analytics support for the Stragiliti low-code enterprise SaaS suite.',
    highlights: [
      'Engineered, refactored, and maintained reusable frontend UI components using HTML5, CSS3, and JavaScript for the Stragiliti SaaS platform across Smart Metrics and Contracts & Billing modules.',
      'Diagnosed and resolved cross-browser rendering bottlenecks and state-management defects across core ERP workflows, improving responsiveness, usability, and interface stability.',
      'Supported a data-driven sales optimization initiative by analyzing internal sales call data from Salesforce and AWS Redshift to summarize key team engagement metrics.',
      'Executed functional and regression testing across multiple ERP modules to identify defects and validate UI fixes ahead of production releases.',
    ],
    stack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Salesforce',
      'AWS Redshift',
      'ERP QA & Regression Testing',
    ],
  },
  {
    id: 'technocolabs',
    company: 'Technocolabs Software Pvt. Ltd.',
    role: 'Data Analyst Intern',
    period: 'Jul 2024 – Sep 2024',
    location: 'Remote',
    summary:
      'Built predictive credit-risk models and executive BI dashboards to surface borrower risk drivers in peer-to-peer lending.',
    highlights: [
      'Built a loan risk prediction model using PySpark and Neural Networks, achieving 98% accuracy on Lending Club borrower records.',
      'Created an interactive Power BI dashboard spotlighting primary risk factors including debt-to-income ratio and repayment behavior.',
      'Translated complex credit and delinquency datasets into clear visual insights supporting risk reduction in peer-to-peer (P2P) lending.',
    ],
    stack: ['PySpark', 'Neural Networks', 'Python', 'Power BI', 'Statistical Analysis'],
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'eci-workspace',
    title: 'ECI Enterprise Workspace & Local RAG Engine',
    subtitle: 'On-premise operational platform with private LLM check-in automation',
    category: 'Applied AI',
    period: 'Apr 2026 – Nov 2026',
    organization: 'Nebula KnowLab',
    impactMetric: 'Zero external data exposure · Org-wide on-premise rollout',
    summary:
      'Unified enterprise workspace covering Kanban pipelines, daily planning, attendance, quality reviews, and support tickets—augmented by local LLMs and pgvector embeddings that turn raw check-ins into structured 8-hour logs.',
    challenge:
      'Enterprise teams needed unified visibility across project delivery, attendance, and support tickets without sending proprietary operational text to external cloud LLM APIs.',
    architecture:
      'Built a modular React, Next.js, and TypeScript client backed by Node.js (Fastify) APIs and PostgreSQL with pgvector. Local Ollama models paired with BAAI BGE-M3 embeddings parse natural-language check-ins using deterministic JSON schema validation.',
    outcomes: [
      'Deployed independently on on-premise servers for company-wide administrative and employee workflows.',
      'Automated daily check-ins directly into validated 8-hour time logs and synchronized Kanban cards.',
      'Eliminated third-party API exposure while maintaining low-latency vector retrieval.',
    ],
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'Fastify',
      'PostgreSQL',
      'pgvector',
      'Ollama',
      'BAAI BGE-M3',
    ],
    image: '/src/assets/images/project_eci_workspace_1795613713817.jpg',
    imageAlt:
      'Architectural isometric visualization of interlocking modular enterprise workflow blocks linked by cobalt optical pathways',
    featuredSpan: 'wide',
  },
  {
    id: 'clinical-3d-anatomy',
    title: '3D Human Anatomy & Clinical AI SOAP Suite',
    subtitle: 'Interactive 3D GLB symptom visualization and automated physician notes',
    category: 'Applied AI',
    period: '2026',
    organization: 'Nebula KnowLab',
    impactMetric: '>50% reduction in physician documentation time',
    summary:
      'Interactive 3D anatomical modeling web application for clinician patient monitoring and spatial symptom inspection, paired with an AI Clinical Documentation & SOAP Notes platform.',
    challenge:
      'Clinicians spent disproportionate time manually charting structured SOAP notes and cross-referencing patient symptoms across disconnected text records.',
    architecture:
      'Engineered an interactive Three.js / GLB web viewer in React and TypeScript for real-time anatomical inspection alongside a FastAPI clinical documentation pipeline generating validated SOAP summaries.',
    outcomes: [
      'Reduced physician clinical documentation overhead by more than 50% in workflow trials.',
      'Enabled interactive 3D symptom visualization for clearer clinician-to-patient walkthroughs.',
      'Delivered structured, deterministic clinical JSON outputs suitable for downstream EMR records.',
    ],
    stack: ['React', 'TypeScript', 'Three.js / GLB', 'FastAPI', 'Local LLMs', 'JSON Schema'],
    image: '/src/assets/images/project_clinical_3d_anatomy_1795613713812.jpg',
    imageAlt:
      'Translucent glass and wireframe 3D human upper torso anatomical sculpture illuminated with subtle cobalt rim light',
    featuredSpan: 'standard',
  },
  {
    id: 'delivery-route-optimization',
    title: 'Delivery Route Optimization System (RouteWise)',
    subtitle: 'Multi-algorithm logistics planner for fleet routing and cargo efficiency',
    category: 'Full-Stack',
    period: 'Jan 2024 – Apr 2024',
    organization: 'Academic & Full-Stack Engineering',
    impactMetric: '31% faster transit · 23% shorter routes · 99.7% uptime',
    summary:
      'Scalable full-stack dispatch application implementing Dynamic Programming, Greedy, Backtracking, and Knapsack algorithms to optimize multi-stop delivery sequences and cargo allocation.',
    challenge:
      'Last-mile delivery fleets face compounding transit delays and underutilized vehicle capacity when routes and parcel loads are scheduled independently.',
    architecture:
      'Combined a Next.js, React, and TypeScript dashboard with RESTful APIs backed by MySQL and Dockerized microservices supporting 100+ concurrent users under Agile release practices.',
    outcomes: [
      'Reduced simulated delivery transit time by 31% and total travel distance by 23%.',
      'Achieved 91% cargo space optimization through integrated Knapsack packing logic.',
      'Sustained 99.7% system uptime across 100+ concurrent test sessions in Docker containers.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'MySQL', 'Docker', 'REST APIs', 'Algorithms'],
    image: '/src/assets/images/project_route_optimization_1795613712932.jpg',
    imageAlt:
      'Overhead matte slate topographic city grid relief model with glowing cobalt optimal delivery vector pathways',
    githubUrl:
      'https://github.com/krishnapriyasri2004/RouteWise-Smart-Delivery-Optimization-Platform',
    featuredSpan: 'standard',
  },
  {
    id: 'weather-pulse-streaming',
    title: 'Weather-Pulse Real-Time Streaming Dashboard',
    subtitle: 'Automated Coimbatore meteorological ETL pipeline & BI alerting',
    category: 'Data & BI',
    period: 'Mar 2025 – Apr 2025',
    organization: 'Data Engineering Project',
    impactMetric: 'Real-time BigQuery ingestion · Extreme weather DAX alerts',
    summary:
      'End-to-end streaming telemetry pipeline ingesting OpenWeatherMap feeds into structured Google BigQuery tables and powering live Power BI dashboards with custom DAX thresholds.',
    challenge:
      'Local weather monitoring required automated ingestion, schema governance, and threshold-based anomaly alerting rather than manual spreadsheet snapshots.',
    architecture:
      'Built an automated Python ETL connector querying OpenWeatherMap APIs, enforcing typed BigQuery schemas, and publishing interactive Power BI reports with dynamic DAX alert measures.',
    outcomes: [
      'Automated continuous ingestion and historical storage for Coimbatore meteorological signals.',
      'Created executive Power BI visualizations with real-time alerts for extreme temperature and rainfall spikes.',
      'Structured clean BigQuery tables ready for longitudinal climate and trend analysis.',
    ],
    stack: ['Python', 'Google BigQuery', 'Power BI', 'DAX', 'OpenWeatherMap API', 'ETL'],
    image: '/src/assets/images/project_weather_analytics_1795613723846.jpg',
    imageAlt:
      'Layered smoky glass strata and brushed titanium wave ribbons capturing atmospheric telemetry curves',
    githubUrl:
      'https://github.com/krishnapriyasri2004/Weather-Pulse-Real-Time-Streaming-Dashboard-CBE',
    featuredSpan: 'wide',
  },
  {
    id: 'pirate-adventure-game',
    title: 'Pirate Adventure Strategy Game',
    subtitle: 'Game-theory-driven browser strategy engine with adaptive AI opponents',
    category: 'Full-Stack',
    period: 'Feb 2025 – May 2025',
    organization: 'Interactive Systems Project',
    impactMetric: 'Nash Equilibrium · Mixed Strategy · Backtracking AI',
    summary:
      'Interactive browser-based strategy game applying formal Game Theory—Nash Equilibrium, Mixed Strategy payoffs, Backtracking search, and Bribery dynamics—to drive adaptive opponent decisions.',
    challenge:
      'Static rule-based game opponents quickly become predictable, flattening strategic tension and replay value.',
    architecture:
      'Architected a responsive Next.js, TypeScript, React, and Tailwind CSS state engine evaluating payoff matrices and mixed-strategy probabilities on every turn.',
    outcomes: [
      'Translated mathematical game theory concepts into tactile, responsive web gameplay.',
      'Modeled dynamic bribery and coalition trade-offs that adapt to player risk profiles.',
      'Published open-source under the MIT license with modular TypeScript state logic.',
    ],
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Game Theory', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/krishnapriyasri2004/Pirate-Adventure-Game',
    featuredSpan: 'standard',
  },
  {
    id: 'lending-club-risk',
    title: 'Lending Club Credit Risk Prediction & BI Suite',
    subtitle: 'PySpark neural credit scoring and borrower risk intelligence',
    category: 'Data & BI',
    period: 'Jul 2024 – Sep 2024',
    organization: 'Technocolabs Software Pvt. Ltd.',
    impactMetric: '98% prediction accuracy on Lending Club credit records',
    summary:
      'Large-scale borrower risk classification pipeline using PySpark and Neural Networks, paired with an interactive Power BI dashboard isolating debt-to-income and default indicators.',
    challenge:
      'Peer-to-peer lending portfolios suffer elevated default losses when high-dimensional borrower features are evaluated without scalable risk scoring.',
    architecture:
      'Engineered distributed feature preparation in PySpark, trained neural network classifiers for loan default risk, and surfaced risk cohorts inside Power BI.',
    outcomes: [
      'Achieved 98% predictive accuracy across Lending Club historical credit records.',
      'Highlighted high-leverage risk indicators such as debt-to-income ratios for lending teams.',
      'Bridged ML model evaluation with executive-ready visual storytelling in Power BI.',
    ],
    stack: ['PySpark', 'Neural Networks', 'Python', 'Pandas', 'Power BI', 'Credit Analytics'],
    githubUrl: 'https://github.com/krishnapriyasri2004/Demystifying-Risk-of-Lending-Club',
    featuredSpan: 'standard',
  },
];

export const REPOSITORIES: RepositoryItem[] = [
  {
    name: 'ATS-Tracking-AI-Assistant-System',
    displayTitle: 'ATS Tracking AI Assistant System',
    category: 'Applied AI',
    language: 'TypeScript',
    updated: 'Dec 2025',
    visibility: 'Public',
    description:
      'Resume evaluation and ATS alignment assistant scoring candidate profiles against role requirements.',
    url: 'https://github.com/krishnapriyasri2004/ATS-Tracking-AI-Assistant-System',
  },
  {
    name: 'WILDLIFE-BEHAVIOR-MONITORING-AND-CONFLICT-ALERT-SYSTEM',
    displayTitle: 'Wildlife Behavior Monitoring & Conflict Alert System',
    category: 'Applied AI',
    language: 'TypeScript',
    updated: 'Sep 2025',
    visibility: 'Public',
    description:
      'Monitoring interface and early-warning alert system designed to mitigate human-wildlife conflict zones.',
    url: 'https://github.com/krishnapriyasri2004/WILDLIFE-BEHAVIOR-MONITORING-AND-CONFLICT-ALERT-SYSTEM',
  },
  {
    name: 'RouteWise-Smart-Delivery-Optimization-Platform',
    displayTitle: 'RouteWise Smart Delivery Optimization Platform',
    category: 'Full-Stack',
    language: 'TypeScript',
    updated: 'Jun 2025',
    visibility: 'Public',
    description:
      'Algorithmic multi-stop delivery planner leveraging Dynamic Programming, Greedy, and Knapsack optimization.',
    url: 'https://github.com/krishnapriyasri2004/RouteWise-Smart-Delivery-Optimization-Platform',
  },
  {
    name: 'Pirate-Adventure-Game',
    displayTitle: 'Pirate Adventure Game',
    category: 'Full-Stack',
    language: 'TypeScript',
    updated: 'Oct 2025',
    visibility: 'Public',
    description:
      'Browser strategy game implementing Nash Equilibrium, Mixed Strategy, and Backtracking AI dynamics.',
    url: 'https://github.com/krishnapriyasri2004/Pirate-Adventure-Game',
  },
  {
    name: 'Weather-Pulse-Real-Time-Streaming-Dashboard-CBE',
    displayTitle: 'Weather-Pulse Streaming Dashboard (Coimbatore)',
    category: 'Data & BI',
    language: 'Python / Shell',
    updated: 'May 2025',
    visibility: 'Public',
    description:
      'Real-time weather ETL pipeline streaming OpenWeatherMap telemetry into Google BigQuery and Power BI.',
    url: 'https://github.com/krishnapriyasri2004/Weather-Pulse-Real-Time-Streaming-Dashboard-CBE',
  },
  {
    name: 'Real-Estate-Price-Estimator-Using-Multimodal-AI',
    displayTitle: 'Real Estate Price Estimator (Multimodal AI)',
    category: 'Applied AI',
    language: 'Jupyter / Python',
    updated: 'Jun 2025',
    visibility: 'Public',
    description:
      'Multimodal valuation model fusing tabular property features with visual real-estate cues.',
    url: 'https://github.com/krishnapriyasri2004/Real-Estate-Price-Estimator-Using-Multimodal-AI',
  },
  {
    name: 'CineRecommender-LLM',
    displayTitle: 'CineRecommender LLM',
    category: 'Applied AI',
    language: 'Jupyter / Python',
    updated: 'Jun 2025',
    visibility: 'Public',
    description:
      'Large language model recommendation workflow generating contextual film discovery insights.',
    url: 'https://github.com/krishnapriyasri2004/CineRecommender-LLM',
  },
  {
    name: 'Sentiment-Analysis-Chatbot',
    displayTitle: 'Sentiment Analysis Chatbot',
    category: 'Applied AI',
    language: 'TypeScript',
    updated: 'Jun 2025',
    visibility: 'Public',
    description:
      'Conversational interface analyzing real-time user sentiment and adapting response tone.',
    url: 'https://github.com/krishnapriyasri2004/Sentiment-Analysis-Chatbot',
  },
  {
    name: 'Cinematoc-Script-Generator',
    displayTitle: 'Cinematic Script Generator',
    category: 'Applied AI',
    language: 'TypeScript',
    updated: 'Aug 2025',
    visibility: 'Public',
    description:
      'Structured screenplay drafting web app generating scene outlines and formatted dialogue.',
    url: 'https://github.com/krishnapriyasri2004/Cinematoc-Script-Generator',
  },
  {
    name: 'Automated-Report-Generation-with-Charts',
    displayTitle: 'Automated Report Generation with Charts',
    category: 'Data & BI',
    language: 'Python',
    updated: 'Oct 2025',
    visibility: 'Public',
    description:
      'Python reporting utility that ingests datasets and compiles visual analytical charts automatically.',
    url: 'https://github.com/krishnapriyasri2004/Automated-Report-Generation-with-Charts',
  },
  {
    name: 'Inventory-Management-System',
    displayTitle: 'Inventory Management System',
    category: 'Full-Stack',
    language: 'JavaScript',
    updated: 'Nov 2025',
    visibility: 'Public',
    description:
      'Stock tracking and operational inventory web application for SKU levels and fulfillment status.',
    url: 'https://github.com/krishnapriyasri2004/Inventory-Management-System',
  },
  {
    name: 'Personal-finance-tracker',
    displayTitle: 'Personal Finance Tracker',
    category: 'Full-Stack',
    language: 'TypeScript',
    updated: 'Nov 2025',
    visibility: 'Public',
    description:
      'Full-stack personal budgeting and lifetime expense tracking web application.',
    url: 'https://github.com/krishnapriyasri2004/Personal-finance-tracker',
  },
  {
    name: 'subs-app',
    displayTitle: 'Subscription Manager App',
    category: 'Full-Stack',
    language: 'TypeScript',
    updated: 'Apr 2026',
    visibility: 'Public',
    description:
      'TypeScript application for tracking recurring subscriptions, billing cycles, and renewal spend.',
    url: 'https://github.com/krishnapriyasri2004/subs-app',
  },
  {
    name: 'HealthGuard-Hypertension-Risk-Predictor-System',
    displayTitle: 'HealthGuard Hypertension Risk Predictor',
    category: 'Data & BI',
    language: 'Jupyter / Python',
    updated: 'Mar 2024',
    visibility: 'Public',
    description:
      'Preventive healthcare ML notebook predicting hypertension risk from clinical biometrics.',
    url: 'https://github.com/krishnapriyasri2004/HealthGuard-Hypertension-Risk-Predictor-System',
  },
  {
    name: 'AttritionForecast-Analysis-and-Prediction',
    displayTitle: 'AttritionForecast Analysis & Prediction',
    category: 'Data & BI',
    language: 'Python',
    updated: 'Aug 2024',
    visibility: 'Public',
    description:
      'Workforce analytics modeling employee attrition drivers and retention risk scores.',
    url: 'https://github.com/krishnapriyasri2004/AttritionForecast-Analysis-and-Prediction',
  },
  {
    name: 'Py-Dialogflow-Food-Bot',
    displayTitle: 'Py-Dialogflow Food Ordering Bot',
    category: 'Applied AI',
    language: 'Python',
    updated: 'May 2024',
    visibility: 'Public',
    description:
      'Conversational Dialogflow webhook backend built in Python for automated food order flows.',
    url: 'https://github.com/krishnapriyasri2004/Py-Dialogflow-Food-Bot',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages-cs',
    title: 'Languages & Core Computer Science',
    shortLabel: 'Languages & CS',
    summary:
      'Strong algorithmic and systems foundation supporting clean production architecture.',
    items: [
      'Python',
      'TypeScript',
      'JavaScript (ES6+)',
      'SQL',
      'Java',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'System Design',
    ],
  },
  {
    id: 'frontend-3d',
    title: 'Frontend & Interactive 3D Web',
    shortLabel: 'Frontend & 3D',
    summary:
      'Modular React and Next.js interfaces paired with interactive Three.js / GLB clinical visualization.',
    items: [
      'React.js',
      'Next.js',
      'Vite',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'Responsive UI Architecture',
      'Three.js / 3D GLB Modeling',
      'Cross-Browser Debugging',
    ],
  },
  {
    id: 'backend-infra',
    title: 'Backend, APIs & Infrastructure',
    shortLabel: 'Backend & Cloud',
    summary:
      'Low-latency REST services, multi-tenant ERP workflows, containerization, and on-premise server deployments.',
    items: [
      'Node.js',
      'Fastify',
      'Express.js',
      'FastAPI',
      'RESTful APIs & Auth',
      'Multi-Tenant Architecture',
      'On-Premise Server Deployment',
      'Docker',
      'GCP (Cloud Run, Cloud Functions)',
      'Vercel & Railway',
    ],
  },
  {
    id: 'ai-databases',
    title: 'Applied AI, Local LLMs & Databases',
    shortLabel: 'AI, LLMs & DBs',
    summary:
      'Privacy-preserving local LLM pipelines, vector retrieval, and relational/analytical database design.',
    items: [
      'Self-Hosted Local LLMs (Ollama)',
      'Retrieval-Augmented Generation (RAG)',
      'BAAI BGE-M3 Embeddings',
      'Prompt Engineering',
      'Deterministic JSON Schema Validation',
      'Dialogflow CX',
      'PostgreSQL (pgvector, Neon DB)',
      'MySQL & SQLite',
      'Google BigQuery',
      'MongoDB & Firestore',
    ],
  },
  {
    id: 'analytics-tooling',
    title: 'Data Science, BI & Engineering Tooling',
    shortLabel: 'Data & Tooling',
    summary:
      'Statistical modeling, executive BI reporting, and disciplined QA and version-control practices.',
    items: [
      'Pandas & NumPy',
      'PySpark & Neural Networks',
      'Power BI (DAX)',
      'Tableau & MS Excel',
      'Probability & Hypothesis Testing',
      'Statistical Analysis & Data Cleaning',
      'Git & GitHub',
      'Jira & Confluence',
      'Functional & Regression Testing',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Coimbatore Institute of Technology (CIT)',
    degree: 'M.Sc. in Decision and Computing Sciences (5-Year Integrated)',
    period: '2021 – 2026',
    location: 'Coimbatore, Tamil Nadu',
    score: 'CGPA 8.65 / 10.0',
    details:
      'Integrated postgraduate program spanning software engineering, algorithms, database systems, probability, machine learning, and decision analytics.',
  },
  {
    institution: 'Crescent Castle Public School',
    degree: 'ISC Higher Secondary (HSC) & ICSE Secondary (SSLC)',
    period: 'Completed 2019 – 2021',
    location: 'Ooty, Tamil Nadu',
    score: 'HSC 88% · SSLC 84%',
    details:
      'ISC Syllabus curriculum with strong foundation in mathematics, computing, and analytical problem solving.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Generative AI Fundamentals Accreditation',
    issuer: 'Databricks Academy',
    focus: 'Applied AI & LLMs',
  },
  {
    title: 'Databricks Fundamentals Accreditation',
    issuer: 'Databricks Academy',
    focus: 'Lakehouse & Data Engineering',
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'IBM',
    focus: 'Predictive Modeling',
  },
  {
    title: 'Data Analytics & Visualization Job Simulation',
    issuer: 'Accenture (Forage)',
    focus: 'Business Intelligence',
  },
  {
    title: 'SQL (Basic & Intermediate)',
    issuer: 'HackerRank',
    focus: 'Relational Databases',
  },
  {
    title: 'Problem Solving (Basic) & Java (Basic)',
    issuer: 'HackerRank',
    focus: 'Algorithms & Core CS',
  },
  {
    title: 'Java DSA Fundamentals',
    issuer: 'Scaler Academy',
    focus: 'Data Structures',
  },
  {
    title: 'Conversational Data Analytics Workshop',
    issuer: 'Pragyan, NIT Trichy',
    focus: 'Interactive Analytics',
  },
  {
    title: 'Python Development Intern Career Certification',
    issuer: 'Career Track Accreditation',
    focus: 'Python Engineering',
  },
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    role: 'Technical Workshop Lead — Healthcare & Enterprise AI',
    organization: 'Nebula KnowLab / Technical Community',
    year: '2026',
    description:
      'Led applied engineering workshops demonstrating local LLM pipelines, clinical AI documentation systems, and full-stack enterprise architecture.',
  },
  {
    role: 'Student Internship Coordinator',
    organization: 'Coimbatore Institute of Technology (CIT)',
    year: '2024',
    description:
      'Coordinated industry outreach, recruiter communication, and placement preparation for M.Sc. Decision and Computing Sciences cohorts.',
  },
  {
    role: 'Professional Service Director — Utsava',
    organization: 'Rotaract Club of CIT (RAC CIT)',
    year: '2023',
    description:
      'Directed professional skill-building sessions, alumni mentorship panels, and community leadership programs across campus.',
  },
  {
    role: 'Event Coordinator — Athena 2k23',
    organization: 'Rotaract Club of CIT (RAC CIT)',
    year: '2023',
    description:
      'Managed end-to-end event operations, participant scheduling, and cross-team logistics for the flagship inter-collegiate technical and cultural fest.',
  },
];

export const MARQUEE_ITEMS: string[] = [
  'Full-Stack Engineering',
  'Local LLM & RAG Pipelines',
  'Interactive 3D Clinical Web',
  'Enterprise ERP Workspaces',
  'Algorithmic Route Optimization',
  'Real-Time BigQuery & Power BI',
];
