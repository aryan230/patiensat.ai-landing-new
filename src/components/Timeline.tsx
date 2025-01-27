import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { AnimatedListDemo } from "./AnimatedList";

export function TimelineDemo() {
  let notifications = [
    {
      name: "Payment received",
      description: "Magic UI",
      time: "15m ago",

      icon: "💸",
      color: "#00C9A7",
    },
    {
      name: "User signed up",
      description: "Magic UI",
      time: "10m ago",
      icon: "👤",
      color: "#FFB800",
    },
    {
      name: "New message",
      description: "Magic UI",
      time: "5m ago",
      icon: "💬",
      color: "#FF3D71",
    },
    {
      name: "New event",
      description: "Magic UI",
      time: "2m ago",
      icon: "🗞️",
      color: "#1E86FF",
    },
  ];

  const data = [
    {
      title: "Week 1-2",
      content: (
        <div>
          <AnimatedListDemo
            className=""
            notifications={[
              {
                name: "System setup",
                description: "",
                time: "",

                icon: "🏢",
                color: "",
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Week 3-4",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
        </div>
      ),
    },
    {
      title: "Requirements",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
