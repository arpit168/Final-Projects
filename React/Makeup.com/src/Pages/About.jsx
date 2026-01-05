import React from "react";
import pic from "../assets/aboutmakeup.jpeg";
import aboutImg from "../assets/aboutmakeup.jpeg";

const About = () => {
  return (
    <section className="">
      
    
      <div className="w-full bg-indigo-50">
        {/* HERO SECTION */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Makeup.com"
            className="w-full h-[50vh] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold font-serif">
              About Makeup.com
            </h1>
          </div>
        </div>

        {/* ABOUT CONTENT */}
        <div className="max-w-7xl mx-auto px-5 py-16">
          <h1
        className="text-center text-4xl pt-5 text-gray-500 mb-10 font-bold animate-bounce"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
          
        
        <span className="border-b-2 border-gray-400 ">
          Welcome to <span className="text-red-700">About</span>
        </span>
      </h1>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-indigo-600 mb-5">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-indigo-500">Makeup.com</span>
                is a premium beauty platform dedicated to empowering confidence
                through high-quality makeup products. We believe beauty is not
                about perfection — it’s about expression, confidence, and care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From everyday essentials to bold glam looks, our products are
                designed for all skin tones, all styles, and all personalities.
              </p>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-indigo-500">10K+</h3>
                <p className="text-gray-600 mt-2">Happy Customers</p>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-indigo-500">500+</h3>
                <p className="text-gray-600 mt-2">Beauty Products</p>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-indigo-500">100%</h3>
                <p className="text-gray-600 mt-2">Cruelty Free</p>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-indigo-500">24/7</h3>
                <p className="text-gray-600 mt-2">Customer Support</p>
              </div>
            </div>
          </div>
        </div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-down-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10">
            <span className=" animate-pulse">About </span>
            <span className="text-indigo-500">Makeup.com</span>
          </h2>

          <p className="text-gray-950 text-lg mb-6">
            Welcome to <span className="font-semibold">Makeup.com</span>, your
            trusted destination for premium beauty and cosmetic products. We
            believe makeup is not just about beauty — it's about confidence,
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

        <div className="relative" data-aos="fade-down-right">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <img src={pic} alt="Makeup Products" className="rounded-2xl mb-6" />

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-2xl font-bold text-indigo-500">10K+</h3>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-indigo-500">500+</h3>
                <p className="text-gray-500 text-sm">Products</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-indigo-500">100%</h3>
                <p className="text-gray-500 text-sm">Authentic</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-300 rounded-full opacity-30"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
        </div>
      </div>

        {/* MISSION SECTION */}
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-indigo-600 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our mission is to redefine beauty by offering safe, skin-friendly,
              and trend-forward makeup products that enhance natural beauty
              while promoting self-love and confidence.
            </p>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-center text-2xl md:text-4xl font-bold text-indigo-700 mb-10">
              Why Choose Makeup.com?
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  Carefully crafted products using high-quality ingredients.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Skin Friendly
                </h3>
                <p className="text-gray-600">
                  Dermatologically tested and suitable for all skin types.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  Trusted Brand
                </h3>
                <p className="text-gray-600">
                  Loved by thousands of customers across the country.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black py-12 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-5">
            Discover Beauty That Speaks You
          </h2>
          <a
            href="/product"
            className="inline-block bg-indigo-500 text-white px-8 py-3 rounded-full hover:bg-indigo-600 transition duration-300"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
