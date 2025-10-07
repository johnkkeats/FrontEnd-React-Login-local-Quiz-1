// import React from 'react'
// import { Link } from 'react-router-dom'

// function Header() {
//   return (
//     <div>
//       <header className="header" data-header>
//     <div className="container">

//       <Link to="/" className="logo">
//         <img src='./src/assets/images/images/logo.svg' width="160" height="50" alt="Grilli - Home"/>
//       </Link>

//       <nav className="navbar" data-navbar>

//         <button className="close-btn" aria-label="close menu" data-nav-toggler>
//           <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
//         </button>

//         <a href="#" className="logo">
//           <img src="./src/assets/images/images/log.svg" width="160" height="50" alt="Grilli - Home"/>
//         </a>

//         <ul className="navbar-list">

//           <li className="navbar-item">
//             <Link to="/" className="navbar-link hover-underline active">
//               <div className="separator"></div>

//               <span className="span">Home</span>
//             </Link>
//           </li>

//           <li className="navbar-item">
//             <Link to="services" className="navbar-link hover-underline">
//               <div className="separator"></div>

//               <span className="span">Services</span>
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="menue" className="navbar-link hover-underline">
//               <div className="separator"></div>

//               <span className="span">Menus</span>
//             </Link>
//           </li>

//           <li className="navbar-item">
//             <Link to="about" className="navbar-link hover-underline">
//               <div className="separator"></div>

//               <span className="span">About Us</span>
//             </Link>
//           </li>

      
//           <li className="navbar-item">
//             <Link to="special-dish" className="navbar-link hover-underline">
//               <div className="separator"></div>

//               <span className="span">Special</span>
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="features" className="navbar-link hover-underline">
//               <div className="separator"></div>

//               <span className="span">Features</span>
//             </Link>
//           </li>

//           <li className="navbar-item">
//             <Link to="reservations" className="navbar-link hover-underline">
//               <div className="separator"></div>

//               <span className="span">Contact</span>
//             </Link>
//           </li>

//         </ul>

//         <div className="text-center">
//           <p className="headline-1 navbar-title">Visit Us</p>

//           <address className="body-4">
//             Restaurant St, Delicious City, <br/>
//             Gujrat, PK
//           </address>

//           <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

//           <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">booking@grilli.com</a>

//           <div className="separator"></div>

//           <p className="contact-label">Booking Request</p>

//           <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
//             +92 3278534821
//           </a>
//         </div>

//       </nav>

//       <Link to="reservations" className="btn btn-secondary">
//         <span className="text text-1">Find A Table</span>

//         <span className="text text-2" aria-hidden="true">Find A Table</span>
//       </Link>

//       <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
//         <span className="line line-1"></span>
//         <span className="line line-2"></span>
//         <span className="line line-3"></span>
//       </button>

//       <div className="overlay" data-nav-toggler data-overlay></div>

//     </div>
//   </header>
//     </div>
//   )
// }

// export default Header


import { Link } from "react-router-dom";

function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-[40px] left-0 w-full z-50 bg-eerieBlack1/30 backdrop-blur-sm">
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
      <Link to="/" className="hover:text-goldCrayola transition">Home</Link>
      <Link to="services" className="hover:text-goldCrayola transition">Services</Link>
      <Link to="menue" className="hover:text-goldCrayola transition">Menu</Link>
      <Link to="features" className="hover:text-goldCrayola transition">Features</Link>
      <Link to="about" className="hover:text-goldCrayola transition">About</Link>
      <Link to="reservations" className="hover:text-goldCrayola transition">Contact</Link>
      
      {/* <Link to="special-dish" className="hover:text-goldCrayola transition">Special</Link> */}
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
