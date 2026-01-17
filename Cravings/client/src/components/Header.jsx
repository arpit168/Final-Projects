import React from "react";
import tranparentLogo from "../assets/transparentLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-(--color-primary) px-8 py-2 flex justify-between items-center sticky top-0 z-50">
        <Link to={"/"}>
          <img
            src={tranparentLogo}
            alt=""
            className="h-12 w-20 object-cover invert-100"
          />
        </Link>
        <div className="flex gap-4">
          <Link
            to={"/"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded cursor-pointer "
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-(--color-secondary) py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded cursor-pointer"
          >
            Register
          </button>
          <button
            onClick={() => navigate("#")}
            className=" py-2 hover:text-orange-400  hover:scale-105 font-bold text-2xl text-white rounded cursor-pointer"
          >
            {/* <RiLogoutBoxRLine /> */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
