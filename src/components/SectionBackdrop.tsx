import React from 'react';

interface SectionBackdropProps {
  /** Unsplash photo id (the part after "photo-") */
  image: string;
  tone?: 'light' | 'dark';
  /** Mirror the layout so the photo reads strongest on the left instead of the right */
  flip?: boolean;
}

/**
 * Decorative background for a page section: an architectural glass photo pinned to the viewport and
 * revealed through the box of the section as it scrolls past, with two glass panes drifting at different speeds.
 * Must be the first child of a `relative` section that uses one of the section-* surfaces.
 * Motion and loading are driven by useBackdropParallax; styles live in index.css.
 */
export const SectionBackdrop: React.FC<SectionBackdropProps> = ({ image, tone = 'light', flip = false }) => (
  <div
    data-backdrop
    aria-hidden="true"
    className={`backdrop backdrop--${tone} ${flip ? 'backdrop--flip' : ''}`}
  >
    <img
      className="backdrop__photo"
      src={`https://images.unsplash.com/photo-${image}?auto=format&fit=crop&q=60&w=1600`}
      srcSet={[900, 1600, 2400]
        .map((w) => `https://images.unsplash.com/photo-${image}?auto=format&fit=crop&q=60&w=${w} ${w}w`)
        .join(', ')}
      sizes="100vw"
      alt=""
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
    />
    <div className="backdrop__wash" />
    <span className="backdrop__pane backdrop__pane--a" />
    <span className="backdrop__pane backdrop__pane--b" />
  </div>
);
