import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/makeup.jpeg";
import { CiHome } from "react-icons/ci";
import { LuNotebookPen } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { MdOpacity, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineLogin } from "react-icons/hi";
import { BsSignIntersectionSideFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { motion,AnimatePresence } from "motion/react";
import useUiStore from "../store/useUiStore";
import { SiLucide } from "react-icons/si";


const Header = () => {
  const { showHeader, setShowHeader } = useUiStore();
  const [user, setUser] = useState(false);

  return (
    <>
      <div className="  border-b-6 text-light bg-gray-100 p-2 px-5 sticky top-0 z-50  ">
        <div className="flex md:justify-around justify-between items-center shadow-2xl ">
          <div className="flex">
            <img src={img} className="rounded-full md:w-15 w-8 me-2" alt="" />
            < div className="md:text-4xl text-2xl mt-3  font-bold text-indigo-700 font-serif ">
              <Link to={"/"}>Makeup.com</Link>
            </div>
          </div>

          <div className="md:flex hidden md:gap-5 text-light me-15">
            <div>
              <Link
                to={"/"}
                className="text-decoration-none text-xl text-black font-serif flex hover:border-b-2 border-black  "
              >
                <CiHome className=" text-indigo-700 text-2xl" />
                <p>Home</p>
              </Link>
            </div>
            <div>
              <Link
                to={"/about"}
                className="text-decoration-none text-xl text-black  flex  hover:border-b-2 border-black font-serif  "
              >
                <LuNotebookPen className="text-2xl text-indigo-700 font-bold" />{" "}
                About
              </Link>
            </div>
            <div>
              <Link
                to={"/product"}
                className="text-decoration-none text-xl text-black font-serif flex  hover:border-b-2 border-black  "
              >
                <BsCart2 className="text-2xl text-indigo-700 font-bold" />{" "}
                Product
              </Link>
            </div>
            <div>
              <Link
                to={"/contact"}
                className="text-decoration-none text-xl text-black flex  hover:border-b-2 border-black font-serif  "
              >
                <LuPhone className="text-2xl text-indigo-700 font-bold" />
                Contact
              </Link>
            </div>
          </div>
          <div>
            <button className="text-2xl md:flex hidden ">
              <a href="/login">
                <FaRegUserCircle />
              </a>
            </button>
          </div>
          <motion.button
            drag
            dragMomentum={false}
            whileTap={{ scale: 0.9 }}
            className="md:hidden  text-pink-500"
            onClick={(e) => {
              e.stopPropagation();
              setShowHeader(!showHeader);
            }}
          >
            {showHeader ? <RxCross2 size={30} /> : <TiThMenu size={30} />}
          </motion.button>
        </div>
        <AnimatePresence>
        {showHeader && (
          <motion.div exit={{y:-200 }} transition={{duration:0.2}} ref={menubar} className="mt-5 w-full  ">
            <div className=" md:hidden grid grid-cols-1 rounded  gap-2  bg-white   ">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHeader(!showHeader);
                }}
              >
                <Link
                  to={"/"}
                  className="  font-serif float-start  px-4 text-sm  py-1   "
                >
                  Home
                </Link>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHeader(!showHeader);
                }}
              >
                <Link
                  to={"/about"}
                  className="  font-serif float-start  px-4 text-sm  py-1  "
                >
                  About
                </Link>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHeader(!showHeader);
                }}
              >
                <Link
                  to={"/product"}
                  className="  font-serif float-start  px-4 text-sm  py-1     "
                >
                  Product
                </Link>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHeader(!showHeader);
                }}
              >
                <Link
                  to={"/contact"}
                  className="    font-serif float-start  px-4 text-sm  py-1     "
                >
                  Contact
                </Link>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHeader(!showHeader);
                }}
              >
                <Link
                  to={"/login"}
                  className="  font-serif float-start  px-4 text-sm  py-1    "
                >
                  Login
                </Link>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHeader(!showHeader);
                }}
              >
                <Link
                  to={"/signup"}
                  className="  font-serif float-start  px-4 text-sm  py-1  "
                >
                  SignUp
                </Link>
              </button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
