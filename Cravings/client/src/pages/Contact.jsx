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

  /* ------------------ Handle Change ------------------ */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* ------------------ Reset ------------------ */
  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      sub: "",
      message: "",
    });
    setError({});
  };

  /* ------------------ Validation ------------------ */
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

  /* ------------------ Submit ------------------ */
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
      <div className="relative w-full h-[70vh]">
        <img src={img} alt="Contact" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-background/80 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-wide">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-secondary max-w-xl">
            Have questions, feedback or bookings? We’re here to help you.
          </p>
        </div>
      </div>

      {/* ---------------- MAIN ---------------- */}
      <div className="bg-background py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-background rounded-3xl shadow-xl p-10">

          {/* LEFT SIDE */}
          <div className="md:border-r md:border-secondary md:pr-10">
            <h2 className="text-3xl font-bold text-text mb-4">
              Get in Touch
            </h2>

            <p className="text-secondary mb-6 leading-relaxed">
              Whether you’re planning a dinner, giving feedback, or just
              saying hello — our team is ready to assist you.
            </p>

            <div className="flex items-center gap-2 text-primary font-semibold text-lg">
              Thank You
              <LiaPrayingHandsSolid className="text-2xl" />
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="fullName"
                  value={contactData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-secondary rounded-xl p-3 focus:ring-2 focus:ring-primary bg-background text-text"
                />
                {error.fullName && (
                  <p className="text-secondary text-sm mt-1">
                    {error.fullName}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border border-secondary rounded-xl p-3 focus:ring-2 focus:ring-primary bg-background text-text"
                />
                {error.email && (
                  <p className="text-secondary text-sm mt-1">
                    {error.email}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <input
                name="sub"
                value={contactData.sub}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-secondary rounded-xl p-3 focus:ring-2 focus:ring-primary bg-background text-text"
              />
              {error.sub && (
                <p className="text-secondary text-sm mt-1">
                  {error.sub}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={contactData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className="w-full border border-secondary rounded-xl p-3 focus:ring-2 focus:ring-primary bg-background text-text"
              />
              {error.message && (
                <p className="text-secondary text-sm mt-1">
                  {error.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleClearForm}
                className="w-1/3 bg-secondary text-secondary-content hover:bg-secondary-hover py-3 rounded-xl font-semibold transition"
              >
                Clear
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="w-2/3 bg-primary text-primary-content hover:bg-primary-hover py-3 rounded-xl font-semibold transition"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* ---------------- INFO CARDS ---------------- */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          {[IoLocation, FaPhoneAlt, MdEmail, FaGlobeAsia].map(
            (Icon, i) => (
              <div
                key={i}
                className="bg-background p-6 rounded-3xl shadow-md text-center hover:-translate-y-2 transition"
              >
                <Icon className="text-primary text-5xl mx-auto mb-4" />
                <p className="text-text text-sm">
                  {i === 0 && "Location: Churhat, Sidhi, MP"}
                  {i === 1 && "Phone: +91 9516010142"}
                  {i === 2 &&
                    "Email: officialcravingdelicious112@gmail.com"}
                  {i === 3 && "Website: www.cravingdeliciousfood.in"}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
