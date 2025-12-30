import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/makeup.jpeg";
import { CiHome } from "react-icons/ci";
import { LuNotebookPen } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";

import { BsCart2 } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineLogin } from "react-icons/hi";
import { BsSignIntersectionSideFill } from "react-icons/bs";



const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-gray-950 text-light p-5 sticky top-0 z-50 ">
       <div className="flex">
         <img src={img}  className="rounded-full w-15 me-2" alt="" />
        <h1 className="text-5xl text-gray-300 font-semibold "><span className="text-pink-600 animate-pulse text-6xl">M</span>ake<span className="border-b-2 border-gray-600">up.Com   </span></h1>
       </div>
        <div className="   flex gap-5 text-light mt-2 ">
          <div><Link to={"/"} className="text-decoration-none text-xl text-amber-400 flex hover:border-b-2 border-amber-400 hover:text-red-700 hover:border-b-red-700">
           <CiHome className="mt-1"/> Home
          </Link></div>
          <div><Link to={"/about"} className="text-decoration-none text-xl text-amber-400 flex  hover:border-b-2 border-amber-400  hover:text-red-700 hover:border-b-red-700">
           <LuNotebookPen className="mt-1"/> About
          </Link></div>
          <div><Link to={"/product"} className="text-decoration-none text-xl text-amber-400 flex  hover:border-b-2 border-amber-400  hover:text-red-700 hover:border-b-red-700">
           <BsCart2 className="mt-1"/> Product
          </Link></div>
          <div><Link to={"/contact"} className="text-decoration-none text-xl text-amber-400 flex  hover:border-b-2 border-amber-400  hover:text-red-700 hover:border-b-red-700">
            <LuPhone className="mt-1"/>Contact
          </Link></div>
          <div><Link to={"/login"} className="text-decoration-none text-xl text-amber-400 flex border hover:bg-yellow-300 hover:text-black rounded-xl px-2  hover:border-b-2 border-amber-400">
            <HiOutlineLogin className="mt-1"/>Login
          </Link></div>
          <div><Link to={"/signup"} className="text-decoration-none text-xl text-amber-400 flex border  hover:border-b-2 hover:bg-yellow-300 hover:text-black rounded-xl px-2 border-amber-400">
           <BsSignIntersectionSideFill className="mt-1"/>SignUp
          </Link></div>
        </div>
        
      </div>
    </>
  );
};

export default Header;


