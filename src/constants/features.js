import {
  CreditCard,
  Gift,
  TrendingUp,
  Smartphone,
  Coins,
  Percent,
} from "lucide-react";

/**
 * Feature Configuration
 * ----------------------------------------------------------------
 * Clean, scalable, animation-ready feature dataset
 * Optimized for premium fintech UI systems
 */

export const features = [
  {
    id: "bill-payments",

    icon: CreditCard,

    title: "Bill Payments",

    subtitle: "Never miss a due date",

    description:
      "Manage and pay all your credit card bills in one place with smart reminders, seamless tracking, and rewards on every payment.",

    accent: "var(--gold)",

    tag: "ZERO FEE",

    stats: "12M+ bills paid",

    delay: 0,
  },

  {
    id: "cred-rewards",

    icon: Gift,

    title: "CRED Rewards",

    subtitle: "Exclusive member benefits",

    description:
      "Unlock curated rewards, premium cashback offers, luxury brand deals, and member-only experiences for paying responsibly.",

    accent: "var(--gold-light)",

    tag: "EXCLUSIVE",

    stats: "500+ brand partners",

    delay: 0.05,
  },

  {
    id: "credit-score",

    icon: TrendingUp,

    title: "Credit Score",

    subtitle: "Track your financial health",

    description:
      "Monitor your credit score in real time with personalised insights, financial recommendations, and smart improvement tips.",

    accent: "#b88932",

    tag: "FREE",

    stats: "Real-time insights",

    delay: 0.1,
  },

  {
    id: "upi-payments",

    icon: Smartphone,

    title: "UPI Payments",

    subtitle: "Pay anywhere instantly",

    description:
      "Transfer money, split expenses, scan QR codes, and pay merchants instantly while earning rewards on eligible transactions.",

    accent: "var(--gold)",

    tag: "INSTANT",

    stats: "24×7 secure payments",

    delay: 0.15,
  },

  {
    id: "cred-coins",

    icon: Coins,

    title: "CRED Coins",

    subtitle: "Loyalty that rewards you",

    description:
      "Earn CRED coins on every payment and redeem them for cashback, premium subscriptions, travel perks, and exclusive vouchers.",

    accent: "var(--gold-light)",

    tag: "EARN",

    stats: "Rewards on every payment",

    delay: 0.2,
  },

  {
    id: "cashback",

    icon: Percent,

    title: "Cashback",

    subtitle: "Real rewards, instantly",

    description:
      "Get genuine cashback on bill payments, shopping, UPI transactions, and partner brand purchases with zero hidden conditions.",

    accent: "#a87c2a",

    tag: "REAL CASH",

    stats: "Instant cashback credits",

    delay: 0.25,
  },
];

/**
 * Optional grouped exports
 * ----------------------------------------------------------------
 * Helpful for filters, tabs, analytics, animations, etc.
 */

export const featureTags = [
  "ZERO FEE",
  "EXCLUSIVE",
  "FREE",
  "INSTANT",
  "EARN",
  "REAL CASH",
];

export const featureIds = features.map((feature) => feature.id);