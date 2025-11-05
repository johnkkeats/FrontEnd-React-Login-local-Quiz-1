import React from "react";
import footerBg from "../assets/images/images/footer-bg.jpg";
import logo from "../assets/images/images/logo.svg";

function Footer() {
  return (
    <footer
      className="relative text-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20 backdrop-blur-[2px]"></div>

      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-r from-[#E4C590]/0 via-[#E4C590]/40 to-[#E4C590]/0 blur-sm rounded-b-full"></div>

      <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
        <a href="#" className="inline-block mb-6">
          <img
            src={logo}
            width="160"
            height="50"
            alt="Grilli logo"
            className="mx-auto"
          />
        </a>

        <div className="space-y-2 mb-6">
          <p className="text-gray-400">
            Restaurant St, Delicious City, Gujrat, PK
          </p>
          <a
            href="mailto:booking@grilli.com"
            className="block text-gray-300 hover:text-[#E4C590] transition"
          >
            booking@grilli.com
          </a>
          <a
            href="tel:+923278503512"
            className="block text-gray-300 hover:text-[#E4C590] transition"
          >
            Booking Request : +92 3278503512
          </a>
          <p className="text-gray-400">Open : 09:00 am - 01:00 pm</p>
        </div>

        <div className="flex justify-center gap-2 mb-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#E4C590] to-transparent animate-pulse"
            ></div>
          ))}
        </div>

        <h3 className="text-[#E4C590] text-2xl font-[Forum] mb-2">
          Get News & Offers
        </h3>
        <p className="text-gray-400 mb-6">
          Subscribe & get{" "}
          <span className="text-[#E4C590] font-medium">25% Off</span>.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:w-80 px-4 py-3 bg-black/10 border border-gray-700 rounded-full text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#E4C590] transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-[#E4C590] to-[#c8a25d] text-black font-semibold rounded-full hover:shadow-[0_0_10px_#E4C590] transition-all"
          >
            Subscribe
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-8 text-lg font-light tracking-wide mb-8">
          {["Home", "Menus", "About Us", "Our Chefs", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-[#E4C590] transition duration-300 hover:-translate-y-1"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-lg font-light tracking-wide mb-12">
          {["Facebook", "Instagram", "Twitter", "YouTube", "Google Map"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#E4C590] transition duration-300 hover:-translate-y-1"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* === Bottom Section === */}
        <div className="border-t border-[#E4C590]/30 pt-6 text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#E4C590] font-[Forum]">Grilli</span>. All
            Rights Reserved | Crafted by{" "}
            <a
              href="https://github.com/zanaira"
              target="_blank"
              rel="noreferrer"
              className="text-[#E4C590] hover:underline"
            >
              Zanaira
            </a>
          </p>
        </div>
      </div>

      <div className="absolute -top-10 right-10 w-2 h-2 bg-[#E4C590] rounded-full animate-ping"></div>
      <div className="absolute top-6 left-12 w-1.5 h-1.5 bg-[#E4C590]/70 rounded-full animate-pulse"></div>
    </footer>
  );
}

export default Footer;
