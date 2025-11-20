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

export const isTouchscreen = useMediaQuery('(pointer: coarse)');
