import React from "react";
import bgImage from "../assets/images/images/testimonial-bg.jpg";


function Testimonials() {
  return (
    <section
      className="relative  text-center py-28 px-6 overflow-hidden"
      style={{
       backgroundImage: `url(${bgImage})` ,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="testimonials"
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-white font-[DM_Sans]">
        {/* Quote mark */}
        <div className="text-[#E4C590] text-8xl font-[Forum] leading-none mb-6">
          ”
        </div>

        {/* Testimonial text */}
        <p className="text-2xl md:text-3xl leading-relaxed font-[Forum] text-gray-100 mb-10">
          I wanted to thank you for inviting me down for that amazing dinner the
          other night. The food was extraordinary.
        </p>

        {/* Separator lines */}
        <div className="flex justify-center gap-3 mb-10">
          <div className="w-10 h-[2px] bg-[#E4C590]"></div>
          <div className="w-2 h-2 bg-[#E4C590] rounded-full"></div>
          <div className="w-10 h-[2px] bg-[#E4C590]"></div>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center">
          <img
            src="./src/assets/images/images/testi-avatar.jpg"
            width="100"
            height="100"
            alt="Muhammad Ali"
            loading="lazy"
            className="w-24 h-24 rounded-full object-cover border-4 border-[#E4C590] shadow-lg mb-4"
          />
          <p className="text-[#E4C590] text-lg font-semibold tracking-wide">
            Muhammad Ali
          </p>
          <p className="text-gray-400 text-sm italic mt-1">
            Satisfied Customer
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
