// features.js
// Cleaner + scalable constant structure

import {
  CreditCard,
  Gift,
  TrendingUp,
  Smartphone,
  Coins,
  Percent,
} from "lucide-react";

const GOLD = "var(--gold)";
const GOLD_LIGHT = "var(--gold-light)";
const GOLD_DARK = "var(--gold-dark, #a87c2a)";

export const features = Object.freeze([
  {
    id: "bill-payments",
    icon: CreditCard,
    title: "Bill Payments",
    subtitle: "Never miss a due date",
    description:
      "Manage all your credit card bills in one place with smart reminders and seamless payments.",
    accent: GOLD,
    tag: "ZERO FEE",
  },

  {
    id: "cred-rewards",
    icon: Gift,
    title: "CRED Rewards",
    subtitle: "Exclusive member benefits",
    description:
      "Unlock premium rewards, cashback offers, and curated deals from top brands.",
    accent: GOLD_LIGHT,
    tag: "EXCLUSIVE",
  },

  {
    id: "credit-score",
    icon: TrendingUp,
    title: "Credit Score",
    subtitle: "Track your financial health",
    description:
      "Monitor and improve your credit score with personalized insights and recommendations.",
    accent: GOLD_DARK,
    tag: "FREE",
  },

  {
    id: "upi-payments",
    icon: Smartphone,
    title: "UPI Payments",
    subtitle: "Fast, secure & rewarding",
    description:
      "Pay merchants, split bills, and transfer money instantly while earning rewards.",
    accent: GOLD,
    tag: "INSTANT",
  },

  {
    id: "cred-coins",
    icon: Coins,
    title: "CRED Coins",
    subtitle: "Your loyalty, rewarded",
    description:
      "Earn coins on every transaction and redeem them for vouchers, rewards, and experiences.",
    accent: GOLD_LIGHT,
    tag: "EARN",
  },

  {
    id: "cashback",
    icon: Percent,
    title: "Cashback",
    subtitle: "Real money back",
    description:
      "Get genuine cashback on bill payments, UPI transactions, and partner spends.",
    accent: GOLD_DARK,
    tag: "REAL CASH",
  },
]);