import React from "react";
import { Link,useNavigate } from "react-router-dom";

function Event() {
  const navigate=useNavigate();
  return (
    <section className="relative bg-[#0d0d0d] text-center py-20 overflow-hidden">
      {/* Background Decorative Shapes */}
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
          Recent Updates
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Upcoming Events
        </h2>

        {/* Event Cards Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {[
            {
              img: "./src/assets/images/images/event-1.jpg",
              date: "15/09/2025",
              category: "Food, Flavour",
              title: "Flavour so good you’ll try to eat with your eyes.",
            },
            {
              img: "./src/assets/images/images/event-2.jpg",
              date: "08/09/2025",
              category: "Healthy Food",
              title: "Flavour so good you’ll try to eat with your eyes.",
            },
            {
              img: "./src/assets/images/images/event-3.jpg",
              date: "03/09/2025",
              category: "Recipe",
              title: "Flavour so good you’ll try to eat with your eyes.",
            },
          ].map((event, index) => (
            <li key={index}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                {/* Event Image */}
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                {/* Event Date */}
                <time className="absolute top-4 left-4 bg-goldCrayola text-black px-3 py-1 rounded-md text-sm font-semibold">
                  {event.date}
                </time>

                {/* Event Content */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white transition-all duration-500 group-hover:bottom-10">
                  <p className="text-goldCrayola text-sm uppercase tracking-widest mb-2">
                    {event.category}
                  </p>
                  <h4 className="text-xl font-normal max-w-[250px] mx-auto">
                    {event.title}
                  </h4>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* View Blog Button */}
        <button
          onClick={() => navigate("/about")}
          className="inline-block bg-transparent text-goldCrayola border border-goldCrayola px-8 py-3 hover:bg-goldCrayola hover:text-black transition font-semibold"
        >
          View Our Blog
        </button>
      </div>
    </section>
  );
}

export default Event;
