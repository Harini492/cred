import React, { memo, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import Button from "./ui/Button";

// Animation Variants
const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Reusable Floating Orb
const GlowOrb = memo(
  ({ className = "", style = {} }) => {
    return (
      <motion.div
        className={className}
        style={style}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  }
);

GlowOrb.displayName = "GlowOrb";

// Main Hero Component
const Hero = () => {
  // Interactive Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    stiffness: 45,
    damping: 18,
    mass: 0.6,
  };

  // Smooth Orb Motion
  const orbX = useSpring(mouseX, springConfig);
  const orbY = useSpring(mouseY, springConfig);

  // Text Parallax
  const textY = useTransform(
    orbY,
    [-50, 50],
    [-8, 8]
  );

  // Mouse Interaction
  const handleMouseMove = useCallback(
    (e) => {
      const { innerWidth, innerHeight } = window;

      const x =
        (e.clientX / innerWidth - 0.5) * 50;

      const y =
        (e.clientY / innerHeight - 0.5) * 50;

      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--black)]
        flex items-center justify-center
        px-6
        noise
      "
    >

      {/* Background Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.025]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(210,176,90,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(210,176,90,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient Glow System */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Main Interactive Orb */}
        <motion.div
          style={{
            x: orbX,
            y: orbY,
            background:
              "radial-gradient(circle, rgba(210,176,90,0.14) 0%, rgba(210,176,90,0.03) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
          className="
            absolute
            top-1/2 left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[700px]
            rounded-full
          "
        />

        {/* Side Glow */}
        <GlowOrb
          className="
            absolute
            top-20 right-0
            w-[320px]
            h-[320px]
            rounded-full
            opacity-20
            blur-3xl
          "
          style={{
            background:
              "radial-gradient(circle, rgba(232,201,109,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Bottom Glow */}
        <GlowOrb
          className="
            absolute
            bottom-0 left-0
            w-[420px]
            h-[420px]
            rounded-full
            opacity-20
            blur-3xl
          "
          style={{
            background:
              "radial-gradient(circle, rgba(210,176,90,0.16) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-32 left-12 w-px h-24 bg-gradient-to-b from-[var(--gold)] to-transparent opacity-40" />

      <div className="absolute bottom-40 right-16 w-px h-32 bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent opacity-30" />

      <div className="absolute top-1/2 left-8 w-16 h-px bg-gradient-to-r from-transparent to-[var(--gold)] opacity-30" />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative z-10
          max-w-7xl
          mx-auto
          text-center
        "
      >

        {/* Badge */}
        <motion.div
          variants={fadeVariants}
          className="mb-10"
        >
          <span
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              rounded-full
              border border-[var(--gold)]/30
              bg-white/[0.03]
              backdrop-blur-xl
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[var(--gold)]
              font-semibold
              font-mono
            "
          >
            <span className="text-[12px]">
              ✦
            </span>

            Members Only Club

            <span className="text-[12px]">
              ✦
            </span>
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          style={{
            y: textY,
          }}
          className="
            font-black
            tracking-tighter
            leading-[0.88]
            select-none
          "
        >

          <motion.h1
            variants={lineVariants}
            className="
              text-[clamp(3.2rem,9vw,8.8rem)]
              text-[var(--white)]
            "
          >
            Good Things
          </motion.h1>

          <motion.h1
            variants={lineVariants}
            className="
              text-[clamp(3.2rem,9vw,8.8rem)]
              shimmer-text
            "
          >
            Happen To
          </motion.h1>

          <motion.h1
            variants={lineVariants}
            className="
              text-[clamp(3.2rem,9vw,8.8rem)]
              text-[var(--white)]
            "
          >
            Good People.
          </motion.h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeVariants}
          className="
            max-w-3xl
            mx-auto
            mt-10
            mb-14
            text-lg md:text-xl
            leading-relaxed
            text-[var(--muted)]
            font-light
          "
        >
          India’s most rewarding platform for{" "}

          <span className="text-[var(--white)] font-medium">
            creditworthy
          </span>{" "}

          individuals. Pay bills, earn
          cashback rewards, manage credit
          scores, and unlock premium
          experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeVariants}
          className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-5
          "
        >
          <Button
            variant="gold"
            size="lg"
            className="
              min-w-[220px]
              text-sm
            "
          >
            Join CRED →
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="
              min-w-[220px]
              text-sm
            "
          >
            Watch Film
          </Button>
        </motion.div>

        {/* Floating Premium Card */}
        <motion.div
          variants={fadeVariants}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
          }}
          className="
            mt-24
            flex justify-center
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border border-[var(--gold)]/20
              bg-white/[0.04]
              backdrop-blur-2xl
              shadow-[0_12px_40px_rgba(0,0,0,0.4)]
              px-6 py-5
              flex items-center gap-5
              max-w-sm w-full
            "
          >

            {/* Ambient Overlay */}
            <div
              className="
                absolute inset-0
                opacity-50
                pointer-events-none
              "
              style={{
                background:
                  "radial-gradient(circle at top, rgba(210,176,90,0.10) 0%, transparent 70%)",
              }}
            />

            {/* Card Icon */}
            <div
              className="
                relative z-10
                w-14 h-9
                rounded-lg
                flex items-center justify-center
                bg-gradient-to-br
                from-[var(--gold-light)]
                to-[var(--gold)]
              "
            >
              <span
                className="
                  text-black
                  text-[8px]
                  tracking-[0.25em]
                  font-bold
                  font-mono
                "
              >
                CRED
              </span>
            </div>

            {/* Card Content */}
            <div className="relative z-10 text-left">

              <p
                className="
                  text-sm
                  text-[var(--white)]
                  font-medium
                  tracking-wide
                "
              >
                ₹2,840 Cashback Earned
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  tracking-[0.2em]
                  uppercase
                  text-[var(--muted)]
                  font-mono
                "
              >
                This month · 3 payments
              </p>
            </div>

            {/* Live Status */}
            <div className="relative z-10 ml-auto">
              <span className="relative flex h-3 w-3">

                <span
                  className="
                    absolute inline-flex
                    h-full w-full
                    rounded-full
                    bg-emerald-400
                    opacity-70
                    animate-ping
                  "
                />

                <span
                  className="
                    relative inline-flex
                    h-3 w-3
                    rounded-full
                    bg-emerald-500
                  "
                />
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 0.4,
          y: [0, 6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8 left-1/2
          -translate-x-1/2
          flex flex-col items-center gap-2
          pointer-events-none
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-[var(--muted)]
            font-mono
          "
        >
          Scroll
        </span>

        <div
          className="
            w-px h-14
            bg-gradient-to-b
            from-[var(--gold)]
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
};

export default memo(Hero);
