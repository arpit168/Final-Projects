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
      <div className=" border-b-6 text-light bg-gray-100 p-2 px-5 sticky top-0 z-100 ">
      <div className="flex justify-around shadow-2xl "> 
         <div className="flex">
         <img src={img}  className="rounded-full w-15 me-2" alt="" />
        <h1 className="text-4xl mt-3  font-bold text-indigo-700 font-serif ">Makeup.Com</h1>
       </div>
        <div className="   flex   gap-5 text-light mt-5 me-15">
          <div><Link to={"/"} className="text-decoration-none text-xl text-black font-serif flex hover:border-b-2 border-black  ">
           <CiHome className=" text-indigo-700 text-2xl"/><p>Home</p>
            
          </Link></div>
          <div><Link to={"/about"} className="text-decoration-none text-xl text-black  flex  hover:border-b-2 border-black font-serif  ">
           <LuNotebookPen className="text-2xl text-indigo-700 font-bold"/> About
          </Link></div>
          <div><Link to={"/product"} className="text-decoration-none text-xl text-black font-serif flex  hover:border-b-2 border-black  ">
           <BsCart2 className="text-2xl text-indigo-700 font-bold"/> Product
          </Link></div>
          <div><Link to={"/contact"} className="text-decoration-none text-xl text-black flex  hover:border-b-2 border-black font-serif  ">
            <LuPhone className="text-2xl text-indigo-700 font-bold"/>Contact
          </Link></div>
         
        </div>
        <div className="flex gap-5 mt-5">
           <div><Link to={"/login"} className="text-decoration-none text-xl font-serif bg-indigo-700 text-white flex border hover:bg-yellow-300 hover:text-black rounded-xl px-2  hover:border-b-2 border-black ">
            <HiOutlineLogin className="mt-1 font-bold"/>Login
          </Link></div>
          <div><Link to={"/signup"} className="text-decoration-none text-xl  bg-indigo-700 text-white  flex border  hover:border-b-2 hover:bg-yellow-300 hover:text-black rounded-xl px-2 border-black font-serif">
           <BsSignIntersectionSideFill className="mt-1  font-bold"/>SignUp
          </Link></div>
        </div>
      </div>
        
      </div>
    </>
  );
};

export default Header;


