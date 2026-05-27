import React, { memo } from "react";

import {
  motion,
} from "framer-motion";

import clsx from "clsx";

import SectionWrapper from "./ui/SectionWrapper";
import Button from "./ui/Button";

// Animation Variants
const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -10, 0],

    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  },
};

// Feature Points
const featurePoints = [
  "3D layered button system",
  "Glassmorphism overlays",
  "Micro-interaction feedback",
  "Dark-first premium UI",
];

// Action Buttons
const actionButtons = [
  "Pay Bill",
  "Rewards",
  "Transfer",
];

// Reusable Floating Badge
const FloatingBadge = ({
  title,
  value,
  className,
  delay = 0,
  secure = false,
}) => {
  return (
    <motion.div
      variants={floatingVariants}
      animate="animate"
      transition={{
        delay,
      }}
      className={clsx(
        `
        absolute z-20
        glass
        border border-white/10
        backdrop-blur-xl
        rounded-2xl
        px-5 py-3.5
        shadow-2xl
        `,
        className
      )}
    >
      {secure ? (
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span
              className="
                animate-ping absolute inline-flex
                h-full w-full rounded-full
                bg-emerald-400 opacity-75
              "
            />

            <span
              className="
                relative inline-flex
                rounded-full h-2 w-2
                bg-emerald-500
              "
            />
          </span>

          <span
            className="
              text-[var(--white)]
              text-xs
              font-mono
              tracking-wide
            "
          >
            Payment Secured
          </span>
        </div>
      ) : (
        <>
          <div
            className="
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[var(--muted)]
              font-mono
              mb-1
            "
          >
            {title}
          </div>

          <div
            className="
              text-[var(--gold)]
              text-2xl
              font-black
              tracking-tight
              font-mono
            "
          >
            {value}
          </div>
        </>
      )}
    </motion.div>
  );
};

// Main Component
const NeoPOP = () => {
  return (
    <SectionWrapper
      id="rewards"
      className="
        relative overflow-hidden
        py-32 px-6
        noise
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          opacity-50
        "
        style={{
          background:
            "radial-gradient(circle at top right, rgba(201,168,76,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="
            grid md:grid-cols-2
            gap-20 items-center
          "
        >

          {/* Left Content */}
          <div>

            {/* Label */}
            <motion.span
              variants={itemVariants}
              className="
                block mb-5
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[var(--gold)]
                font-mono
              "
            >
              NeoPOP Design
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="
                text-5xl md:text-7xl
                font-black
                tracking-tighter
                leading-[0.95]
                text-[var(--white)]
                mb-8
              "
            >
              Premium in
              <br />
              every
              <br />

              <span className="shimmer-text">
                interaction.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="
                text-lg
                leading-relaxed
                text-[var(--muted)]
                font-light
                max-w-xl
                mb-10
              "
            >
              CRED's NeoPOP design system
              transforms ordinary UI into
              tactile premium experiences.
              Every interaction feels bold,
              responsive, and deeply crafted.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="
                space-y-4
                mb-12
              "
            >
              {featurePoints.map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-3
                  "
                >
                  <div
                    className="
                      w-1.5 h-1.5
                      rounded-full
                      bg-[var(--gold)]
                    "
                  />

                  <span
                    className="
                      text-sm
                      text-[var(--muted)]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <Button
                variant="gold"
                size="lg"
                className="
                  rounded-none
                  px-10
                "
              >
                Explore Design System
              </Button>
            </motion.div>
          </div>

          {/* Right Showcase */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >

            {/* Main Card */}
            <motion.div
              whileHover={{
                y: -6,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="
                relative z-10
                glass
                rounded-[2rem]
                border border-white/10
                p-8
                overflow-hidden
                shadow-[0_25px_60px_rgba(0,0,0,0.55)]
              "
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(18,18,18,0.98) 100%)",
              }}
            >

              {/* Shine Layer */}
              <div
                className="
                  absolute inset-0
                  opacity-40
                  pointer-events-none
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.06), transparent 45%)",
                }}
              />

              {/* Reward Alert */}
              <motion.div
                whileHover={{
                  scale: 1.015,
                  borderColor:
                    "rgba(201,168,76,0.35)",
                }}
                className="
                  relative z-10
                  flex items-center gap-4
                  mb-10
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--dark)]
                  p-4
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex items-center justify-center
                    w-12 h-12
                    rounded-full
                    text-black
                    text-sm
                    font-bold
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, var(--gold-light), var(--gold))",
                  }}
                >
                  ✦
                </div>

                {/* Text */}
                <div>
                  <p
                    className="
                      text-sm
                      text-[var(--white)]
                      font-medium
                    "
                  >
                    Reward Unlocked!
                  </p>

                  <p
                    className="
                      text-xs
                      text-[var(--muted)]
                    "
                  >
                    200 CRED coins credited
                  </p>
                </div>

                {/* Amount */}
                <div
                  className="
                    ml-auto
                    text-xl
                    font-black
                    tracking-tight
                    text-[var(--gold)]
                    font-mono
                  "
                >
                  +200
                </div>
              </motion.div>

              {/* Coins */}
              <div className="text-center py-10">
                <motion.div
                  initial={{
                    scale: 0.9,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                  }}
                  className="
                    text-7xl
                    font-black
                    tracking-tight
                    shimmer-text
                    select-none
                    mb-3
                  "
                >
                  12,840
                </motion.div>

                <div
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[var(--muted)]
                    font-mono
                  "
                >
                  CRED Coins
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="
                  grid grid-cols-3
                  gap-4
                  mb-8
                "
              >
                {actionButtons.map((label) => (
                  <motion.button
                    key={label}
                    whileHover={{
                      y: -3,
                      boxShadow:
                        "4px 4px 0px rgba(201,168,76,0.7)",
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      rounded-xl
                      border border-[var(--border)]
                      bg-[var(--card)]
                      py-3.5
                      text-xs
                      tracking-[0.12em]
                      text-[var(--white)]
                      font-mono
                      transition-all duration-150
                    "
                    style={{
                      boxShadow:
                        "3px 3px 0px rgba(201,168,76,0.18)",
                    }}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>

              {/* Progress */}
              <div>
                <div
                  className="
                    flex items-center justify-between
                    mb-2
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    font-mono
                    text-[var(--muted)]
                  "
                >
                  <span>
                    Credit Score Status
                  </span>

                  <span
                    className="
                      text-[var(--gold)]
                      font-bold
                    "
                  >
                    812 / 900
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className="
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-[var(--border)]
                  "
                >
                  <motion.div
                    initial={{
                      width: "0%",
                    }}
                    whileInView={{
                      width: "90%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="
                      h-full
                      rounded-full
                    "
                    style={{
                      background:
                        "linear-gradient(90deg, var(--gold), var(--gold-light))",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Badges */}
            <FloatingBadge
              title="Cashback"
              value="₹840"
              className="-top-6 -right-4"
            />

            <FloatingBadge
              secure
              delay={1.5}
              className="-bottom-6 -left-4"
            />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default memo(NeoPOP);