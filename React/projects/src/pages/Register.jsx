import React, { useState } from "react";
import toast from "react-hot-toast";

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
    const age = today.toISOString().split("-")[0]-formData.dateOfBirth.split("-")[0];
    if(age<15) {
      Error.dateOfBirth="You must be at least 15 years old!"
    }

    // lastQualification
    if (!formData.lastQualification) {
      Error.lastQualification = "Last Qualification is required! ";
    }

    // Percentage or Grade
    if (!formData.percentageGrade) {
      Error.percentageGrade = "required!";
    }

    // preferred course
    if (!formData.preferredCourse) {
      Error.preferredCourse = "Please select course!";
    }
    // Batch Timing
    if (!formData.batchTiming) {
      Error.batchTiming = "Please select timing for batch";
    }

    // Address
    if (!formData.residentialAddress) {
      Error.residentialAddress = "Please fill your resenditial address!";
    }

    // city
    if (!formData.city) {
      Error.city = "Please fill your City Name!";
    }

    // Pin code
    if (!formData.pinCode) {
      Error.pinCode = "Please fill your City's Postal Code!";
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

    // Hear about us
    if (!formData.hearAboutUs) {
      Error.hearAboutUs="Please Select where you hear us!"
    } 
    // Special Requirement
    
   
    

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
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Student Registration
            </h1>
            <p className="text-lg text-gray-600">
              Join our academy and start your learning journey
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
                  <div>
                    <label htmlFor="dateOfBirth">Bate of birth:</label>
                    <input
                    required
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                    />
                    {validationError.dateOfBirth && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.dateOfBirth}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Academic Details */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-indigo-500">
                  Academic Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="lastQualification">Last Qualification:</label>
                    <select
                      name="lastQualification"
                      value={formData.lastQualification}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2  border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition bg-white"
                    >
                      <option value="">Select Qualification</option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Postgraduate">Postgraduate</option>
                    </select>
                    {validationError.lastQualification && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.lastQualification}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="Percentage/Grade">Percentage/Grade:</label>
                    <input
                    required
                      type="text"
                      name="percentageGrade"
                      placeholder="Percentage/Grade"
                      value={formData.percentageGrade}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                    />
                    {validationError.percentageGrade && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.percentageGrade}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Course Information */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-indigo-500">
                  Course Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredCourse">Course:</label>
                    <select
                      name="preferredCourse"
                      value={formData.preferredCourse}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition bg-white"
                    >
                      <option value="">Select Course</option>
                      <option value="IIT-JEE">IIT-JEE</option>
                      <option value="NEET">NEET</option>
                      <option value="Banking Exams">Banking Exams</option>
                      <option value="UPSC">UPSC</option>
                    </select>
                    {validationError.preferredCourse && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.preferredCourse}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="batchTimimg">Batch Timing:</label>
                    <select
                      name="batchTiming"
                      value={formData.batchTiming}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition bg-white"
                    >
                      <option value="">Select Batch Timing</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                      <option value="Weekend">Weekend</option>
                    </select>
                    {validationError.batchTiming && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.batchTiming}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-indigo-500">
                  Address
                </h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="residentialAddress">Address:</label>
                    <textarea
                      name="residentialAddress"
                      placeholder="Residential Address"
                      rows="3"
                      value={formData.residentialAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition resize-none"
                    ></textarea>
                    {validationError.residentialAddress && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.residentialAddress}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city">City:</label>
                      <input
                      required
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                      />
                      {validationError.city && (
                        <span className="text-xs text-red-500 float-end">
                          {validationError.city}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="pinCode">Pin Code:</label>
                      <input
                      required
                        type="text"
                        name="pinCode"
                        placeholder="Pin Code"
                        maxLength="6"
                        value={formData.pinCode}
                        onChange={handleChange}
                        className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                      />
                      {validationError.pinCode && (
                        <span className="text-xs text-red-500 float-end">
                          {validationError.pinCode}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Guardian Details */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-indigo-500">
                  Guardian Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guardianName">Guardian's Name:</label>
                    <input
                    required
                      type="text"
                      name="guardianName"
                      placeholder="Guardian's Full Name"
                      value={formData.guardianName}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                    />
                    {validationError.guardianName && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.city}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="guardianContact">Guardian's Contact</label>
                    <input
                    required
                      type="tel"
                      name="guardianContact"
                      placeholder="Guardian's Contact Number"
                      maxLength="10"
                      value={formData.guardianContact}
                      onChange={handleChange}
                      className="w-full h-fit px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                    />
                    {validationError.guardianContact && (
                      <span className="text-xs text-red-500 float-end">
                        {validationError.guardianContact}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-indigo-500">
                  Additional Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <select
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition bg-white"
                    >
                      <option value="">How did you hear about us?</option>
                      <option value="Friends">Friends</option>
                      <option value="Online Ad">Online Ad</option>
                      <option value="Newspaper">Newspaper</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Other">Other</option>
                    </select>
                    {validationError.hearAboutUs && (
                      <span className="text-xs text-red-500 float-end ">
                        {validationError.hearAboutUs}
                      </span>
                    )}
                  </div>
                  <div>
                    <textarea
                      name="specialRequirements"
                      placeholder="Special Requirements (optional)"
                      rows="3"
                      value={formData.specialRequirements}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition resize-none"
                    ></textarea>
                    
                  </div>
                </div>
              </div>

              {/* Submit Button */}
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
            </form>
          </div>

          {/* Footer Note */}
          <p className="text-center text-gray-600 mt-8 text-sm">
            All fields marked are mandatory. We respect your privacy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
