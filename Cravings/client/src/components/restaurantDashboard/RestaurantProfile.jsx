import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditRestaurantProfileModal from "./modals/EditRestaurantProfileModal";
import UserImage from "../../assets/user.jpeg";
import {
  FaCamera,
  FaMapLocationDot,
  FaWallet,
} from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import api from "../../config/Api";
import toast from "react-hot-toast";
import ResetPasswordModal from "../userDashboard/modals/ResetPasswordModal";

const RestaurantProfile = () => {
  const { user, setUser } = useAuth();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [preview, setPreview] = useState("");

  const changePhoto = async (photo) => {
    const form_Data = new FormData();
    form_Data.append("image", photo);

    try {
      const res = await api.patch("/user/changePhoto", form_Data);
      toast.success(res.data.message);
      setUser(res.data.data);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      setPreview("");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setTimeout(() => changePhoto(file), 800);
    }
  };

  const renderField = (label, value) => (
    <div className="flex justify-between py-3 px-4 border-b border-gray-700 last:border-none">
      <span className="text-gray-300 font-medium">{label}</span>
      <span className="font-semibold text-gray-100">
        {value && value !== "N/A" ? (
          value
        ) : (
          <span className="opacity-60">Not provided</span>
        )}
      </span>
    </div>
  );

  return (
    <>
      <div className="bg-gray-900 rounded-2xl p-6 h-full overflow-y-auto space-y-6 max-w-6xl mx-auto">

        {/* ================= PROFILE HEADER ================= */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-8">

            {/* Avatar */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-700 shadow">
                  <img
                    src={preview || user?.photo?.url || UserImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <label
                  htmlFor="imageUpload"
                  className="absolute bottom-2 right-2 bg-primary hover:bg-primary-hover text-white p-3 rounded-full cursor-pointer transition shadow"
                >
                  <FaCamera size={14} />
                </label>

                <input
                  type="file"
                  id="imageUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-100 mb-3 text-center md:text-left">
                {user?.fullName || "Manager Name"}
              </h1>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-5">
                <span className="px-4 py-1 rounded-full bg-primary text-white text-sm font-semibold capitalize">
                  {user?.role || "manager"}
                </span>
                <span className="px-4 py-1 rounded-full bg-green-700 text-green-100 text-sm font-semibold">
                  {user?.isActive || "active"}
                </span>
              </div>

              <div className="space-y-2 mb-6 text-gray-300 text-sm md:text-base text-center md:text-left">
                <p><span className="font-medium">Email:</span> {user?.email || "N/A"}</p>
                <p><span className="font-medium">Phone:</span> {user?.mobileNumber || "N/A"}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsEditProfileModalOpen(true)}
                  className="px-6 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold transition shadow-sm"
                >
                  Edit Profile
                </button>

                <button
                  onClick={() => setIsResetPasswordModalOpen(true)}
                  className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold transition"
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PERSONAL INFO ================= */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-100 mb-4">
            Personal Information
          </h2>
          <div className="divide-y divide-gray-700">
            {renderField("Date of Birth", user?.dob)}
            {renderField("Gender", user?.gender)}
            {renderField("Address", user?.address)}
            {renderField("City", user?.city)}
            {renderField("PIN Code", user?.pin)}
          </div>
        </div>

        {/* ================= GEO LOCATION ================= */}
        {user?.geoLocation?.lat !== "N/A" && (
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
              <FaMapLocationDot className="text-primary" />
              Geo Location
            </h2>
            <div className="divide-y divide-gray-700">
              {renderField("Latitude", user?.geoLocation?.lat)}
              {renderField("Longitude", user?.geoLocation?.lon)}
            </div>
          </div>
        )}

        {/* ================= PAYMENT ================= */}
        {user?.paymentDetails?.upi !== "N/A" && (
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
              <FaWallet className="text-primary" />
              Payment Details
            </h2>
            <div className="divide-y divide-gray-700">
              {renderField("UPI ID", user?.paymentDetails?.upi)}
            </div>
          </div>
        )}

        {/* ================= BANK ================= */}
        {user?.paymentDetails?.account_number !== "N/A" && (
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
              <BiSolidBank className="text-primary" />
              Bank Details
            </h2>
            <div className="divide-y divide-gray-700">
              {renderField("Account Number", user?.paymentDetails?.account_number)}
              {renderField("IFSC Code", user?.paymentDetails?.ifs_Code)}
            </div>
          </div>
        )}

        {/* ================= DOCUMENTS ================= */}
        {Object.values(user?.documents || {}).some((doc) => doc !== "N/A") && (
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
              <FaFileAlt className="text-primary" />
              Business Documents
            </h2>
            <div className="divide-y divide-gray-700">
              {renderField("GST", user?.documents?.gst)}
              {renderField("FSSAI", user?.documents?.fssai)}
              {renderField("RC", user?.documents?.rc)}
              {renderField("DL", user?.documents?.dl)}
              {renderField("UIDAI", user?.documents?.uidai)}
              {renderField("PAN", user?.documents?.pan)}
            </div>
          </div>
        )}

      </div>

      {isEditProfileModalOpen && (
        <EditRestaurantProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}

      {isResetPasswordModalOpen && (
        <ResetPasswordModal onClose={() => setIsResetPasswordModalOpen(false)} />
      )}
    </>
  );
};

export default RestaurantProfile;
