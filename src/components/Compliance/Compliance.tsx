import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Server } from "lucide-react";
import { CardStack } from "../ui/card-stack";

const ComplianceSection = () => {
  const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <img
          src="https://ww1.prweb.com/prfiles/2016/10/10/13751604/ISO_27001_Final%20Logo.jpg"
          alt=""
          className="w-80 h-auto"
        />
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <img
          src="https://www.loginradius.com/wp-content/uploads/2019/10/PNG_GDPR-e1672263252689.png"
          alt=""
          className="w-80 h-auto"
        />
      ),
    },
    {
      id: 2,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <img
          src="https://rivalit.com/wp-content/uploads/2020/11/21972-312_SOC_NonCPA.png"
          alt=""
          className="w-80 h-auto"
        />
      ),
    },
  ];
  const certifications = [
    {
      name: "HIPAA",
      description:
        "Health Insurance Portability and Accountability Act compliance for protecting sensitive patient data",
      type: "Healthcare Privacy",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
    {
      name: "SOC 2 Type II",
      description:
        "Service Organization Control certification ensuring secure data handling",
      type: "Security & Privacy",
      icon: <Lock className="w-6 h-6 text-white" />,
    },
    {
      name: "GDPR",
      description:
        "General Data Protection Regulation compliance for EU patient data",
      type: "Data Protection",
      icon: <FileCheck className="w-6 h-6 text-white" />,
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      type: "Information Security",
      icon: <Server className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="bg-white py-20 min-h-screen pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-6xl font-bold text-[#002950] leading-tight mb-6">
              Secure Your Patient Data with
              <br />
              <span className="text-[#025F81]">Complete Compliance</span> ↓
            </h1>
          </motion.div>

          <div className="relative h-[600px] flex items-center justify-center pt-20">
            <img src="/images/25.png" alt="" className="h-fit" />
            {/* <CardStack items={CARDS} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
