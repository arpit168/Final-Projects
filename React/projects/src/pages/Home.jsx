import React from "react";
import curr from "../assets/convertor.jpg";
import { Link } from "react-router-dom";
import { FaWpforms } from "react-icons/fa6";
import register from "../assets/register.jpeg"

const Home = () => {
  return (
    <>
      <div className="p-10">
        <div className="mb-5">
          <span className="text-3xl ms-20 font-bold border-b-2 ">Index-</span>
        </div>
        <div>
          <div>
            <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
              <div className="max-w-100  border p-2 bg-gray-300 rounded ">
                <img src={curr} alt="" className="" />
                <p className="text-2xl text-red-600 font-semibold  my-2 ">
                  Currency-Convert
                </p>
                <button className="bg-yellow-300 text-2xl w-full px-4 py-3 rounded hover:bg-yellow-500 hover:text-white">
                  <Link to={"/currency"} className="flex items-center  ">
                   Check Here
                  </Link>
                </button>
              </div>
                <div className="max-w-100  border p-2 bg-gray-300 rounded ">
                <img src={register} alt="" className="w-100 h-70 overflow-hidden " />
                <p className="text-2xl text-red-600 font-semibold  my-2 ">
                 Registration-Form
                </p>
                <button className="bg-yellow-300 text-2xl w-full px-4 py-3 rounded hover:bg-yellow-500 hover:text-white">
                  <Link to={"/register"} className="flex items-center  ">
                   Check Here
                  </Link>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
