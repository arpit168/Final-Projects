import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Makeup.com</h2>
            <p className="text-sm">
              Your one-stop destination for quality products at affordable prices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/product" className="hover:text-white">Products</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>FAQ</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-sm">📍 India</p>
            <p className="text-sm">📧 support@makeup.com</p>
            <p className="text-sm">📞 +91 95101**42</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex justify-between text-sm">
          <span>© {new Date().getFullYear()} Makeup.com. All rights reserved.</span>
          <span className="flex items-center">
            Made with <FaHeart className="text-red-700 mx-1" /> by Anokha Arpit
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
