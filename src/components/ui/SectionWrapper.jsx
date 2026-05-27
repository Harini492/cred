import React, { memo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const SectionWrapper = ({
  children,
  className = "",
  id,
  delay = 0,
  duration = 0.85,
  once = true,
  amount = 0.15,
  y = 40,
  blur = false,
  stagger = false,
  as: Component = motion.section,
  ...props
}) => {
  // Main animation variants
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y,
      filter: blur ? "blur(10px)" : "blur(0px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],

        ...(stagger && {
          staggerChildren: 0.12,
          delayChildren: 0.1,
        }),
      },
    },
  };

  return (
    <Component
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
      }}
      className={clsx(
        `
        relative w-full overflow-hidden
        will-change-transform
        `,
        className
      )}
      {...props}
    >
      {/* Ambient Fade Overlay */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          opacity-[0.015]
          bg-gradient-to-b
          from-white
          via-transparent
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
};

SectionWrapper.displayName = "SectionWrapper";

export default memo(SectionWrapper);