import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
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
      role: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters!";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      Error.fullName = "Only Contain A-Z , a-z and space!";
    }
    // ----------------email validation------------------------

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format!";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed!";
    }

    if (!formData.role) {
      Error.role = "Please choose any one";
    }

    setValidationError(Error);
    return Object.keys(Error).length === 0;
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
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-10 px-4 text-gray-200">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Registration
          </h1>
          <p className="text-gray-400">
            You are one step away from stopping your cravings
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#1e293b] rounded-xl shadow-lg border border-gray-700">
          <form
            onSubmit={handleSubmit}
            onReset={handleClearForm}
            className="p-8 space-y-6"
          >

            {/* Role */}
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-300">
                I am
              </label>

              <div className="flex gap-6">
                {["manager", "partner", "customer"].map((role) => (
                  <label
                    key={role}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={handleChange}
                      className="accent-indigo-500"
                    />
                    <span className="capitalize text-gray-300">
                      {role}
                    </span>
                  </label>
                ))}
              </div>

              {validationError.role && (
                <span className="text-xs text-red-400 mt-1 block">
                  {validationError.role}
                </span>
              )}
            </div>

            {/* Inputs */}
            {[
              { label: "Name", name: "fullName", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone", name: "mobileNumber", type: "tel" },
              { label: "Password", name: "password", type: "password" },
              {
                label: "Confirm Password",
                name: "confirmPassword",
                type: "password",
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {field.label}
                </label>
                <input
                  required
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-lg bg-[#111827] border border-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition disabled:opacity-60"
                />
                {validationError[field.name] && (
                  <span className="text-xs text-red-400 float-end">
                    {validationError[field.name]}
                  </span>
                )}
              </div>
            ))}

            {/* Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-700">
              <button
                type="reset"
                disabled={isLoading}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60 "
              >
                Clear Form
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg  disabled:opacity-60 hover:translate-x-0.5  hover:-translate-y-0.5 transistion duration-200 "
              >
                {isLoading ? "Submitting..." : "Register"}
              </button>
            </div>

            <div className="flex justify-center gap-1 mt-4 text-sm">
              <p className="text-gray-400">I have an account.</p>
              <Link
                to="/login"
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Login here!
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
