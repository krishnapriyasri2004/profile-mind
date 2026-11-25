import { ArrowUpRight, X } from 'lucide-react';
import { useEffect } from 'react';
import type { FeaturedProject } from '../data/portfolioData';
import { MediaFrame } from './MediaFrame';

interface ProjectModalProps {
  project: FeaturedProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
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
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="no-print fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/75 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-[#111114]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-sm dark:border-zinc-800 dark:bg-[#111114]/95">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            <span>{project.category}</span>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <span className="font-mono tabular-nums">{project.period}</span>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <span>{project.organization}</span>
          </p>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study modal"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {project.image && (
          <MediaFrame
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fallbackTitle={project.title}
            fallbackSubtitle={project.category}
            className="aspect-[16/9] w-full border-b border-zinc-200 dark:border-zinc-800"
          />
        )}

        <div className="p-6 sm:p-8">
          <h3
            id="project-modal-title"
            className="font-display text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
          >
            {project.title}
          </h3>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">{project.subtitle}</p>

          <p className="mt-4 font-mono text-sm font-medium text-blue-700 dark:text-blue-400">
            {project.impactMetric}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-zinc-200 pt-6 md:grid-cols-2 dark:border-zinc-800">
            <div>
              <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                Problem Context
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.challenge}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                Technical Architecture
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.architecture}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
              Measurable Outcomes
            </h4>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"
                  />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center dark:border-zinc-800">
            <p className="font-mono text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {project.stack.join(' · ')}
            </p>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 whitespace-nowrap shrink-0 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-blue-400"
              >
                View on GitHub
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
