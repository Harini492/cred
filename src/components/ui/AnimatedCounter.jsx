import React, { memo, useMemo } from "react";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";

const AnimatedCounter = ({
  value = 0,
  suffix = "",
  duration = 2200,
  isActive = true,
  decimals = 1,
  className = "",
}) => {
  // Animated numeric value
  const animatedValue = useAnimatedCounter(value, duration, isActive);

  // Optimized formatting
  const formattedValue = useMemo(() => {
    // Integer values
    if (Number.isInteger(value)) {
      return Math.round(animatedValue).toLocaleString();
    }

    // Decimal values
    return Number(animatedValue)
      .toFixed(decimals)
      .toLocaleString();
  }, [animatedValue, value, decimals]);

  return (
    <span
      className={`
        inline-flex items-center
        font-mono
        tabular-nums
        tracking-tight
        will-change-transform
        ${className}
      `}
      aria-label={`${formattedValue}${suffix}`}
    >
      {formattedValue}

      {suffix && (
        <span
          className="
            ml-1
            text-[var(--gold)]
            font-semibold
            select-none
          "
        >
          {suffix}
        </span>
      )}
    </span>
  );
};

export default memo(AnimatedCounter);