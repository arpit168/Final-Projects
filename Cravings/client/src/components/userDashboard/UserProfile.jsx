import React from "react";
import { motion } from "framer-motion";
import { FaUserEdit, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-linear-to-br from-orange-100 via-pink-100 to-red-200 p-6">

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.02 }}
        className="relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl max-w-3xl w-full p-10 border border-white/30"
      >
        {/* Floating Glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl" />

        {/* Avatar */}
        <div className="flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="p-2 rounded-full bg-linear-to-r from-orange-500 to-red-500"
          >
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-orange-500">
              A
            </div>
          </motion.div>
        </div>

        {/* Name */}
        <h2 className="text-3xl font-bold text-center mt-6 text-gray-800">
          Arpit Gupta
        </h2>
        <p className="text-center text-gray-500">
          Food Lover 🍕 | Craving Food Point User
        </p>

        {/* Info */}
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <ProfileItem icon={<FaEnvelope />} label="Email" value="arpit@email.com" />
          <ProfileItem icon={<FaPhoneAlt />} label="Phone" value="+91 98765 43210" />
          <ProfileItem icon={<FaMapMarkerAlt />} label="Location" value="India" />
          <ProfileItem icon={<FaUserEdit />} label="Membership" value="Premium" />
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold shadow-lg"
          >
            Edit Profile ✨
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex items-center gap-4 bg-white/70 p-4 rounded-xl shadow-md"
  >
    <div className="text-orange-500 text-xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </motion.div>
);

export default UserProfile;
