import { ArrowUpRight, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  FEATURED_PROJECTS,
  REPOSITORIES,
  type FeaturedProject,
  type ProjectCategory,
} from '../data/portfolioData';
import { filterFeaturedProjects, filterRepositories } from '../utils/portfolioFilters';
import { MediaFrame } from './MediaFrame';

interface ProjectsSectionProps {
  onSelectProject: (project: FeaturedProject) => void;
}

const CATEGORIES: ProjectCategory[] = ['All', 'Applied AI', 'Full-Stack', 'Data & BI'];

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [repoSearch, setRepoSearch] = useState('');

  const visibleFeatured = useMemo(
    () => filterFeaturedProjects(FEATURED_PROJECTS, selectedCategory),
    [selectedCategory],
  );

  const visibleRepositories = useMemo(
    () => filterRepositories(REPOSITORIES, selectedCategory, repoSearch),
    [selectedCategory, repoSearch],
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-b border-zinc-200 py-20 lg:py-24 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              02. Selected Works &amp; Repositories
            </p>
            <h2
              id="projects-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50"
            >
              Production engineering, 3D clinical tools, and applied machine learning.
            </h2>
          </div>

          {/* Interactive segmented filter control */}
          <div
            role="group"
            aria-label="Filter projects by domain"
            className="inline-flex w-fit flex-wrap items-center gap-1 rounded-xl border border-zinc-200 bg-zinc-100/80 p-1 dark:border-zinc-800 dark:bg-zinc-900"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={active}
                  className={`min-h-[36px] rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    active
                      ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-zinc-50'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Bento Grid of Featured Case Studies */}
        <div
          data-testid="featured-projects-grid"
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12"
        >
          {visibleFeatured.map((project, index) => {
            let spanClass = 'lg:col-span-6';
            if (selectedCategory === 'All') {
              if (index === 0 || index === 3) {
                spanClass = 'lg:col-span-7';
              } else if (index === 1 || index === 2) {
                spanClass = 'lg:col-span-5';
              } else {
                spanClass = 'lg:col-span-6';
              }
            }

            return (
              <article
                key={project.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors duration-200 hover:border-zinc-400 dark:border-zinc-800 dark:bg-[#111114] dark:hover:border-zinc-600 ${spanClass}`}
              >
                {project.image && (
                  <MediaFrame
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    fallbackTitle={project.title}
                    fallbackSubtitle={project.category}
                    className="aspect-[16/10] w-full border-b border-zinc-200 lg:aspect-auto lg:h-64 dark:border-zinc-800"
                    imgClassName="group-hover:scale-[1.03]"
                  />
                )}

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
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

                    <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.summary}
                    </p>

                    <p className="mt-4 font-mono text-xs font-medium text-blue-700 dark:text-blue-400">
                      {project.impactMetric}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-nowrap items-center justify-between gap-4 border-t border-zinc-200/80 pt-5 dark:border-zinc-800">
                    <p className="min-w-0 flex-1 truncate font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      {project.stack.slice(0, 4).join(' · ')}
                    </p>

                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      aria-label={`Inspect case study: ${project.title}`}
                      className="inline-flex min-h-[36px] items-center gap-1.5 text-sm font-medium text-zinc-950 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 whitespace-nowrap shrink-0 dark:text-zinc-100 dark:hover:text-blue-400"
                    >
                      Inspect Case Study
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* GitHub Open-Source Archive */}
        <div className="mt-20 border-t border-zinc-200 pt-14 dark:border-zinc-800">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                GitHub Engineering Archive
              </h3>
              <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                Showing{' '}
                <span className="font-mono font-medium text-zinc-950 tabular-nums dark:text-zinc-100">
                  {visibleRepositories.length}
                </span>{' '}
                of{' '}
                <span className="font-mono tabular-nums">{REPOSITORIES.length}</span> repositories
                from github.com/krishnapriyasri2004
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <label htmlFor="repo-search" className="sr-only">
                Search repositories by name, stack, or description
              </label>
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                aria-hidden="true"
              />
              <input
                id="repo-search"
                type="search"
                value={repoSearch}
                onChange={(e) => setRepoSearch(e.target.value)}
                placeholder="Search repositories or stack..."
                className="h-11 w-full rounded-lg border border-zinc-300 bg-white pl-10 pr-9 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-blue-600 focus:outline-none dark:border-zinc-700 dark:bg-[#111114] dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-blue-400"
              />
              {repoSearch && (
                <button
                  type="button"
                  onClick={() => setRepoSearch('')}
                  aria-label="Clear repository search"
                  className="absolute right-2.5 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {visibleRepositories.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-10 text-center dark:border-zinc-800 dark:bg-[#111114]">
              <p className="font-display text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                No matching repositories found
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Try clearing your search term or switching back to all domains.
              </p>
              <button
                type="button"
                onClick={() => {
                  setRepoSearch('');
                  setSelectedCategory('All');
                }}
                className="mt-5 inline-flex min-h-[40px] items-center justify-center rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-blue-400"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              data-testid="repositories-list"
              className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800"
            >
              {visibleRepositories.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-1 items-center gap-3 py-4 transition-colors hover:bg-zinc-100/60 sm:px-3 md:grid-cols-12 dark:hover:bg-zinc-900/60"
                >
                  <div className="md:col-span-4">
                    <p className="font-medium text-zinc-950 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                      {repo.displayTitle}
                    </p>
                    <p className="mt-0.5 truncate font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      {repo.name}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-600 md:col-span-5 dark:text-zinc-400">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between gap-3 md:col-span-3 md:justify-end">
                    <span className="font-mono text-xs text-zinc-500 tabular-nums dark:text-zinc-400">
                      {repo.language} · {repo.updated}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
