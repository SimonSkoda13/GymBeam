import { useEffect } from "react";

// Custom hook for debouncing
export function useDebouncedEffect(
  effect: () => void,
  deps: any[],
  delay: number
) {
  useEffect(() => {
    const handler = setTimeout(() => {
      effect();
    }, delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delay]); // Add `effect` to the array if its definition is stable
}
