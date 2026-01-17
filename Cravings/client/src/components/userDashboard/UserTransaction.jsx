import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

const transactions = [
  {
    id: "#CFP1021",
    item: "Cheese Burger Combo",
    amount: "₹299",
    status: "success",
    date: "12 Jan 2026",
  },
  {
    id: "#CFP1022",
    item: "Pizza Mania",
    amount: "₹499",
    status: "pending",
    date: "14 Jan 2026",
  },
  {
    id: "#CFP1023",
    item: "French Fries + Coke",
    amount: "₹149",
    status: "failed",
    date: "15 Jan 2026",
  },
];

const statusMap = {
  success: {
    icon: <FaCheckCircle />,
    color: "text-green-500",
    bg: "bg-green-100",
    label: "Success",
  },
  pending: {
    icon: <FaClock />,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    label: "Pending",
  },
  failed: {
    icon: <FaTimesCircle />,
    color: "text-red-500",
    bg: "bg-red-100",
    label: "Failed",
  },
};

const UserTransaction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] p-6 bg-linear-to-br from-orange-50 to-red-100"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        🍔 Your Transactions
      </motion.h1>

      {/* Transaction Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transactions.map((tx, index) => {
          const status = statusMap[tx.status];

          return (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
              }}
              className="bg-white rounded-3xl p-6 shadow-xl cursor-pointer"
            >
              {/* Top */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">{tx.id}</span>
                <span
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${status.bg} ${status.color}`}
                >
                  {status.icon}
                  {status.label}
                </span>
              </div>

              {/* Content */}
              <h2 className="text-xl font-semibold text-gray-800">{tx.item}</h2>

              <p className="text-gray-400 text-sm mt-1">{tx.date}</p>

              {/* Amount */}
              <div className="mt-6 flex justify-between items-center">
                <span className="text-gray-500">Amount</span>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-bold text-orange-500"
                >
                  {tx.amount}
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default UserTransaction;
