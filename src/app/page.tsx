"use client";
import { Agents } from "@/components/Agents";
import AICardShowcase from "@/components/AICard";
import { AnimatedBeamDemo } from "@/components/Connections";
import Drawback from "@/components/Drawback";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Background from "@/components/global/background";
import Container from "@/components/global/container";
import Icons from "@/components/global/icons";
import Wrapper from "@/components/global/wrapper";
import { GlobeDemo } from "@/components/GlobeMain";
import Hero from "@/components/Hero";
import Integration from "@/components/Integrations";
import Lamp from "@/components/Lamp";
import Navbar from "@/components/Navbar";
import Perks from "@/components/Perks";
import Pricing from "@/components/Pricing";
import StickyContent from "@/components/StickyContent";
import { TabsFeatures } from "@/components/TabsFeatures";
import { TimelineDemo } from "@/components/Timeline";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { buttonVariants } from "@/components/ui/button";
import { MorphingText } from "@/components/ui/morphing-text";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { Spotlight } from "@/components/ui/spotlight";
import { TextReveal } from "@/components/ui/text-reveal";
import UniversalModal from "@/components/UniversalModal";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { ArrowRightIcon, X } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
  const texts = ["Intelligent", "Automated", "Seamless"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStates, setLoadingStates] = useState([
    {
      text: "Buying a condo",
    },
  ]);
  return (
    <>
      <div
        id="home"
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-[150%]"
      />
      <UniversalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />{" "}
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
      <Navbar />
      <main className="mx-auto w-full z-40 relative">
        <Background>
          <Wrapper className="py-20 relative">
            <div className="flex flex-col items-center justify-center w-full py-20 text-center">
              <div className="flex items-center justify-center lg:gap-16 w-full absolute top-[15%] left-1/2 -translate-x-1/2 -z-10">
                <div className="w-52 h-52 rounded-full bg-blue-500 blur-[10rem] opacity-70 -z-10"></div>
                <div className="hidden lg:w-52 h-52 rounded-full bg-blue-500 blur-[10rem] opacity-70 -z-10"></div>
              </div>
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Limited time deal! Get flat 75% OFF</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
              <h1 className="text-slate-800 py-6 text-4xl sm:text-6xl md:text-7xl font-semibold md:font-bold !leading-snug tracking-normal text-balance w-full">
                Mental Health Matters Through
                <br /> <MorphingText texts={texts} className="text-[#345e7b]" />
                Patient Care
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl py-2">
                Give your staff more time for what matters most - patient care.
                AI-powered voice assistance that maintains the human touch.
              </p>
              <div className="flex flex-row md:flex-row items-center justify-center gap-4 mt-8 w-full">
                <Link
                  href="#"
                  onClick={() => setLoading(true)}
                  className="custom-button-css"
                >
                  Start for free
                  <ArrowRightIcon className="w-4 h-4 ml-1.5" />
                </Link>
                <Link
                  href="https://app.patientsat.ai/roi-calculator"
                  target="_blank"
                  className="custom-button-css add-button-css"
                >
                  {/* <Icons.store className="w-4 h-4 mr-1.5" /> */}
                  Calculate your ROI
                </Link>
              </div>
            </div>

            <Drawback />
            <Agents />
            <Perks />

            {/* <TabsFeatures /> */}
            {/* <TextReveal text="Magic UI will change the way you design." /> */}
            <TimelineDemo />
            <Integration />
            <GlobeDemo />
            <Pricing
              setLoading={setLoading}
              setLoadingStates={setLoadingStates}
            />

            {/* <AnimatedBeamDemo /> */}
            <Lamp setLoading={setLoading} setLoadingStates={setLoadingStates} />
            {/* <Container className="py-8 lg:py-20">
          <Companies />
      </Container> */}
            {/* <Connect />
      <Features />
      <Perks />
      <Pricing />
      <Reviews />
      <CTA /> */}
          </Wrapper>
        </Background>
      </main>
      <Footer />
    </>
  );
}

export default Page;
