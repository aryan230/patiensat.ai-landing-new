"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the AI Agent type
interface AIAgent {
  name: string;
  role: string;
  stats: {
    efficiency: number;
    tasksCompleted: number;
    satisfactionRate: number;
  };
  image: string;
}

// Framer Motion variants for animations
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

// AI Agent Card Component
const AICard: React.FC<{ agent: AIAgent }> = ({ agent }) => {
  return (
    <motion.div
      className="flex flex-col items-center bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20 hover:border-white/40 transition-all w-80 mx-4 my-6"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Agent Image */}
      <img
        src={agent.image}
        alt={agent.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-white/50 shadow-md"
      />

      {/* Agent Name and Role */}
      <h2 className="text-2xl font-bold mt-4 text-gray-800">{agent.name}</h2>
      <p className="text-sm text-gray-600">{agent.role}</p>

      {/* Stats Section */}
      <div className="mt-4 w-full">
        <div className="flex justify-between text-sm text-gray-700">
          <span>Efficiency</span>
          <span>{agent.stats.efficiency}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${agent.stats.efficiency}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-sm text-gray-700 mt-3">
          <span>Tasks Completed</span>
          <span>{agent.stats.tasksCompleted}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${(agent.stats.tasksCompleted / 100) * 100}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-sm text-gray-700 mt-3">
          <span>Satisfaction Rate</span>
          <span>{agent.stats.satisfactionRate}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-purple-500 h-2 rounded-full"
            style={{ width: `${agent.stats.satisfactionRate}%` }}
          ></div>
        </div>
      </div>

      {/* Graph Placeholder */}
      <div className="mt-6 w-full h-24 bg-gray-100/50 rounded-lg flex items-center justify-center text-gray-500">
        Graph Placeholder
      </div>
    </motion.div>
  );
};

// Main Component to Showcase All Agents
const AICardShowcase: React.FC = () => {
  // AI Agents Data
  const agents: AIAgent[] = [
    {
      name: "Sarah",
      role: "Intake & Scheduling Specialist",
      stats: {
        efficiency: 92,
        tasksCompleted: 120,
        satisfactionRate: 95,
      },
      image: "/images/sarah.jpg", // Replace with actual image path
    },
    {
      name: "Michael",
      role: "Patient Care Coordinator",
      stats: {
        efficiency: 88,
        tasksCompleted: 95,
        satisfactionRate: 90,
      },
      image: "/images/michael.jpg", // Replace with actual image path
    },
    {
      name: "Emma",
      role: "After-Hours Support Specialist",
      stats: {
        efficiency: 95,
        tasksCompleted: 110,
        satisfactionRate: 98,
      },
      image: "/images/emma.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="flex flex-wrap justify-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen">
      {agents.map((agent, index) => (
        <AICard key={index} agent={agent} />
      ))}
    </div>
  );
};

export default AICardShowcase;
