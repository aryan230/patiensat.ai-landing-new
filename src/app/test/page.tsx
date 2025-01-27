"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const words = [
  {
    text: "intelligent",
    className: "text-[#88afc8]",
  },
  {
    text: "automated",
    className: "text-[#88afc8]",
  },
  {
    text: "seamless",
    className: "text-[#88afc8]",
  },
];

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#032c4c]">
      {/* Background Effect */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full opacity-30" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          {/* Discount Badge */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Badge className="bg-[#345e7b] hover:bg-[#345e7b]/90 text-white px-4 py-2 rounded-full text-sm font-semibold">
              75% OFF
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Mental health matter through{" "}
              <TypewriterEffectSmooth words={words} />
              <br />
              patient care
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[#88afc8] text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Give your staff more time for what matters most - patient care.
            AI-powered voice assistance that maintains the human touch.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="bg-[#345e7b] text-white hover:bg-[#345e7b]/90 transition-colors px-8 py-6 text-lg">
              Calculate ROI
            </Button>
            <Button className="bg-[#88afc8] text-[#032c4c] hover:bg-[#88afc8]/90 transition-colors px-8 py-6 text-lg">
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// BackgroundBeams Component
const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-full w-full bg-[#032c4c]", className)}>
      <div className="absolute inset-0 bg-[#032c4c]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#345e7b]/20 via-[#88afc8]/20 to-[#345e7b]/20 animate-gradient" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#032c4c] via-transparent to-transparent" />
      </div>
    </div>
  );
};

// TypewriterEffectSmooth Component
const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: { text: string; className?: string }[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={cn("inline-block", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={cn("inline-block", words[currentIndex].className)}
        >
          {words[currentIndex].text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// Add these styles to your global CSS
const styles = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient {
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
  }
`;
