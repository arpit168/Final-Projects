import React from "react";
import tranparentLogo from "../assets/transparentLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import useUiStore from "../stores/useUiStore";
import { motion } from "motion/react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, isLogin } = useAuth();
  const navigate = useNavigate();
  const { showHeader, setShowHeader } = useUiStore();

  const dashboardRoutes = {
    customer: "/userDashboard",
    manager: "/restaurantDashboard",
    admin: "/adminDashboard",
    partner: "/riderDashboard",
  };

  const handleClick = () => {
    navigate(
      localStorage.getItem("lastDashboard") || dashboardRoutes[user?.role]
    );
  };

  return (
    <>
      {/* HEADER */}
      <div className="bg-(--color-primary) px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link to="/">
          <img
            src={tranparentLogo}
            alt="logo"
            className="h-12 w-20 object-cover invert"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6">
          <Link
            to="/"
            className="text-(--color-text) hover:text-(--color-secondary) transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-(--color-text) hover:text-(--color-secondary) transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-(--color-text) hover:text-(--color-secondary) transition"
          >
            Contact
          </Link>
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex gap-3 items-center">
          {isLogin ? (
            <div
              onClick={handleClick}
              className="text-(--color-text) font-semibold cursor-pointer hover:text-(--color-secondary) transition"
            >
              {user.fullName}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-(--color-secondary) hover:bg-(--color-secondary-hover) text-white px-4 py-2 rounded transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-(--color-secondary) hover:bg-(--color-secondary-hover) text-white px-4 py-2 rounded transition"
              >
                Register
              </button>
            </>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-(--color-text)"
          onClick={() => setShowHeader(!showHeader)}
        >
          {showHeader ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      {showHeader && (
        <div className="md:hidden absolute w-full bg-(--color-background) text-(--color-text) z-50">
          <div className="flex flex-col gap-4 p-6">
            <Link to="/" onClick={() => setShowHeader(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setShowHeader(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setShowHeader(false)}>
              Contact
            </Link>

            {!isLogin && (
              <>
                <Link to="/login" onClick={() => setShowHeader(false)}>
                  Login
                </Link>
                <Link to="/register" onClick={() => setShowHeader(false)}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
