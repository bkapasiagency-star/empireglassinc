import React, { useState } from 'react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  overlayText?: string;
  wrapperClassName?: string;
  srcSet?: string;
  sizes?: string;
  /** Above-the-fold image: load eagerly at high priority instead of lazily */
  priority?: boolean;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = "w-full h-full object-cover",
  aspectRatio,
  overlayText,
  wrapperClassName = '',
  srcSet,
  sizes,
  priority = false
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div 
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#151a23] via-[#1a2230] to-[#0f141c] border border-slate-800 text-slate-400 p-6 overflow-hidden ${aspectRatio || 'aspect-[4/3]'} ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle architectural glass grid and reflection graphic */}
        <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
        
        <svg 
          className="w-12 h-12 text-slate-500 mb-3 stroke-[1.2]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>

        <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase text-center px-4">
          {overlayText || alt}
        </span>
        <span className="text-[11px] text-slate-500 mt-1">Empire Glass Architectural System</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${aspectRatio || ''} ${wrapperClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-900/60 animate-pulse flex items-center justify-center z-10">
          <div className="w-6 h-6 border-2 border-slate-600 border-t-slate-300 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};
