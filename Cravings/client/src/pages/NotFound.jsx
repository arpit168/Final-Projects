import React from "react";
import Lottie from "lottie-react";
import Err from "../assets/animation/err404.json";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`z-99 absolute top-0 left-0 bg-gray-100/50  w-full h-dvh flex justify-center items-center overflow-hidden`}
       
      >
        <Lottie animationData={Err} loop className="w-full" />
      </div>
      <button
        onClick={() => navigate("/")}
        className="bg-cyan-500 flex gap-2 items-center text-white  px-6 py-2 rounded-lg hover:bg-cyan-600 absolute z-100  left-[10%]"
      >
       <FaArrowLeft/> Back to Home
      </button>
    </>
  );
}

export default NotFound;