import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";
import { RxCross2 } from "react-icons/rx";

const EditProfileModal = ({ onClose }) => {
  const { user, setUser, setIsLogin } = useAuth();

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
    gender: user?.gender || "",
    dob: user?.dob || "",
    address: user?.address || "",
    city: user?.city || "",
    pin: user?.pin || "",
    documents: {
      uidai: user?.documents?.uidai || "",
      pan: user?.documents?.pan || "",
    },
    paymentDetails: {
      upi: user?.paymentDetails?.upi || "",
      account_number: user?.paymentDetails?.account_number || "",
      ifs_Code: user?.paymentDetails?.ifs_Code || "",
    },
    geoLocation: {
      lat: user?.geoLocation?.lat || "",
      lon: user?.geoLocation?.lon || "",
    },
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.mobileNumber.trim())
      newErrors.mobileNumber = "Mobile number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.pin.trim()) newErrors.pin = "PIN code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleNestedChange = (parent, field, value) => {
    setFormData({
      ...formData,
      [parent]: { ...formData[parent], [field]: value },
    });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const fetchLocation = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((res) => {
      setFormData({
        ...formData,
        geoLocation: {
          lat: res.coords.latitude,
          lon: res.coords.longitude,
        },
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await api.put("/user/update", formData);
      if (res.data?.data) {
        sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
        setUser(res.data.data);
        setIsLogin(true);
        setMessage({ type: "success", text: "Profile updated successfully!" });
        setTimeout(onClose, 1500);
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Update failed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-[#1E293B] text-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">

        {/* Header */}
        <div className="flex justify-between px-6 py-4 border-b border-[#334155] items-center sticky top-0 bg-[#1E293B]">
          <h2 className="text-xl font-semibold">Edit Profile</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-blue-400 text-2xl transition"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Message */}
        {message.text && (
          <div
            className={`mx-6 mt-4 p-4 rounded-md border ${
              message.type === "success"
                ? "bg-green-800 text-green-200 border-green-600"
                : "bg-red-800 text-red-200 border-red-600"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {/* Personal Info */}
          <Section title="Personal Information">
            <Input
              label="Full Name *"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />

            <DisabledInput label="Email" value={formData.email} />

            <Input
              label="Mobile Number *"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              error={errors.mobileNumber}
            />
          </Section>

          {/* Address */}
          <Section title="Address">
            <Input
              label="City *"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              error={errors.city}
            />

            <Input
              label="PIN Code *"
              name="pin"
              value={formData.pin}
              onChange={handleInputChange}
              error={errors.pin}
            />

            <button
              onClick={fetchLocation}
              className="border border-[#334155] rounded-md p-2 hover:bg-[#334155] transition"
            >
              Get Live Location
            </button>
          </Section>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t border-[#334155]">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-[#334155] text-white rounded-md hover:bg-[#475569] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

/* 🔹 Small reusable UI helpers */

const Section = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#334155]">
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </div>
);

const Input = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      {...props}
      className={`w-full border rounded-md p-2 bg-[#1E293B] text-white focus:ring-2 focus:ring-blue-500
        ${error ? "border-red-500" : "border-[#334155]"}
      `}
    />
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const DisabledInput = ({ label, value }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      disabled
      value={value}
      className="w-full border border-[#334155] rounded-md p-2 bg-[#475569] text-white/70"
    />
  </div>
);

export default EditProfileModal;
