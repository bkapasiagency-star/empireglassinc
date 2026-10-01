import { useEffect } from 'react';

/**
 * Drives every [data-backdrop] element (see SectionBackdrop):
 * - adds `is-near` while the section is close to the viewport, which is what mounts the pinned photo;
 * - sets `--sp`, how far the section has travelled through the viewport (-1 entering from below, 0 centred,
 *   1 leaving at the top), used to drift the glass panes and slowly zoom the photo.
 */
export const useBackdropParallax = () => {
  useEffect(() => {
    const backdrops = Array.from(document.querySelectorAll<HTMLElement>('[data-backdrop]'));
    if (!backdrops.length) return;

    if (!('IntersectionObserver' in window)) {
      backdrops.forEach((el) => el.classList.add('is-near'));
      return;
    }

    const near = new Set<HTMLElement>();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const viewport = window.innerHeight;
      near.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const progress = (viewport / 2 - (rect.top + rect.height / 2)) / (viewport / 2 + rect.height / 2);
        el.style.setProperty('--sp', Math.max(-1, Math.min(1, progress)).toFixed(4));
      });
    };
    const requestUpdate = () => {
      if (!raf && !reduceMotion) raf = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          el.classList.toggle('is-near', entry.isIntersecting);
          if (entry.isIntersecting) near.add(el);
          else near.delete(el);
        }
        requestUpdate();
      },
      { rootMargin: '50% 0px' }
    );
    backdrops.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);
};
