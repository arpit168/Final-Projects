  import React, { useState } from "react";
import { data } from "react-router-dom";
import bg from "../assets/aboutmakeup.jpeg";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import one from "../assets/one.jpeg"


const Login = () => {
  const [loginData, setLogindata] = useState({
    fullName:"",
    email: "",
    password: "",

  });
  console.log(loginData);
  
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogindata((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = ()=>{
    setLogindata ({
       fullName:"",
    email: "",
    password: "",

    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = {};
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <div>
      <div className=" flex justify-center bg-gray-800">
        <div className="bg-gray-200 p-2  flex  border-2 border-gray-4 my-5   ">
          <div data-aos="fade-right" ><img src={one} className="w-75 h-115 rounded-s-2xl me-2 object-cover" alt="" /></div>
          <div data-aos="fade-left" className=" inline-flex  rounded-e-2xl p-5 bg-gray-900">
        
            <div>
              <h2 className="text-4xl text-indigo-400 text-center mb-10 font-bold shadow animate-bounce hover:text-indigo-700">
                <span className="border-b-2 border-gray-200  ">Login</span>
              </h2>
              <div className="mt-5">
                <div >

                </div>
                <form onSubmit={handleSubmit} className="space-y-5 ">
                  <div>
                    <label htmlFor="fullName" className="block text-white mb-1">
                     Name:
                    </label>
                    <div className="flex">
                      <input
                        required
                        type="fullName"
                        name="fullName"
                        id="fullName"
                        value={loginData.fullName}
                        onChange={handleChange} 
                        placeholder="Enter your Name"
                        className="w-full text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2  focus:ring-indigo-500"
                      />
                      <MdDriveFileRenameOutline className="relative right-7 top-3 text-2xl text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-1 ">
                      Email Address:
                    </label>
                    <div className="flex">
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        value={loginData.email}
                        onChange={handleChange}
                        placeholder="Enter your Email"
                        className="w-full text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <MdOutlineMailOutline className="relative right-7 top-3 text-2xl text-white" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-white mb-1"
                    >
                      Password:
                    </label>
                    <div className="flex  ">
                      <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        value={loginData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <MdOutlineLock className="relative right-7 top-3 text-2xl text-white"  />
                    </div>
                    <div className="flex justify-between">
                    <div>
                      <input type="checkbox" />
                      <label htmlFor="remember" className="text-white">Remember me</label>
                    </div>
                    <span className="border-b-2 text-blue-600 border-blue-600">
                      {" "}
                      <a href="">forget password?</a>
                    </span>
                  </div>
                  </div>
                  

                  <button
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    type="submit"
                    className="w-75 bg-indigo-950 hover:bg-indigo-800 text-white py-3 rounded-lg font-semibold transition "
                  >
                    {isLoading ? "Loading" : "Login"}
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
