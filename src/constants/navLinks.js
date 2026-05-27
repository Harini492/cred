/**
 * Navigation Configuration
 * ----------------------------------------------------------------
 * Frozen immutable navigation structure
 * Optimized for:
 * - Navbar rendering
 * - Mobile menus
 * - Smooth scrolling
 * - Active section tracking
 */

export const navLinks = Object.freeze([
  {
    id: "features",

    label: "Features",

    href: "#features",

    ariaLabel: "Navigate to Features section",
  },

  {
    id: "rewards",

    label: "Rewards",

    href: "#rewards",

    ariaLabel: "Navigate to Rewards section",
  },

  {
    id: "security",

    label: "Security",

    href: "#security",

    ariaLabel: "Navigate to Security section",
  },

  {
    id: "members",

    label: "Members",

    href: "#testimonials",

    ariaLabel: "Navigate to Testimonials section",
  },
]);

/**
 * Optional helper exports
 * ----------------------------------------------------------------
 * Useful for:
 * - Active route matching
 * - Sidebar generation
 * - Analytics tracking
 */

export const navIds = navLinks.map((link) => link.id);

export const navLabels = navLinks.map((link) => link.label);