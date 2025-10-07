import React from "react";
import formPattern from "../assets/images/images/form-pattern.png";

function Reservations() {
  return (
    <section
      id="reservation"
      className="relative py-24 px-6 bg-[#121212] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-[#181818] rounded-2xl shadow-xl overflow-hidden">
        {/* LEFT FORM */}
        <div className="p-10 bg-[#121212]">
          <h2 className="text-4xl font-[Forum] mb-4 text-center text-[#E4C590]">
            Online Reservation
          </h2>

          <p className="text-center text-gray-400 mb-8">
            Booking request{" "}
            <a
              href="tel:+923278534821"
              className="text-[#E4C590] hover:underline"
            >
              +92 3278534821
            </a>{" "}
            or fill out the form below
          </p>

          <form className="space-y-6">
            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-[#1e1e1e] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#E4C590]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-[#1e1e1e] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#E4C590]"
              />
            </div>

            {/* Person + Date + Time */}
            <div className="grid sm:grid-cols-3 gap-4">
              <select
                name="person"
                className="w-full bg-[#1e1e1e] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E4C590]"
              >
                <option>1 Person</option>
                <option>2 Person</option>
                <option>3 Person</option>
                <option>4 Person</option>
                <option>5 Person</option>
                <option>6 Person</option>
                <option>7 Person</option>
              </select>

              <input
                type="date"
                name="reservation-date"
                className="w-full bg-[#1e1e1e] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E4C590]"
              />

              <select
                name="time"
                className="w-full bg-[#1e1e1e] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E4C590]"
              >
                <option>08:00 am</option>
                <option>09:00 am</option>
                <option>10:00 am</option>
                <option>11:00 am</option>
                <option>12:00 pm</option>
                <option>01:00 pm</option>
                <option>02:00 pm</option>
                <option>03:00 pm</option>
                <option>04:00 pm</option>
                <option>05:00 pm</option>
                <option>06:00 pm</option>
                <option>07:00 pm</option>
                <option>08:00 pm</option>
                <option>09:00 pm</option>
                <option>10:00 pm</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full bg-[#1e1e1e] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#E4C590]"
            ></textarea>

            {/* Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="relative inline-block px-10 py-3 bg-[#E4C590] text-black  font-semibold overflow-hidden group"
              >
                <span className="absolute inset-0 bg-[#C49B66] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                <span className="relative">Book A Table</span>
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE INFO */}
        <div
          className="relative flex flex-col justify-center items-center text-center px-10 py-16 bg-cover bg-center"
          style={{ backgroundImage: `url(${formPattern})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-[Forum] text-[#E4C590]">
              Contact Us
            </h2>

            <div>
              <p className="text-[#E4C590] uppercase tracking-wide">
                Booking Request
              </p>
              <a
                href="tel:+923278534821"
                className="text-2xl hover:text-[#E4C590] transition"
              >
                +92 3278534821
              </a>
            </div>

            <div className="w-16 h-[2px] bg-[#E4C590] mx-auto my-4"></div>

            <div>
              <p className="text-[#E4C590] uppercase tracking-wide">Location</p>
              <address className="text-gray-300 not-italic">
                Restaurant St, Delicious City,
                <br /> Gujrat PK
              </address>
            </div>

            <div>
              <p className="text-[#E4C590] uppercase tracking-wide">
                Lunch Time
              </p>
              <p className="text-gray-300">
                Monday to Sunday
                <br />
                11.00 am - 2.30 pm
              </p>
            </div>

            <div>
              <p className="text-[#E4C590] uppercase tracking-wide">
                Dinner Time
              </p>
              <p className="text-gray-300">
                Monday to Sunday
                <br />
                05.00 pm - 10.00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservations;
