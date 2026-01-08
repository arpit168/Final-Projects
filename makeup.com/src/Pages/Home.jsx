import React from "react";
import Hero from "../component/Hero";
import bg from "../assets/sundari.avif";
const Home = () => {
  return (
    <>
      <div className="relative w-full  overflow-hidden">
        {/* Background Image */}
        <img
          src={bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Content Wrapper */}
        <div className="md:w-7xl  md:mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-20">
          <div className="md:max-w-3xl">
            <h1 className="text-xl md:w-auto w-55 sm:text-2xl md:text-5xl font-bold font-serif leading-tight md:my-10">
              Your beauty is Our Responsibility and Now digitally secured...
            </h1>

            <p className="text-sm sm:text-base md:text-2xl md:my-10 md:w-auto w-55">
              Store, access and share your medical records securely with your
              beauty life.
            </p>

            <ol className="list-disc list-inside text-sm sm:text-base md:text-xl space-y-2 md:w-auto w-55">
              <li>Access your products anytime, anywhere.</li>
              <li>Share files securely with your Makeup artist.</li>
              <li>Track your beauty health history in one place.</li>
              <li>Purchase your cosmetic products instantly within few times.</li>
            </ol>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <button className="border-2 py-3 sm:py-4 rounded-2xl md:rounded-full bg-black text-pink-100 hover:bg-indigo-600 shadow-2xl transition duration-700">
                <a href="/products">Get Started</a>
              </button>

              <button className="border-2 py-3 sm:py-4 rounded-2xl md:rounded-full  text-pink-500 hover:bg-gray-900 shadow-2xl transition duration-700">
                <a href="/products">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Hero />
    </>
  );
};

export default Home;
