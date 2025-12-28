import React from "react";
import heropic from "../assets/makeup Hero.jpeg";
import bgpic from "../assets/bgpic.jpeg"

const Hero = () => {
  return (
    <>
      <div className=" "> 
        <div className="">
          <div className=" ">
            <div className="min-h-screen flex items-center justify-center ">
              <div className="grid grid-cols-1 md:grid-cols-6 items-center max-w-6xl    ">
                <div className="md:col-span-3 text-center md:text-left    ">
                  <h1 className="text-7xl font-semibold text-gray-200 mb-5   ">
                    <span className="text-pink-600 animate-pulse "> Wel</span>
                    come To Makeup.com
                  </h1>
                  <p className="text-gray-100">
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

                <div className="md:col-span-3 flex justify-center border-s-2 border-gray-400 relative">
                  <div className="border-3 border-pink-300 bg-white rounded-2xl py-10 px-8">
                    
                    <img
                      src={heropic}
                      alt="Makeup"
                      className="max-w-md w-125 hover:bg-red-500 mb-30 rounded "
                    />
                    <div className="absolute flex gap-10 bottom-10 right-25">
                      <div className="text-center"><span className="text-pink-500 text-2xl font-bold">10K+</span> <p className="text-xl text-gray-500 ">Happy Costumers</p></div>
                      <div className="text-center"><span className="text-pink-500 text-2xl font-bold">500K+</span> <p className="text-xl text-gray-500 ">Products</p></div>
                      <div className="text-center"><span className="text-pink-500 text-2xl font-bold">100% </span><p className="text-xl text-gray-500 ">Authentic</p></div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Hero;

