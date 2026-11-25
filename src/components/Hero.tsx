import { ArrowUpRight, FileText, Github, Linkedin } from 'lucide-react';
import { KEY_METRICS, MARQUEE_ITEMS, PROFILE } from '../data/portfolioData';
import { MediaFrame } from './MediaFrame';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="top" className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Split-Screen Hero with matched heights */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                <span>{PROFILE.role}</span>
                <span className="mx-2 text-zinc-400 dark:text-zinc-600" aria-hidden="true">
                  ·
                </span>
                <span>{PROFILE.location}</span>
              </p>

              <h1 className="mt-5 max-w-2xl font-display text-[clamp(2.35rem,4.3vw,3.75rem)] font-semibold leading-[1.06] tracking-tight text-zinc-950 dark:text-zinc-50">
                Full-stack architecture, local AI systems &amp; analytical engineering.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {PROFILE.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 whitespace-nowrap shrink-0 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-blue-400"
                >
                  Explore Selected Works
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors duration-150 hover:border-zinc-900 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 whitespace-nowrap shrink-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Export ATS Resume
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">
                /
              </span>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">
                /
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="font-mono text-xs text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
              >
                {PROFILE.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <MediaFrame
              src={PROFILE.heroImage}
              alt="Architectural aluminum and dark slate geometric studio sculpture with subtle cobalt prism refraction"
              fallbackTitle="Krishna Priya S"
              fallbackSubtitle="Full-Stack & Applied AI Engineering"
              className="aspect-[4/3] w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 lg:aspect-auto lg:h-full"
            />
          </div>
        </div>

        {/* Full-width 4-column quantitative proof strip below the split */}
        <div
          aria-label="Key career highlights"
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800 dark:bg-zinc-800"
        >
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col justify-between bg-white p-6 dark:bg-[#111114]"
            >
              <p className="font-mono text-2xl font-medium tracking-tight text-zinc-950 tabular-nums dark:text-zinc-50">
                {metric.value}
              </p>
              <div className="mt-3">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {metric.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle editorial marquee ribbon */}
      <div
        aria-hidden="true"
        className="overflow-hidden border-t border-zinc-200 bg-white py-3.5 dark:border-zinc-800 dark:bg-[#0D0D10]"
      >
        <div className="animate-editorial-marquee flex w-max items-center gap-8 text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span key={`${item}-${idx}`} className="inline-flex items-center gap-8 whitespace-nowrap">
              <span>{item}</span>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
