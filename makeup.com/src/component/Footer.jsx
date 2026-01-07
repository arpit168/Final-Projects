import React from "react";
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-300"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="max-w-7xl mx-auto px-6 py-12" >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div >
            <h2 className="text-2xl font-bold text-white mb-3">Makeup.com</h2>
            <p className="text-sm leading-relaxed">
              Your one-stop destination for quality products at affordable
              prices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-white transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>
            <p className="text-sm">📍 India</p>
            <p className="text-sm">📧 support@Makeup.com</p>
            <p className="text-sm">📞 +91 951600142</p>
          </div>
        </div>

        <div className="border-t flex justify-between border-gray-700 mt-10 pt-6 text-center text-sm">
          <span>
            Copyright © {new Date().getFullYear()} Makeup.com. All rights
          reserved.
          </span>
          <span className="flex">Made with <FaHeart className="text-red-700  mx-1 text-xl" /> by Anokha Arpit. </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
