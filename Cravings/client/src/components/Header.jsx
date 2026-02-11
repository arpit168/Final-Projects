import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "motion/react";
import useUiStore from "../stores/useUiStore";
import { useAuth } from "../context/AuthContext";
import tranparentLogo from "../assets/transparentLogo.png";

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
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={tranparentLogo}
            alt="Cravings Logo"
            className="h-10 w-auto object-contain invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-orange-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-orange-400 transition">
            Contact
          </Link>
          <Link to="/orderNowCopy" className="hover:text-orange-400 transition">
            Order Now
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {isLogin ? (
            <button
              onClick={handleDashboardRedirect}
              className="font-semibold hover:text-orange-400 transition"
            >
              {user?.fullName || "Dashboard"}
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="px-5 py-2 rounded-lg bg-white text-slate-900 hover:bg-gray-200 transition font-semibold"
              >
                Register
              </button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setShowHeader(!showHeader)}
        >
          {showHeader ? <RxCross2 size={28} /> : <GiHamburgerMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-800 border-t border-slate-700"
          >
            <div className="flex flex-col gap-6 px-6 py-6 font-medium">
              <Link to="/" onClick={closeMobileMenu} className="hover:text-orange-400">
                Home
              </Link>
              <Link to="/about" onClick={closeMobileMenu} className="hover:text-orange-400">
                About
              </Link>
              <Link to="/contact" onClick={closeMobileMenu} className="hover:text-orange-400">
                Contact
              </Link>
              <Link to="/orderNowCopy" onClick={closeMobileMenu} className="hover:text-orange-400">
                Order Now
              </Link>

              {!isLogin ? (
                <>
                  <Link to="/login" onClick={closeMobileMenu} className="hover:text-orange-400">
                    Login
                  </Link>
                  <Link to="/register" onClick={closeMobileMenu} className="hover:text-orange-400">
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
