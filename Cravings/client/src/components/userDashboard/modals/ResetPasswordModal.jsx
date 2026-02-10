import React, { useState } from "react";
import api from "../../../config/Api";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const ResetPasswordModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    cfNewPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.patch("/user/resetPassword", formData);
      toast.success(res.data.message);
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="fixed inset-0 bg-background/70 flex justify-center items-center z-100">
      <div className="bg-accent w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">

        {/* Header */}
        <div className="flex justify-between px-6 py-4 border-b border-secondary items-center sticky top-0 bg-background">
          <h2 className="text-xl font-semibold text-text">
            Reset Password
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-text/70 border border-secondary hover:bg-secondary hover:text-text rounded-bl-2xl rounded-tr-2xl text-3xl transition"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          <div className="space-y-4">

            {/* Old Password */}
            <InputField
              label="Old Password *"
              name="oldPassword"
              type="password"
              value={formData.oldPassword}
              onChange={handleInputChange}
              error={errors.oldPassword}
              placeholder="Enter your old password"
            />

            {/* New Password */}
            <InputField
              label="New Password *"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleInputChange}
              error={errors.newPassword}
              placeholder="Enter your new password"
            />

            {/* Confirm Password */}
            <InputField
              label="Confirm New Password *"
              name="cfNewPassword"
              type="password"
              value={formData.cfNewPassword}
              onChange={handleInputChange}
              error={errors.cfNewPassword}
              placeholder="Confirm new password"
            />

          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t border-secondary">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-6 py-2 bg-secondary text-text rounded-md hover:bg-secondary-hover transition disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary text-buttons rounded-md hover:bg-primary-hover transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin">⟳</span> Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

/* 🔹 Reusable input (UI unchanged) */
const InputField = ({
  label,
  error,
  ...props
}) => (
  <div>
    <label className="block text-sm font-medium text-text mb-1">
      {label}
    </label>
    <input
      {...props}
      className={`w-full border rounded-md shadow-sm p-2 bg-background text-text
        focus:outline-none focus:ring-2 focus:ring-primary
        ${error ? "border-primary" : "border-secondary"}
      `}
    />
    {error && (
      <p className="text-primary text-xs mt-1">
        {error}
      </p>
    )}
  </div>
);

export default ResetPasswordModal;
