import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Icons from "./global/icons";
import Container from "./global/container";
import { Button } from "./ui/button";
import Images from "./global/images";
import { cn } from "@/functions";
import Ripple from "./ui/ripple";

const SOCIAL_PLATFORMS = [
  {
    icon: Icons.hippa,
    position: "right-1",
    size: "e-large",
    iconSize: "e-large",
    className: "hidden lg:flex",
  },
  {
    icon: Icons.aws,
    position: "left-2",
    size: "e-large",
    iconSize: "large",
  },
  {
    icon: Icons.nvidia,
    position: "left-1",
    size: "e-large",
    iconSize: "large",
  },
  {
    icon: Icons.firebase,
    position: "left-3",
    size: "e-large",
    iconSize: "large",
  },
  {
    icon: Icons.typescript,
    position: "right-2",
    size: "e-large",
    iconSize: "large",
  },
  {
    icon: Icons.reddis,
    position: "right-3",
    size: "e-large",
    iconSize: "large",
  },
];

const Integration = () => {
  const getPositionClasses = (position: string) => {
    switch (position) {
      case "left-3":
        return "-translate-x-[285px]";
      case "left-2":
        return "-translate-x-[210px]";
      case "left-1":
        return "-translate-x-[125px]";
      case "right-1":
        return "translate-x-[125px]";
      case "right-2":
        return "translate-x-[210px]";
      case "right-3":
        return "translate-x-[285px]";
      default:
        return "";
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "e-large":
        return "size-24";
      case "large":
        return "size-20";
      case "medium":
        return "size-16";
      case "small":
        return "size-12";
      default:
        return "size-20";
    }
  };

  const getIconSizeClasses = (size: string) => {
    switch (size) {
      case "e-large":
        return "size-48";
      case "large":
        return "size-10";
      case "medium":
        return "size-7";
      case "small":
        return "size-5";
      default:
        return "size-10";
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-10 scale-">
      <Container className="relative">
        <div className="relative flex flex-col lg:hidden items-center justify-center overflow-visible">
          <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

          <div className="max-w-sm w-full h-auto mx-auto mt-8">
            <span className="text-lg font-black bg-gradient-to-b from-[#6FB1CC] to-[#025F81] bg-clip-text text-transparent">
              PATIENT
            </span>
            <span className="text-lg font-black text-[#002950]">SAT</span>
            <span className="text-lg font-black bg-gradient-to-b from-[#6FB1CC] to-[#025F81] bg-clip-text text-transparent">
              .AI
            </span>
          </div>
        </div>
      </Container>

      <div className="flex flex-col items-center text-center max-w-3xl mx-auto lg:absolute lg:top-1/4 inset-x-0 mt-12 lg:mt-0">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-semibold !leading-snug">
          Technology Partners
        </h2>
      </div>
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto lg:absolute lg:bottom-1/4 inset-x-0 z-20 mt-8 lg:mt-0">
        <Link href="#">
          <Button size="lg" className="text-white">
            See all Integrations
            <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </div>

      <Container delay={0.3}>
        <div className="relative hidden lg:flex items-center justify-center overflow-visible">
          <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

          <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-visible">
            <Ripple />
          </div>

          <div className="absolute z-20 flex items-center justify-center group">
            <span className="text-lg font-black bg-gradient-to-b from-[#6FB1CC] to-[#025F81] bg-clip-text text-transparent">
              PATIENT
            </span>
            <span className="text-lg font-black text-[#002950]">SAT</span>
            <span className="text-lg font-black bg-gradient-to-b from-[#6FB1CC] to-[#025F81] bg-clip-text text-transparent">
              .AI
            </span>
          </div>

          {SOCIAL_PLATFORMS.map((platform, index) => (
            <div
              key={index}
              className={cn(
                "absolute z-20 size-16 p-1 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:z-[100] hover:cursor-pointer",
                getPositionClasses(platform.position),
                getSizeClasses(platform.size),
                platform.className
              )}
            >
              <platform.icon
                className={cn(
                  "size-auto text-foreground",
                  getIconSizeClasses(platform.iconSize)
                )}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Integration;
