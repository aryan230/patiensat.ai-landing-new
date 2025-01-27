"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import AnimationContainer from "./global/animating-container";
import MagicBadge from "./ui/magic-badge";
import MaxWidthWrapper from "./global/max-width-wrapper";

export function Agents() {
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
      <div className="h-[25rem] w-full flex items-center justify-center ">
        {" "}
        <PinContainer title="Intake & Scheduling Specialist" href="/">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-fit">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Sarah
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Specializes in compassionate patient intake, appointment
                scheduling, and initial screening. Trained to recognize urgency
                levels and ensure appropriate care routing.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br h-[20rem] from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </MaxWidthWrapper>
  );
}
