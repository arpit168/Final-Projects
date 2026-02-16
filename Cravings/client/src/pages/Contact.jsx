import React, { useState } from "react";
import toast from "react-hot-toast";
import img from "../assets/fastfood.jpg";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import api from "../config/Api";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    sub: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      sub: "",
      message: "",
    });
    setError({});
  };

  const validate = () => {
    const err = {};

    if (!contactData.fullName.trim()) {
      err.fullName = "Name is required";
    } else if (contactData.fullName.length < 3) {
      err.fullName = "Minimum 3 characters required";
    }

    if (!contactData.email.trim()) {
      err.email = "Email is required";
    }

    if (!contactData.sub.trim()) {
      err.sub = "Subject is required";
    }

    if (!contactData.message.trim()) {
      err.message = "Message cannot be empty";
    }

    setError(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors");
      return;
    }

    try {
      setIsLoading(true);
      const res = await api.post("/public/new-Contact", contactData);
      toast.success(res.data.message || "Message sent successfully");
      handleClearForm();
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <div  className="relative w-full h-[75vh]">
        <img src={img} alt="Contact" className="w-full h-full object-cover" />

        <div  className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4">
          <div data-aos="zoom-in-down">
            <h1  className="text-5xl md:text-7xl font-extrabold text-orange-500 tracking-wide drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl">
            Have questions, feedback or bookings? We’re always ready to serve
            you with love and delicious food.
          </p>
          </div>
        </div>
      </div>

      {/* ---------------- MAIN SECTION ---------------- */}
      <div  className="bg-[#111111] py-20 px-4">
        <div  className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-[#1c1c1c] rounded-3xl shadow-2xl p-10 border border-orange-500/20">
          {/* LEFT SIDE */}
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="md:border-r md:border-orange-500/30 md:pr-10"
          >
            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're planning a dinner, sharing feedback, or just saying
              hello — our team is here to assist you anytime.
            </p>

            <div className="flex items-center gap-2 text-orange-400 font-semibold text-lg">
              Thank You
              <LiaPrayingHandsSolid className="text-2xl" />
            </div>
          </div>

          {/* FORM */}
          <form
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="fullName"
                  value={contactData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-[#2a2a2a] text-white border border-gray-600 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
                {error.fullName && (
                  <p className="text-red-400 text-sm mt-1">{error.fullName}</p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-[#2a2a2a] text-white border border-gray-600 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none"
                />
                {error.email && (
                  <p className="text-red-400 text-sm mt-1">{error.email}</p>
                )}
              </div>
            </div>

            <div>
              <input
                name="sub"
                value={contactData.sub}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-[#2a2a2a] text-white border border-gray-600 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              {error.sub && (
                <p className="text-red-400 text-sm mt-1">{error.sub}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={contactData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className="w-full bg-[#2a2a2a] text-white border border-gray-600 rounded-xl p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              {error.message && (
                <p className="text-red-400 text-sm mt-1">{error.message}</p>
              )}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleClearForm}
                className="w-1/3 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-semibold transition"
              >
                Clear
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="w-2/3 bg-orange-500 hover:bg-orange-600 text-black py-3 rounded-xl font-bold transition shadow-lg"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* ---------------- INFO CARDS ---------------- */}
        <div className="grid md:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
          {[IoLocation, FaPhoneAlt, MdEmail, FaGlobeAsia].map((Icon, i) => (
            <div data-aos="fade-up"
              key={i}
              className="bg-[#1c1c1c] border border-orange-500/20 p-8 rounded-3xl text-center hover:-translate-y-2 hover:shadow-orange-500/20 hover:shadow-xl transition duration-300"
            >
              <Icon className="text-orange-500 text-5xl mx-auto mb-6" />

              <p className="text-gray-300 text-sm leading-relaxed">
                {i === 0 && "Location: Churhat, Sidhi, MP"}
                {i === 1 && "Phone: +91 9516010142"}
                {i === 2 && "Email: officialcravingdelicious112@gmail.com"}
                {i === 3 && "Website: www.cravingdeliciousfood.in"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
