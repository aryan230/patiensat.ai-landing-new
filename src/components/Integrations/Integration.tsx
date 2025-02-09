import React, { useState, useEffect } from "react";
import { Search, Filter, ChevronRight, Star, Check } from "lucide-react";

const IntegrationsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const allIntegrations = {
    ehr: [
      {
        name: "Epic Systems",
        category: "Enterprise EHR",
        features: ["MyChart Integration", "Care Everywhere", "Epic API"],
        description: "Leading enterprise healthcare software.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Epic_Systems.svg/1200px-Epic_Systems.svg.png",
      },
      {
        name: "Cerner",
        category: "Hospital EHR",
        features: ["PowerChart", "HL7 Integration", "Millennium Platform"],
        description: "Comprehensive hospital information system.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPxl3IxdA8MR2ttwC2G_dYTlrZkvJfbB_ag&s",
      },
      {
        name: "MEDITECH",
        category: "Health Records",
        features: ["Expanse EHR", "Web API", "Patient Portal"],
        description: "Modern EHR for healthcare.",
        logo: "https://ehr.meditech.com/themes/ehrmeditech/images/MEDITECH-social-media-logo.gif",
      },
      {
        name: "Allscripts",
        category: "Practice Management",
        features: ["Professional EHR", "Sunrise Clinical", "API Integration"],
        description: "Versatile practice management solution.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMn1JFy-W-L9tvbZwr8m2BOWB51ryO1qs1wg&s",
      },
      {
        name: "athenahealth",
        category: "Cloud-based EHR",
        features: ["athenaClinicals", "API Services", "Patient Engagement"],
        description: "Cloud-based EHR platform.",
        logo: "https://cdn.cookielaw.org/logos/e154ad6e-22c7-4d9c-919c-b5cabfd10d9c/586f6235-762b-410b-9972-ddc8170135ba/07543154-c100-4174-8f4b-3e554c52c9eb/3-color-purple_2x.png",
      },
      {
        name: "NextGen Healthcare",
        category: "Ambulatory EHR",
        features: ["Enterprise EHR", "Patient Portal", "Mobile Solutions"],
        description: "Ambulatory EHR solutions.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/NG_Logo_1024x768.png/800px-NG_Logo_1024x768.png",
      },
      {
        name: "eClinicalWorks",
        category: "Practice Management",
        features: ["EHR Suite", "healow Platform", "PRISMA Integration"],
        description: "Comprehensive EHR suite.",
        logo: "https://mms.businesswire.com/media/20230417005291/en/1764807/22/eclinicalworks-logo-white_%281%29.jpg",
      },
      {
        name: "Practice Fusion",
        category: "Cloud EHR",
        features: ["e-Prescribing", "Patient Portal", "Lab Integration"],
        description: "Cloud-based EHR system.",
        logo: "https://mma.prnewswire.com/media/467768/Practice_Fusion_Logo.jpg?p=facebook",
      },
      {
        name: "Greenway Health",
        category: "Practice Management",
        features: ["Intergy EHR", "Patient Engagement", "Revenue Cycle"],
        description: "Practice management EHR.",
        logo: "https://d3bnk79bkod1sv.cloudfront.net/Organization/33ad100b-3711-4fbf-ab0a-a41900f15058/Registrations/7bc123ea-8cce-404f-b49f-a7c80132b8ec/Images/3ad67559-76fc-4956-8fc6-af4938c85938.png",
      },
      {
        name: "DrChrono",
        category: "Mobile EHR",
        features: ["EHR Platform", "Medical Billing", "API Access"],
        description: "Mobile-first EHR platform.",
        logo: "https://i.pcmag.com/imagery/reviews/05ma9S9AojTwc3ENvhck2iE-7.fit_scale.size_760x427.v1569474154.jpg",
      },
      {
        name: "Kareo",
        category: "Clinical EHR",
        features: ["Clinical+", "Billing Platform", "Patient Portal"],
        description: "Clinical EHR solution.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwxGVDZ3K-YPhalpIlq2UTzb3Up1uZmBU0g&s",
      },
      {
        name: "Amazing Charts",
        category: "Clinical EHR",
        features: ["EHR System", "Population Health", "Practice Management"],
        description: "User-friendly EHR system.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KQEIsyKvb2A0D54fkxbJv0m8FZVZPxDvAw&s",
      },
    ],
    payments: [
      {
        name: "Stripe Healthcare",
        category: "Payment Processing",
        features: ["HIPAA Compliance", "Recurring Payments", "Payment Plans"],
        description: "Secure healthcare payment processing",
        logo: "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png",
      },
      {
        name: "Square Health",
        category: "Payment Solutions",
        features: ["Mobile Payments", "Virtual Terminal", "Payment Links"],
        description: "Flexible healthcare payment solutions",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6WmAe7s3tnrAC31uRIpPNnGnAL1oBzJ9IMQ&s",
      },
      {
        name: "PayPal Healthcare",
        category: "Payment Platform",
        features: [
          "Patient Payments",
          "Installment Plans",
          "Digital Invoicing",
        ],
        description: "Trusted healthcare payment platform",
        logo: "https://cdn.prod.website-files.com/5c29380b1110ec92a203aa84/5c440b5b79dc69fad9b4908c_paypal-logo.png",
      },
      {
        name: "Adyen for Healthcare",
        category: "Payment Gateway",
        features: ["Global Payments", "HIPAA Compliance", "Fraud Prevention"],
        description: "Global healthcare payment gateway",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZV5W3Y00gBtzJSLcfxmbbEwwVQUd65fex8Q&s",
      },
      {
        name: "Authorize.Net Health",
        category: "Payment Processing",
        features: ["Recurring Billing", "HIPAA Compliance", "Payment Security"],
        description: "Reliable healthcare payment processing",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjXGJFQ4hdXgf9cyhAXBqiujQzMsObyQJQQ&s",
      },
      {
        name: "Braintree Health",
        category: "Payment Platform",
        features: ["Patient Payments", "Recurring Billing", "HIPAA Compliance"],
        description: "Scalable healthcare payment platform",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q6j2kItJ_RG-b10M7qeJwnq5_khjyrK8Vg&s",
      },

      {
        name: "Paysafe Health",
        category: "Payment Solutions",
        features: ["Digital Wallets", "HIPAA Compliance", "Fraud Prevention"],
        description: "Innovative healthcare payment solutions",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDx-faeC3L3FxLYZRDyNpZ2zeFhHDz8afJfQ&s",
      },
      {
        name: "2Checkout Health",
        category: "Payment Platform",
        features: ["Recurring Payments", "HIPAA Compliance", "Global Reach"],
        description: "Global healthcare payment platform",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj72uvmuDzWyJPN5lybov6IajSayxU801aIw&s",
      },
    ],
    communications: [
      {
        name: "Twilio",
        category: "Communication APIs",
        features: ["Voice", "SMS", "Video Calls"],
        description: "Cloud communications platform",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQh5iGSj-BpyYBMd8y7SjN-fJfs1p8HQeiGw&s",
      },
      {
        name: "Vonage Healthcare",
        category: "Telehealth",
        features: ["Video API", "Voice API", "Messages API"],
        description: "Healthcare communication solutions",
        logo: "https://sm.pcmag.com/pcmag_me/review/v/vonage/vonage_83es.jpg",
      },
      {
        name: "RingCentral Healthcare",
        category: "Communications",
        features: ["Virtual Visits", "Secure Messaging", "Team Collaboration"],
        description: "Healthcare communication platform",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsU4GnN7ztkNWnondf9Mst7x3DbqNz42UyEA&s",
      },
    ],
    analytics: [
      {
        name: "Google Analytics 4",
        category: "Web Analytics",
        features: ["User Behavior", "Conversion Tracking", "Custom Reports"],
        description: "comprehensive analytics platform",
        logo: "https://miro.medium.com/v2/resize:fit:1400/1*-ExxDAPl4rciaENKd8QSBw.png",
      },
      {
        name: "Looker",
        category: "Business Intelligence",
        features: ["Data Modeling", "Dashboards", "Real-time Analytics"],
        description: "Modern business intelligence platform",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWOw7rgewMsMZ4flKaKk0A8CecOkW_aUX-A&s",
      },
      {
        name: "Tableau Healthcare",
        category: "Data Visualization",
        features: [
          "Clinical Analytics",
          "Population Health",
          "Custom Dashboards",
        ],
        description: "Healthcare analytics solution",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUIUdzVInHN8sAzuyrWnbcPGHj3iWcPYq9A&s",
      },
    ],
    ai: [
      {
        name: "NVIDIA Clara",
        category: "Medical Imaging",
        features: [
          "AI-Powered Imaging",
          "3D Visualization",
          "GPU Acceleration",
        ],
        description: "Advanced medical imaging platform",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpOYW3rmP7oVwa868COIhFLy5vp8Yj7G_yS3yoy6oEft0lJw1DsKa6xKcZ5PUWpttR-A&usqp=CAU",
      },
      {
        name: "Microsoft Azure Health Bot",
        category: "Healthcare AI",
        features: ["Symptom Checker", "Care Management", "Natural Language"],
        description: "Intelligent healthcare bot service",
        logo: "https://learn.microsoft.com/en-us/training/achievements/create-bots-azure-health-bot.svg",
      },
    ],
  };

  const categories = [
    { id: "all", name: "All Integrations" },
    { id: "ehr", name: "EHR Systems" },
    { id: "payments", name: "Payments" },
    { id: "communications", name: "Communications" },
    { id: "analytics", name: "Analytics" },
    { id: "ai", name: "AI & Machine Learning" },
  ];

  const getAllIntegrations = () => {
    return Object.values(allIntegrations).flat();
  };

  const getFilteredIntegrations = () => {
    let integrations =
      activeCategory === "all"
        ? getAllIntegrations()
        : allIntegrations[activeCategory] || [];

    return integrations.filter(
      (integration: any) =>
        integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        integration.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        integration.features.some((feature: any) =>
          feature.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  };

  return (
    <div className="min-h-screen bg-white pt-20 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#002950] to-[#025F81] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Connect Your Healthcare Ecosystem
          </h1>
          <p className="text-xl text-center text-[#6FB1CC] max-w-2xl mx-auto">
            Seamlessly integrate with leading healthcare technologies to enhance
            patient care and streamline your operations
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-lg border-b border-[#6FB1CC]/20 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#025F81]"
                size={20}
              />
              <input
                type="text"
                placeholder="Search integrations..."
                className="w-full pl-10 pr-4 py-3 border-2 border-[#6FB1CC] rounded-lg focus:outline-none focus:border-[#025F81] bg-white/50 backdrop-blur-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 max-w-full">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? "bg-[#025F81] text-white shadow-lg"
                      : "bg-white text-[#025F81] border-2 border-[#6FB1CC] hover:bg-[#6FB1CC]/10"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredIntegrations().map((integration: any, index: any) => (
            <div
              key={integration.name}
              className="group bg-white rounded-xl border-2 border-[#6FB1CC]/30 hover:border-[#025F81] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className="w-16 h-16 rounded-lg object-contain bg-gray-50 p-2"
                  />
                  <div>
                    <h3 className="text-[#002950] font-semibold text-xl group-hover:text-[#025F81] transition-colors">
                      {integration.name}
                    </h3>
                    <span className="text-sm text-[#025F81] bg-[#6FB1CC]/10 px-3 py-1 rounded-full">
                      {integration.category}
                    </span>
                  </div>
                </div>
                <p className="text-[#025F81]/80 mb-4">
                  {integration.description}
                </p>
                <div className="space-y-2">
                  {integration.features.map((feature: any, idx: any) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-[#025F81]"
                    >
                      <Check size={16} className="text-[#6FB1CC]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-[#6FB1CC]/30 p-4 bg-gradient-to-b from-white to-[#6FB1CC]/5">
                <button className="w-full flex items-center justify-center gap-2 text-[#025F81] font-medium hover:text-[#002950] transition-colors">
                  Learn More
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsShowcase;
