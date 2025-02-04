import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const agents = [
  {
    id: 1,
    src: "/images/agents/1.png",
    name: "Dr. Sophia Carter",
    role: "AI Medical Expert",
    specialty: "Diagnostic Analysis",
    experience: "10+ years",
  },
  {
    id: 2,
    src: "/images/agents/2.webp",
    name: "Dr. James Sterling",
    role: "AI Health Advisor",
    specialty: "Preventive Care",
    experience: "8+ years",
  },
  {
    id: 3,
    src: "/images/agents/3.webp",
    name: "Dr. Emily Brooks",
    role: "AI Wellness Consultant",
    specialty: "Holistic Health",
    experience: "12+ years",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AIAgents = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Our AI Experts
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Powered by advanced artificial intelligence, our virtual medical
            team is here to assist you 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <motion.div
              key={agent.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={agent.src}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {agent.name}
                </h3>
                <p className="text-emerald-600 font-semibold mb-2">
                  {agent.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {agent.specialty} • {agent.experience}
                </p>
                <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
                  Connect
                </button>
              </div>

              <div className="absolute top-4 right-4">
                <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
