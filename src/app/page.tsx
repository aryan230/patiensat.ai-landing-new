"use client";
import { Agents } from "@/components/Agents";
import { AuroraBackgroundDemo } from "@/components/Agents/ViewAgent";
import AIShowcase from "@/components/AIAgents";
import AICardShowcase from "@/components/AICard";
import ComplianceSection from "@/components/Compliance/Compliance";
import ComplianceTwo from "@/components/Compliance/ComplianceTwo";
import ConsultationPage from "@/components/Compliance/Consultation";
import Consultation from "@/components/Compliance/Consultation";
import { AnimatedBeamDemo } from "@/components/Connections";
import Drawback from "@/components/Drawback";
import { FollowingPointerDemo } from "@/components/Drawbacks/Drawbacks";
import EHRIntegrationSection from "@/components/EHR";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Background from "@/components/global/background";
import Container from "@/components/global/container";
import Icons from "@/components/global/icons";
import Wrapper from "@/components/global/wrapper";
import { GlobeDemo } from "@/components/GlobeMain";
import Hero from "@/components/Hero";
import HeroNew from "@/components/HeroNew";
import Integration from "@/components/Integrations";
import IntegrationsShowcase from "@/components/Integrations/Integration";
import Lamp from "@/components/Lamp";
import Navbar from "@/components/Navbar";
import Perks from "@/components/Perks";
import Pricing from "@/components/Pricing";
import Section from "@/components/Section";
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
import AIHealthcareHero from "@/components/VideoChat";
import AIAgentSection from "@/components/VideoChat";
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
            <HeroNew />
            <AuroraBackgroundDemo />
            {/* <AIShowcase /> */}
            <Drawback />
            <AIHealthcareHero />
            {/* <Agents /> */}
            <TimelineDemo />
            <ComplianceSection />
            <ConsultationPage />
            {/* <ComplianceTwo /> */}
            <Perks />
            <EHRIntegrationSection />
            {/* <TabsFeatures /> */}
            {/* <TextReveal text="Magic UI will change the way you design." /> */}
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
