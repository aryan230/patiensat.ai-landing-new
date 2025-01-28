type PLAN = {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  yearlyPrice: number;
  badge?: string;
  buttonText: string;
  features: string[];
  link: string;
};

export const PLANS: PLAN[] = [
  {
    id: "free",
    title: "Pioneer Partner",
    desc: "Limited Time Launch Offer",
    monthlyPrice: 999,
    yearlyPrice: 899,
    buttonText: "Get Started",
    features: [
      "Full AI Voice System",
      "Epic Integration",
      "24/7 Patient Support",
      "Unlimited Staff Users",
      "Custom Training",
      "Dedicated Success Manager",
      "Priority Feature Access",
      "ROI Guarantee",
    ],
    link: "https://stripe.com/free-plan-link",
  },
  {
    id: "pro",
    title: "Professional",
    desc: "For Growing Practices",
    monthlyPrice: 1499,
    yearlyPrice: 1349,
    badge: "Most Popular",
    buttonText: "Upgrade to Pro",
    features: [
      "Full AI Voice System",
      "Epic Integration",
      "24/7 Patient Support",
      "Up to 10 Staff Users",
      "Standard Training",
      "Email Support",
      "Monthly Updates",
    ],
    link: "https://stripe.com/pro-plan-link",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    desc: "For Healthcare Networks",
    monthlyPrice: 15,
    yearlyPrice: 180,
    badge: "Contact Sales",
    buttonText: "Contact Sales",
    features: [
      "Full AI Voice System",
      "Multi-EHR Integration",
      "24/7 Priority Support",
      "Unlimited Everything",
      "Custom Development",
      "Dedicated Team",
      "Network-wide Analytics",
      "Executive Reports",
      // "24/7 priority support"
    ],
    link: "https://stripe.com/enterprise-plan-link",
  },
];
