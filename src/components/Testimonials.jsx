import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import { FiPlay, FiStar } from "react-icons/fi";

import { testimonials, stats } from "../constants/testimonials";
import GlassCard from "./ui/GlassCard";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedCounter from "./ui/AnimatedCounter";

/* ----------------------------- Animation Config ---------------------------- */

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

const testimonialVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* -------------------------------- Components ------------------------------- */

const StarRating = memo(({ count = 5 }) => (
  <div
    className="flex items-center gap-1"
    aria-label={`${count} star rating`}
  >
    {Array.from({ length: count }).map((_, index) => (
      <FiStar
        key={index}
        className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]"
      />
    ))}
  </div>
));

StarRating.displayName = "StarRating";

const StoreCard = memo(({ store, rating, reviews, icon }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 140, damping: 14 }}
    className="
      group flex min-w-[260px] items-center gap-5
      rounded-2xl border border-[var(--border)]/50
      bg-white/[0.03] px-7 py-5
      shadow-[0_10px_30px_rgba(0,0,0,0.25)]
      backdrop-blur-xl
      transition-all duration-300
      hover:border-[var(--gold)]/30
    "
  >
    <div
      className="
        flex h-12 w-12 items-center justify-center
        rounded-xl border border-[var(--border)]
        bg-white/[0.04]
        transition-colors duration-300
        group-hover:border-[var(--gold)]/30
      "
    >
      {icon}
    </div>

    <div>
      <p
        className="
          mb-1 text-[10px]
          font-semibold uppercase tracking-[0.22em]
          text-[var(--muted)]
          font-mono
        "
      >
        {store}
      </p>

      <div className="flex items-center gap-2">
        <span className="text-2xl font-black tracking-tight text-[var(--white)]">
          {rating}
        </span>

        <span className="text-lg text-[var(--gold)]">★</span>
      </div>

      <p className="mt-1 text-[10px] font-mono text-[var(--muted)]">
        {reviews}
      </p>
    </div>
  </motion.div>
));

StoreCard.displayName = "StoreCard";

/* --------------------------------- Section -------------------------------- */

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionWrapper
      id="testimonials"
      className="relative overflow-hidden bg-[var(--black)] py-32 px-6 noise"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute left-1/2 top-0
            h-[500px] w-[500px]
            -translate-x-1/2
            rounded-full opacity-[0.06]
            blur-3xl
          "
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.35) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mb-5 block
              text-[10px]
              font-semibold uppercase
              tracking-[0.32em]
              text-[var(--gold)]
              font-mono
            "
          >
            Member Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="
              font-black leading-[0.95]
              tracking-tighter
              text-[var(--white)]
              text-5xl md:text-7xl
            "
          >
            What members
            <br />
            <span className="shimmer-text">are saying.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="
              mx-auto mt-6 max-w-2xl
              text-lg leading-relaxed
              text-[var(--muted)]
              font-light
            "
          >
            Millions trust CRED to manage payments, rewards, and credit insights
            with a premium experience designed around reliability.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
              variants={statCardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 140, damping: 14 }}
            >
              <GlassCard
                className="
                  border border-[var(--border)]/40
                  text-center
                  hover:border-[var(--gold)]/30
                "
              >
                <div className="mb-2 text-4xl font-black tracking-tight shimmer-text select-none">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isActive
                  />
                </div>

                <p
                  className="
                    text-[10px]
                    uppercase tracking-[0.22em]
                    text-[var(--muted)]
                    font-mono
                  "
                >
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={testimonial.id}
                custom={index}
                variants={testimonialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <GlassCard
                  hover
                  onClick={() => setActiveIndex(index)}
                  className={`
                    h-full cursor-pointer border transition-all duration-300
                    ${
                      isActive
                        ? "border-[var(--gold)]/40 scale-[1.01] shadow-[0_20px_50px_rgba(201,168,76,0.08)]"
                        : "border-[var(--border)]/40"
                    }
                  `}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <StarRating count={testimonial.rating} />

                      <blockquote
                        className="
                          my-6 text-base italic leading-relaxed
                          text-[var(--white)]
                          font-light
                        "
                      >
                        “{testimonial.text}”
                      </blockquote>
                    </div>

                    <div
                      className="
                        mt-auto flex items-center gap-3
                        border-t border-[var(--border)]/50
                        pt-5
                      "
                    >
                      <div
                        className="
                          flex h-11 w-11 items-center justify-center
                          rounded-full
                          text-xs font-black text-black
                          shadow-lg
                        "
                        style={{
                          background:
                            "linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%)",
                        }}
                      >
                        {testimonial.avatar}
                      </div>

                      <div>
                        <p className="text-sm font-medium tracking-wide text-[var(--white)]">
                          {testimonial.name}
                        </p>

                        <p
                          className="
                            text-[10px]
                            tracking-[0.18em]
                            text-[var(--muted)]
                            font-mono
                          "
                        >
                          {testimonial.role}
                        </p>
                      </div>

                      <span
                        className="
                          ml-auto text-xs
                          font-mono
                          text-[var(--gold)]/50
                        "
                      >
                        {testimonial.handle}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Store Ratings */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            flex flex-col items-center justify-center gap-6
            sm:flex-row
          "
        >
          <StoreCard
            store="App Store"
            rating="4.9"
            reviews="580K+ Reviews"
            icon={<FaApple className="h-7 w-7 text-[var(--white)]" />}
          />

          <StoreCard
            store="Play Store"
            rating="4.8"
            reviews="2.1M+ Reviews"
            icon={
              <FiPlay className="h-6 w-6 fill-[var(--white)] text-[var(--white)]" />
            }
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default memo(Testimonials);