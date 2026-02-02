import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditManagerProfileModal from "./managerModels/EditManagerProfileModal";
import { FaCamera } from "react-icons/fa";
import UserImage from "../../assets/user.jpeg";
import api from "../../config/Api";
import toast from "react-hot-toast";
import ResetPasswordModal from "../userDashboard/modals/ResetPasswordModal";

const ManagerProfile = () => {
  const { user, setUser } = useAuth();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isResetPasswordModelOpen, setIsResetPasswordModelOpen] =
    useState(false);

  const [preview, setPreview] = useState("");

  const changePhoto = async (photo) => {
    const form_Data = new FormData();

    form_Data.append("image", photo);

    try {
      const res = await api.patch("/user/changePhoto", form_Data);

      toast.success(res.data.message);

      setUser(res.data.data);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const newPhotoURL = URL.createObjectURL(file);
    console.log(newPhotoURL);
    setPreview(newPhotoURL);
    changePhoto(file);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#161E54]">Manager Profile</h1>
          <p className="text-gray-500 mt-1">Manage your personal information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 shadow-2xl">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-2xl border p-6 flex flex-col items-center text-center">
            <div className="flex justify-between  p-3 rounded-3xl items-center border-gray-300 bg-white">
              <div className="flex gap-5 items-center">
                <div className="relative">
                  <div className=" border rounded-full w-36 h-36 overflow-hidden">
                    <img
                      src={preview || user?.photo?.url || UserImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 left-[75%] border bg-white p-2 rounded-full group flex gap-3">
                    <label
                      htmlFor="imageUpload"
                      className="text-(--color-primary) group-hover:text-(--color-secondary)"
                    >
                      <FaCamera />
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
              </div>
            </div>
            
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-2xl border p-6">
            <h2 className="text-xl font-semibold text-[#161E54] mb-6">
              Personal Details
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    onClick={() => setIsEditProfileModalOpen(true)}
                    type="text"
                    name="name"
                    value={user?.fullName || ""}
                    disabled
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#161E54] outline-none cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Email Address
                  </label>
                  <input
                    onClick={() => setIsEditProfileModalOpen(true)}
                    type="email"
                    name="email"
                    value={user?.email || ""}
                    disabled
                    className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Phone Number
                  </label>
                  <input
                    onClick={() => setIsEditProfileModalOpen(true)}
                    type="text"
                    name="phone"
                    value={user?.mobileNumber || ""}
                    disabled
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#161E54] outline-none cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="border my-auto font-bold px-4 py-2 w-50 rounded hover:bg-indigo-800 bg-indigo-600 cursor-pointer text-white"
                  onClick={() => setIsEditProfileModalOpen(true)}
                >
                  Edit Manager Profile
                </button>
                <button
                  type="button"
                  className="border my-auto px-4 font-bold py-2 w-50 rounded bg-yellow-600 hover:bg-yellow-700 cursor-pointer  text-white"
                  onClick={() => setIsResetPasswordModelOpen(true)}
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
          {isEditProfileModalOpen && (
            <EditManagerProfileModal
              onClose={() => setIsEditProfileModalOpen(false)}
            />
          )}

          {isResetPasswordModelOpen && (
            <ResetPasswordModal
              onClose={() => setIsResetPasswordModelOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ManagerProfile;
