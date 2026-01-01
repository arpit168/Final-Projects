import React from "react";
import Hero from "../component/Hero";
import bg from "../assets/sundari.avif"

const Home = () => {
  return (
    <>
      <div className=" mb-30">
        <img src={bg} className=" absolute" alt="" />
        <div className="w-200 relative p-10  ">
          <div className="ms-25">
            <h1 className="text-5xl my-10 font-bold font-serif">Your beauty is Our Responsibility and Now digitally secured...</h1>
            <div>
              <p className="text-xl my-10">Store, access and share your medical records securly with your beauty life.  </p>
              <ol className="list-disc list-inside text-xl font-xl">
                <li>Access your products anytime, anywhere.</li>
                <li>Share files securly with your Makeup artist. </li>
                <li>Track your beauty health history in one place. </li>
                <li>purchese your cosmatic products instantly withing few times.</li>
              </ol>
            </div>
          
             <button className=" my-10 px-8 border-2 py-4 rounded-full hover:bg-indigo-600 bg-black text-pink-100 shadow-2xln transition duration-700 "><a href="/products">Get Started</a></button>
            <button className="border-2 border-black text-black  hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full font-semibold transition duration-500">
              Learn More
            </button> 
         
          </div>
          
          <div> 

          </div>
        </div>
      </div>
      <Hero/>
     
    </>
  );
};

export default Home;
