import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import sign from "../assets/aboutmakeup.jpeg";
import sign1 from "../assets/makeup.jpeg";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearform = () => {
    setSignupData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      cPassword: "",
    });
    console.log(signupData);
  };

  const handleSUbmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = {};
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearform();
  };
  return (
    <>
      <div className="bg-gray-800">
        <div className="py-5   ">
          <h1 className="text-center m-5 text-4xl text-indigo-600 font-bold animate-bounce">
            <span className="border-b-2 hover:text-indigo-800"> Sign Up</span>
          </h1>

          <div className="flex justify-center  ">
            <div className="border-s-5 border-white ">
              <img
                data-aos="fade-down-right"
                src={sign}
                className="w-118 rounded object-cover ps-2  mt-5  "
                alt=""
              />
              <img
                data-aos="fade-down-left"
                src={sign1}
                className="w-118 h-70  ps-2 rounded object-cover mt-2  "
                alt=""
              />
            </div>
            <form action="" onSubmit={handleSUbmit} className="border-e-4 border-white">
              <div
                className="flex justify-center "
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <div className="p-3  rounded-2xl  ">
                  <div className="border-5 p-10  bg-gray-600  ">
                    <div className="mb-5 ">
                      <label htmlFor="fullName" className="block text-white ">
                        Full Name
                      </label>
                      <div className="flex">
                        <input
                          required
                          type="text"
                          name="fullName"
                          id="fullName"
                          value={signupData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <IoMdContact className="relative right-10 text-white top-3 text-2xl" />
                      </div>
                    </div>
                    <div className="mb-5 ">
                      <label htmlFor="email" className="block text-white mb-1">
                        Email:
                      </label>
                      <div className="flex">
                        <input
                          required
                          type="email"
                          name="email"
                          id="email"
                          value={signupData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <MdOutlineMailOutline className="relative right-10 text-white top-3 text-2xl" />
                      </div>
                    </div>
                    <div className="mb-5 ">
                      <label htmlFor="phone" className="block text-white mb-1">
                        Phone:
                      </label>
                      <div className="flex">
                        <input
                          required
                          type="number"
                          name="phone"
                          id="phone"
                          value={signupData.phone}
                          onChange={handleChange}
                          minLength={1}
                          maxLength={10}
                          placeholder="Enter your phone"
                          className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <MdLocalPhone className="relative right-10 text-white top-3 text-2xl" />
                      </div>
                    </div>
                    <div className="mb-5 ">
                      <label
                        htmlFor="password"
                        className="block text-white mb-1"
                      >
                        Password:
                      </label>
                      <div className="flex">
                        <input
                          required
                          type="password"
                          name="password"
                          id="password"
                          value={signupData.password}
                          onChange={handleChange}
                          placeholder="Enter your password"
                          className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <IoLockClosedOutline className="relative right-10 text-white top-3 text-2xl" />
                      </div>
                    </div>
                    <div className="mb-5 ">
                      <label
                        htmlFor="cPassword"
                        className="block text-white mb-1"
                      >
                        Confirm your password:
                      </label>
                      <div className="flex">
                        <input
                          required
                          type="password"
                          name="cPassword"
                          id="cPassword"
                          value={signupData.cPassword}
                          onChange={handleChange}
                          placeholder="Confirm your password"
                          className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <IoLockClosedOutline className="relative right-10 text-white top-3 text-2xl" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-100 bg-indigo-950 animate-bounce hover:animate-none hover:text-red-500 hover:bg-indigo-800 text-white py-3 mt-5 rounded-lg font-semibold transition "
                    >
                      {isLoading ? "Loading" : "Sign Up"}
                    </button>
                  </div>
                  <div className="absolute -bottom-16 right-95 w-24 h-24 bg-pink-800 rounded-full opacity-30"></div>
                  <div className="absolute bottom-95 left-86 w-32 h-32 bg-red-300 rounded-full opacity-30"></div>
                </div>
                <div className="absolute top-36 left-95 w-24 h-24 bg-pink-800 rounded-full opacity-30"></div>
                <div className="absolute  top-95 right-86 w-32 h-32 bg-red-300 rounded-full opacity-30"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
