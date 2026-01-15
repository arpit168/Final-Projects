import React, { useState } from "react";
import toast from "react-hot-toast";
import img from "../assets/fastfood.jpg";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import api from "../config/Api"

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    sub: "",
    message: "",
  });

  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      sub: "",
      message: "",
    });
  };

  const validate = () => {
    let isvalid = true;
    const err = {};
    // Name validation
    if (!contactData.fullName.trim()) {
      err.fullName = "Name is required";
    } else if (contactData.fullName.length < 3) {
      err.fullName = "Name should be at least 3 characters";
    } else if (!/^[A-Za-z ]+$/.test(contactData.fullName)) {
      err.fullName = "Name should contain only letters";
      return;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(contactData.email)) {
      err.email = "Enter a valid email";
      isvalid = false;
      return;
    }

    // Subject validation

    if (contactData.sub.length < 15) {
      err.sub = "subject should be at least 15 Characters";
      isvalid = false;
      return;
    }

    // Message validation

    if (contactData.message.length < 10) {
      err.message = "Tell us in brief (at least 10 characters)";
      isvalid = false;
      return;
    }

    setError(err);
    return isvalid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validate()) {
      setIsLoading(false);
      toast.error(" Some Field missing ");
      return;
    }
    try {
      const res = await api.post("/public/new-Contact", contactData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }

    if (!validate()) {
      toast.error("Please Check all Fields");
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      console.log(contactData);
      setContactData({
        fullName: "",
        email: "",
        sub: "",
        message: "",
      });
      setIsLoading(false);
      toast.success("We will contact you via mail");
    }, 2000);
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <img src={img} alt="Contact" className="w-full h-full object-cover" />

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
                <p className="text-gray-600 ">
                  Have a question or want to book a table? Fill out the form and
                  our team will get back to you shortly.
                </p>
                <p className="text-gray-600 ">
                  Feel free to reach out to us for any queries, feedback, or
                  table bookings. Our team will respond promptly.
                </p>
                <p className="text-gray-600 ">
                  Questions, suggestions, or planning a visit? Get in touch with
                  us today and let us take care of the rest. We’re just a
                  message away!
                </p>
              </div>
              <h1 className="mt-5 text-gray-700 flex items-center gap-2 text-xl font-bold">
                Thank You <LiaPrayingHandsSolid className="text-2xl" />{" "}
                <span className="w-25 bg-black  p-1"></span>
              </h1>
            </div>

            {/* RIGHT FORM */}
            <form onSubmit={handleSubmit} onReset={handleClearForm}>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    name="fullName"
                    type="text"
                    disabled={isloading}
                    value={contactData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed"
                  />
                  {error.fullName && (
                    <p className=" text-red-500 text-sm">{error.fullName}</p>
                  )}
                  <input
                    name="email"
                    type="email"
                    disabled={isloading}
                    value={contactData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed"
                  />
                  {error.email && (
                    <p className="text-center text-red-500 text-sm">
                      {error.email}
                    </p>
                  )}
                </div>
                <input
                  type="text"
                  name="sub"
                  disabled={isloading}
                  value={contactData.sub}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed"
                />
                {error.sub && (
                  <p className="text-center text-red-500 text-sm">
                    {error.sub}
                  </p>
                )}

                <textarea
                  name="message"
                  disabled={isloading}
                  value={contactData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:cursor-not-allowed"
                />
                {error.message && (
                  <p className="text-center text-red-500 text-sm">
                    {error.message}
                  </p>
                )}
                <div className="flex gap-2">
                  <button
                    type="reset"
                    className="w-1/4 bg-red-400 text-white hover:text-gray-600 cursor-pointer py-3 rounded-lg font-semibold hover:bg-red-900 transition duration-300 disabled:cursor-not-allowed disabled:bg-gray-500"
                  >
                    Clear
                  </button>

                  <button
                    type="submit"
                    disabled={isloading}
                    className="w-3/4 bg-indigo-700 text-white hover:text-gray-600 cursor-pointer py-3 rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 disabled:cursor-not-allowed disabled:bg-gray-500 "
                  >
                    {isloading ? "Sending..." : "Book Your Table"}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1  sm  md:grid-cols-4 gap-6 mt-14">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
              <IoLocation className="text-indigo-700 text-5xl mx-auto mb-4" />
              <p className="font-medium text-gray-700 text-sm">
                Location: Churhat, Sidhi, Madhya Pradesh
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
              <FaPhoneAlt className="text-indigo-700 text-5xl mx-auto mb-4" />
              <p className="font-medium text-gray-700 text-sm">
                Phone: +91 9516010142
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
              <MdEmail className="text-indigo-700 text-5xl mx-auto mb-4" />
              <p className="font-medium text-gray-700 text-sm break-all">
                Email: officialcravingdelicious112@gmail.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition duration-300">
              <FaGlobeAsia className="text-indigo-700 text-5xl mx-auto mb-4" />
              <p className="font-medium text-gray-700 text-sm">
                Website: www.cravingdeliciousfood.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
