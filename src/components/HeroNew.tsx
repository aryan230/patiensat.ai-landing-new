import { cn } from "@/functions";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Marquee } from "./ui/marquee";
import { MorphingText } from "./ui/morphing-text";
import { TextAnimate } from "./ui/text-animate";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const reviews = [
  {
    percent: "80%",
    description:
      "AI automates scheduling, reducing wait times and improving efficiency.",
  },
  {
    percent: "95%",
    description:
      "AI-driven interactions enhance patient engagement and satisfaction.",
  },
  {
    percent: "40%",
    description:
      "Automation cuts operational costs and optimizes healthcare workflows.",
  },
  {
    percent: "5X",
    description:
      "AI speeds up EHR processing, reducing errors and manual work.",
  },
  {
    percent: "100%",
    description: "HIPAA & GDPR-compliant AI ensures secure and private data.",
  },
  {
    percent: "99.9%",
    description:
      "Reliable AI infrastructure guarantees seamless system uptime.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  percent,
  description,
}: {
  percent: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <h1 className="text-3xl font-black text-cyan-700">{percent}</h1>

      <blockquote className="mt-2 text-sm">{description}</blockquote>
    </figure>
  );
};

function HeroNew({}) {
  const words = `Transform your mental Health Practice with PatientSat AI`;
  return (
    <div
      className="flex flex-col items-center justify-center w-full pt-10 pb-20 text-center"
      data-scroll-section
    >
      <div className="flex items-center justify-center lg:gap-16 w-full absolute top-[15%] left-1/2 -translate-x-1/2 -z-10">
        <div className="w-52 h-52 rounded-full bg-blue-500 blur-[10rem] opacity-70 -z-10"></div>
        <div className="hidden lg:w-52 h-52 rounded-full bg-blue-500 blur-[10rem] opacity-70 -z-10"></div>
      </div>
      <div className="flex items-center justify-between w-[120%]">
        <div className="w-[70%] text-center">
          {" "}
          <div className="flex flex-col items-center justify-center gap-2">
            <TextGenerateEffect
              className="text-slate-800 py-6 text-4xl sm:text-6xl md:text-6xl font-semibold md:font-bold !leading-snug tracking-normal text-balance w-full"
              words={words}
            />
            {/* <TextAnimate
              animation="blurInUp"
              by="character"
              
            ></TextAnimate> */}
            <p className="text-muted-foreground text-base md:text-lg max-w-xl">
              Streamline patient engagement, reduce no-shows, and improve
              outcomes with our HIPAA-compliant AI communication platform.
            </p>
            <div className="flex flex-row md:flex-row items-center justify-center gap-4 mt-8 w-full">
              <Link
                href="#"
                // onClick={() => setLoading(true)}
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
                Calculate your ROI
              </Link>
            </div>
          </div>
          <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden pt-10">
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.description} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        </div>

        <div className="">
          <img src="/images/hero.png" />
        </div>
      </div>

      {/* <h1 className="text-slate-800 py-6 text-4xl sm:text-6xl md:text-7xl font-semibold md:font-bold !leading-snug tracking-normal text-balance w-full">
      Mental Health Matters Through
      <br /> <MorphingText texts={texts} className="text-[#345e7b]" />
      Patient Care
    </h1>
    <p className="text-muted-foreground text-base md:text-lg max-w-xl py-2">
      Give your staff more time for what matters most - patient care.
      AI-powered voice assistance that maintains the human touch.
    </p> */}
    </div>
  );
}

export default HeroNew;
