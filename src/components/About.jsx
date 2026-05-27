import React, { memo } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import GlassCard from "./ui/GlassCard";
import AnimatedCounter from "./ui/AnimatedCounter";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const statVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Stats Component
const Stat = memo(({ value, suffix, label }) => {
  return (
    <motion.div
      variants={statVariants}
      className="group"
    >
      <div className="text-4xl md:text-5xl font-black tracking-tight shimmer-text mb-2 select-none">
        <AnimatedCounter
          value={value}
          suffix={suffix}
          isActive
        />
      </div>

      <div
        className="
          text-[var(--muted)]
          text-xs
          tracking-[0.25em]
          uppercase
          font-mono
          transition-colors duration-300
          group-hover:text-[var(--white)]
        "
      >
        {label}
      </div>
    </motion.div>
  );
});

Stat.displayName = "Stat";

// Card Stack Component
const CreditCardStack = memo(() => {
  const cards = [
    {
      rotate: 6,
      y: 20,
      z: 1,
      accent: "bg-[var(--border)]",
    },

    {
      rotate: -3,
      y: 10,
      z: 2,
      accent: "bg-[var(--gold)]/20",
    },
  ];

  return (
    <motion.div
      variants={itemVariants}
      className="relative h-80 flex items-center justify-center"
    >
      {/* Background Cards */}
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="
            absolute
            w-72
            rounded-3xl
            border border-[var(--border)]
            bg-[#111]
            p-6
          "
          style={{
            rotate: card.rotate,
            y: card.y,
            zIndex: card.z,
          }}
          whileHover={{
            rotate:
              index === 0
                ? card.rotate + 6
                : card.rotate - 6,

            y:
              index === 0
                ? card.y + 12
                : card.y - 12,

            x:
              index === 0
                ? 12
                : -12,
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 16,
          }}
        >
          <div className={`w-10 h-6 rounded mb-5 ${card.accent}`} />

          <div className="space-y-3">
            <div className="h-2 rounded bg-[var(--border)] w-3/4" />
            <div className="h-2 rounded bg-[var(--border)] w-1/2" />
          </div>
        </motion.div>
      ))}

      {/* Main Premium Card */}
      <motion.div
        whileHover={{
          scale: 1.04,
          y: -10,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
        }}
        className="relative z-10"
      >
        <GlassCard
          className="
            w-80
            border-[var(--gold)]/30
            shadow-2xl
          "
        >
          <div className="flex justify-between items-start mb-10">
            <div
              className="
                w-12 h-8 rounded-lg
                bg-gradient-to-br
                from-[var(--gold-light)]
                to-[var(--gold)]
              "
            />

            <span
              className="
                text-[var(--gold)]
                text-[10px]
                tracking-[0.35em]
                font-mono
                font-bold
              "
            >
              CRED
            </span>
          </div>

          <div
            className="
              text-[var(--white)]
              font-mono
              text-sm
              tracking-[0.35em]
              mb-8
              select-none
            "
          >
            •••• •••• •••• 4291
          </div>

          <div className="flex justify-between items-end">
            <div>
              <div
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-[var(--muted)]
                  mb-1
                "
              >
                Member
              </div>

              <div className="text-sm text-[var(--white)]">
                Arjun Mehta
              </div>
            </div>

            <div
              className="
                text-[var(--gold)]/70
                font-bold
                tracking-[0.2em]
                text-sm
              "
            >
              VISA
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
});

CreditCardStack.displayName = "CreditCardStack";

const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="relative py-32 px-6 noise"
    >
      <div className="max-w-7xl mx-auto">

        {/* Top Label */}
        <div className="flex items-center gap-4 mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="
              h-px
              bg-gradient-to-r
              from-[var(--gold)]
              to-transparent
            "
          />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[var(--gold)]
              font-mono
            "
          >
            About CRED
          </span>
        </div>

        {/* Main Layout */}
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
            gap-20
            items-center
          "
        >
          {/* Left Content */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="
                text-5xl md:text-7xl
                font-black
                leading-[0.92]
                tracking-tighter
                mb-8
              "
            >
              Exclusivity is
              <br />

              <span className="shimmer-text">
                earned,
              </span>

              <br />

              not given.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="
                text-lg
                leading-relaxed
                text-[var(--muted)]
                font-light
                mb-6
              "
            >
              CRED is a members-only platform built
              for India’s most creditworthy individuals.
              Every member is vetted — we only accept
              users with a credit score above 750.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="
                text-lg
                leading-relaxed
                text-[var(--muted)]
                font-light
              "
            >
              In return, we reward responsible
              financial behaviour with premium
              experiences, real cashbacks, and
              exclusive access to brands and offers.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-3"
            >
              <div className="w-10 h-px bg-[var(--gold)]" />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[var(--gold)]
                  font-mono
                "
              >
                Invitation only
              </span>
            </motion.div>
          </div>

          {/* Right Card Stack */}
          <CreditCardStack />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid grid-cols-2 md:grid-cols-4
            gap-10
            mt-28
            pt-16
            border-t border-[var(--border)]
          "
        >
          <Stat
            value={12}
            suffix="M+"
            label="Active Members"
          />

          <Stat
            value={1200}
            suffix="Cr"
            label="Rewards Given"
          />

          <Stat
            value={750}
            suffix="+"
            label="Min Credit Score"
          />

          <Stat
            value={4.9}
            suffix="★"
            label="App Store Rating"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default memo(About);