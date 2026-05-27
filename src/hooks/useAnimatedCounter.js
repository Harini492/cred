import { useEffect, useRef, useState } from "react";

/**
 * Smooth animated counter hook
 * -----------------------------------
 * Features:
 * - requestAnimationFrame optimized
 * - cubic ease-out animation
 * - auto cleanup
 * - supports decimal values
 * - restart-safe
 * - reduced unnecessary re-renders
 */

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export const useAnimatedCounter = ({
  target = 0,
  duration = 2000,
  isActive = true,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);

  const frameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    // Reset if inactive
    if (!isActive) {
      setCount(0);
      startTimeRef.current = null;

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      return;
    }

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;

      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOutCubic(progress);

      const currentValue = easedProgress * target;

      // Prevent excessive re-renders
      setCount((prev) => {
        const formatted =
          decimals > 0
            ? Number(currentValue.toFixed(decimals))
            : Math.floor(currentValue);

        return prev !== formatted ? formatted : prev;
      });

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      startTimeRef.current = null;
    };
  }, [target, duration, isActive, decimals]);

  return count;
};