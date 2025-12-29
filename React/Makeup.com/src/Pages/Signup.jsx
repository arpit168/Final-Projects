import React from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoLockClosedOutline } from "react-icons/io5";



const Signup = () => {
  return (
    <>
      <div className="bg-gray-800">
        <div className="p-5 ">
          <h1 className="text-center m-5 text-4xl text-red-400 font-bold">Sign Up</h1>
          <div className="flex justify-center ">
            
            <div className="border-5 p-20 bg-gray-600 w-150 ">
              <div className="mb-5 ">
                <label htmlFor="fullName" className="block text-white ">
                  Full Name
                </label>
                <div className="flex">
                  <input
                  required
                  type="text"
                  name="fullName"
                  id="fullName"
                  value=""
                  onChange=""
                  placeholder="Enter your name"
                  className="w-full text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <MdDriveFileRenameOutline className="relative right-10 text-white top-3 text-2xl"/>
                </div>
              </div>
              <div className="mb-5 ">
                <label htmlFor="email" className="block text-white mb-1">
                  Email:
                </label>
               <div className="flex">
                 <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value=""
                  onChange=""
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <MdOutlineMailOutline className="relative right-10 text-white top-3 text-2xl"/>
               </div>
              </div>
              <div className="mb-5 ">
                <label htmlFor="phone" className="block text-white mb-1">
                  Phone:
                </label>
                <input
                  required
                  type="number"
                  name="phone"
                  id="phone"
                  value=""
                  onChange=""
                  placeholder="Enter your phone"
                  className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-5 ">
                <label htmlFor="password" className="block text-white mb-1">
                  Password:
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  value=""
                  onChange=""
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-5 ">
                <label htmlFor="cpassword" className="block text-white mb-1">
                  Confirm your password:
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  value=""
                  onChange=""
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
