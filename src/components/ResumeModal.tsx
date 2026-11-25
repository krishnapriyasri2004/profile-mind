import { Download, Printer, X } from 'lucide-react';
import { useEffect } from 'react';
import { PROFILE } from '../data/portfolioData';
import { generateAtsResumePlainText } from '../utils/portfolioFilters';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleDownloadText = () => {
    const content = generateAtsResumePlainText();
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Krishna_Priya_S_ATS_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ats-resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/75 p-4 backdrop-blur-xs sm:p-6 print:static print:block print:bg-white print:p-0"
      onClick={onClose}
    >
      <div
        className="print-only-resume relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white text-zinc-950 shadow-2xl dark:border-zinc-800 print:max-h-none print:overflow-visible"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action bar (hidden when printing) */}
        <div className="no-print sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 bg-zinc-50 px-6 py-3.5">
          <div>
            <h3 id="ats-resume-title" className="font-display text-base font-semibold text-zinc-950">
              Single-Page ATS Resume Preview
            </h3>
            <p className="text-xs text-zinc-500">
              Formatted cleanly for ATS parsers and Letter / A4 PDF printing
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadText}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-zinc-300 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-900 transition-colors hover:border-zinc-900 whitespace-nowrap shrink-0"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download .TXT
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700 whitespace-nowrap shrink-0"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              Print / Save PDF
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-200/80 hover:text-zinc-950"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Crisp white single-page ATS sheet */}
        <article className="bg-white p-8 text-[12.5px] leading-[1.45] text-zinc-900 sm:p-10 print:p-0">
          <header className="border-b border-zinc-900 pb-3 text-center">
            <h1 className="font-display text-2xl font-bold tracking-tight text-zinc-950">
              KRISHNA PRIYA S
            </h1>
            <p className="mt-0.5 text-xs font-semibold text-zinc-700">
              Software Development Engineer | Full-Stack &amp; Applied AI Systems
            </p>
            <p className="mt-1 font-mono text-[11px] text-zinc-600">
              {PROFILE.location} | {PROFILE.phone} | {PROFILE.email} | {PROFILE.githubHandle} |{' '}
              {PROFILE.linkedinHandle}
            </p>
          </header>

          <section className="mt-4">
            <h2 className="border-b border-zinc-300 pb-1 text-xs font-bold tracking-wide text-zinc-950">
              SUMMARY
            </h2>
            <p className="mt-1.5 text-zinc-800">
              Full-Stack Software Development Engineer (M.Sc. DCS, 8.65 CGPA) specializing in
              scalable React, Next.js, TypeScript, Node.js (Fastify), and Python (FastAPI) web
              applications, self-hosted LLM/RAG pipelines (pgvector), and interactive 3D clinical
              visualization systems.
            </p>
          </section>

          <section className="mt-4">
            <h2 className="border-b border-zinc-300 pb-1 text-xs font-bold tracking-wide text-zinc-950">
              TECHNICAL SKILLS
            </h2>
            <div className="mt-1.5 space-y-1 text-zinc-800">
              <p>
                <strong className="font-semibold text-zinc-950">Languages &amp; Core CS:</strong>{' '}
                Python, TypeScript, JavaScript (ES6+), SQL, Java, Data Structures &amp; Algorithms,
                OOPS, DBMS, Operating Systems, System Design
              </p>
              <p>
                <strong className="font-semibold text-zinc-950">Frontend &amp; 3D:</strong>{' '}
                React.js, Next.js, Vite, HTML5, CSS3, Tailwind CSS, Interactive 3D Web Modeling
                (Three.js / GLB)
              </p>
              <p>
                <strong className="font-semibold text-zinc-950">Backend &amp; Infrastructure:</strong>{' '}
                Node.js, Fastify, Express.js, FastAPI, RESTful APIs, Multi-Tenant Architecture,
                On-Premise Deployment, Docker, GCP (Cloud Run, Cloud Functions), Vercel, Railway
              </p>
              <p>
                <strong className="font-semibold text-zinc-950">AI, LLMs &amp; Databases:</strong>{' '}
                Self-Hosted Local LLMs (Ollama), RAG, BAAI BGE-M3 Embeddings, Prompt Engineering,
                Deterministic JSON Schema Validation, Dialogflow CX, PostgreSQL (pgvector, Neon DB),
                MySQL, Google BigQuery, MongoDB, Firestore, SQLite
              </p>
              <p>
                <strong className="font-semibold text-zinc-950">Analytics &amp; Tooling:</strong>{' '}
                Pandas, NumPy, PySpark, Power BI (DAX), Tableau, MS Excel, Git, GitHub, Jira,
                Confluence, Functional &amp; Regression Testing
              </p>
            </div>
          </section>

          <section className="mt-4">
            <h2 className="border-b border-zinc-300 pb-1 text-xs font-bold tracking-wide text-zinc-950">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="mt-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-zinc-950">
                  Software Development Engineer (SDE) — Nebula KnowLab
                </p>
                <span className="font-mono text-[11px] text-zinc-600 tabular-nums">
                  Apr 2026 – Nov 2026 | Coimbatore, TN
                </span>
              </div>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-zinc-800">
                <li>
                  Independently developed and deployed the WORK section of ECI on on-premise
                  company servers to streamline organizational workflows and employee productivity.
                </li>
                <li>
                  Built modular full-stack interfaces using React, Next.js, TypeScript, Node.js
                  (Fastify), and PostgreSQL (Neon DB) for project pipelines, Kanban task
                  management, daily planning, scheduling, attendance, quality reviews, and support
                  tickets.
                </li>
                <li>
                  Integrated self-hosted local LLMs (Ollama) and BAAI BGE-M3 vector embeddings
                  (pgvector) to automate daily check-ins into structured 8-hour time logs and live
                  Kanban cards with zero external API data exposure.
                </li>
                <li>
                  Engineered an interactive 3D Human Anatomy modeling web application (3D GLB
                  models) for clinician symptom visualization alongside an AI Clinical
                  Documentation &amp; SOAP Notes platform reducing physician documentation time by
                  over 50%.
                </li>
                <li>
                  Built automated quotation-to-Purchase-Order PDF generation workflows for The
                  Lakshmi Mills Company Limited using Python and REST APIs.
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-zinc-950">
                  Software Product Development Intern — Kallos Solutions Pvt. Ltd.
                </p>
                <span className="font-mono text-[11px] text-zinc-600 tabular-nums">
                  Jun 2024 – Nov 2024 | Chennai, TN
                </span>
              </div>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-zinc-800">
                <li>
                  Engineered reusable frontend UI components (HTML5, CSS3, JavaScript) for the
                  Stragiliti enterprise SaaS suite (Smart Metrics, Contracts &amp; Billing),
                  resolving cross-browser and state-management defects across ERP modules.
                </li>
                <li>
                  Analyzed internal sales call datasets from Salesforce and AWS Redshift and
                  executed functional and regression test suites prior to production releases.
                </li>
              </ul>
            </div>

            <div className="mt-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-zinc-950">
                  Data Analyst Intern — Technocolabs Software Pvt. Ltd.
                </p>
                <span className="font-mono text-[11px] text-zinc-600 tabular-nums">
                  Jul 2024 – Sep 2024 | Remote
                </span>
              </div>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-zinc-800">
                <li>
                  Built a loan risk prediction model using PySpark and Neural Networks achieving
                  98% accuracy on Lending Club records and created an interactive Power BI risk
                  dashboard.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-4">
            <h2 className="border-b border-zinc-300 pb-1 text-xs font-bold tracking-wide text-zinc-950">
              PROJECTS
            </h2>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-zinc-800">
              <li>
                <strong className="font-semibold text-zinc-950">
                  Delivery Route Optimization System
                </strong>{' '}
                (React, Next.js, TypeScript, MySQL, Docker): Implemented Dynamic Programming,
                Greedy, Backtracking, and Knapsack algorithms reducing transit time by 31%, travel
                distance by 23%, and sustaining 99.7% uptime across 100+ concurrent users.
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Weather-Pulse Real-Time Streaming Dashboard
                </strong>{' '}
                (Python, BigQuery, Power BI): Built automated OpenWeatherMap ETL pipeline storing
                structured meteorological telemetry in BigQuery with DAX extreme weather alerts.
              </li>
              <li>
                <strong className="font-semibold text-zinc-950">
                  Pirate Adventure Strategy Game
                </strong>{' '}
                (Next.js, TypeScript, React, Tailwind CSS): Interactive browser strategy game
                applying Nash Equilibrium, Mixed Strategy, and Backtracking algorithms.
              </li>
            </ul>
          </section>

          <section className="mt-4">
            <h2 className="border-b border-zinc-300 pb-1 text-xs font-bold tracking-wide text-zinc-950">
              EDUCATION, CERTIFICATIONS &amp; LEADERSHIP
            </h2>
            <div className="mt-1.5 space-y-1 text-zinc-800">
              <p>
                <strong className="font-semibold text-zinc-950">
                  M.Sc. in Decision and Computing Sciences (5-Year Integrated)
                </strong>{' '}
                — Coimbatore Institute of Technology (2021 – 2026) | CGPA: 8.65 / 10.0 · Crescent
                Castle Public School, Ooty (HSC 88%, SSLC 84%).
              </p>
              <p>
                <strong className="font-semibold text-zinc-950">Certifications:</strong> Databricks
                Generative AI Fundamentals &amp; Databricks Fundamentals; IBM Machine Learning with
                Python; Accenture Forage Data Analytics; HackerRank SQL &amp; Problem Solving;
                Scaler Java DSA Fundamentals; Pragyan NIT Trichy Conversational Data Analytics.
              </p>
              <p>
                <strong className="font-semibold text-zinc-950">Leadership:</strong> Technical
                Workshop Lead for Healthcare &amp; Enterprise AI (2026); Student Internship
                Coordinator, CIT (2024); Professional Service Director &amp; Event Coordinator, RAC
                CIT (2023).
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
