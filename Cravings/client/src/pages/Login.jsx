import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Login = () => {
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
  };
  return (
    <>
      <div className="min-w-screen my-10 ">
        <h1 className="text-center text-4xl font-bold"> Login</h1>
        <div className=" flex justify-center items-center my-5 ">
          <form onSubmit={handleSubmit} onReset={handleClearForm}>
            <div className="bg-gray-200 w-sm p-10  rounded-xl">
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
                    className="border px-2 py-1 rounded focus:bg-gray-300 disabled:cursor-not-allowed disabled:bg-gray-200"
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
                    className="border px-2 py-1 rounded focus:bg-gray-300 disabled:cursor-not-allowed disabled:bg-gray-200"
                  />
                  {validateError.password && (
                    <span className="text-xs text-red-500 float-end">
                      {validateError.password}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex space-x-5 mt-5">
                <button
                  disabled={isLoading}
                  type="reset"
                  className="px-5 py-2 w-25 bg-gray-400 rounded"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-5 py-2 w-75 bg-indigo-700 text-white rounded"
                >
                  {isLoading ? "Login..." : "Login"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
