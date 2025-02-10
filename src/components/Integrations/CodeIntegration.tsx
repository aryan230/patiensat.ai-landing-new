import React from "react";
import { motion } from "framer-motion";
import { Code2, ArrowRight, Terminal, Webhook } from "lucide-react";

const APIIntegrationSection = () => {
  const codeExample = `// Initialize the HealthAI client
const healthAI = new HealthAI({
  apiKey: 'your_api_key',
  environment: 'production'
});

// Start a video consultation
const session = await healthAI.consultations.create({
  patientId: 'pat_123',
  providerType: 'AI_AGENT',
  preferences: {
    language: 'en',
    specialization: 'general'
  }
});

// Connect to the video stream
const stream = await session.connect();

// Handle real-time events
session.on('agentReady', (agent) => {
  console.log('AI Agent ready:', agent.name);
});`;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Code block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-[#002950] rounded-xl p-4 shadow-xl">
              {/* Code window header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm text-gray-400">
                  integration.js
                </span>
              </div>

              {/* Code content */}
              <pre className="text-sm text-gray-200 overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>

            {/* Feature tags */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["REST API", "WebSocket", "JWT Auth", "Real-time Events"].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="bg-[#6FB1CC]/10 text-[#025F81] px-4 py-2 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#002950] mb-6">
              API Integration
              <span className="block">Made Simple</span>
            </h2>

            <p className="text-xl text-[#025F81] mb-8">
              Integrate our AI healthcare platform into your application with
              just a few lines of code. Built for developers, designed for
              healthcare.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Terminal className="w-6 h-6" />,
                  title: "Simple Implementation",
                  description:
                    "Get started with our SDK in minutes with comprehensive documentation and examples.",
                },
                {
                  icon: <Webhook className="w-6 h-6" />,
                  title: "Real-time Events",
                  description:
                    "Subscribe to real-time events for instant updates on consultations and patient status.",
                },
                {
                  icon: <Code2 className="w-6 h-6" />,
                  title: "Multiple SDKs",
                  description:
                    "Support for multiple programming languages including JavaScript, Python, and Java.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-[#6FB1CC]/10 p-3 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#002950] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#025F81]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <button className="inline-flex items-center gap-2 bg-[#025F81] text-white px-6 py-3 rounded-lg hover:bg-[#002950] transition-colors">
                View API Documentation
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default APIIntegrationSection;
