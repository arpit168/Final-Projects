import React from "react";
import Hero from "../component/Hero";

const Home = () => {
  return (
    <>
      <div className="bg-gray-700">
        <h1
          className="text-center text-4xl pt-5 text-gray-200 font-bold animate-bounce"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <span className="border-b-2 border-gray-400 ">
            Welcome to  <span className="text-red-700">Home</span>
          </span>
        </h1>
         <Hero/>
      </div>
     
    </>
  );
};

export default Home;
