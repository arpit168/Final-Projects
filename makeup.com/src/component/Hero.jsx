import React from "react";
import heropic from "../assets/makeupHero.jpeg";
import bgpic from "../assets/aboutmakeup.jpeg";

const Hero = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Background */}
        <img
          src={bgpic}
          className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
          alt=""
        />

        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center max-w-7xl w-full">

            {/* LEFT CONTENT */}
            <div
              className="md:col-span-3 text-center md:text-left bg-gray-600 rounded-2xl p-6 sm:p-8"
              data-aos="zoom-out-right"
            >
              <h1
                className="text-3xl sm:text-4xl md:text-7xl font-semibold text-gray-200 mb-5"
                data-aos="fade-down"
              >
                <span className="text-pink-600 animate-pulse">
                  <span className="text-4xl sm:text-5xl md:text-8xl">W</span>el
                </span>
                come To Makeup.com
              </h1>

              <p className="text-gray-100 text-sm sm:text-base">
                <span className="text-pink-600 font-semibold border-t-2">
                  Glowify Beauty brings premium
                </span>
                makeup essentials designed to enhance your natural beauty.
                From flawless foundations to bold lip shades, our products
                are cruelty-free, skin-friendly,
                <span className="text-pink-600 border-b-2">
                  and made for every skin tone
                </span>
                .
              </p>

              <p className="text-gray-100 mt-4 text-sm sm:text-base">
                <span className="text-pink-600 font-semibold border-t-2">
                  Glowify Beauty brings premium
                </span>
                makeup essentials designed to enhance your natural beauty.
                From flawless foundations to bold lip shades, our products
                are cruelty-free, skin-friendly,
                <span className="text-pink-600 border-b-2">
                  and made for every skin tone
                </span>
                .
              </p>

              <p className="text-gray-100 mt-4 text-sm sm:text-base">
                <span className="text-pink-600 font-semibold border-t-2">
                  Glowify Beauty brings premium
                </span>
                makeup essentials designed to enhance your natural beauty.
                From flawless foundations to bold lip shades, our products
                are cruelty-free, skin-friendly,
                <span className="text-pink-600 border-b-2">
                  and made for every skin tone
                </span>
                .
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="md:col-span-3 flex justify-center relative"
              data-aos="zoom-out-left"
            >
              <div className="bg-white rounded-2xl py-8 px-6 sm:px-8 shadow-xl">
                <img
                  src={heropic}
                  alt="Makeup"
                  className="md:w-175 w-[320px] rounded mb-16"

                />

                {/* STATS */}
                <div className="absolute flex gap-4 sm:gap-8 bottom-4 md:right-33">
                  <div className="text-center">
                    <span className="text-pink-500 text-xl sm:text-2xl font-bold">
                      10K+
                    </span>
                    <p className="text-sm sm:text-xl text-gray-500">
                      Happy Customers
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-pink-500 text-xl sm:text-2xl font-bold">
                      500K+
                    </span>
                    <p className="text-sm sm:text-xl text-gray-500">
                      Products
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-pink-500 text-xl sm:text-2xl font-bold">
                      100%
                    </span>
                    <p className="text-sm sm:text-xl text-gray-500">
                      Authentic
                    </p>
                  </div>
                 </div>
              </div>
            </div>

            {/* DECORATIVE CIRCLES */}
            <div className="hidden md:block absolute top-60 right-35 w-24 h-24 bg-pink-300 rounded-full opacity-30"></div>
            <div className="hidden md:block absolute -bottom-15 right-170 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
            <div className="hidden md:block absolute top-180 left-5 w-24 h-24 bg-pink-300 rounded-full opacity-30"></div>
            <div className="hidden md:block absolute top-80 left-50 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mb-10 text-center relative">
          <button className="border-2 w-48 mt-5 border-black text-black hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full font-semibold transition duration-500">
            <a href="/product">Explore More</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
