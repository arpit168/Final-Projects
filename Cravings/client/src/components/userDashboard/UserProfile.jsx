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
      <div className="min-h-screen p-6 bg-[#0F172A] space-y-8 text-gray-200">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">My Profile</h1>
          <p className="text-gray-400 mt-1">
            Manage your personal information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Profile Photo */}
          <div className="bg-[#1E293B] rounded-xl border border-[#334155] p-6 flex flex-col items-center text-center shadow-lg">
            <div className="relative w-36 h-36 rounded-full overflow-hidden border border-[#334155]">
              <img
                src={preview || user?.photo?.url || UserImage}
                alt="User"
                className="w-full h-full object-cover"
              />
              <label
                htmlFor="imageUpload"
                className="absolute bottom-2 right-2 bg-[#1E293B] border border-[#334155] p-2 rounded-full cursor-pointer hover:bg-[#2563EB] hover:text-white transition duration-300 flex items-center justify-center text-gray-300"
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
          <div className="lg:col-span-2 bg-[#1E293B] rounded-xl border border-[#334155] p-6 shadow-lg space-y-6">
            <h2 className="text-xl font-semibold text-white">
              Personal Details
            </h2>

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
                className="px-6 py-2 rounded-md bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition duration-300"
              >
                Edit Profile
              </button>
              <button
                type="button"
                onClick={() => setIsResetPasswordModalOpen(true)}
                className="px-6 py-2 rounded-md bg-[#CA8A04] text-white hover:bg-[#A16207] transition duration-300"
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
          <ResetPasswordModal onClose={() =>
            setIsResetPasswordModalOpen(false)
          } />
        )}

      </div>
    </>
  );
};

/* Disabled Input Field */

const InputField = ({ label, value, onClick }) => (
  <div>
    <label className="block text-sm font-medium text-gray-400 mb-1">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onClick={onClick}
      disabled
      className="w-full border border-[#334155] rounded-md px-4 py-2 bg-[#0F172A] text-gray-300 cursor-not-allowed focus:outline-none"
    />
  </div>
);

export default UserProfile;
