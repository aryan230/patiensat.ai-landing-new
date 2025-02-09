import React from "react";
import { MessageCircle, Clock, Shield, Activity } from "lucide-react";

const ConsultationPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center px-4 py-2 bg-[#6FB1CC]/10 rounded-full">
              <span className="text-[#025F81] font-medium">
                24/7 Patient Support
              </span>
            </div>

            <h1 className="text-5xl font-bold text-[#002950] leading-tight">
              Revolutionize Patient Communication with AI-Powered Support
            </h1>

            <p className="text-xl text-[#025F81] leading-relaxed">
              Enable real-time, intelligent communication between patients and
              our advanced AI agents, working seamlessly alongside your
              healthcare team.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MessageCircle,
                  title: "Instant Response",
                  description:
                    "24/7 immediate support for patient queries and concerns",
                },
                {
                  icon: Shield,
                  title: "Clinical Expertise",
                  description:
                    "AI agents trained on extensive medical knowledge",
                },
                {
                  icon: Activity,
                  title: "Seamless Integration",
                  description:
                    "Works alongside your existing healthcare workflow",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#6FB1CC]/5 transition-colors duration-300"
                >
                  <div className="p-2 bg-[#6FB1CC]/10 rounded-lg">
                    <feature.icon className="text-[#025F81]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#002950] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#025F81]/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[#025F81] hover:bg-[#002950] text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-[#6FB1CC] text-[#025F81] rounded-xl font-medium hover:bg-[#6FB1CC]/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6FB1CC]/20 to-[#025F81]/20 rounded-3xl transform rotate-3 scale-105" />
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://media-public.canva.com/7kKyY/MAEZkX7kKyY/1/s.jpg"
                alt="Healthcare Team"
                className="w-full h-full object-cover"
              />

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#002950]">98%</div>
                  <div className="text-sm text-[#025F81]">
                    Patient Satisfaction
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#002950]">24/7</div>
                  <div className="text-sm text-[#025F81]">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
