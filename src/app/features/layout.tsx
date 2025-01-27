"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const FeatureLayout = ({ children }: Props) => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="mx-auto w-full z-40 relative">{children}</main>
      <Footer />
    </>
  );
};

export default FeatureLayout;
