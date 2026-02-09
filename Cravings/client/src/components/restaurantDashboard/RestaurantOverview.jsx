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
    <>
      <div className="bg-(--color-background) rounded-lg p-6 h-full overflow-y-auto space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-(--color-background) rounded-lg shadow-md p-6 border border-(--color-buttons)"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-(--color-secondary) text-sm font-medium">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-(--color-text) mt-2">
                    {stat.value}
                  </p>
                </div>

                <div className="p-4 rounded-lg text-2xl bg-(--color-secondary-hover) text-(--color-primary)">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-(--color-background) rounded-lg shadow-md p-6 border border-(--color-buttons)">
          <h2 className="text-xl font-bold text-(--color-text) mb-4">
            Recent Orders
          </h2>

          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-(--color-secondary-hover) flex items-center justify-center mb-3">
              <span className="text-2xl">🧾</span>
            </div>
            <p className="text-(--color-secondary)">
              No recent orders to display
            </p>
          </div>
        </div>

        {/* Weekly Performance */}
        <div className="bg-(--color-background) rounded-lg shadow-md p-6 border border-(--color-buttons)">
          <h2 className="text-xl font-bold text-(--color-text) mb-4">
            Weekly Performance
          </h2>

          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-(--color-secondary-hover) flex items-center justify-center mb-3">
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-(--color-secondary)">
              Performance chart will be displayed here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantOverview;
