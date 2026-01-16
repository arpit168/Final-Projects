import React from "react";
import { motion } from "framer-motion";
import { FaHeadset, FaHamburger, FaTruck, FaCreditCard } from "react-icons/fa";

const UserHelpDesk = () => {
  return (
    <div className="min-h-auto flex items-center justify-center bg-linear-to-br from-orange-50 to-red-100 p-6">

      {/* 3D Card */}
      <motion.div
        style={{ perspective: "1000px" }}   // ✅ real 3D
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ rotateX: 8, rotateY: -8 }}
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-10"
      >

        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-6xl text-orange-500 flex justify-center"
          >
            <FaHeadset />
          </motion.div>

          <h1 className="text-3xl font-bold mt-4 text-gray-800">
            Craving Food Point Help Desk
          </h1>

          <p className="text-gray-500 mt-2">
            Hungry for help? We’ve got you covered 🍕
          </p>
        </div>

        {/* Help Options */}
        <div className="grid sm:grid-cols-2 gap-6">
          <HelpCard
            icon={<FaHamburger />}
            title="Order Issues"
            desc="Wrong order, missing items, or changes"
          />

          <HelpCard
            icon={<FaTruck />}
            title="Delivery Support"
            desc="Late delivery or tracking problems"
          />

          <HelpCard
            icon={<FaCreditCard />}
            title="Payment Problems"
            desc="Refunds, failed payments, invoices"
          />

          <HelpCard
            icon="❓"
            title="Other Queries"
            desc="Anything else you need help with"
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
            Contact Support 🍟
          </button>
        </div>

      </motion.div>
    </div>
  );
};

const HelpCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateZ: 1 }}
      className="bg-orange-50 rounded-2xl p-6 shadow-md cursor-pointer hover:shadow-xl transition"
    >
      <div className="text-3xl text-orange-500 mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-500 mt-1">{desc}</p>
    </motion.div>
  );
};

export default UserHelpDesk;
