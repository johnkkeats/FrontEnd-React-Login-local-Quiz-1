// import React from "react";
// import { IoTimeOutline, IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";

// function TopBar() {
//   return (
//     <div className="topbar">
//       <div className="container">
//         <address className="topbar-item">
//           <div className="icon">
//             <IoLocationOutline />
//           </div>
//           <span className="span">Restaurant St, Delicious City, Gujrat, PK</span>
//         </address>

//         <div className="separator"></div>

//         <div className="topbar-item item-2">
//           <div className="icon">
//             <IoTimeOutline />
//           </div>
//           <span className="span">Daily : 8.00 am to 10.00 pm</span>
//         </div>

//         <a href="tel:+923278503512" className="topbar-item link">
//           <div className="icon">
//             <IoCallOutline />
//           </div>
//           <span className="span">+92 3278503512</span>
//         </a>

//         <div className="separator"></div>

//         <a href="mailto:booking@restaurant.com" className="topbar-item link">
//           <div className="icon">
//             <IoMailOutline />
//           </div>
//           <span className="span">booking@restaurant.com</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default TopBar;


import React from "react";
import {
  IoTimeOutline,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

function TopBar() {
  return (
   <div className="absolute top-0 left-0 w-full z-50 bg-eerieBlack1/20 backdrop-blur-sm text-goldCrayola py-2">
  <div className="container flex flex-wrap items-center justify-between px-4 text-sm  text-white">
    <address className="flex items-center gap-4">
      <IoLocationOutline /> Restaurant St, Delicious City, Gujrat, PK
      <IoTimeOutline /> <span>Daily: 8.00 am - 10.00 pm</span>
    </address>
    <div className="hidden md:flex items-center gap-4">
      
      <a href="tel:+923278503512" className="hover:text-white flex items-center gap-2">
        <IoCallOutline /> +92 3278503512
      </a>
      <a href="mailto:booking@restaurant.com" className="hover:text-white flex items-center gap-2">
        <IoMailOutline /> booking@restaurant.com
      </a>
    </div>
  </div>
</div>

  );
}

export default TopBar;
