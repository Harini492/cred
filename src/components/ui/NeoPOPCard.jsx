import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const NeoPOPCardComponent = ({
  children,
  className = "",
  accent = "var(--gold)",
  hover = true,
  clickable = true,
  glow = true,
  border = true,
  padding = "p-6",
  rounded = "rounded-3xl",
  blur = false,
  disabled = false,
  onClick,
  as: Component = motion.div,
  ...props
}) => {
  // Disable interaction state
  const isDisabled = disabled;

  // Base styles
  const baseStyles = `
    relative overflow-hidden
    bg-[var(--white)]
    transition-all duration-300 ease-out
    select-none
    will-change-transform
    isolate
  `;

  // Optional blur/glass effect
  const blurStyles = blur
    ? "backdrop-blur-xl bg-white/80"
    : "";

  // Border styles
  const borderStyles = border
    ? "border border-[var(--border)]"
    : "border-none";

  // Interactive states
  const interactiveStyles =
    clickable && !isDisabled
      ? "cursor-pointer"
      : "cursor-default";

  // Disabled styles
  const disabledStyles = isDisabled
    ? "opacity-50 pointer-events-none"
    : "";

  // Optimized shadow calculations
  const shadows = useMemo(() => {
    const defaultShadow =
      accent === "var(--gold)"
        ? "4px 4px 0px rgba(210,176,90,0.18), 8px 8px 0px rgba(0,0,0,0.03)"
        : `4px 4px 0px ${accent}25, 8px 8px 0px rgba(0,0,0,0.03)`;

    const hoverShadow =
      accent === "var(--gold)"
        ? "8px 8px 0px rgba(210,176,90,0.32), 16px 16px 0px rgba(0,0,0,0.05)"
        : `8px 8px 0px ${accent}50, 16px 16px 0px rgba(0,0,0,0.05)`;

    return {
      defaultShadow,
      hoverShadow,
    };
  }, [accent]);

  return (
    <Component
      onClick={!isDisabled ? onClick : undefined}
      className={clsx(
        baseStyles,
        blurStyles,
        borderStyles,
        interactiveStyles,
        disabledStyles,
        padding,
        rounded,
        className
      )}
      style={{
        boxShadow: shadows.defaultShadow,
      }}
      whileHover={
        hover && clickable && !isDisabled
          ? {
              x: -5,
              y: -5,
              boxShadow: shadows.hoverShadow,
            }
          : {}
      }
      whileTap={
        clickable && !isDisabled
          ? {
              x: -1,
              y: -1,
              scale: 0.98,
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 18,
      }}
      {...props}
    >
      {/* Premium Accent Glow */}
      {glow && (
        <div
          className="
            absolute inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-700
            pointer-events-none
            z-0
          "
          style={{
            background: `
              radial-gradient(
                circle at top left,
                ${
                  accent === "var(--gold)"
                    ? "rgba(210,176,90,0.14)"
                    : `${accent}22`
                } 0%,
                transparent 68%
              )
            `,
          }}
        />
      )}

      {/* NeoPOP Gradient Layer */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-white/60
          via-white/10
          to-transparent
          opacity-40
          pointer-events-none
        "
      />

      {/* Inner Highlight Border */}
      <div
        className="
          absolute inset-[1px]
          rounded-[inherit]
          border border-white/40
          pointer-events-none
        "
      />

      {/* Top Light Reflection */}
      <div
        className="
          absolute top-0 left-0 right-0
          h-[1px]
          bg-white/60
          opacity-60
          pointer-events-none
        "
      />

      {/* Bottom Shadow Line */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          h-[1px]
          bg-black/5
          pointer-events-none
        "
      />

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </Component>
  );
};

NeoPOPCardComponent.displayName = "NeoPOPCard";

const NeoPOPCard = memo(NeoPOPCardComponent);

export default NeoPOPCard;
