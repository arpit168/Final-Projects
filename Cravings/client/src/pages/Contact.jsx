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
    } else if (contactData.fullName.trim().length < 3) {
      err.fullName = "Name must be at least 3 characters";
    }

    if (!contactData.email.trim()) {
      err.email = "Email is required";
    }

    if (!contactData.sub.trim()) {
      err.sub = "Subject is required";
    }

    if (!contactData.message.trim()) {
      err.message = "Message is required";
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
      {/* HERO */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <img src={img} alt="Contact" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-background/80 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-primary/60 tracking-wide">
            Contact Us
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-secondary max-w-xl">
            We’d love to hear from you. Reach out for queries, feedback or table
            bookings.
          </p>
        </div>
      </div>

      {/* MAIN */}
      <div className="bg-background py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-background rounded-2xl shadow-xl p-8">
            {/* LEFT */}
            <div className="md:border-r md:border-secondary md:pr-8">
              <h2 className="text-3xl font-semibold mb-4 text-text">
                Get in Touch
              </h2>

              <div className="space-y-5 text-secondary">
                <p>
                  Have a question or want to book a table? Fill out the form and
                  our team will get back to you shortly.
                </p>
                <p>
                  Feel free to reach out to us for any queries, feedback, or
                  table bookings.
                </p>
                <p>
                  Questions, suggestions, or planning a visit? We’re just a
                  message away!
                </p>
              </div>

              <h1 className="mt-5 text-text flex items-center gap-2 text-xl font-bold">
                Thank You <LiaPrayingHandsSolid className="text-2xl" />
                <span className="w-25 bg-primary p-1"></span>
              </h1>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} onReset={handleClearForm}>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    name="fullName"
                    value={contactData.fullName}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Your Name"
                    className="w-full border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                  />

                  <input
                    name="email"
                    value={contactData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Your Email"
                    className="w-full border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                  />
                </div>

                <input
                  name="sub"
                  value={contactData.sub}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder="Subject"
                  className="w-full border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                />

                <textarea
                  name="message"
                  value={contactData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full border border-secondary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                />

                <div className="flex gap-2">
                  <button
                    type="reset"
                    className="w-1/4 bg-secondary text-secondary-content hover:bg-secondary-hover py-3 rounded-lg font-semibold transition"
                  >
                    Clear
                  </button>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-3/4 bg-primary text-primary-content hover:bg-primary-hover py-3 rounded-lg font-semibold transition"
                  >
                    {isLoading ? "Sending..." : "Book Your Table"}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* INFO */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-14">
            {[IoLocation, FaPhoneAlt, MdEmail, FaGlobeAsia].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="bg-background p-6 rounded-2xl shadow-md text-center hover:-translate-y-2 transition"
                >
                  <Icon className="text-primary text-5xl mx-auto mb-4" />
                  <p className="font-medium text-text text-sm">
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
      </div>
    </>
  );
};

export default Contact;
