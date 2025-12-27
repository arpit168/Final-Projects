import React from "react";
import { Link } from "react-router-dom";
import makeup from "../assets/makeup.jpeg";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FcPhone } from "react-icons/fc";





const Header = () => {
  return (
    <>
      <div>
        <div className=" bg-gray-700 flex justify-between px-3">

         <div className="flex">
            <img src={makeup} className="w-13 rounded-4xl" alt="" />
             <h1 className=" text-white p-3 font-mono text-3xl"> 
            <span className="font-extrabold text-red-300 text-4xl">M</span>akeup.com
          </h1>
          
         </div>
         <div>
             <div className="flex gap-5 mt-3 ">
            <Link to={"/"} className="text-white hover:text-yellow-300 hover:border-b-2 flex gap-1"> <span><FcHome className="mt-1 "/></span><span>Home</span></Link>
            <Link to={"/about"} className="text-white hover:text-yellow-300 hover:border-b-2 flex gap-1 " ><span><FcAbout className="mt-1 "/></span><span>About</span></Link>
            <Link to={"/product"} className="text-white hover:text-yellow-300 hover:border-b-2 flex gap-1 " ><span><MdOutlineProductionQuantityLimits className="mt-1 "/></span><span>Products</span></Link>
            <Link to={"/contact"} className="text-white hover:text-yellow-300 hover:border-b-2 flex gap-1 " ><span><FcPhone className="mt-1 "/></span><span>Contact US</span></Link>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Header;
