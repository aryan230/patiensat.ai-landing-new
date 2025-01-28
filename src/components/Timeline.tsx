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
          {/* <AnimatedListDemo
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
          /> */}
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <b>System setup</b>
              <br />
              Install and configure all necessary software and hardware to
              ensure the facility's systems are operational and secure. This
              includes setting up servers, workstations, and specialized
              equipment.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <b>Integration</b>
              <br />
              Connect the facility's systems with existing platforms like EHR
              and scheduling tools. Test data flow and ensure seamless
              communication between systems for smooth operations.
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <b>Staff Training</b>
              <br />
              Conduct hands-on training sessions for staff to familiarize them
              with the new systems. Provide resources like manuals and tutorials
              to support ongoing learning.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Week 3-4",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <b>Pilot Testing</b>
            <br />
            Run a small-scale pilot to test workflows and identify potential
            issues. Gather feedback from staff and make necessary adjustments
            for optimization.
          </p>{" "}
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <b>Process Optimization</b>
            <br />
            Analyze pilot data to refine workflows and improve efficiency.
            Implement best practices and ensure alignment with the facility's
            goals.
          </p>{" "}
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <b>Go-Live Preparation</b>
            <br />
            Finalize all configurations and conduct a thorough review to ensure
            systems are ready for full-scale use. Address any last-minute
            concerns before the official launch.
          </p>
        </div>
      ),
    },
    {
      title: "Requirements",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Internet connection
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Phone system
          </p>{" "}
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Basic computer setup
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
