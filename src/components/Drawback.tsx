import {
  BarChart3Icon,
  ClockIcon,
  DollarSignIcon,
  FolderOpenIcon,
  Users2,
  WandSparklesIcon,
} from "lucide-react";
import React from "react";
import MaxWidthWrapper from "./global/max-width-wrapper";
import { MagicCard } from "./ui/magic-card";
import MagicBadge from "./ui/magic-badge";
import AnimationContainer from "./global/animating-container";

function Drawback() {
  const PROCESS = [
    {
      title: "Staff Impact",
      description:
        "77% of Mental Health Providers Report Critical Burnout [APA Survey, 2023]",
      icon: Users2,
    },
    {
      title: "Time Waste",
      description:
        "40% of Clinical Hours Lost to Administrative Tasks [MGMA Data, 2024]",
      icon: ClockIcon,
    },
    {
      title: "Financial Impact",
      description:
        "$4.2B Annual Industry Loss Due to Inefficient Processes [Healthcare Analysis, 2024]",
      icon: DollarSignIcon,
    },
  ];
  return (
    <MaxWidthWrapper className="py-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-4xl mx-auto">
          <MagicBadge title="SYSTEMIC BURDEN" />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-semibold font-heading text-foreground mt-6">
            The Hidden Cost of Administrative Overload in Mental Healthcare
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
            Administrative burdens drain precious time from mental healthcare
            services today.
          </p>
        </div>
      </AnimationContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
        {PROCESS.map((process, id) => (
          <AnimationContainer delay={0.2 * id} key={id}>
            <MagicCard
              className="group md:py-8 p-5"
              gradientColor={"#D9D9D955"}
            >
              <div className="flex flex-col items-start justify-center w-full">
                <process.icon
                  strokeWidth={1.5}
                  className="w-10 h-10 text-foreground"
                />
                <div className="flex flex-col relative items-start">
                  {/* <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                    {id + 1}
                  </span> */}
                  <h3 className="text-base mt-6 font-medium text-foreground">
                    {process.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {process.description}
                  </p>
                </div>
              </div>
            </MagicCard>
          </AnimationContainer>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

export default Drawback;
