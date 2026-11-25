import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="no-print border-t border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-[#0D0D10]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-zinc-950 dark:text-zinc-100">
            {PROFILE.name}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            © 2026 Krishna Priya S · Software Development Engineer · Coimbatore, India
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            Email
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1 text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100 dark:hover:text-blue-400"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
