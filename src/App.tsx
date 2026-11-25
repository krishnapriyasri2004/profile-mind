import { useEffect, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { EducationCredentialsSection } from './components/EducationCredentialsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeModal } from './components/ResumeModal';
import { SkillsSection } from './components/SkillsSection';
import type { FeaturedProject } from './data/portfolioData';
import { resolveInitialTheme, type ThemeMode } from './utils/portfolioFilters';

const THEME_STORAGE_KEY = 'kp-portfolio-theme';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light';
  }
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return resolveInitialTheme(stored, prefersDark);
  } catch {
    return 'light';
  }
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage quota / privacy mode errors
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] transition-colors duration-200 dark:bg-[#09090B] dark:text-[#F4F4F5]">
      <a
        href="#main-content"
        className="no-print sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>

      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      <main id="main-content" className="no-print">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <ExperienceSection />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <SkillsSection />
        <EducationCredentialsSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
