import { useEffect } from 'react';

/**
 * Fades elements marked with `data-reveal` up into place the first time they scroll into view.
 * Styles live in index.css; a per-element delay can be set with the `--reveal-delay` custom property.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.documentElement.classList.add('js-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('js-reveal');
    };
  }, []);
};
