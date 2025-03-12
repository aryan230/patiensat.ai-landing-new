"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/functions";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/global/wrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NumberFlow from "@number-flow/react";
import { AnimatePresence } from "framer-motion";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Container from "@/components/global/container";
import Pricing from "@/components/Pricing";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Pricing plans data
const pricingPlans = [
  {
    id: "starter",
    title: "Starter",
    price: {
      monthly: 49,
      yearly: 39,
    },
    desc: "Perfect for small practices just getting started with AI.",
    features: [
      "Up to 100 patients",
      "5 AI agents",
      "Basic analytics",
      "24/7 automated appointment scheduling",
      "Email support",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    id: "professional",
    title: "Professional",
    price: {
      monthly: 99,
      yearly: 89,
    },
    desc: "Ideal for growing practices with advanced needs.",
    features: [
      "Up to 500 patients",
      "15 AI agents",
      "Advanced analytics & reporting",
      "Patient engagement tools",
      "No-show reduction system",
      "Priority email & chat support",
      "Customizable workflows",
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: {
      monthly: 199,
      yearly: 179,
    },
    desc: "Full-featured solution for large medical practices.",
    features: [
      "Unlimited patients",
      "Unlimited AI agents",
      "Custom AI training",
      "HIPAA compliance dashboard",
      "White-label solution",
      "API access",
      "Dedicated account manager",
      "24/7 phone, email & chat support",
      "Advanced integrations",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const PricingPage = () => {
  const [billPlan, setBillPlan] = useState<"monthly" | "yearly">("monthly");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingStates, setLoadingStates] = useState([
    {
      text: "Buying a condo",
    },
  ]);

  const handleSwitch = () => {
    setBillPlan((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <>
      <Navbar />{" "}
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[99999999]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={loading}
        duration={2000}
      />
      <div className="relative overflow-hidden bg-white">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/2"></div>

        {/* Hero Section */}
        <div className="hero-section"></div>
        {/* Pricing Cards */}
        <Pricing setLoading={setLoading} setLoadingStates={setLoadingStates} />

        {/* FAQ Section */}
        <div className="py-16 border-t border-gray-100" data-scroll-section>
          <Wrapper>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-heading font-medium text-center mb-10">
                Frequently Asked{" "}
                <span className="font-subheading italic">Questions</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "Can I switch plans later?",
                    a: "Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated.",
                  },
                  {
                    q: "How does the AI integration work with my existing systems?",
                    a: "Our AI platform is designed to integrate seamlessly with most popular EHR/EMR systems. We provide API access and dedicated integration support for Enterprise customers.",
                  },
                  {
                    q: "Is patient data secure and HIPAA compliant?",
                    a: "Absolutely. All plans include HIPAA compliance. We employ end-to-end encryption, secure data centers, and follow strict protocols to ensure patient data is always protected.",
                  },
                  {
                    q: "Can I try PatientSat.AI before purchasing?",
                    a: "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.",
                  },
                  {
                    q: "What kind of support is available?",
                    a: "Support varies by plan. All customers receive documentation and knowledge base access. Professional and Enterprise plans include priority support channels and dedicated assistance.",
                  },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Wrapper>
        </div>

        {/* Custom testimonial section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <Wrapper>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-heading font-medium mb-4">
                Trusted by Mental Health{" "}
                <span className="font-subheading italic">Professionals</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join hundreds of practices already using PatientSat.AI to
                enhance their patient experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "PatientSat.AI has transformed our practice. Patient no-shows reduced by 62% within the first month.",
                  author: "Dr. Sarah Johnson",
                  role: "Clinical Psychologist",
                },
                {
                  quote:
                    "The AI-powered engagement tools have helped us maintain consistent contact with our patients between sessions.",
                  author: "Dr. Michael Chen",
                  role: "Psychiatrist",
                },
                {
                  quote:
                    "Worth every penny. Our staff now spends more time with patients and less time on administrative tasks.",
                  author: "Lisa Patel",
                  role: "Practice Manager",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex-1">
                    <p className="text-gray-700 italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-medium text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Wrapper>
        </div>

        {/* CTA Section */}
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;
