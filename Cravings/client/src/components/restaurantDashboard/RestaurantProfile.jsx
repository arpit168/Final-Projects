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
    <div className="flex justify-between py-2 px-3 border-b border-secondary last:border-none">
      <span className="text-text font-medium">{label}</span>
      <span className="font-semibold text-text">
        {value && value !== "N/A" ? value : (
          <span className="opacity-60">Not provided</span>
        )}
      </span>
    </div>
  );

  return (
    <>
      <div className="bg-background rounded-xl p-6 h-full overflow-y-auto space-y-6">

        {/* Profile Header */}
        <div className="bg-background border border-secondary rounded-xl p-6">
          <div className="flex gap-6">

            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-secondary">
                  <img
                    src={preview || user?.photo?.url || UserImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <label
                  htmlFor="imageUpload"
                  className="absolute bottom-2 right-2 bg-primary hover:bg-primary-hover text-buttons p-3 rounded-full cursor-pointer transition"
                >
                  <FaCamera size={16} />
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
            <div className="flex justify-between w-full">
              <div>
                <h1 className="text-3xl font-bold text-primary mb-2">
                  {user?.fullName || "Manager Name"}
                </h1>

                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-buttons text-sm font-semibold capitalize">
                    {user?.role || "manager"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-text text-sm font-semibold">
                    {user?.isActive || "active"}
                  </span>
                </div>

                <div className="space-y-1 mb-5 text-text">
                  <p><span className="font-medium">Email:</span> {user?.email || "N/A"}</p>
                  <p><span className="font-medium">Phone:</span> {user?.mobileNumber || "N/A"}</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsEditProfileModalOpen(true)}
                    className="px-6 py-2 rounded-lg bg-primary hover:bg-primary-hover text-buttons font-semibold transition"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={() => setIsResetPasswordModalOpen(true)}
                    className="px-6 py-2 rounded-lg bg-secondary hover:bg-secondary-hover text-text font-semibold transition"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Personal Info */}
        <div className="bg-background border border-secondary rounded-xl p-6">
          <h2 className="text-lg font-bold text-text mb-4">Personal Information</h2>
          {renderField("Date of Birth", user?.dob)}
          {renderField("Gender", user?.gender)}
          {renderField("Address", user?.address)}
          {renderField("City", user?.city)}
          {renderField("PIN Code", user?.pin)}
        </div>

        {/* Geo Location */}
        {(user?.geoLocation?.lat !== "N/A") && (
          <div className="bg-background border border-secondary rounded-xl p-6">
            <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
              <FaMapLocationDot className="text-primary" /> Geo Location
            </h2>
            {renderField("Latitude", user?.geoLocation?.lat)}
            {renderField("Longitude", user?.geoLocation?.lon)}
          </div>
        )}

        {/* Payment */}
        {user?.paymentDetails?.upi !== "N/A" && (
          <div className="bg-background border border-secondary rounded-xl p-6">
            <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
              <FaWallet className="text-primary" /> Payment Details
            </h2>
            {renderField("UPI ID", user?.paymentDetails?.upi)}
          </div>
        )}

        {/* Bank */}
        {(user?.paymentDetails?.account_number !== "N/A") && (
          <div className="bg-background border border-secondary rounded-xl p-6">
            <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
              <BiSolidBank className="text-primary" /> Bank Details
            </h2>
            {renderField("Account Number", user?.paymentDetails?.account_number)}
            {renderField("IFSC Code", user?.paymentDetails?.ifs_Code)}
          </div>
        )}

        {/* Documents */}
        {Object.values(user?.documents || {}).some((doc) => doc !== "N/A") && (
          <div className="bg-background border border-secondary rounded-xl p-6">
            <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
              <FaFileAlt className="text-primary" /> Business Documents
            </h2>
            {renderField("GST", user?.documents?.gst)}
            {renderField("FSSAI", user?.documents?.fssai)}
            {renderField("RC", user?.documents?.rc)}
            {renderField("DL", user?.documents?.dl)}
            {renderField("UIDAI", user?.documents?.uidai)}
            {renderField("PAN", user?.documents?.pan)}
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
