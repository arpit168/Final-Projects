import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validate = () => {
    let Error = {};

    // fullName
    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters!";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space!";
      }
    }

    // email

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format!";
    }

    // mobile number
    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed!";
    }

    setValidationError(Error);
    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-cyan-50  to-indigo-500 py-6 px-4 overflow-x-scroll scrollbar-hide">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-neutral-700  mb-2">
              Registration
            </h1>
            <p className="text-lg text-gray-600">
              you are 1 step away to stop your Cravings
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              {/* Personal Information */}
              <div className="mb-10">
                <div className=" space-y-4">
                  <div>
                    <label htmlFor="fullName">Name:</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                    />
                    {validationError.fullName && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.fullName}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                    />
                    {validationError.email && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mobileNumber">Phone:</label>
                    <input
                      required
                      type="tel"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      maxLength="10"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                    />
                    {validationError.mobileNumber && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.mobileNumber}
                      </span>
                    )}
                  </div>

                  {/* password */}
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      required
                      type="password"
                      name="password"
                      placeholder="Create Password"
                      minLength="5"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                    />
                    {validationError.password && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.password}
                      </span>
                    )}
                  </div>
                  {/* Confirm Password */}

                  <div>
                    <label htmlFor="confirmPassword">Password:</label>
                    <input
                      required
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Your Password"
                      minLength="5"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                    />
                    {validationError.ConfirmPassword && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.confirmPassword}
                      </span>
                    )}
                  </div>
                </div>
                '{/* Submit Button */}
                <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
                  <button
                    type="submit"
                    className="flex-1 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Submit Registration
                  </button>
                  <button
                    type="reset"
                    className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105"
                  >
                    Clear Form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
