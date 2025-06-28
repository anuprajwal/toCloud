import React from "react";
import { Clock, Globe, Plane, Shield } from "lucide-react";

const WhyDifferentSection = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Focus on Tier 2/3 Cities",
      desc: "Bringing quality healthcare to underserved areas across India",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Language Barrier Solution",
      desc: "AI-powered real-time translation for seamless communication",
    },
    {
      icon: <Plane className="w-8 h-8 text-white" />,
      title: "Medical Tourism",
      desc: "Complete travel + treatment packages for complex procedures",
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Trust & Transparency",
      desc: "Low fees for doctors, fast payouts, and transparent pricing",
    },
  ];

  return (
    <section className="bg-[#07071a] py-16 px-6 sm:px-8 md:px-12 text-center text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
        Why <span className="text-blue-500">DocApp.com</span> is{" "}
        <span className="text-blue-400">Different</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
        The  where users can
        consult, travel, and heal through one trusted platform
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto ">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center space-y-4 px-4 rounded-2xl transition-all duration-300
      hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-5 rounded-full "  style={{
                boxShadow:
                  '0 0 10px rgba(99,102,241,0.8), 0 0 20px rgba(147,51,234,0.7), 0 0 30px rgba(99,102,241,0.6)'
              }}>
              {feature.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-blue-300">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDifferentSection;
