"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import AnimationContainer from "./global/animating-container";
import MagicBadge from "./ui/magic-badge";
import MaxWidthWrapper from "./global/max-width-wrapper";
import Image from "next/image";
import { SparklesText } from "./ui/sparkles-text";
import Ripple from "./ui/ripple";
import { GridPattern } from "./ui/grid-pattern";
import { cn } from "@/functions";
import { Spotlight } from "./ui/spotlight";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function Agents() {
  const agents = [
    {
      name: "Sarah",
      href: "/",
      hrefText: "Connect to Sarah",
      image: "/agents/sarah.png",
      desciption: "Intake & Scheduling Specialist",
      content:
        "Specializes in compassionate patient intake, appointment scheduling, and initial screening. Trained to recognize urgency levels and ensure appropriate care routing.",
    },
    {
      name: "Michael",
      href: "/",
      hrefText: "Connect to micheal",
      image: "/agents/micheal.png",
      desciption: "Patient Care Coordinator",
      content:
        "Focuses on follow-up care coordination, medication reminders, and appointment confirmations. Ensures continuity of care through proactive communication.",
    },
    {
      name: "Emma",
      href: "/",
      hrefText: "Connect to emma",
      image: "/agents/emma.png",
      desciption: "After-Hours Support Specialist",
      content:
        "Provides compassionate after-hours support, crisis assessment, and emergency service coordination when needed. Ensures 24/7 patient care access.",
    },
  ];
  return (
    <MaxWidthWrapper>
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full pt-8 max-w-4xl mx-auto">
          <MagicBadge title="Patientsat AI Models" />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-semibold font-heading text-foreground mt-6">
            We Are Here To Serve You
          </h2>
        </div>
      </AnimationContainer>
      <div className="h-fit w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-48 md:gap-8 place-items-center mt-32 mb-32 md:mb-32">
        {agents.map((a) => (
          <PinContainer title={a.hrefText} href={a.href}>
            <div className="w-[18rem] h-fit mb-20 md:my-0">
              <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                <EvervaultCard text={a.name} />

                <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                  {a.content}
                </h2>
                <p className="text-sm border dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                  {a.desciption}
                </p>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
