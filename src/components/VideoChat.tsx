import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Brain, Video } from "lucide-react";

const AIHealthcareHero = () => {
  return (
    <section className="min-h-fit rounded-3xl bg-gradient-to-br from-indigo-950 via-[#002950] to-[#025F81] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-6xl font-light mb-6 leading-tight">
              Experience Healthcare
              <span className="block">Beyond Reality</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              First-ever AI-powered video consultations with digital human
              agents, powered by NVIDIA technology for a revolutionary
              healthcare experience.
            </p>
            <button className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Consultation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://build.nvidia.com/_next/image?url=https%3A%2F%2Fassets.ngc.nvidia.com%2Fproducts%2Fapi-catalog%2Fdigital-humans-for-customer-service%2Fjames.jpg&w=1920&q=75"
              alt="AI Digital Human Agent"
              className="rounded-2xl w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <p className="text-white text-sm">
                Powered by NVIDIA Digital Human Technology
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              icon: <Video className="w-6 h-6" />,
              title: "Face-to-Face Digital Consultations",
              description:
                "Experience genuine human connection with our 3D AI agents, making every consultation feel like an in-person visit",
            },
            {
              icon: <HeartHandshake className="w-6 h-6" />,
              title: "Empathetic Care Delivery",
              description:
                "Our AI agents provide personalized care with facial expressions and emotional understanding that creates trust",
            },
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Interactive Health Guidance",
              description:
                "Engage in natural conversations while receiving visual demonstrations and real-time health insights",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-white"
            >
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIHealthcareHero;
