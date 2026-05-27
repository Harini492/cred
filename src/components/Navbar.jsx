import React, {
  memo,
  useEffect,
  useState,
  useCallback,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import clsx from "clsx";

import { navLinks } from "../constants/navLinks";

import Button from "./ui/Button";

// Animation Variants
const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
  },

  visible: {
    opacity: 1,
    height: "auto",

    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },

  exit: {
    opacity: 0,
    height: 0,

    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const mobileItemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

// Main Navbar
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // Prevent Body Scroll on Mobile Menu
  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Close Mobile Menu
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{
          y: -60,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={clsx(
          `
          fixed top-0 left-0 right-0
          z-50
          transition-all duration-500
          `,
          scrolled
            ? `
              py-4
              bg-[var(--black)]/75
              backdrop-blur-2xl
              border-b border-[var(--border)]
              shadow-[0_8px_32px_rgba(0,0,0,0.35)]
            `
            : `
              py-6
              bg-transparent
            `
        )}
      >
        {/* Ambient Blur */}
        <div
          className="
            absolute inset-0
            pointer-events-none
            opacity-50
          "
          style={{
            background:
              "linear-gradient(to bottom, rgba(210,176,90,0.03), transparent)",
          }}
        />

        <div
          className="
            relative z-10
            max-w-7xl
            mx-auto
            px-6
            flex items-center justify-between
          "
        >

          {/* Brand */}
          <a
            href="#hero"
            className="
              flex items-center gap-3
              group
            "
          >
            {/* Logo */}
            <motion.div
              whileHover={{
                rotate: -6,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="
                w-10 h-10
                rounded-lg
                flex items-center justify-center
                bg-gradient-to-br
                from-[var(--gold-light)]
                to-[var(--gold)]
                shadow-[3px_3px_0px_rgba(210,176,90,0.25)]
              "
            >
              <span
                className="
                  text-black
                  text-sm
                  font-black
                  font-mono
                "
              >
                C
              </span>
            </motion.div>

            {/* Brand Name */}
            <span
              className="
                text-[var(--white)]
                text-xl
                tracking-[0.22em]
                font-bold
                font-mono
              "
            >
              CRED
            </span>
          </a>

          {/* Desktop Nav */}
          <ul
            className="
              hidden md:flex
              items-center gap-10
            "
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <motion.a
                  href={link.href}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    relative
                    text-xs
                    uppercase
                    tracking-[0.22em]
                    font-mono
                    text-[var(--muted)]
                    hover:text-[var(--gold)]
                    transition-colors duration-300
                  "
                >
                  {link.label}

                  {/* Underline */}
                  <span
                    className="
                      absolute
                      left-0 -bottom-2
                      w-0 h-px
                      bg-[var(--gold)]
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div
            className="
              hidden md:flex
              items-center gap-6
            "
          >
            <motion.a
              href="#"
              whileHover={{
                opacity: 1,
              }}
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                font-mono
                text-[var(--muted)]
                hover:text-[var(--white)]
                transition-colors duration-300
              "
            >
              Sign In
            </motion.a>

            <Button
              variant="gold"
              size="sm"
            >
              Get Invite
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle Menu"
            className="
              relative
              z-[60]
              md:hidden
              flex flex-col justify-center
              gap-1.5
              w-10 h-10
            "
          >
            <motion.span
              animate={
                menuOpen
                  ? {
                      rotate: 45,
                      y: 7,
                    }
                  : {
                      rotate: 0,
                      y: 0,
                    }
              }
              className="
                block
                w-6 h-px
                bg-[var(--gold)]
                origin-center
              "
            />

            <motion.span
              animate={
                menuOpen
                  ? {
                      opacity: 0,
                    }
                  : {
                      opacity: 1,
                    }
              }
              className="
                block
                w-6 h-px
                bg-[var(--gold)]
              "
            />

            <motion.span
              animate={
                menuOpen
                  ? {
                      rotate: -45,
                      y: -7,
                    }
                  : {
                      rotate: 0,
                      y: 0,
                    }
              }
              className="
                block
                w-6 h-px
                bg-[var(--gold)]
                origin-center
              "
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed inset-0
              z-40
              md:hidden
              overflow-hidden
              bg-[rgba(5,5,5,0.96)]
              backdrop-blur-3xl
            "
          >

            {/* Ambient Glow */}
            <div
              className="
                absolute inset-0
                pointer-events-none
              "
              style={{
                background:
                  "radial-gradient(circle at top, rgba(210,176,90,0.08) 0%, transparent 70%)",
              }}
            />

            <div
              className="
                relative z-10
                flex flex-col
                justify-center
                h-full
                px-8
              "
            >

              {/* Links */}
              <motion.ul
                className="
                  flex flex-col
                  gap-8
                "
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.label}
                    variants={
                      mobileItemVariants
                    }
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="
                        block
                        text-2xl
                        uppercase
                        tracking-[0.18em]
                        font-mono
                        text-[var(--muted)]
                        hover:text-[var(--gold)]
                        transition-colors duration-300
                      "
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Footer CTA */}
              <motion.div
                variants={mobileItemVariants}
                className="
                  mt-14
                  pt-8
                  border-t border-[var(--border)]
                "
              >
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Get Invite
                </Button>

                <a
                  href="#"
                  className="
                    block
                    mt-6
                    text-center
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    font-mono
                    text-[var(--muted)]
                    hover:text-[var(--white)]
                    transition-colors duration-300
                  "
                >
                  Sign In
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);
