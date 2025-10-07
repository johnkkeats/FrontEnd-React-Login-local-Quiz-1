import React from "react";
import aboutBanner from "../assets/images/images/about-banner.jpg";
import aboutAbsImage from "../assets/images/images/about-abs-image.jpg";
import badge2 from "../assets/images/images/badge-2.png";
import shape3 from "../assets/images/images/shape-3.png";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="relative py-35 px-6 text-center bg-[#121212] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <p
            id="about-label"
            className="uppercase tracking-[4px] text-[#E4C590] text-sm font-semibold mb-3"
          >
            Our Story
          </p>

          <h2 className="text-4xl md:text-5xl font-[Forum] mb-6">
            Every Flavor Tells a Story
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            Every flavor tells a story. From classic recipes to modern twists, each dish is prepared with love and
            crafted to perfection. Our kitchen blends tradition with creativity, offering meals that create lasting
            memories for every guest.
          </p>

          <div className="text-[#E4C590] mb-2 uppercase tracking-wide font-semibold">
            Book Through Call
          </div>

          <a
            href="tel:+923278534821"
            className="block text-2xl text-white hover:text-[#E4C590] transition mb-6"
          >
            +92 327 8534821
          </a>

          <a
            href="#"
            className="relative inline-block px-8 py-3 bg-[#E4C590] text-black  font-normal overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#C49B66] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            <span className="relative">Read More</span>
          </a>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="flex-1 relative flex justify-center items-center">
          <div className="relative w-[320px] sm:w-[400px] md:w-[480px]">
            {/* Main Image */}
            <img
              src={aboutBanner}
              alt="about banner"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />

            {/* Floating Small Image */}
            <img
              src={aboutAbsImage}
              alt="Decorative plate"
              className="absolute -bottom-8 -left-10 w-[180px] sm:w-[220px] rounded-xl shadow-lg border-4 border-[#E4C590]"
              loading="lazy"
            />

            {/* Badge */}
            <img
              src={badge2}
              alt="Award badge"
              className="absolute -top-10 -right-10 w-[100px] sm:w-[130px] drop-shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Decorative Shape */}
          <img
            src={shape3}
            alt="decorative shape"
            className="absolute top-1/2 right-0 w-[160px] opacity-50 translate-x-1/3"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
