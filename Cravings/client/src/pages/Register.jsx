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
      Error.role = "Please choose any one ";
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
    <>
      <div className="min-h-screen bg-base-200 py-6 px-4 overflow-x-scroll scrollbar-hide">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-base-content mb-2">
              Registration
            </h1>
            <p className="text-muted">
              you are 1 step away to stop your Cravings
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-base-100 rounded-xl shadow-xl overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              <div className="mb-10 space-y-4">
                {/* Role */}
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base-content font-medium">
                      I am
                    </label>

                    {["manager", "partner", "customer"].map((role) => (
                      <div key={role} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="role"
                          value={role}
                          checked={formData.role === role}
                          onChange={handleChange}
                        />
                        <label className="capitalize">{role}</label>
                      </div>
                    ))}
                  </div>

                  {validationError.role && (
                    <span className="text-xs text-error">
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
                    <label className="text-base-content">
                      {field.label}
                    </label>
                    <input
                      required
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      disabled={isLoading}
                      className="w-full px-4 py-3 border-2 border-base-300 rounded-lg focus:outline-none focus:border-primary transition disabled:cursor-not-allowed disabled:bg-base-200"
                    />
                    {validationError[field.name] && (
                      <span className="text-xs text-error float-end">
                        {validationError[field.name]}
                      </span>
                    )}
                  </div>
                ))}

                {/* Buttons */}
                <div className="flex gap-4 pt-8 border-t border-base-300">
                  <button
                    type="reset"
                    disabled={isLoading}
                    className="flex-1 bg-secondary text-secondary-content font-bold py-4 rounded-lg hover:bg-secondary-hover transition disabled:cursor-not-allowed"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-primary text-primary-content font-bold py-4 rounded-lg hover:bg-primary-hover transition disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </div>

                <div className="flex justify-center gap-1 mt-3">
                  <p className="text-muted">I have an account.</p>
                  <Link
                    to="/login"
                    className="text-primary hover:text-primary-hover font-medium"
                  >
                    Login here!
                  </Link>
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
