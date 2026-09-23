'use client';

import { useEffect } from 'react';

/**
 * Component to preload critical images on page load
 * This ensures images are cached before they're needed
 */
export default function PreloadImages({ images }: { images: string[] }) {
  useEffect(() => {
    // Preload images in the browser
    images.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, [images]);

  return null; // This component doesn't render anything
}
