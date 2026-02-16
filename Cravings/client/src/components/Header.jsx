import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "motion/react";
import useUiStore from "../stores/useUiStore";
import { useAuth } from "../context/AuthContext";
import tranparentLogo from "../assets/transparentLogo.png";
import { FaHome, FaUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { user, isLogin } = useAuth();
  const { showHeader, setShowHeader } = useUiStore();

  const dashboardRoutes = {
    customer: "/userDashboard",
    manager: "/restaurantDashboard",
    admin: "/adminDashboard",
    partner: "/riderDashboard",
  };

  const handleDashboardRedirect = () => {
    const lastDashboard = localStorage.getItem("lastDashboard");
    const roleRoute = dashboardRoutes[user?.role] || "/";
    navigate(lastDashboard || roleRoute);
  };

  const closeMobileMenu = () => setShowHeader(false);

  return (
    <header
      data-aos="fade-down"
      className="sticky top-0 z-50 bg-slate-900 text-white shadow-md"
    >
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          data-aos="fade-up"
          data-aos-duration="2000"
          to="/"
          className="flex items-center gap-2"
        >
          <img
            src={tranparentLogo}
            alt="Cravings Logo"
            className="h-10 w-auto object-contain invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-200  ${
                isActive
                  ? "text-orange-500 "
                  : "text-slate-300 hover:text-orange-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <FaHome
                    data-aos="zoom-in"
                    className="text-lg mb-1 absolute top-2 border h-5 rounded-full shadow-md w-5 shadow-red-500"
                  />
                )}
                <span className="z-100 bg-gray-900 rounded-full">Home</span>
              </>
            )}
          </NavLink>

          {/* -------------------------About--------------------- */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-200 ${
                isActive
                  ? "text-orange-500"
                  : "text-slate-300 hover:text-orange-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <FaInfoCircle
                    data-aos="zoom-in"
                    className="text-lg mb-1 absolute top-2 border h-5 rounded-full shadow-md w-5 shadow-red-500"
                  />
                )}
                <span className="z-100 bg-gray-900 rounded-full">About</span>
              </>
            )}
          </NavLink>

          {/* ----------------------------contact------------------- */}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-200 ${
                isActive
                  ? "text-orange-500"
                  : "text-slate-300 hover:text-orange-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <FaPhone
                    data-aos="zoom-in"
                    className="text-lg mb-1 absolute top-2 border h-5  rounded-full shadow-md w-5 shadow-red-500"
                  />
                )}
                <span className="z-100 bg-gray-900 rounded-full">Contact</span>
              </>
            )}
          </NavLink>

          {/* <NavLink
            to="/orderNowCopy"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-200 ${
                isActive
                  ? "text-orange-500 "
                  : "text-slate-300 hover:text-orange-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <FaUtensils
                    data-aos="zoom-in"
                    className="text-lg mb-1 absolute top-2 border h-5 rounded-full shadow-md w-5 shadow-red-500"
                  />
                )}
                <span className="z-100 bg-gray-900 rounded-full">
                  Order Now
                </span>
              </>
            )}
          </NavLink> */}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {isLogin ? (
             <NavLink
            to="/userdashboard"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-200 ${
                isActive
                  ? "text-orange-500"
                  : "text-slate-300 hover:text-orange-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <FaUser
                    data-aos="zoom-in"
                    className="text-lg mb-1 absolute top-2 border h-5  rounded-full shadow-md w-5 shadow-red-500"
                  />
                )}
                <span className="z-100 bg-gray-900 font-bold rounded-full">{user?.fullName || "Dashboard"}</span>
              </>
            )}
          </NavLink>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-orange-500 font-semibold px-5 py-2 rounded-2xl shadow-9xl hover:shadow-blue-700 border overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-md"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                // className="px-5 py-2 rounded-lg bg-white text-slate-900 hover:bg-gray-200 transition font-semibold"
                className=" bg-gray-800 font-semibold px-5 py-2 rounded-2xl shadow-9xl hover:shadow-blue-700 border overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-md"
              >
                Register
              </button>
            </>
          )}
        </div>

        <button
          className="md:hidden text-white "
          onClick={() => setShowHeader(!showHeader)}
        >
          {showHeader ? <RxCross2 size={28} /> : <GiHamburgerMenu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-800 border-t border-slate-700"
          >
            <div className="flex flex-col gap-6 px-6 py-6 font-medium absolute bg-slate-800 w-full">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="hover:text-orange-400"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="hover:text-orange-400"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="hover:text-orange-400"
              >
                Contact
              </Link>
              <Link
                to="/orderNowCopy"
                onClick={closeMobileMenu}
                className="hover:text-orange-400"
              >
                Order Now
              </Link>

              {!isLogin ? (
                <>
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="hover:text-orange-400"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={closeMobileMenu}
                    className="hover:text-orange-400"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    closeMobileMenu();
                    handleDashboardRedirect();
                  }}
                  className="text-left hover:text-orange-400"
                >
                  Dashboard
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
