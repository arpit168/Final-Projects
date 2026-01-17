import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaHamburger, FaTruck, FaFire } from "react-icons/fa";

const orders = [
  {
    id: "#CFP501",
    item: "Double Cheese Burger",
    price: "₹349",
    status: "delivered",
    progress: 4,
    date: "Today, 7:30 PM",
  },
  {
    id: "#CFP502",
    item: "Pizza + Garlic Bread",
    price: "₹599",
    status: "onway",
    progress: 3,
    date: "Today, 8:10 PM",
  },
  {
    id: "#CFP503",
    item: "Fries & Coke Combo",
    price: "₹199",
    status: "cooking",
    progress: 2,
    date: "Today, 8:25 PM",
  },
];

const steps = [
  { label: "Ordered", icon: <FaCheckCircle /> },
  { label: "Cooking", icon: <FaFire /> },
  { label: "On the Way", icon: <FaTruck /> },
  { label: "Delivered", icon: <FaHamburger /> },
];

const statusColor = {
  delivered: "bg-green-100 text-green-600",
  onway: "bg-blue-100 text-blue-600",
  cooking: "bg-orange-100 text-orange-600",
};

const UserOrders = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] p-6 bg-linear-to-br from-orange-50 to-red-100"
    >
      {/* Header */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        🍕 Your Orders
      </motion.h1>

      {/* Orders */}
      <div className="space-y-6">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              y: -8,
              boxShadow: "0px 25px 40px rgba(0,0,0,0.15)",
            }}
            className="bg-white rounded-3xl p-6 shadow-xl"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {order.item}
                </h2>
                <p className="text-sm text-gray-400">{order.date}</p>
              </div>

              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold ${statusColor[order.status]}`}
              >
                {order.status.toUpperCase()}
              </span>
            </div>

            {/* Progress */}
            <div className="flex items-center justify-between mt-6">
              {steps.map((step, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <motion.div
                    animate={i < order.progress ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`w-10 h-10 flex items-center justify-center rounded-full
                      ${
                        i < order.progress
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                  >
                    {step.icon}
                  </motion.div>

                  <span className="text-xs mt-2 text-gray-500">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-gray-500">Total</span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-bold text-orange-500"
              >
                {order.price}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UserOrders;
