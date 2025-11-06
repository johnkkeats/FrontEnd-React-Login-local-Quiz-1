import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="absolute top-[40px] left-0 w-full z-50 bg-eerieBlack1">
      <div className="container flex items-center justify-between px-6 py-3">
        <Link to="/" className="logo">
          <img
            src="./src/assets/images/images/logo.svg"
            width="160"
            height="50"
            alt="Grilli - Home"
            className="drop-shadow-lg"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-white font-dmSans">
          <Link to="/" className="hover:text-goldCrayola transition">
            Home
          </Link>
          <Link to="services" className="hover:text-goldCrayola transition">
            Services
          </Link>
          <Link to="menue" className="hover:text-goldCrayola transition">
            Menu
          </Link>
          <Link to="features" className="hover:text-goldCrayola transition">
            Features
          </Link>
          <Link to="about" className="hover:text-goldCrayola transition">
            About
          </Link>
          <Link to="reservations" className="hover:text-goldCrayola transition">
            Contact
          </Link>
        </nav>

        <Link
          to="reservations"
          className=" bg-goldCrayola text-eerieBlack1 font-normal px-6 py-2 border border-goldCrayola  hover:bg-transparent hover:text-amber-50  transition"
        >
          Find A Table
        </Link>
      </div>
    </header>
  );
}

export default Header;
