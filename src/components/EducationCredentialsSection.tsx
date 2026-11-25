import { CERTIFICATIONS, EDUCATION, LEADERSHIP } from '../data/portfolioData';

export function EducationCredentialsSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-20 border-b border-zinc-200 py-20 lg:py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            04. Education, Certifications &amp; Leadership
          </p>
          <h2
            id="education-heading"
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50"
          >
            Academic rigor paired with community leadership and accredited credentials.
          </h2>
        </div>

        {/* Academic Education */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {EDUCATION.map((edu) => (
            <article
              key={edu.institution}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-[#111114]"
            >
              <div>
                <p className="font-mono text-xs text-zinc-500 tabular-nums dark:text-zinc-400">
                  {edu.period} · {edu.location}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {edu.institution}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {edu.degree}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {edu.details}
                </p>
              </div>

              <p className="mt-6 border-t border-zinc-200/80 pt-4 font-mono text-sm font-medium text-blue-700 tabular-nums dark:border-zinc-800 dark:text-blue-400">
                {edu.score}
              </p>
            </article>
          ))}
        </div>

        {/* Leadership & Activities + Certifications split */}
        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Leadership &amp; Activities
            </h3>
            <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              Positions of responsibility across technical workshops, campus placements, and
              Rotaract Club of CIT.
            </p>

            <div className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {LEADERSHIP.map((item) => (
                <article key={`${item.role}-${item.year}`} className="py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-base font-semibold text-zinc-950 dark:text-zinc-100">
                      {item.role}
                    </h4>
                    <span className="font-mono text-xs text-zinc-500 tabular-nums dark:text-zinc-400">
                      {item.year}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                    {item.organization}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Certifications &amp; Accreditations
            </h3>
            <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              Verified industry credentials spanning Generative AI, Databricks, IBM ML, SQL, and
              Data Structures.
            </p>

            <div className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={`${cert.title}-${cert.issuer}`}
                  className="flex flex-col justify-between gap-1 py-3.5 sm:flex-row sm:items-center sm:gap-4"
                >
                  <div>
                    <p className="text-sm font-medium text-zinc-950 dark:text-zinc-100">
                      {cert.title}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 whitespace-nowrap shrink-0 dark:text-zinc-400">
                    {cert.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
