import React from "react";
import { motion } from "framer-motion";
import { Network, Lock, Workflow } from "lucide-react";
import { useRouter } from "next/navigation";

const EHRIntegrationSection = () => {
  const router = useRouter();
  const ehrSystems = [
    {
      name: "Epic Systems",
      category: "Enterprise EHR",
      features: ["MyChart Integration", "Care Everywhere", "Epic API"],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Epic_Systems.svg/1200px-Epic_Systems.svg.png",
    },
    {
      name: "Cerner",
      category: "Hospital EHR",
      features: ["PowerChart", "HL7 Integration", "Millennium Platform"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPxl3IxdA8MR2ttwC2G_dYTlrZkvJfbB_ag&s",
    },
    {
      name: "MEDITECH",
      category: "Health Records",
      features: ["Expanse EHR", "Web API", "Patient Portal"],
      img: "https://ehr.meditech.com/themes/ehrmeditech/images/MEDITECH-social-media-logo.gif",
    },
    {
      name: "Allscripts",
      category: "Practice Management",
      features: ["Professional EHR", "Sunrise Clinical", "API Integration"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMn1JFy-W-L9tvbZwr8m2BOWB51ryO1qs1wg&s",
    },
    {
      name: "athenahealth",
      category: "Cloud-based EHR",
      features: ["athenaClinicals", "API Services", "Patient Engagement"],
      img: "https://cdn.cookielaw.org/logos/e154ad6e-22c7-4d9c-919c-b5cabfd10d9c/586f6235-762b-410b-9972-ddc8170135ba/07543154-c100-4174-8f4b-3e554c52c9eb/3-color-purple_2x.png",
    },
    {
      name: "NextGen Healthcare",
      category: "Ambulatory EHR",
      features: ["Enterprise EHR", "Patient Portal", "Mobile Solutions"],
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/NG_Logo_1024x768.png/800px-NG_Logo_1024x768.png",
    },
    {
      name: "eClinicalWorks",
      category: "Practice Management",
      features: ["EHR Suite", "healow Platform", "PRISMA Integration"],
      img: "https://mms.businesswire.com/media/20230417005291/en/1764807/22/eclinicalworks-logo-white_%281%29.jpg",
    },
    {
      name: "Practice Fusion",
      category: "Cloud EHR",
      features: ["e-Prescribing", "Patient Portal", "Lab Integration"],
      img: "https://mma.prnewswire.com/media/467768/Practice_Fusion_Logo.jpg?p=facebook",
    },
    {
      name: "Greenway Health",
      category: "Practice Management",
      features: ["Intergy EHR", "Patient Engagement", "Revenue Cycle"],
      img: "https://d3bnk79bkod1sv.cloudfront.net/Organization/33ad100b-3711-4fbf-ab0a-a41900f15058/Registrations/7bc123ea-8cce-404f-b49f-a7c80132b8ec/Images/3ad67559-76fc-4956-8fc6-af4938c85938.png",
    },
    {
      name: "DrChrono",
      category: "Mobile EHR",
      features: ["EHR Platform", "Medical Billing", "API Access"],
      img: "https://i.pcmag.com/imagery/reviews/05ma9S9AojTwc3ENvhck2iE-7.fit_scale.size_760x427.v1569474154.jpg",
    },
    {
      name: "Kareo",
      category: "Clinical EHR",
      features: ["Clinical+", "Billing Platform", "Patient Portal"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwxGVDZ3K-YPhalpIlq2UTzb3Up1uZmBU0g&s",
    },
    {
      name: "Amazing Charts",
      category: "Clinical EHR",
      features: ["EHR System", "Population Health", "Practice Management"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KQEIsyKvb2A0D54fkxbJv0m8FZVZPxDvAw&s",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#002950] mb-4">
            Seamless EHR Integration
          </h2>
          <p className="text-xl text-[#025F81] max-w-3xl mx-auto">
            Connect with all major healthcare systems through our comprehensive
            integration suite, ensuring smooth data flow and consistent patient
            care delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-[#6FB1CC]/20"
        >
          <h3 className="text-2xl font-bold text-[#002950] mb-8 text-center">
            Supported EHR Systems
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {ehrSystems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#6FB1CC]/5 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer border border-[#6FB1CC]/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center border border-[#6FB1CC]/30">
                  {/* Logo placeholder - replace with actual logos */}
                  <img src={system.img ? system.img : ""} alt="" />
                </div>
                <h4 className="text-center font-semibold text-[#002950] mb-1">
                  {system.name}
                </h4>
                <p className="text-center text-sm text-[#025F81] mb-2">
                  {system.category}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {system.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="text-xs bg-[#6FB1CC]/10 text-[#025F81] px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              router.push("/integrations");
            }}
            className="bg-[#025F81] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#002950] transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Integration Options
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EHRIntegrationSection;
