import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Craving from "../assets/transparentlogo.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setMessage("Subscribed Successfully 🎉");
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-linear-to-b from-slate-900 to-black text-gray-300 overflow-hidden">

      {/* Decorative Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* LOGO */}
          <div>
            <img
              src={Craving}
              alt="logo"
              className="h-14 w-24 object-cover invert"
            />
            <p className="text-sm mt-4 leading-relaxed">
              Your one-stop destination for quality meals at affordable prices.
              Fresh taste, fast delivery & unforgettable flavors.
            </p>
            <p className="text-sm mt-3 italic text-gray-400">
              “Diet starts tomorrow. Craving made sure of it.”
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/order-now" className="hover:text-orange-400 transition">
                  Order Now
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-orange-400 transition cursor-pointer">
                Taste Guarantee
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer">
                Time Punctuality
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer">
                Food Delivery
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* CONTACT + NEWSLETTER */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Contact Us
            </h3>

            <p className="text-sm mt-2">📍 India</p>
            <p className="text-sm mt-2">📧 support@anokhaCraving.com</p>
            <p className="text-sm mt-2">📞 +91 95101**42</p>

            {/* Social Icons */}
            <div className="flex gap-5 text-xl mt-4">
              <FaFacebook className="cursor-pointer hover:text-orange-400 transition" />
              <FaInstagram className="cursor-pointer hover:text-orange-400 transition" />
              <FaTwitter className="cursor-pointer hover:text-orange-400 transition" />
              <FaWhatsapp className="cursor-pointer hover:text-orange-400 transition" />
            </div>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="mt-6">
              <p className="text-sm mb-2 text-gray-400">
                Subscribe to our newsletter
              </p>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-orange-400 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 transition rounded-r-xl text-white text-sm"
                >
                  Subscribe
                </button>
              </div>

              {message && (
                <p className="text-xs mt-2 text-orange-400">{message}</p>
              )}
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-slate-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <span>
            © {new Date().getFullYear()} Craving.com. All rights reserved.
          </span>

          <span className="flex items-center">
            Made with
            <FaHeart className="mx-2 text-orange-500 animate-pulse" />
            by Anokha Arpit
          </span>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
