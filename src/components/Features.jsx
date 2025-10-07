import React from "react";
import featureIcon1 from "../assets/images/images/features-icon-1.png";
import featureIcon2 from "../assets/images/images/features-icon-2.png";
import featureIcon3 from "../assets/images/images/features-icon-3.png";
import featureIcon4 from "../assets/images/images/features-icon-4.png";
import shape7 from "../assets/images/images/shape-7.png";
import shape8 from "../assets/images/images/shape-8.png";

function Features() {
  const features = [
    {
      icon: featureIcon1,
      title: "Hygienic Food",
      text: "Freshly prepared meals cooked with care, keeping taste  in balance.",
    },
    {
      icon: featureIcon2,
      title: "Authentic Taste",
      text: "Traditional Pakistani recipes made with rich spices for a true desi experience.",
    },
    {
      icon: featureIcon3,
      title: "Family Friendly",
      text: "Comfortable dining for all ages with a menu that brings everyone together  table.",
    },
    {
      icon: featureIcon4,
      title: "Quick Service",
      text: "Delicious food served hot and fresh without long waits, perfect for every mealtime.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-30 text-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      {/* Decorative floating shapes */}
      <img
        src={shape7}
        alt="shape"
        className="absolute top-10 left-0 w-40 opacity-20 animate-pulse"
      />
      <img
        src={shape8}
        alt="shape"
        className="absolute bottom-10 right-0 w-28 opacity-20 animate-pulse"
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Heading */}
        <p className="text-[#E4C590] text-lg uppercase tracking-[0.3em] mb-4 font-medium">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-5xl font-[Forum] text-white mb-14">
          Our <span className="text-[#E4C590]">Strength</span>
        </h2>

        {/* Features Grid */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <li key={i}>
              <div className="group relative bg-gradient-to-b from-zinc-800/60 to-zinc-900/60 rounded-3xl p-8 border border-[#E4C590]/20 hover:border-[#E4C590]/60 transition duration-300 hover:shadow-[0_0_20px_#E4C590]/20">
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-20 h-20 object-contain transform group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-[Forum] text-[#E4C590] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.text}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E4C590]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl blur-md"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
