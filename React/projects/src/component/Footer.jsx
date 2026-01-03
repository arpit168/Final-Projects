import React from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "motion/react";
import { ImLocation2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      drag
      className="bg-gray-900 text-gray-300"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              <a href="/currency">My Projects</a>
            </h2>
            <p className="text-xl leading-relaxed ">
              Your one-stop destination for quality projects at affordable
              rates.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/currency" className="hover:text-white transition">
                  Currency Convertor
                </a>
              </li>
              <li>
                <a href="/register" className="hover:text-white transition">
                  Registration-form
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

          <div className="">
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h3>
            <p className="text-xl flex">
              <ImLocation2 className="mt-1 " />
              India
            </p>
            <p className="text-xl">📧anokha@gmail.com</p>
            <p className="text-xl">📞 +91951600142</p>
            <div className="flex gap-4 text-3xl ">
              <FaInstagram className="text-pink-700" />
              <FaFacebook className="text-sky-600" />
              <FaTelegram className="text-sky-600" />
              <FaTwitter className="outline-sky-500 text-sky-500" />
            </div>
          </div>
        </div>

        <div className="border-t flex justify-between border-gray-700 mt-10 pt-6 text-center text-sm">
          <span>
            Anokha © {new Date().getFullYear()} Projects. All rights reserved.
          </span>
          <span className="flex">
            Made with <FaHeart className="text-red-700  mx-1 text-xl" /> by
            Anokha Arpit.{" "}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
