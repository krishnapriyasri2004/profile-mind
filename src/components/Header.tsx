import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import type { ThemeMode } from '../utils/portfolioFilters';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ theme, onToggleTheme, onOpenResume }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-zinc-200/80 bg-[#FAFAFA]/90 backdrop-blur-md transition-colors duration-200 dark:border-zinc-800/80 dark:bg-[#09090B]/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-zinc-950 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 whitespace-nowrap shrink-0 dark:text-zinc-50 dark:hover:text-blue-400"
        >
          Krishna Priya S
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors duration-150 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full dark:hover:text-zinc-50 dark:after:bg-blue-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Theme switch icon + primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 transition-colors duration-150 hover:bg-zinc-200/70 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            {theme === 'dark' ? (
              <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors duration-150 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 whitespace-nowrap shrink-0 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
          >
            ATS Resume
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-200/70 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-zinc-200 bg-[#FAFAFA] px-6 py-4 md:hidden dark:border-zinc-800 dark:bg-[#09090B]">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center text-base font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
            >
              Open ATS Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
