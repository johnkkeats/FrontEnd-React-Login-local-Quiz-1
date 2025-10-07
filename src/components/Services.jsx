import React from "react";
import { Link,useNavigate } from "react-router-dom";

function Services() {
  const navigate=useNavigate();
  return (
    <section className="relative bg-[#0d0d0d] text-center py-20 overflow-hidden">
      {/* Decorative shapes */}
      <img
        src="./src/assets/images/images/shape-1.png"
        alt="shape"
        className="absolute top-10 left-0 w-48 opacity-40 animate-pulse"
      />
      <img
        src="./src/assets/images/images/shape-2.png"
        alt="shape"
        className="absolute bottom-10 right-0 w-64 opacity-30 animate-bounce"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Subtitle */}
        <p className="text-goldCrayola uppercase tracking-widest text-sm mb-2">
          Flavors For Royalty
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          We Offer Top Notch
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          We offer top-notch dining. Our restaurant brings you flavors crafted
          with passion and care. Experience meals that delight every taste bud
          and service that sets the standard for excellence.
        </p>

        {/* Service cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Breakfast",
              img: "./src/assets/images/images/service-1.jpg",
            },
            {
              title: "Appetizers",
              img: "./src/assets/images/images/service-2.jpg",
            },
            {
              title: "Drinks",
              img: "./src/assets/images/images/service-3.jpg",
            },
          ].map((service, index) => (
            <li key={index}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white transition-all duration-500 group-hover:bottom-10">
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                   <button
      onClick={() => navigate("/menue")}
      className="text-goldCrayola font-medium hover:underline"
    >
      View Menu
    </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
