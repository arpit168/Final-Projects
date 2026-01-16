import React from "react";
import { motion } from "framer-motion";
import {
  FaHamburger,
  FaShoppingBag,
  FaWallet,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Orders",
    value: "128",
    icon: <FaShoppingBag />,
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Total Spent",
    value: "₹24,580",
    icon: <FaWallet />,
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Favorite Items",
    value: "12",
    icon: <FaHeart />,
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "Avg Rating",
    value: "4.8",
    icon: <FaStar />,
    color: "from-yellow-400 to-orange-500",
  },
];

const UserOverview = () => {
  return (
    <div className="min-h-[200vh] bg-linear-to-br from-orange-50 via-red-50 to-pink-100 p-6 space-y-20">

      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          👋 Welcome back, Foodie!
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Ready to satisfy your cravings today? 🍟🍕🍔
        </p>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-6xl mt-6 text-orange-500"
        >
          <FaHamburger />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className={`rounded-3xl p-6 text-white bg-linear-to-r ${stat.color} shadow-2xl`}
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <p className="text-sm opacity-90">{stat.title}</p>
            <h2 className="text-3xl font-bold">{stat.value}</h2>
          </motion.div>
        ))}
      </section>

      {/* Featured Food */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-10 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          🍕 Today’s Featured Cravings
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Cheese Burger", "Pepperoni Pizza", "Fries Combo"].map(
            (item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-orange-50 rounded-2xl p-6 shadow-md"
              >
                <div className="text-4xl mb-3">🍔</div>
                <h3 className="font-semibold text-lg">{item}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Most loved by users
                </p>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* Recent Activity */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          🕒 Recent Activity
        </h2>

        <ul className="space-y-4">
          {[
            "Ordered Pizza Mania – ₹499",
            "Order Delivered: Burger Combo",
            "Added Fries to Favorites",
            "Wallet Recharge ₹500",
          ].map((activity, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 10 }}
              className="p-4 bg-orange-50 rounded-xl shadow-sm"
            >
              {activity}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Offer Banner */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-linear-to-r from-orange-500 to-red-500 text-white rounded-3xl p-12 shadow-2xl text-center"
      >
        <h2 className="text-4xl font-bold">🎉 Flat 30% OFF</h2>
        <p className="mt-4 text-lg">
          On your next 3 orders. Don’t miss out!
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-10 py-3 rounded-full bg-white text-orange-500 font-bold"
        >
          Order Now 🍟
        </motion.button>
      </motion.section>
    </div>
  );
};

export default UserOverview;
