import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../config/Api";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validateError, setValidateError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };
  const validate = () => {
    let Error = {};

    // email
    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format!";
    }
    setValidateError(Error);
    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validate()) {
      setIsLoading(false);
      toast.error(" Some Field missing ");
      return;
    }
    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="">
        <div className="">
          <div className=" py-20  bg-linear-to-br from-cyan-50 to-indigo-500 ">
            <div className="text-center space-y-2 ">
              <h1 className=" text-4xl font-bold text-gray-800"> Login</h1>
              <p className="text-zinc-700 font-semibold">
                Welcome back! Please Login and find your taste.
              </p>
            </div>
            <div className="">
              <div className=" flex  justify-center items-center my-5 ">
                <form onReset={handleClearForm} onSubmit={handleSubmit}>
                  <div className="bg-gray-100  md:w-xl sm:w-auto   p-10  rounded-xl">
                    <div className="grid  space-y-4">
                      <div className="grid">
                        <label htmlFor="email">Email:</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isLoading}
                          placeholder="Enter Email Address Here!"
                          className="border px-2 py-3 rounded focus:bg-gray-300 disabled:cursor-not-allowed disabled:bg-gray-200"
                        />
                        {validateError.email && (
                          <span className="text-xs text-red-500 float-end">
                            {validateError.email}
                          </span>
                        )}
                      </div>
                      <div className="grid">
                        <label htmlFor="password">Password:</label>
                        <input
                          type="password"
                          name="password"
                          minLength="5"
                          value={formData.password}
                          onChange={handleChange}
                          disabled={isLoading}
                          placeholder="Enter a Password "
                          className="border px-2 py-3 rounded focus:bg-gray-300 disabled:cursor-not-allowed disabled:bg-gray-200"
                        />
                        {validateError.password && (
                          <span className="text-xs text-red-500 float-end">
                            {validateError.password}
                          </span>
                        )}
                      </div>
                      <span className="flex justify-between">
                        <span className="flex space-x-2">
                          <input type="checkbox" />
                          <p>Remember me</p>
                        </span>
                        <p className="text-blue-700 hover:text-blue-900 ">
                          <a href="#">Forgot Password!</a>
                        </p>
                      </span>
                    </div>
                    <div className="flex space-x-5 mt-5 justify-center">
                      <button
                        disabled={isLoading}
                        type="reset"
                        className="px-5 py-2 w-1/3 bg-gray-400 rounded"
                      >
                        Clear
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-5 py-2 w-1/2 bg-indigo-700 text-white rounded"
                      >
                        {isLoading ? "Login..." : "Login"}
                      </button>
                    </div>
                    <div className="flex space-x-1 justify-center mt-3">
                      <p>Don't have an account. </p>
                      <Link to={"/register"}>
                        {" "}
                        <p className="hover:text-blue-700 text-blue-400">Register Now!</p>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
