import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api"

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    lastQualification: "",
    percentageGrade: "",
    preferredCourse: "",
    batchTiming: "",
    residentialAddress: "",
    city: "",
    pinCode: "",
    guardianName: "",
    guardianContact: "",
    hearAboutUs: "",
    specialRequirements: "",
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
      city: "",
      pinCode: "",
      hearAboutUs: "",
      specialRequirements: "",
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

    // Date Of Birth
    const today = new Date();
    const age =
      today.toISOString().split("-")[0] - formData.dateOfBirth.split("-")[0];
    if (age < 15) {
      Error.dateOfBirth = "You must be at least 15 years old!";
    }

    // Guardian Full name
    if (formData.guardianName.length < 3) {
      Error.guardianName = "Name should be More Than 3 Characters!";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.guardianName)) {
        Error.guardianName = "Only Contain A-Z , a-z and space!";
      }
    }

    // Guardian Contact
    if (!/^[6-9]\d{9}$/.test(formData.guardianContact)) {
      Error.guardianContact = "Only Indian Mobile Number allowed!";
    }

    setValidationError(Error);
    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
      console.log(formData);
      toast.success("Regisrtation Successfull");
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
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-6 px-4 overflow-x-scroll scrollbar-hide">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
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
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-indigo-500">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
