import React, { useState } from "react";

const UserOrders = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-background p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">
          My Orders
        </h1>
        <p className="text-secondary mt-1">
          Track and manage your orders
        </p>
      </div>

      {/* Tabs */}
      <div className="flex md:flex-row flex-col gap-4 mb-8">
        {["all", "active", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg font-medium transition
              ${
                activeTab === tab
                  ? "bg-primary text-background"
                  : "bg-background text-secondary border hover:bg-secondary-hover"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Orders
          </button>
        ))}
      </div>

      {/* Orders Section */}
      <div className="space-y-6">

        {/* Active Order */}
        {(activeTab === "all" || activeTab === "active") && (
          <div className="bg-background rounded-xl p-6 shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-text">
                Order #2451
              </h3>
              <span className="text-sm px-3 py-1 rounded-full bg-secondary text-text">
                In Progress
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-secondary">
              <p><span className="font-medium text-text">Date:</span> 12 Jan 2026</p>
              <p><span className="font-medium text-text">Items:</span> 3</p>
              <p><span className="font-medium text-text">Total:</span> ₹1,250</p>
            </div>

            <button className="mt-4 text-sm text-primary hover:text-primary-hover">
              View Details
            </button>
          </div>
        )}

        {/* Completed Order */}
        {(activeTab === "all" || activeTab === "completed") && (
          <div className="bg-background rounded-xl p-6 shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-text">
                Order #2398
              </h3>
              <span className="text-sm px-3 py-1 rounded-full bg-secondary text-text">
                Delivered
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-secondary">
              <p><span className="font-medium text-text">Date:</span> 03 Jan 2026</p>
              <p><span className="font-medium text-text">Items:</span> 1</p>
              <p><span className="font-medium text-text">Total:</span> ₹499</p>
            </div>

            <button className="mt-4 text-sm text-primary hover:text-primary-hover">
              Download Invoice
            </button>
          </div>
        )}

        {/* Another Active Order */}
        {activeTab === "active" && (
          <div className="bg-background rounded-xl p-6 shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-text">
                Order #2470
              </h3>
              <span className="text-sm px-3 py-1 rounded-full bg-secondary text-text">
                Shipped
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-secondary">
              <p><span className="font-medium text-text">Date:</span> 15 Jan 2026</p>
              <p><span className="font-medium text-text">Items:</span> 2</p>
              <p><span className="font-medium text-text">Total:</span> ₹899</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default UserOrders;
