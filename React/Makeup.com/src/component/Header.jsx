import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/makeup.jpeg";
import { FcHome, FcAbout, FcPhone } from "react-icons/fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-gray-950 text-light p-5 sticky top-0 z-50 ">
       <div className="flex">
         <img src={img}  className="rounded-full w-15 me-2" alt="" />
        <h1 className="text-5xl text-gray-300 font-semibold "><span className="text-pink-600 animate-pulse text-6xl">M</span>ake<span className="border-b-2 border-gray-600">up.Com   </span></h1>
       </div>
        <div className="fs-5 flex gap-5 text-light mt-2 animate-pulse">
          <div><Link to={"/"} className="text-decoration-none text-2xl text-amber-400 flex hover:border-b-2 border-amber-400">
           <FcHome className="mt-1"/> Home
          </Link></div>
          <div><Link to={"/about"} className="text-decoration-none text-2xl text-amber-400 flex  hover:border-b-2 border-amber-400">
           <FcAbout className="mt-1"/> About
          </Link></div>
          <div><Link to={"/product"} className="text-decoration-none text-2xl text-amber-400 flex  hover:border-b-2 border-amber-400">
           <MdOutlineProductionQuantityLimits className="mt-1"/> Product
          </Link></div>
          <div><Link to={"/contact"} className="text-decoration-none text-2xl text-amber-400 flex  hover:border-b-2 border-amber-400">
            <FcPhone className="mt-1"/>Contact
          </Link></div>
        </div>
        
      </div>
    </>
  );
};

export default Header;


