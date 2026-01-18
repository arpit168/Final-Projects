import React from "react";
import tranparentLogo from "../assets/transparentLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import useUiStore from "../stores/useUiStore";
import { motion } from "motion/react";

const Header = () => {
  const navigate = useNavigate();

  // ✅ CORRECT zustand usage
  const { showHeader, setShowHeader } = useUiStore();

  return (
    <>
      {/* HEADER BAR */}
      <div className="bg-(--color-primary) px-8 py-2 flex justify-between items-center sticky top-0 z-99">
        <Link to="/">
          <img
            src={tranparentLogo}
            alt="logo"
            className="h-12 w-20 object-cover invert-100"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-4">
          <Link to="/" className="text-white hover:text-(--color-accent)">Home</Link>
          <Link to="/about" className="text-white hover:text-(--color-accent)">About</Link>
          <Link to="/contact" className="text-white hover:text-(--color-accent)">Contact</Link>
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="bg-(--color-secondary) py-2 px-4 font-bold rounded"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-(--color-secondary) py-2 px-4 font-bold rounded"
          >
            Register
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <motion.button
          whileTap={{ scale: 1 }
        
        }
          className="md:hidden text-pink-500 "
          
          onClick={() => setShowHeader(!showHeader)}
        >
          {showHeader ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      {showHeader && (
       <div className="bg-blue-950" >
         <div className="md:hidden text-white bg-blue-950 ms-5  flex flex-col gap-4 p-6 ">
         <Link to="/" onClick={() => setShowHeader(false)}>Home</Link>
         <Link to="/about" onClick={() => setShowHeader(false)}>About</Link>
         <Link to="/contact" onClick={() => setShowHeader(false)}>Contact</Link>
         <Link to="/login" onClick={() => setShowHeader(false)}>Login</Link>
         <Link to="/register" onClick={() => setShowHeader(false)}>Register</Link>
        </div>
       </div>
      )}
    </>
  );
};

export default Header;
