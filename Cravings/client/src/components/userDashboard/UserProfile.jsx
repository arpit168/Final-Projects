import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";
import ResetPasswordModal from "./modals/ResetPasswordModal";
import { FaCamera } from "react-icons/fa";
import UserImage from "../../assets/user.jpeg";
import api from "../../config/Api";
import toast from "react-hot-toast";

const UserProfile = () => {
  const { user, setUser } = useAuth();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [preview, setPreview] = useState("");

  const changePhoto = async (photo) => {
    const formData = new FormData();
    formData.append("image", photo);

    try {
      const res = await api.patch("/user/changePhoto", formData);
      toast.success(res.data.message);
      setUser(res.data.data);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const newPhotoURL = URL.createObjectURL(file);
    setPreview(newPhotoURL);
    changePhoto(file);
  };

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#161E54]">My Profile</h1>
          <p className="text-gray-500 mt-1">Manage your personal information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Profile Photo */}
          <div className="bg-white rounded-xl border border-gray-300 p-6 flex flex-col items-center text-center shadow-sm">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border border-gray-300">
              <img
                src={preview || user?.photo?.url || UserImage}
                alt="User"
                className="w-full h-full object-cover"
              />
              <label
                htmlFor="imageUpload"
                className="absolute bottom-2 right-2 bg-white border border-gray-300 p-2 rounded-full cursor-pointer hover:bg-indigo-600 hover:text-white transition flex items-center justify-center"
              >
                <FaCamera />
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-300 p-6 shadow-sm space-y-6">
            <h2 className="text-xl font-semibold text-[#161E54]">Personal Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Full Name"
                value={user?.fullName || ""}
                onClick={() => setIsEditProfileModalOpen(true)}
              />
              <InputField
                label="Email Address"
                value={user?.email || ""}
                onClick={() => setIsEditProfileModalOpen(true)}
              />
              <InputField
                label="Phone Number"
                value={user?.mobileNumber || ""}
                onClick={() => setIsEditProfileModalOpen(true)}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setIsEditProfileModalOpen(true)}
                className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-800 transition"
              >
                Edit Profile
              </button>
              <button
                type="button"
                onClick={() => setIsResetPasswordModalOpen(true)}
                className="px-6 py-2 rounded-md bg-yellow-600 text-white hover:bg-yellow-700 transition"
              >
                Reset Password
              </button>
            </div>
          </div>

        </div>

        {/* Modals */}
        {isEditProfileModalOpen && (
          <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
        )}
        {isResetPasswordModalOpen && (
          <ResetPasswordModal onClose={() => setIsResetPasswordModalOpen(false)} />
        )}

      </div>
    </>
  );
};

/* 🔹 Reusable Disabled Input Field */
const InputField = ({ label, value, onClick }) => (
  <div>
    <label className="block text-sm font-medium text-gray-500 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onClick={onClick}
      disabled
      className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-100 text-gray-700 cursor-not-allowed focus:outline-none"
    />
  </div>
);

export default UserProfile;
