import React, { useState } from "react";

const UserOrders = () => {
  const [activeTab, setActiveTab] = useState("all");

  const orders = [
    {
      id: "#2451",
      date: "12 Jan 2026",
      items: 3,
      total: 1250,
      status: "In Progress",
      type: "active",
    },
    {
      id: "#2470",
      date: "15 Jan 2026",
      items: 2,
      total: 899,
      status: "Shipped",
      type: "active",
    },
    {
      id: "#2398",
      date: "03 Jan 2026",
      items: 1,
      total: 499,
      status: "Delivered",
      type: "completed",
    },
  ];

  const filteredOrders =
    activeTab === "all" ? orders : orders.filter((o) => o.type === activeTab);

  return (
    <div className="min-h-screen bg-[#0F172A] p-6 space-y-8 text-gray-200">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">My Orders</h1>
        <p className="text-gray-400 mt-1">
          Track and manage your orders
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row gap-4">
        {["all", "active", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg font-medium transition duration-300
              ${
                activeTab === tab
                  ? "bg-[#2563EB] text-white shadow-md"
                  : "bg-[#1E293B] text-gray-300 border border-[#334155] hover:bg-[#273449]"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Orders
          </button>
        ))}
      </div>

      {/* Orders Section */}
      <div className="space-y-6">
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
        {filteredOrders.length === 0 && (
          <p className="text-gray-400">
            No orders found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

/* 🔹 Reusable Order Card */

const OrderCard = ({ order }) => {
  return (
    <div className="bg-[#1E293B] rounded-xl p-6 shadow-lg border border-[#334155] hover:bg-[#273449] transition duration-300">
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white">
          Order {order.id}
        </h3>

        <span
          className={`text-sm px-3 py-1 rounded-full ${
            order.status === "Delivered"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {order.status}
        </span>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 text-gray-400">
        <p>
          <span className="font-medium text-white">Date:</span>{" "}
          {order.date}
        </p>
        <p>
          <span className="font-medium text-white">Items:</span>{" "}
          {order.items}
        </p>
        <p>
          <span className="font-medium text-white">Total:</span> ₹
          {order.total}
        </p>
      </div>

      {order.status === "Delivered" ? (
        <button className="mt-4 text-sm text-[#2563EB] hover:text-[#1D4ED8] transition">
          Download Invoice
        </button>
      ) : (
        <button className="mt-4 text-sm text-[#2563EB] hover:text-[#1D4ED8] transition">
          View Details
        </button>
      )}
    </div>
  );
};

export default UserOrders;
