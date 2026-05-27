import React, { memo } from "react";
import { motion } from "framer-motion";

import {
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiArrowUpRight,
} from "react-icons/fi";

import { FaApple, FaGooglePlay } from "react-icons/fa";

import SectionWrapper from "./ui/SectionWrapper";
import GlassCard from "./ui/GlassCard";

// Footer Links
const footerLinks = {
  Company: [
    "About Us",
    "Careers",
    "Press",
    "Blog",
  ],

  Product: [
    "Features",
    "Rewards",
    "CRED Pay",
    "CRED Store",
  ],

  Legal: [
    "Privacy Policy",
    "Terms of Use",
    "Cookie Policy",
    "Grievance",
  ],

  Support: [
    "Help Center",
    "Contact Us",
    "Status",
    "Community",
  ],
};

// Social Links
const socialLinks = [
  {
    icon: <FiTwitter />,
    href: "#",
    label: "Twitter",
  },

  {
    icon: <FiLinkedin />,
    href: "#",
    label: "LinkedIn",
  },

  {
    icon: <FiInstagram />,
    href: "#",
    label: "Instagram",
  },

  {
    icon: <FiYoutube />,
    href: "#",
    label: "YouTube",
  },
];

// Footer Link Column
const FooterColumn = memo(({ title, links }) => {
  return (
    <div>
      <h4
        className="
          mb-6
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-[var(--gold)]
          font-bold
          font-mono
        "
      >
        {title}
      </h4>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="
                group
                flex items-center gap-2
                text-sm
                text-[var(--muted)]
                hover:text-[var(--white)]
                transition-colors duration-300
                font-light
              "
            >
              <span>{link}</span>

              <FiArrowUpRight
                className="
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                  text-xs
                "
              />
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
});

FooterColumn.displayName = "FooterColumn";

// Store Badge
const StoreBadge = memo(
  ({ icon, title, subtitle }) => {
    return (
      <motion.a
        href="#"
        whileHover={{
          y: -3,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
        }}
      >
        <GlassCard
          hover
          className="
            px-5 py-3
            flex items-center gap-3
            min-w-[180px]
          "
        >
          <div
            className="
              text-xl
              text-[var(--white)]
            "
          >
            {icon}
          </div>

          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-[var(--muted)]
                font-mono
              "
            >
              {subtitle}
            </p>

            <p
              className="
                text-sm
                text-[var(--white)]
                font-semibold
              "
            >
              {title}
            </p>
          </div>
        </GlassCard>
      </motion.a>
    );
  }
);

StoreBadge.displayName = "StoreBadge";

// Main Footer
const Footer = () => {
  return (
    <SectionWrapper
      as="footer"
      className="
        relative
        overflow-hidden
        border-t border-[var(--border)]
        bg-[var(--black)]
        pt-24 pb-12 px-6
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          bottom-0 left-1/2
          -translate-x-1/2
          w-[700px]
          h-[300px]
          pointer-events-none
          opacity-60
        "
        style={{
          background: `
            radial-gradient(
              ellipse,
              rgba(201,168,76,0.08) 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Noise Overlay */}
      <div
        className="
          absolute inset-0
          opacity-[0.02]
          pointer-events-none
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Grid */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-6
            gap-12
            mb-24
          "
        >

          {/* Brand Section */}
          <div className="col-span-2">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-7">

              <motion.div
                whileHover={{
                  rotate: -8,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
                className="
                  w-10 h-10
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
                    font-black
                    text-sm
                    font-mono
                  "
                >
                  C
                </span>
              </motion.div>

              <span
                className="
                  text-xl
                  tracking-[0.22em]
                  font-bold
                  font-mono
                  text-[var(--white)]
                "
              >
                CRED
              </span>
            </div>

            {/* Description */}
            <p
              className="
                max-w-sm
                text-sm
                leading-relaxed
                text-[var(--muted)]
                font-light
                mb-8
              "
            >
              Good things happen to good people.
              CRED rewards financially responsible
              individuals with premium experiences,
              benefits, and exclusive access.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="
                    w-11 h-11
                    rounded-2xl
                    flex items-center justify-center
                    border border-[var(--border)]
                    text-[var(--muted)]
                    hover:text-[var(--gold)]
                    hover:border-[var(--gold)]/30
                    bg-white/[0.02]
                    transition-colors duration-300
                  "
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Dynamic Footer Columns */}
          {Object.entries(footerLinks).map(
            ([title, links]) => (
              <FooterColumn
                key={title}
                title={title}
                links={links}
              />
            )
          )}
        </div>

        {/* Bottom Section */}
        <div
          className="
            flex flex-col lg:flex-row
            items-center justify-between
            gap-8
            pt-10
            border-t border-[var(--border)]
          "
        >

          {/* Store Badges */}
          <div className="flex flex-wrap gap-4">

            <StoreBadge
              icon={<FaApple />}
              title="App Store"
              subtitle="Download on the"
            />

            <StoreBadge
              icon={<FaGooglePlay />}
              title="Google Play"
              subtitle="Get it on"
            />
          </div>

          {/* Copyright */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
            }}
            className="
              text-xs
              tracking-[0.15em]
              text-[var(--muted)]
              font-mono
              text-center lg:text-right
            "
          >
            © 2026 CRED.
            <span className="ml-2">
              Crafted with premium interactions.
            </span>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default memo(Footer);