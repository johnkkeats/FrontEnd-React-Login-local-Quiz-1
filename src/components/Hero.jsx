import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "./src/assets/images/images/hero-slider-1.jpg",
    subtitle: "Traditional & Hygienic",
    title: "For the love of delicious food",
    text: "Come with family & feel the joy of mouthwatering food",
  },
  {
    id: 2,
    image: "./src/assets/images/images/hero-slider-2.jpg",
    subtitle: "Delightful Experience",
    title: "Flavors Inspired by the Seasons",
    text: "Come with family & feel the joy of mouthwatering food",
  },
  {
    id: 3,
    image: "./src/assets/images/images/hero-slider-3.jpg",
    subtitle: "Amazing & Delicious",
    title: "Where every flavor tells a story",
    text: "Come with family & feel the joy of mouthwatering food",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      aria-label="home"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image with Fade Transition */}
      {slides.map((slide, index) => (
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover brightness-50 transition-opacity duration-[1500ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 transition-all duration-700">
        <p
          key={`subtitle-${current}`}
          className="text-goldCrayola text-lg uppercase mb-3 font-dmSans animate-fadeIn"
        >
          {slides[current].subtitle}
        </p>

        <h1
          key={`title-${current}`}
          className="font-forum text-5xl md:text-7xl mb-4 animate-slideUp"
        >
          {slides[current].title.split("<br/>")}
        </h1>

        <p
          key={`text-${current}`}
          className="text-goldCrayola mb-6 font-dmSans animate-fadeIn"
        >
          {slides[current].text}
        </p>

        <Link
          to="/menue"
          className="bg-transparent text-goldCrayola px-8 py-3 border border-goldCrayola hover:bg-goldCrayola hover:text-eerieBlack1 transition-all duration-300"
        >
          View Our Menu
        </Link>
      </div>

      {/* Optional Manual Controls */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-8xl z-20 hover:text-goldCrayola transition"
      >
        ‹
      </button>

      <button
        onClick={() =>
          setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-8xl z-20 hover:text-goldCrayola  transition-transform origin-bottom duration-300"
      >
        ›
      </button>
    </section>
  );
}
