import React, { useState } from "react";
import { BsArrowClockwise } from "react-icons/bs";
import api from "../../config/Api";
import toast from "react-hot-toast";

const ForgetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    cfNewPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); 
  // 1 = Email
  // 2 = OTP
  // 3 = New Password

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // STEP 1: Send OTP
      if (step === 1) {
        if (!formData.email) {
          toast.error("Email is required");
          return;
        }

        const res = await api.post("/auth/genOtp", {
          email: formData.email,
        });

        toast.success(res.data.message);
        setStep(2);
      }

      // STEP 2: Verify OTP
      else if (step === 2) {
        if (!formData.otp) {
          toast.error("OTP is required");
          return;
        }

        const res = await api.post("/auth/verifyOtp", {
          email: formData.email,
          otp: formData.otp,
        });

        toast.success(res.data.message);
        setStep(3);
      }

      // STEP 3: Update Password
      else if (step === 3) {
        if (!formData.newPassword || !formData.cfNewPassword) {
          toast.error("Both password fields are required");
          return;
        }

        if (formData.newPassword !== formData.cfNewPassword) {
          toast.error("Passwords do not match");
          return;
        }

        const res = await api.post("/auth/forgetPassword", {
          email: formData.email,
          newPassword: formData.newPassword,
        });

        toast.success(res.data.message);
        onClose();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-background/70 flex justify-center items-center">
      <div className="bg-background w-full max-w-lg rounded-xl shadow-lg border border-buttons">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-buttons">
          <h2 className="text-xl font-semibold text-text">
            Reset Password
          </h2>
          <button
            onClick={onClose}
            className="text-text hover:text-primary text-xl"
          >
            ⊗
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">

          {/* Step 1 - Email */}
          {step === 1 && (
            <div>
              <label className="block text-sm text-text mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your registered email"
                className="w-full p-2 rounded-md border border-buttons bg-background text-text focus:outline-none focus:border-primary"
              />
            </div>
          )}

          {/* Step 2 - OTP */}
          {step === 2 && (
            <div>
              <label className="block text-sm text-text mb-1">
                Enter OTP
              </label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleInputChange}
                placeholder="Enter OTP"
                className="w-full p-2 rounded-md border border-buttons bg-background text-text focus:outline-none focus:border-primary"
              />
            </div>
          )}

          {/* Step 3 - Passwords */}
          {step === 3 && (
            <>
              <div>
                <label className="block text-sm text-text mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Enter new password"
                  className="w-full p-2 rounded-md border border-buttons bg-background text-text focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm text-text mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="cfNewPassword"
                  value={formData.cfNewPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm new password"
                  className="w-full p-2 rounded-md border border-buttons bg-background text-text focus:outline-none focus:border-primary"
                />
              </div>
            </>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-primary hover:bg-primary-hover text-text rounded-md transition disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin">
                  <BsArrowClockwise />
                </span>
                Processing...
              </>
            ) : step === 1 ? (
              "Send OTP"
            ) : step === 2 ? (
              "Verify OTP"
            ) : (
              "Update Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordModal;
