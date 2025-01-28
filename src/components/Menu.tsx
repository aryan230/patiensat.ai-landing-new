"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Calculator,
  CalendarRangeIcon,
  CircleHelp,
  File,
  GalleryVerticalEnd,
  HashIcon,
  Hospital,
  Newspaper,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Icons from "./global/icons";

interface Props {
  title: string;
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground bg-transparent">
            Request Demo
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-[#88afc833] to-accent/50 focus:shadow-md"
                  >
                    <div className="">
                      <span className="text-lg font-black bg-gradient-to-b from-[#6FB1CC] to-[#025F81] bg-clip-text text-transparent">
                        PATIENT
                      </span>
                      <span className="text-lg font-black text-[#002950]">
                        SAT
                      </span>
                      <span className="text-lg font-black bg-gradient-to-b from-[#6FB1CC] to-[#025F81] bg-clip-text text-transparent">
                        .AI
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mt-1">
                      AI-powered voice assistance that maintains the human touch
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <Item
                title="Scenario Simulator"
                href="https://app.patientsat.ai/scenario-simulator"
                icon={<GalleryVerticalEnd className="w-5 h-5" />}
              >
                Explore various patient communication scenarios.
              </Item>
              <Item
                title="Epic Integration"
                href="https://app.patientsat.ai/epic-integration"
                icon={<File className="w-5 h-5" />}
              >
                See PatientSat AI integrates with your Epic EHR system.
              </Item>
              <Item
                title="Telehealth Demo"
                href="https://app.patientsat.ai/telehealth"
                icon={<Hospital className="w-5 h-5" />}
              >
                Experience our AI-powered telehealth capabilities firsthand.
              </Item>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/integrations" legacyBehavior passHref>
            <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
              Integrations
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[500px]">
              {" "}
              <Item
                title="ROI Calculator"
                href="https://app.patientsat.ai/roi-calculator"
                icon={<Calculator className="w-5 h-5" />}
              >
                Measure Your Investment Impact
              </Item>
              <Item
                title="Blog"
                href="/"
                icon={<Newspaper className="w-5 h-5" />}
              >
                Read our latest articles and updates.
              </Item>
              <Item
                title="Support"
                href="/"
                icon={<CircleHelp className="w-5 h-5" />}
              >
                Get help with any issues you may have.
              </Item>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Item = ({ title, href, children, icon, ...props }: Props) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          passHref
          href={href}
          target="_blank"
          {...props}
          className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
        >
          <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
            {icon}
          </div>
          <div className="text-start ml-3">
            <span className="text-sm group-hover:text-foreground font-normal leading-none">
              {title}
            </span>
            <p className="text-sm mt-0.5 line-clamp-2 text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

Item.displayName = "Item";

export default Menu;
