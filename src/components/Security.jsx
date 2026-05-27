import React, { memo } from "react";

import {
  motion,
} from "framer-motion";

import clsx from "clsx";

import GlassCard from "./ui/GlassCard";
import SectionWrapper from "./ui/SectionWrapper";

// Security Data
const securityFeatures = [
  {
    icon: "🔐",
    title: "256-bit Encryption",
    description:
      "Military-grade AES-256 encryption protects every transaction and keeps your financial data secure at all times.",
    tag: "BANK-GRADE",
  },

  {
    icon: "🛡️",
    title: "Zero Data Selling",
    description:
      "Your financial information stays private. We never sell or misuse customer data under any circumstance.",
    tag: "GUARANTEED",
  },

  {
    icon: "👁️",
    title: "Fraud Detection",
    description:
      "AI-powered monitoring detects suspicious activity instantly and triggers security alerts in real time.",
    tag: "REAL-TIME",
  },

  {
    icon: "🔑",
    title: "Biometric Auth",
    description:
      "Face ID, fingerprint, and device-level authentication ensure only you can access your account.",
    tag: "MULTI-LAYER",
  },

  {
    icon: "📜",
    title: "RBI Regulated",
    description:
      "Built on trusted compliance systems with PCI DSS certification and RBI-aligned infrastructure.",
    tag: "CERTIFIED",
  },

  {
    icon: "⚡",
    title: "Instant Alerts",
    description:
      "Receive live notifications for every payment, login, and important account activity.",
    tag: "LIVE",
  },
];

// Certifications
const certifications = [
  {
    label: "PCI DSS",
    sub: "Level 1 Certified",
  },

  {
    label: "ISO 27001",
    sub: "Information Security",
  },

  {
    label: "RBI",
    sub: "Compliant & Licensed",
  },

  {
    label: "SOC 2",
    sub: "Type II Audited",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const SecurityCard = ({
  icon,
  title,
  description,
  tag,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      className="h-full"
    >
      <GlassCard
        className="
          h-full
          flex flex-col justify-between
          border border-white/[0.06]
        "
      >
        {/* Top */}
        <div>
          <div
            className="
              flex items-start justify-between
              mb-7
            "
          >

            {/* Icon */}
            <div
              className="
                text-4xl
                select-none
                drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]
              "
            >
              {icon}
            </div>

            {/* Tag */}
            <div
              className="
                px-3 py-1.5
                rounded-full
                text-[9px]
                uppercase
                tracking-[0.2em]
                font-mono
                font-bold
                border
              "
              style={{
                color: "var(--gold)",

                borderColor:
                  "rgba(210,176,90,0.2)",

                background:
                  "rgba(210,176,90,0.05)",
              }}
            >
              {tag}
            </div>
          </div>

          {/* Title */}
          <h3
            className="
              text-2xl
              font-bold
              tracking-tight
              text-[var(--white)]
              mb-4
            "
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="
              text-sm
              leading-relaxed
              text-[var(--muted)]
              font-light
            "
          >
            {description}
          </p>
        </div>

        {/* Bottom Accent */}
        <div
          className="
            mt-8
            flex items-center gap-2
            text-[var(--gold)]
            text-[10px]
            uppercase
            tracking-[0.25em]
            font-mono
          "
        >
          <div
            className="
              w-6 h-px
              bg-[var(--gold)]
            "
          />

          Protected
        </div>
      </GlassCard>
    </motion.div>
  );
};

// Main Component
const Security = () => {
  return (
    <SectionWrapper
      id="security"
      className="
        relative overflow-hidden
        py-32 px-6
        bg-[var(--black)]
        noise
      "
    >

      {/* Ambient Background */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          overflow-hidden
        "
      >
        {/* Main Glow */}
        <div
          className="
            absolute
            top-1/2 left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[900px]
            h-[900px]
            rounded-full
            opacity-[0.05]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(210,176,90,0.4) 0%, transparent 65%)",
          }}
        />

        {/* Top Glow */}
        <div
          className="
            absolute
            top-0 right-0
            w-[500px]
            h-[500px]
            rounded-full
            opacity-[0.04]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(210,176,90,0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
        "
      >

        {/* Header */}
        <div className="text-center mb-24">

          {/* Label */}
          <motion.span
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              block mb-5
              text-[10px]
              uppercase
              tracking-[0.32em]
              text-[var(--gold)]
              font-mono
              font-semibold
            "
          >
            Security
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
            className="
              text-5xl md:text-7xl
              font-black
              tracking-tighter
              leading-[1]
              text-[var(--white)]
            "
          >
            Your trust is our
            <br />

            <span className="shimmer-text">
              first product.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="
              max-w-2xl mx-auto
              mt-7
              text-lg
              leading-relaxed
              text-[var(--muted)]
              font-light
            "
          >
            Security is built into every
            layer of the CRED ecosystem —
            from encrypted payments to
            real-time fraud protection and
            compliance-first architecture.
          </motion.p>
        </div>

        {/* Cards Grid */}
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
            gap-6
            mb-24
          "
        >
          {securityFeatures.map((feature) => (
            <SecurityCard
              key={feature.title}
              {...feature}
            />
          ))}
        </motion.div>

        {/* Compliance Bar */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <GlassCard
            hover={false}
            className="
              rounded-[2rem]
              border border-white/[0.08]
              px-8 py-10
            "
          >
            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-10
                items-center
              "
            >
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="
                    text-center
                    group
                  "
                >

                  {/* Main */}
                  <div
                    className="
                      text-xl
                      font-black
                      tracking-wide
                      text-[var(--gold)]
                      transition-colors duration-300
                      group-hover:text-[var(--white)]
                    "
                  >
                    {cert.label}
                  </div>

                  {/* Sub */}
                  <div
                    className="
                      mt-2
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-[var(--muted)]
                      font-mono
                    "
                  >
                    {cert.sub}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default memo(Security);
