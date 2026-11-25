import { EXPERIENCE } from '../data/portfolioData';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 border-b border-zinc-200 py-20 lg:py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            01. Professional Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50"
          >
            Enterprise delivery across full-stack platforms, local AI, and data analytics.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {EXPERIENCE.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-4">
                <p className="font-mono text-xs text-zinc-500 tabular-nums dark:text-zinc-400">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {item.company}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {item.role}
                </p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{item.location}</p>
              </div>

              <div className="lg:col-span-8">
                <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {item.summary}
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-zinc-200/80 pt-4 font-mono text-xs leading-relaxed text-zinc-500 dark:border-zinc-800/80 dark:text-zinc-400">
                  {item.stack.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
