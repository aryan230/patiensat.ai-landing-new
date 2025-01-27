import React from "react";
import MaxWidthWrapper from "./global/max-width-wrapper";
import AnimationContainer from "./global/animating-container";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { LampContainer } from "./ui/lamp";

function Lamp() {
  return (
    <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
      <AnimationContainer delay={0.1}>
        <LampContainer>
          <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="bg-gradient-to-b from-neutral-500 to-neutral-600 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
              Step into the future of Patient Care
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
              Experience the cutting-edge solution that transforms how you
              handle your links. Elevate your online presence with our next-gen
              platform.
            </p>
            <div className="mt-6">
              <Button>
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
