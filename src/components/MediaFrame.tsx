import { useState } from 'react';

interface MediaFrameProps {
  src?: string;
  alt: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
  className?: string;
  imgClassName?: string;
}

export function MediaFrame({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  className = '',
  imgClassName = '',
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-zinc-100 via-zinc-200/80 to-blue-50/70 p-6 dark:from-zinc-900 dark:via-zinc-900 dark:to-blue-950/40 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.22), transparent 55%)',
          }}
        />
        <span className="relative font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {fallbackSubtitle ?? 'Case Study'}
        </span>
        <p className="relative font-display text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {fallbackTitle}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${imgClassName}`}
      />
    </div>
  );
}
