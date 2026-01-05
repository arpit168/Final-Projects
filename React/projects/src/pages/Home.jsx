import React from "react";
import curr from "../assets/convertor.jpg";
import { Link } from "react-router-dom";
import register from "../assets/register.jpeg";

const Home = () => {
  return (
    <>
      <div className="p-4 sm:p-6 md:p-10">
        {/* Heading */}
        <div className="mb-5">
          <span className="text-xl sm:text-2xl md:text-3xl sm:ms-10 md:ms-20 font-bold border-b-2">
            Index-
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          
          {/* Currency Card */}
          <div className="w-full max-w-sm mx-auto border p-3 bg-gray-300 rounded shadow-lg">
            <img
              src={curr}
              alt=""
              className="w-full h-48 sm:h-56 object-cover rounded"
            />
            <p className="text-lg sm:text-xl md:text-2xl text-red-600 font-semibold my-3">
              Currency-Convert
            </p>
            <button className="bg-yellow-300 text-lg sm:text-xl w-full px-4 py-3 rounded hover:bg-yellow-500 hover:text-white transition">
              <Link to="/currency" className="flex justify-center items-center">
                Check Here
              </Link>
            </button>
          </div>

          {/* Registration Card */}
          <div className="w-full max-w-sm mx-auto border p-3 bg-gray-300 rounded shadow-lg">
            <img
              src={register}
              alt=""
              className="w-full h-48 sm:h-56 object-cover rounded"
            />
            <p className="text-lg sm:text-xl md:text-2xl text-red-600 font-semibold my-3">
              Registration-Form
            </p>
            <button className="bg-yellow-300 text-lg sm:text-xl w-full px-4 py-3 rounded hover:bg-yellow-500 hover:text-white transition">
              <Link to="/register" className="flex justify-center items-center">
                Check Here
              </Link>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
