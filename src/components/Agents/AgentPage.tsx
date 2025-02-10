import React, { useEffect, useState } from "react";
import {
  Headphones,
  Phone,
  Settings,
  ChevronLeft,
  Check,
  Quote,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

const AIAgentProfile = () => {
  const router = useRouter();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      name: "Emily Thompson",
      role: "Patient",
      image: "https://ui-avatars.com/api/?name=John+Doe",
      text: "Sarah has been incredibly helpful in managing my chronic condition. Her reminders and check-ins have made a real difference in my daily health routine.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Healthcare Provider",
      image: "/api/placeholder/64/64",
      text: "As a healthcare provider, I'm impressed by Sarah's ability to provide accurate preliminary assessments. She's been a valuable addition to our patient care workflow.",
      rating: 5,
    },
    {
      name: "Sophie Martinez",
      role: "Caregiver",
      image: "/api/placeholder/64/64",
      text: "Sarah has made it so much easier to keep track of my mother's medications and appointments. Her gentle reminders and clear instructions are invaluable.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <button
          className="flex items-center gap-2 text-[#025F81] hover:text-[#002950] transition-colors"
          onClick={() => {
            router.push("/");
          }}
        >
          <ChevronLeft size={20} />
          Back to Home
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Agent Image & Info */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#6FB1CC]/20 to-[#025F81]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out" />
              <img
                src="/images/agents/sarah.png"
                alt="AI Agent Sarah"
                className="w-full max-w-md  transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002950]/30 to-transparent rounded-2xl" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-[#002950]">
                Sarah the "Virtual Doctor"
              </h1>
              <p className="text-xl text-[#025F81]">
                Your AI-powered healthcare companion
              </p>
              <p className="text-[#025F81]/80 leading-relaxed">
                Sarah combines advanced medical knowledge with compassionate
                care to provide personalized healthcare support. Using
                cutting-edge AI technology, she offers accurate medical
                information and guidance while maintaining a warm, understanding
                approach.
              </p>
            </div>
          </div>

          {/* Right Column - Actions & Checklist */}
          <div className="space-y-8">
            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-full p-4 bg-[#6FB1CC]/10 hover:bg-[#6FB1CC]/20 rounded-xl flex items-center gap-4 transition-all duration-300"
              >
                <Headphones className="text-[#025F81]" size={24} />
                <span className="text-[#025F81] font-medium">
                  Listen to demo conversation
                </span>
              </button>

              <button className="w-full p-4 bg-[#6FB1CC]/10 hover:bg-[#6FB1CC]/20 rounded-xl flex items-center gap-4 transition-all duration-300">
                <Phone className="text-[#025F81]" size={24} />
                <span className="text-[#025F81] font-medium">
                  Start conversation with Sarah
                </span>
              </button>

              <button className="w-full p-4 bg-[#6FB1CC]/10 hover:bg-[#6FB1CC]/20 rounded-xl flex items-center gap-4 transition-all duration-300">
                <Settings className="text-[#025F81]" size={24} />
                <span className="text-[#025F81] font-medium">
                  Customize your experience
                </span>
              </button>

              <button className="w-full p-4 bg-[#025F81] hover:bg-[#002950] text-white rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg">
                Activate Sarah Now
              </button>
            </div>

            {/* Capabilities Checklist */}
            <div className="bg-white rounded-xl border-2 border-[#6FB1CC]/30 p-6 space-y-6">
              <h2 className="text-2xl font-semibold text-[#002950]">
                Capabilities
              </h2>
              <div className="space-y-4">
                {[
                  "Provide accurate medical information and guidance",
                  "Assist with symptom assessment and triage",
                  "Schedule appointments and follow-ups",
                  "Answer healthcare-related questions",
                  "Monitor medication schedules",
                  "Offer preventive care recommendations",
                ].map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="text-[#025F81]" size={18} />
                    </div>
                    <span className="text-[#025F81]/80">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-white to-[#6FB1CC]/10 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002950] mb-8 text-center">
            Advanced AI Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Natural Conversations",
                description:
                  "Engage in fluid, natural dialogues with contextual understanding",
              },
              {
                title: "Medical Expertise",
                description:
                  "Access to comprehensive, up-to-date medical knowledge",
              },
              {
                title: "24/7 Availability",
                description:
                  "Round-the-clock healthcare support whenever you need it",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-[#002950] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#025F81]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#002950] py-20 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Patient Stories
            </h2>
            <p className="text-[#6FB1CC] text-xl">
              Hear what others are saying about their experience with Sarah
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 transform transition-all duration-500 hover:shadow-2xl ${
                    index === activeTestimonial
                      ? "scale-105"
                      : "scale-100 opacity-80"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={`https://ui-avatars.com/api/?name=${testimonial.name}`}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-[#002950] font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#025F81]">{testimonial.role}</p>
                    </div>
                  </div>

                  <Quote className="text-[#6FB1CC] mb-4" size={24} />

                  <p className="text-[#025F81]/80 mb-6 min-h-[100px]">
                    {testimonial.text}
                  </p>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#6FB1CC] text-[#6FB1CC]"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-[#6FB1CC] w-6"
                      : "bg-[#6FB1CC]/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">
              Ready to experience the future of healthcare?
            </h3>
            <button className="bg-[#6FB1CC] hover:bg-[#025F81] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
              Get Started with Sarah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentProfile;
