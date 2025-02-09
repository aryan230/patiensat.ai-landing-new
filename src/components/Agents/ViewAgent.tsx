"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { useRouter } from "next/navigation";

export function AuroraBackgroundDemo() {
  const router = useRouter();
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Meet Our AI Experts
        </div>
        <div className="font-extralight text-base md:text-xl dark:text-neutral-200 py-4">
          Powered by advanced artificial intelligence, our virtual medical team
          is here to assist you 24/7.
        </div>
        <div className="flex items-center justify-center flex-wrap">
          <img className="w-[23em] m-2" src="/images/agents/one.png" alt="" />
          <img className="w-[23em] m-2" src="/images/agents/two.png" alt="" />
          <img className="w-[23em] m-2" src="/images/agents/three.png" alt="" />
        </div>
        <button
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
          onClick={() => {
            router.push("/agents/sarah");
          }}
        >
          View all
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
