import { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export function SkillsSection() {
  const [activeDomainId, setActiveDomainId] = useState<string>('all');

  const visibleGroups =
    activeDomainId === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.id === activeDomainId);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 border-b border-zinc-200 py-20 lg:py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              03. Technical Capabilities
            </p>
            <h2
              id="skills-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50"
            >
              Engineering depth from systems fundamentals to private AI deployment.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter technical skills by domain"
            className="inline-flex w-fit max-w-full flex-wrap items-center gap-1 rounded-xl border border-zinc-200 bg-zinc-100/80 p-1 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeDomainId === 'all'}
              onClick={() => setActiveDomainId('all')}
              className={`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                activeDomainId === 'all'
                  ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-zinc-50'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
              }`}
            >
              All Domains
            </button>

            {SKILL_GROUPS.map((group) => {
              const selected = activeDomainId === group.id;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveDomainId(group.id)}
                  className={`min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    selected
                      ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-zinc-50'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  {group.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleGroups.map((group, idx) => (
            <div
              key={group.id}
              className={`flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 dark:border-zinc-800 dark:bg-[#111114] ${
                visibleGroups.length === 1 ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div>
                <p className="font-mono text-xs text-zinc-500 tabular-nums dark:text-zinc-400">
                  0{idx + 1} · {group.items.length} capabilities
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {group.summary}
                </p>
              </div>

              <ul className="mt-6 grid grid-cols-1 gap-y-2 border-t border-zinc-200/80 pt-5 text-sm text-zinc-800 sm:grid-cols-2 sm:gap-x-4 dark:border-zinc-800 dark:text-zinc-200">
                {group.items.map((skill) => (
                  <li key={skill} className="leading-snug">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
