import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Craving from "../assets/transparentlogo.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-primary text-primary-content z-50"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* LOGO */}
          <div>
            <img
              src={Craving}
              alt="logo"
              className="h-12 w-20 object-cover invert"
            />
            <p className="text-sm w-40 mt-2 text-primary-content">
              Your one-stop destination for quality Meal at affordable prices.
            </p>
            <p className="text-sm w-40 mt-1 text-primary-content">
              Diet starts tomorrow. Craving made sure of it.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary-content">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-secondary transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-secondary transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-secondary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary-content">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Taste Guarantee</li>
              <li>Time Punctuality</li>
              <li>Food Delivery</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary-content">
              Contact Us
            </h3>
            <p className="text-sm mt-2">📍 India</p>
            <p className="text-sm mt-2">📧 support@anokhaCraving.com</p>
            <p className="text-sm mt-2">📞 +91 95101**42</p>

            <div className="flex gap-4 text-xl mt-3">
              <FaFacebook className="cursor-pointer hover:text-secondary transition" />
              <FaInstagram className="cursor-pointer hover:text-secondary transition" />
              <FaTwitter className="cursor-pointer hover:text-secondary transition" />
              <FaWhatsapp className="cursor-pointer hover:text-secondary transition" />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-secondary-hover mt-10 pt-6 flex justify-between text-sm">
          <span>
            © {new Date().getFullYear()} Craving.com. All rights reserved.
          </span>
          <span className="flex items-center">
            Made with
            <FaHeart className="mx-1 text-secondary" />
            by Anokha Arpit
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
