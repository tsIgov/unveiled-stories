import { readable } from 'svelte/store';

export function useMediaQuery(query: string | undefined) {
  const mediaQuery = typeof window !== 'undefined' && query ? window.matchMedia(query) : null;

  return readable(mediaQuery?.matches ?? false, (set) => {
    if (!mediaQuery) return;

    const update = (event: MediaQueryListEvent) => set(event.matches);

    // Initial value
    set(mediaQuery.matches);

    mediaQuery.addEventListener('change', update);

    return () => mediaQuery.removeEventListener('change', update);
  });
}


export const isMobile = useMediaQuery('(width <= 32rem)');
export const isTablet = useMediaQuery('(32rem < width <= 48rem)');
export const isDesktop = useMediaQuery('(48rem < width)');
