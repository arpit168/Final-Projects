import React from "react";
import pic from "../assets/aboutmakeup.jpeg"

const About = () => {
  return (
    <section className="bg-gray-400 py-16">
       <h1
          className="text-center text-4xl pt-5 text-gray-200 mb-10 font-bold animate-bounce"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <span className="border-b-2 border-gray-400 ">
            Welcome to  <span className="text-red-700">About</span>
          </span>
        </h1>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        
        <div data-aos="fade-down-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10">
            <span className=" animate-pulse">About </span><span className="text-indigo-500">Makeup.com</span>
          </h2>

          <p className="text-gray-950 text-lg mb-6">
            Welcome to <span className="font-semibold">Makeup.com</span>, your
            trusted destination for premium beauty and cosmetic products.
            We believe makeup is not just about beauty — it's about confidence,
            self-expression, and empowerment.
          </p>

          <p className="text-gray-950 text-lg  mb-8">
            From everyday essentials to luxury glam, we carefully curate
            products from top brands to ensure quality, authenticity, and
            affordability — all in one place.
          </p>

          <div className="flex gap-4">
            <button className="bg-black hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
             <a href=".product"> Explore Products</a>
            </button>
            <button className="border-2 border-black text-black  hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-full font-semibold transition duration-500">
              <a href="/product">Learn More</a>
            </button>
          </div>
        </div>

       
        <div className="relative"  data-aos="fade-down-right">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <img
              src={pic}
              alt="Makeup Products"
              className="rounded-2xl mb-6"
            />

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-2xl font-bold text-pink-500">10K+</h3>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pink-500">500+</h3>
                <p className="text-gray-500 text-sm">Products</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pink-500">100%</h3>
                <p className="text-gray-500 text-sm">Authentic</p>
              </div>
            </div>
          </div>

          
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-300 rounded-full opacity-30"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
