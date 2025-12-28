// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FcHome, FcAbout, FcPhone } from "react-icons/fc";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import { HiMenu, HiX } from "react-icons/hi";
// import pic from "../assets/makeup.jpeg";

// const Navbar = ({ makeup }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-gray-950 px-4 py-3 sticky z-50 top-0">
//       <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

        
//         <div className="flex items-center gap-2">
//           <img src={pic} className="w-15 rounded-full " alt="logo" />
//           <h1 className="text-white font-mono text-4xl ">
//             <span className="font-extrabold text-red-300 text-5xl ">M</span>ak<span className="border-b-2 border-red-300">eup.com</span>
//           </h1>
//         </div>

       
//         <div className="hidden md:flex gap-6 animate-pulse" >
//           <NavLink to="/" icon={<FcHome />} label="Home" />
//           <NavLink to="/about" icon={<FcAbout />} label="About" />
//           <NavLink to="/product" icon={<MdOutlineProductionQuantityLimits />} label="Products" />
//           <NavLink to="/contact" icon={<FcPhone />} label="Contact Us" />
//         </div>

        
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-white text-3xl"
//         >
//           {open ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-gray-800 px-4 py-4 space-y-3">
//           <MobileLink to="/" icon={<FcHome />} label="Home" setOpen={setOpen} />
//           <MobileLink to="/about" icon={<FcAbout />} label="About" setOpen={setOpen} />
//           <MobileLink to="/product" icon={<MdOutlineProductionQuantityLimits />} label="Products" setOpen={setOpen} />
//           <MobileLink to="/contact" icon={<FcPhone />} label="Contact Us" setOpen={setOpen} />
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavLink = ({ to, icon, label }) => (
//   <Link
//     to={to}
//     className="text-white flex items-center gap-1 hover:text-yellow-300 hover:border-b-2 transition"
//   >
//     {icon}
//     {label}
//   </Link>
// );

// const MobileLink = ({ to, icon, label, setOpen }) => (
//   <Link
//     to={to}
//     onClick={() => setOpen(false)}
//     className="flex items-center gap-2 text-white hover:text-yellow-300 transition"
//   >
//     {icon}
//     {label}
//   </Link>
// );

// export default Navbar;
