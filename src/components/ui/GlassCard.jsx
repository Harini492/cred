import React, { memo } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hover = true,
  glow = true,
  blur = "backdrop-blur-xl",
  padding = "p-6",
  border = true,
  clickable = false,
  onClick,
  as: Component = motion.div,
  ...props
}) => {
  // Base glassmorphism styles
  const baseStyles = `
    relative overflow-hidden rounded-3xl
    bg-white/[0.03]
    transition-all duration-500 ease-out
    shadow-[0_8px_32px_rgba(0,0,0,0.35)]
    will-change-transform
  `;

  // Border styles
  const borderStyles = border
    ? "border border-white/[0.08]"
    : "border-none";

  // Interactive hover styles
  const hoverStyles = hover
    ? `
      group
      hover:-translate-y-1
      hover:bg-white/[0.05]
      hover:border-[var(--gold)]/30
      hover:shadow-[0_12px_48px_rgba(210,176,90,0.12)]
    `
    : "";

  // Clickable state
  const clickableStyles = clickable
    ? "cursor-pointer"
    : "";

  return (
    <Component
      onClick={onClick}
      whileHover={
        hover
          ? {
              y: -4,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 18,
              },
            }
          : {}
      }
      className={clsx(
        baseStyles,
        borderStyles,
        hoverStyles,
        clickableStyles,
        blur,
        padding,
        className
      )}
      {...props}
    >
      {/* Ambient Gold Glow */}
      {hover && glow && (
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
            background:
              "radial-gradient(circle at top, rgba(210,176,90,0.14) 0%, transparent 65%)",
          }}
        />
      )}

      {/* Glass Gradient Overlay */}
      <div
        className="
          absolute inset-0
          rounded-3xl
          bg-gradient-to-br
          from-white/[0.08]
          via-white/[0.02]
          to-transparent
          pointer-events-none
          opacity-50
        "
      />

      {/* Subtle Inner Highlight */}
      <div
        className="
          absolute inset-[1px]
          rounded-3xl
          border border-white/[0.04]
          pointer-events-none
        "
      />

      {/* Noise Texture */}
      <div
        className="
          absolute inset-0
          opacity-[0.025]
          mix-blend-overlay
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </Component>
  );
};

GlassCard.displayName = "GlassCard";

export default memo(GlassCard);
