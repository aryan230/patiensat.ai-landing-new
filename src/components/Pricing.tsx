"use client";

import { PLANS } from "@/constants";
import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import Container from "./global/container";
import { cn } from "@/functions";
import { Button } from "./ui/button";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { MultiStepLoader } from "./ui/multi-step-loader";
import { Drawer } from "vaul";
import { usePriceStore } from "@/store/usePriceStore";
import { useRouter } from "next/navigation";

type Plan = "monthly" | "annually";

const VaulDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white">{/* Content */}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

const Pricing = ({
  setLoading,
  setLoadingStates,
}: {
  setLoading: React.PropTypes.any;
  setLoadingStates: React.PropTypes.any;
}) => {
  const [billPlan, setBillPlan] = useState<Plan>("monthly");
  const [selectedPlan, setSelectedPlan] = useState();

  const handleSwitch = () => {
    setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
  };

  return (
    <div className="relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto pt-0 md:pt-20 ">
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <Container>
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
              Find the right plan that suits <br className="hidden lg:block" />{" "}
              <span className="font-subheading italic">your needs</span>
            </h2>
            <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
              Transform your marketing with AI-powered automation. Create
              campaigns faster, generate better content, and make smarter
              decisions in minutes.
            </p>
          </div>
        </Container>

        <Container delay={0.2}>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <span className="text-base font-medium">Monthly</span>
            <button
              onClick={handleSwitch}
              className="relative rounded-full focus:outline-none"
            >
              <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-blue-500"></div>
              <div
                className={cn(
                  "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-500 ease-in-out top-1 left-1 rounded-full bg-white",
                  billPlan === "annually" ? "translate-x-6" : "translate-x-0"
                )}
              />
            </button>
            <span className="text-base font-medium">Annually</span>
          </div>
        </Container>
      </div>

      <div className="grid w-full grid-cols-1 lg:grid-cols-3 pt-8 lg:pt-12 gap-2 lg:gap-6 max-w-full mx-auto">
        {PLANS.map((plan, idx) => (
          <Container key={idx} delay={0.1 * idx + 0.2}>
            <Plan
              key={plan.id}
              plan={plan}
              billPlan={billPlan}
              setLoadingStates={setLoadingStates}
              setLoading={setLoading}
            />
          </Container>
        ))}
      </div>
    </div>
  );
};

const Plan = ({
  plan,
  billPlan,
  setLoadingStates,
  setLoading,
}: {
  plan: PLAN;
  billPlan: Plan;
  setLoadingStates: React.PropTypes.any;
  setLoading: React.PropTypes.any;
}) => {
  const router = useRouter();
  const { setPrice, setPlan } = usePriceStore();
  return (
    <div
      className={cn(
        "flex flex-col relative rounded-2xl lg:rounded-3xl transition-all bg-background/ items-start w-full border border-foreground/10 overflow-hidden",
        plan.title === "Mastermind" && "border-blue-500"
      )}
    >
      {plan.title === "Mastermind" && (
        <div className="absolute top-1/2 inset-x-0 mx-auto h-12 -rotate-45 w-full bg-blue-600 rounded-2xl lg:rounded-3xl blur-[8rem] -z-10"></div>
      )}

      <div className="p-4 md:p-8 flex rounded-t-2xl lg:rounded-t-3xl flex-col items-start w-full relative">
        <h2 className="font-medium text-xl text-foreground pt-5">
          {plan.title}
        </h2>
        {plan.title === "Enterprise" ? (
          <h3 className="mt-3 text-3xl font-medium md:text-5xl pt-5">Custom</h3>
        ) : (
          <h3 className="mt-3 text-3xl font-medium md:text-5xl">
            <NumberFlow
              value={
                billPlan === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
              }
              suffix={billPlan === "monthly" ? "/mo" : "/mo"}
              format={{
                currency: "USD",
                style: "currency",
                currencySign: "standard",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
                currencyDisplay: "narrowSymbol",
              }}
            />
          </h3>
        )}

        <p className="text-sm md:text-base text-muted-foreground mt-2">
          {plan.desc}
        </p>
      </div>
      <div className="flex flex-col items-start w-full px-4 py-2 md:px-8">
        <Button
          size="lg"
          variant={"default"}
          className="w-full text-white"
          onClick={() => {
            setPlan(plan.title);
            setPrice(
              billPlan === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
            );
            // router.push("/checkout");
            router.push("/checkout");
            // setLoadingStates([
            //   {
            //     text: "payment",
            //     amount:
            //       billPlan === "monthly" ? plan.monthlyPrice : plan.yearlyPrice,
            //   },
            // ]);
            // setLoading(true);
          }}
        >
          {plan.buttonText}
        </Button>
        <div className="h-8 overflow-hidden w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.span
              key={billPlan}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-sm text-center text-muted-foreground mt-3 mx-auto block"
            >
              {billPlan === "monthly"
                ? "Billed monthly"
                : "Billed in one annual payment"}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col items-start w-full p-5 mb-4 ml-1 gap-y-2">
        <span className="text-base text-left mb-2">Includes:</span>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center">
              <CheckIcon className="size-5" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
