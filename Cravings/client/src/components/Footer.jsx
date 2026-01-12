import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Craving from "../assets/transparentlogo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <div className=" " >
            <img src={Craving} alt=""  className="h-12 md:ms-25 w-20 object-cover invert-100" />
            <p className="text-sm ">
              Your one-stop destination for quality Meal at affordable prices.
            </p>
            
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/product" className="hover:text-white">Menu</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Taste Gurantee</li>
              <li>Time Actuallity</li>
              <li>Food Delivery</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-sm">📍 India</p>
            <p className="text-sm">📧 support@anokhaCraving.com</p>
            <p className="text-sm">📞 +91 95101**42</p>
          </div>
        </div>

        <div className="border-t  border-gray-700 mt-10 pt-6 flex justify-between text-sm">
          <span>© {new Date().getFullYear()} Craving.com. All rights reserved.</span>
          <span className="flex items-center">
            Made with <FaHeart className="text-red-700 mx-1" /> by Anokha Arpit
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
