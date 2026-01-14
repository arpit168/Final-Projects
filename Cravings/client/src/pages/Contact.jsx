import React from "react";
import img from "../assets/fastfood.jpg";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <img
          src={img}
          alt="Contact"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/60 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-white tracking-wide">
            Contact Us
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl">
            We’d love to hear from you. Reach out for queries, feedback or table
            bookings.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* FORM SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-8">
            
            {/* LEFT */}
            <div className="md:border-r md:pr-8">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                Get in Touch
              </h2>
             <div className="space-y-5">
               <p className="text-gray-600 leading-relaxed">
                Have a question or want to book a table? Fill out the form and
                our team will get back to you shortly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Feel free to reach out to us for any queries, feedback, or table bookings. Our team will respond promptly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Questions, suggestions, or planning a visit? Get in touch with us today and let us take care of the rest. We’re just a message away!
              </p>
             </div>
              <h1 className="mt-5 text-gray-700">Thank You <span className="w-25 bg-black  p-1"></span></h1>
            </div>

            {/* RIGHT FORM */}
           <form >

             <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <button type="submit" className="w-full bg-indigo-700 text-white hover:text-gray-600 cursor-pointer py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300">
                Book Your Table
              </button>
            </div>
           </form>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
              <IoLocation className="text-indigo-700 text-5xl mx-auto mb-4" />
              <p className="font-medium text-gray-700 text-sm">
                Churhat, Sidhi, Madhya Pradesh
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
              <FaPhoneAlt className="text-indigo-700 text-5xl mx-auto mb-4" />
              <p className="font-medium text-gray-700 text-sm">
                9516010142
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
              <MdEmail className="text-indigo-700 text-5xl mx-auto mb-4" />
              <p className="font-medium text-gray-700 text-sm break-all">
                officialcravingdelicious112@gmail.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
              <FaGlobeAsia className="text-indigo-700 text-5xl mx-auto mb-4" />
              <p className="font-medium text-gray-700 text-sm">
                www.cravingdeliciousfood.in
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
