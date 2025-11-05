import React from "react";
import specialDishBanner from "../assets/images/images/special-dish-banner.jpg";
import badge from "../assets/images/images/badge-1.png";
import shape4 from "../assets/images/images/shape-4.png";
import shape9 from "../assets/images/images/shape-9.png";

function SpecialDish() {
  return (
    <section
      id="special-dish"
      className="relative flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-center lg:text-left"
    >
      
      <div className="relative w-full lg:w-1/2">
        <img
          src={specialDishBanner}
          alt="special dish"
          className="w-full h-[600px] lg:h-[700px] object-cover brightness-[0.65]"
          loading="lazy"
        />

        
        <img
          src={shape4}
          alt=""
          className="absolute bottom-10 left-10 w-28 opacity-30 animate-pulse"
          loading="lazy"
        />
        <img
          src={shape9}
          alt=""
          className="absolute top-8 right-10 w-60 opacity-20 animate-pulse"
          loading="lazy"
        />
      </div>

    
      <div className="relative w-full lg:w-1/2 flex justify-center items-center bg-black/70 backdrop-blur-sm py-20 px-8 lg:px-16">
        <div className="max-w-lg z-10">
          <img
            src={badge}
            alt="badge"
            width="28"
            height="41"
            loading="lazy"
            className="mx-auto mb-6 opacity-90"
          />

          <p className="text-[#E4C590] text-lg tracking-[0.25em] uppercase font-medium mb-3">
            Special Dish
          </p>

          <h2 className="text-4xl md:text-5xl font-[Forum] text-white mb-6">
            Chicken <span className="text-[#E4C590]">Biryani</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            A timeless Pakistani favorite, Chicken Biryani is a fragrant blend
            of rice, tender chicken, and spices. Each serving carries the rich
            tradition of flavors passed down through generations.
          </p>

        
          <div className="flex justify-center lg:justify-start items-center gap-4 mb-10">
            <del className="text-gray-500 text-lg">300 PKR</del>
            <span className="text-[#E4C590] text-2xl font-semibold">
              200 PKR
            </span>
          </div>

      
          <a
            href="#"
            className="inline-block relative px-8 py-4 bg-gradient-to-r from-[#E4C590] to-[#c8a25d] text-black font-semibold rounded-full overflow-hidden hover:shadow-[0_0_20px_#E4C590] transition-all duration-300"
          >
            <span className="relative z-10">View All Menu</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-20 transition"></span>
          </a>
        </div>
      </div>

      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E4C590]/60 to-transparent blur-sm"></div>
    </section>
  );
}

export default SpecialDish;
