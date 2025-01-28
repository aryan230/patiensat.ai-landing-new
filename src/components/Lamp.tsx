import React, { useState } from "react";
import MaxWidthWrapper from "./global/max-width-wrapper";
import AnimationContainer from "./global/animating-container";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { LampContainer } from "./ui/lamp";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { MultiStepLoader } from "./ui/multi-step-loader";

function Lamp({
  setLoading,
  setLoadingStates,
}: {
  setLoading: React.PropTypes.any;
  setLoadingStates: React.PropTypes.any;
}) {
  return (
    <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
      <AnimationContainer delay={0.1}>
        <LampContainer>
          <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="bg-gradient-to-b from-neutral-700 to-slate-800 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
              Step into the future of Patient Care
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
              Embrace cutting-edge technology and innovative solutions designed
              to enhance patient outcomes, streamline workflows, and deliver
              exceptional care.
            </p>
            <div className="mt-6">
              <Button className="text-white" onClick={() => setLoading(true)}>
                Get started for free
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </LampContainer>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
}

export default Lamp;
