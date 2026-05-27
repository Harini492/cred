/**
 * Framer Motion Animation Presets
 * -----------------------------------
 * Reusable premium animation variants
 */

export const PREMIUM_EASE = [0.22, 1, 0.36, 1];

/**
 * Base transition factory
 */
const createTransition = (
  duration = 0.8,
  delay = 0,
  ease = PREMIUM_EASE
) => ({
  duration,
  delay,
  ease,
});

/**
 * Fade Up
 */
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: createTransition(0.8, delay),
  }),
};

/**
 * Fade In
 */
export const fadeIn = {
  hidden: {
    opacity: 0,
  },

  visible: (delay = 0) => ({
    opacity: 1,

    transition: createTransition(0.6, delay, "easeOut"),
  }),
};

/**
 * Slide From Left
 */
export const slideLeft = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,

    transition: createTransition(0.8, delay),
  }),
};

/**
 * Slide From Right
 */
export const slideRight = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,

    transition: createTransition(0.8, delay),
  }),
};

/**
 * Scale Reveal
 */
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,

    transition: createTransition(0.7, delay),
  }),
};

/**
 * Stagger Parent Container
 */
export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0.1
) => ({
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Floating animation
 */
export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],

    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Pulse Glow
 */
export const pulseGlow = {
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.03, 1],

    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};