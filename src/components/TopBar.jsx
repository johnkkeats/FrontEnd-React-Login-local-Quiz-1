import React from "react";
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-eerieBlack1/20 backdrop-blur-sm text-goldCrayola py-2">
      <div className="container flex flex-wrap items-center justify-between px-4 text-sm text-white">
        {/* Location & Time Info */}
        <address className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-2">
            <IoLocationOutline className="text-goldCrayola" />
            Restaurant St, Delicious City, Gujrat, PK
          </span>
          <span className="flex items-center gap-2">
            <IoTimeOutline className="text-goldCrayola" />
            Daily: 8.00 am - 10.00 pm
          </span>
        </address>

        {/* Register & Login Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-1 rounded-md border border-goldCrayola text-goldCrayola hover:bg-goldCrayola hover:text-black transition-all duration-300"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-1 rounded-md border border-goldCrayola text-goldCrayola hover:bg-goldCrayola hover:text-black transition-all duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
