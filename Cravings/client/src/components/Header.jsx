import React, { useEffect, useState } from "react";
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

  const dashboardRoutes = {
    customer: "/userDashboard",
    manager: "/restaurantDashboard",
    admin: "/adminDashboard",
    partner: "/riderDashboard",
  };

  const handleClick = () => {
    navigate(
      localStorage.getItem("lastDashboard") || dashboardRoutes[user?.role],
    );
  };

  const { showHeader, setShowHeader } = useUiStore();

  const [theme, setTheme] = useState(
    () => localStorage.getItem("chatKaroTheme") || "",
  );

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    localStorage.setItem("chatKaroTheme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  return (
    <>
      {/* HEADER */}
      <div className="bg-primary px-8 py-4 flex justify-between items-center sticky top-0 z-50">
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
            className="text-text hover:text-secondary transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-text hover:text-secondary transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-text hover:text-secondary transition"
          >
            Contact
          </Link>
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex gap-3 items-center">
          {isLogin ? (
            <div
              className="text-text font-semibold text-lg cursor-pointer hover:text-secondary transition"
              onClick={handleClick}
            >
              {user.fullName}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-secondary text-buttons px-4 py-2 rounded-lg hover:bg-secondary-hover transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-secondary text-buttons px-4 py-2 rounded-lg hover:bg-secondary-hover transition"
              >
                Register
              </button>
            </>
          )}

          {/* THEME SELECT */}
          <select
            className="bg-background text-text px-3 py-2 rounded-lg border border-secondary hover:border-secondary-hover transition"
            onChange={handleThemeChange}
            value={theme}
          >
            <option value="">Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="claude">Claude</option>
            <option value="spotify">Spotify</option>
            <option value="vscode">VSCode</option>
            <option value="black">Black</option>
            <option value="corporate">Corporate</option>
            <option value="ghibli">Ghibli</option>
            <option value="gourmet">Gourmet</option>
            <option value="luxury">Luxury</option>
            <option value="mintlify">Mintlify</option>
            <option value="pastel">Pastel</option>
            <option value="perplexity">Perplexity</option>
            <option value="shadcn">Shadcn</option>
            <option value="slack">Slack</option>
            <option value="soft">Soft</option>
            <option value="valorant">Valorant</option>
          </select>
        </div>

        {/* MOBILE TOGGLE */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-text"
          onClick={() => setShowHeader(!showHeader)}
        >
          {showHeader ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      {showHeader && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-secondary z-50">
          <div className="flex flex-col gap-4 p-6 text-text">
            <Link
              to="/"
              onClick={() => setShowHeader(false)}
              className="hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setShowHeader(false)}
              className="hover:text-primary transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setShowHeader(false)}
              className="hover:text-primary transition"
            >
              Contact
            </Link>

            {!isLogin && (
              <>
                <Link
                  to="/login"
                  onClick={() => setShowHeader(false)}
                  className="hover:text-primary transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setShowHeader(false)}
                  className="hover:text-primary transition"
                >
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
