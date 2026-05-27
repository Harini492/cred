import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * -----------------------------------
 * Lightweight scroll reveal hook using IntersectionObserver
 *
 * Features:
 * - One-time or repeat reveal
 * - Custom threshold & rootMargin
 * - Optimized observer lifecycle
 * - SSR-safe
 * - Clean reusable API
 */

export const useScrollReveal = ({
  threshold = 0.15,
  rootMargin = "0px",
  once = true,
} = {}) => {
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    // Safety check
    if (!element || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;

        if (inView) {
          setIsVisible(true);

          // Stop observing after first reveal
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return {
    ref,
    isVisible,
  };
};