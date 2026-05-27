import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const ButtonComponent = ({
  children,
  variant = "gold",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  // Disable interactions while loading
  const isDisabled = disabled || loading;

  // Base styles
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    overflow-hidden rounded-2xl
    font-mono font-bold uppercase
    tracking-[0.18em]
    transition-all duration-300
    focus:outline-none focus-visible:ring-2
    focus-visible:ring-[var(--gold)]
    select-none
    will-change-transform
  `;

  // Variant styles
  const variantStyles = {
    gold: `
      text-black
      bg-gradient-to-br
      from-[var(--gold-light)]
      to-[var(--gold)]
      shadow-[4px_4px_0px_rgba(210,176,90,0.3)]
      hover:shadow-[6px_6px_0px_rgba(210,176,90,0.4)]
      active:translate-x-[2px]
      active:translate-y-[2px]
      active:shadow-none
    `,

    outline: `
      border border-[var(--gold)]
      text-[var(--gold)]
      hover:bg-[var(--gold)]
      hover:text-black
    `,

    ghost: `
      text-[var(--muted)]
      hover:text-[var(--gold)]
      bg-transparent
      !p-0
    `,

    dark: `
      bg-[var(--black)]
      border border-[var(--border)]
      text-[var(--white)]
      hover:border-[var(--gold)]
      hover:bg-[#151515]
      shadow-xl
    `,
  };

  // Size styles
  const sizeStyles = {
    sm: "px-5 py-2.5 text-[10px]",
    md: "px-8 py-4 text-xs",
    lg: "px-12 py-5 text-sm",
  };

  // Computed classes
  const computedClassName = useMemo(() => {
    return clsx(
      baseStyles,
      variantStyles[variant] || variantStyles.gold,
      variant !== "ghost" ? sizeStyles[size] || sizeStyles.md : "",
      isDisabled && "opacity-50 cursor-not-allowed",
      className
    );
  }, [variant, size, className, isDisabled]);

  return (
    <motion.button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={computedClassName}
      whileHover={
        !isDisabled
          ? variant !== "ghost"
            ? { y: -2 }
            : { opacity: 0.8 }
          : {}
      }
      whileTap={!isDisabled ? { scale: 0.97 } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
      {...props}
    >
      {/* Glow Effect */}
      {variant === "gold" && (
        <span
          className="
            absolute inset-0
            bg-white/10
            opacity-0
            hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          "
        />
      )}

      {/* Left Icon */}
      {leftIcon && (
        <span className="relative z-10 flex items-center">
          {leftIcon}
        </span>
      )}

      {/* Button Content */}
      <span className="relative z-10 flex items-center">
        {loading ? "Loading..." : children}
      </span>

      {/* Right Icon */}
      {rightIcon && !loading && (
        <span className="relative z-10 flex items-center">
          {rightIcon}
        </span>
      )}
    </motion.button>
  );
};

// Memoized export
const Button = memo(ButtonComponent);

Button.displayName = "Button";

export default Button;
