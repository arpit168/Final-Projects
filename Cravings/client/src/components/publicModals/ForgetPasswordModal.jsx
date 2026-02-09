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
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  if (formData.newPassword && formData.cfNewPassword) {
    if (formData.newPassword !== formData.cfNewPassword) {
      toast.error("New password and confirm New password must be same");
      return;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let res;
      if (isOtpSent) {
        if (isOtpVerified) {
          res = await api.post("/auth/forgetPassword", formData);
          toast.success(res.data.message);
          onClose();
        } else {
          res = await api.post("/auth/verifyOtp", formData);
          toast.success(res.data.message);
          setIsOtpVerified(true);
        }
      } else {
        res = await api.post("/auth/genOtp", formData);
        toast.success(res.data.message);
        setIsOtpSent(true);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 bg-background/80 flex justify-center items-center">
      <div className="bg-background w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg border border-buttons">
        {/* Header */}
        <div className="flex justify-between px-6 py-4 border-b border-buttons items-center sticky top-0 bg-background">
          <h2 className="text-xl font-semibold text-text">
            Reset Password
          </h2>
          <button
            onClick={onClose}
            className="text-text hover:text-secondary transition text-2xl"
          >
            ⊗
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5">
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-text mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isOtpSent}
                placeholder="Enter your registered email"
                className="w-full border border-buttons rounded-md shadow-sm p-2 bg-background text-text focus:outline-none focus:border-primary disabled:bg-background/60"
              />
            </div>

            {/* OTP */}
            {isOtpSent && (
              <div>
                <label className="block text-sm font-medium text-text mb-1">
                  OTP *
                </label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  disabled={isOtpVerified}
                  placeholder="Enter OTP received in email"
                  className="w-full border border-buttons rounded-md shadow-sm p-2 bg-background text-text focus:outline-none focus:border-primary disabled:bg-background/60"
                />
              </div>
            )}

            {/* Passwords */}
            {isOtpSent && isOtpVerified && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    New Password *
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    placeholder="Enter your new password"
                    className="w-full border border-buttons rounded-md shadow-sm p-2 bg-background text-text focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1">
                    Confirm New Password *
                  </label>
                  <input
                    type="password"
                    name="cfNewPassword"
                    value={formData.cfNewPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm new password"
                    className="w-full border border-buttons rounded-md shadow-sm p-2 bg-background text-text focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Button */}
          <div className="w-full flex justify-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary hover:bg-primary-hover text-text rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin">
                    <BsArrowClockwise />
                  </span>
                  Loading...
                </>
              ) : isOtpSent ? (
                isOtpVerified ? (
                  "Update Password"
                ) : (
                  "Verify OTP"
                )
              ) : (
                "Send OTP"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordModal;
