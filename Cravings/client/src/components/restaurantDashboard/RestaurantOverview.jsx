import React from "react";
import { FaShoppingCart, FaUsers, FaRupeeSign, FaStar } from "react-icons/fa";

const RestaurantOverview = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "0",
      icon: <FaShoppingCart />,
    },
    {
      title: "Active Orders",
      value: "0",
      icon: <FaUsers />,
    },
    {
      title: "Total Earnings",
      value: "₹0",
      icon: <FaRupeeSign />,
    },
    {
      title: "Rating",
      value: "4.5",
      icon: <FaStar />,
    },
  ];

  return (
    <div className="bg-gray-900 rounded-2xl p-6 h-full overflow-y-auto space-y-6">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl shadow-sm border border-gray-700 p-6 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-300 text-sm font-medium">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-100 mt-2">
                  {stat.value}
                </p>
              </div>

              <div className="p-4 rounded-xl text-2xl bg-primary text-white">
                {stat.icon}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-gray-800 rounded-2xl shadow-sm border border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-6">
          Recent Orders
        </h2>

        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4 text-2xl text-white">
            🧾
          </div>
          <p className="text-gray-300">
            No recent orders to display
          </p>
        </div>
      </div>

      {/* Weekly Performance */}
      <div className="bg-gray-800 rounded-2xl shadow-sm border border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-6">
          Weekly Performance
        </h2>

        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4 text-2xl text-white">
            📊
          </div>
          <p className="text-gray-300">
            Performance chart will be displayed here
          </p>
        </div>
      </div>

    </div>
  );
};

export default RestaurantOverview;
