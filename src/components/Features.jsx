import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { features } from "../constants/features";

import NeoPOPCard from "./ui/NeoPOPCard";
import SectionWrapper from "./ui/SectionWrapper";

// SVG Icon System
const iconMap = {
  CreditCard: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-6 h-6"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  ),

  Gift: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-6 h-6"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  ),

  TrendingUp: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-6 h-6"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),

  Smartphone: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-6 h-6"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),

  Coins: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-6 h-6"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <line x1="16.71" y1="13.88" x2="13.91" y2="16.67" />
    </svg>
  ),

  Percent: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="w-6 h-6"
    >
      <line x1="19" y1="5" x2="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  ),
};

// Section Animation Variants
const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
    },
  },
};

// Feature Card Component
const FeatureCard = memo(({ feature }) => {
  const Icon = useMemo(
    () => iconMap[feature.icon],
    [feature.icon]
  );

  const accent = feature.accent || "var(--gold)";

  return (
    <motion.div
      variants={cardVariants}
      className="group h-full"
    >
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
        }}
        className="h-full"
      >
        <NeoPOPCard
          accent={accent}
          className="
            h-full
            flex flex-col justify-between
            min-h-[320px]
            bg-[#111]
          "
        >
          {/* Top Content */}
          <div>

            {/* Header */}
            <div className="flex items-center justify-between mb-8">

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 6,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="
                  w-14 h-14
                  rounded-2xl
                  border
                  flex items-center justify-center
                "
                style={{
                  color: accent,
                  background: `${accent}12`,
                  borderColor: `${accent}35`,
                }}
              >
                <Icon />
              </motion.div>

              {/* Tag */}
              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  font-mono
                  px-3 py-1.5
                  rounded-full
                  border
                "
                style={{
                  color: accent,
                  borderColor: `${accent}30`,
                  background: `${accent}08`,
                }}
              >
                {feature.tag}
              </span>
            </div>

            {/* Typography */}
            <h3
              className="
                text-2xl
                font-black
                tracking-tight
                text-[var(--white)]
                mb-2
              "
            >
              {feature.title}
            </h3>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.22em]
                font-mono
                font-semibold
                mb-5
              "
              style={{
                color: accent,
              }}
            >
              {feature.subtitle}
            </p>

            <p
              className="
                text-sm
                leading-relaxed
                text-[var(--muted)]
                font-light
              "
            >
              {feature.description}
            </p>
          </div>

          {/* Bottom CTA */}
          <motion.div
            whileHover={{
              x: 4,
            }}
            transition={{
              type: "spring",
              stiffness: 140,
            }}
            className="
              mt-10
              flex items-center gap-2
              text-xs
              uppercase
              tracking-[0.22em]
              font-mono
              transition-colors duration-300
              group-hover:text-[var(--white)]
            "
            style={{
              color: accent,
            }}
          >
            <span>Learn more</span>

            <span className="text-sm">
              →
            </span>
          </motion.div>

          {/* Ambient Glow */}
          <div
            className="
              absolute inset-0
              opacity-0 group-hover:opacity-100
              transition-opacity duration-700
              pointer-events-none
            "
            style={{
              background: `
                radial-gradient(
                  circle at top,
                  ${accent}10 0%,
                  transparent 70%
                )
              `,
            }}
          />
        </NeoPOPCard>
      </motion.div>
    </motion.div>
  );
});

FeatureCard.displayName = "FeatureCard";

// Main Component
const Features = () => {
  return (
    <SectionWrapper
      id="features"
      className="relative py-32 px-6 noise"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">

          <motion.span
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="
              block mb-4
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[var(--gold)]
              font-mono
            "
          >
            What We Offer
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
            className="
              text-5xl md:text-7xl
              font-black
              tracking-tighter
              leading-[0.95]
            "
          >
            Built for the
            <br />

            <span className="shimmer-text">
              financially wise.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="
              max-w-2xl
              mx-auto
              mt-6
              text-lg
              leading-relaxed
              text-[var(--muted)]
              font-light
            "
          >
            Every feature is designed to reward
            responsibility and make your financial
            experience seamless, rewarding,
            and premium.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default memo(Features);