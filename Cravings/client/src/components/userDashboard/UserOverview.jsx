import React from "react";

const UserOverview = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#161E54]">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here’s a quick summary of your account.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-sm text-gray-500">Total Orders</h3>
          <p className="text-3xl font-semibold text-[#161E54] mt-2">124</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-sm text-gray-500">Pending Orders</h3>
          <p className="text-3xl font-semibold text-[#F16D34] mt-2">8</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-sm text-gray-500">Total Spend</h3>
          <p className="text-3xl font-semibold text-[#161E54] mt-2">₹24,560</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-sm text-gray-500">Wallet Balance</h3>
          <p className="text-3xl font-semibold text-green-600 mt-2">₹1,200</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold text-[#161E54] mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li className="flex justify-between">
              <span>Order #2451 placed</span>
              <span className="text-sm">2 hours ago</span>
            </li>
            <li className="flex justify-between">
              <span>Payment successful</span>
              <span className="text-sm">Yesterday</span>
            </li>
            <li
              className="flex justify-between
            "
            >
              <span>Profile updated</span>
              <span className="text-sm">3 days ago</span>
            </li>
          </ul>
        </div>

        {/* Profile Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold text-[#161E54] mb-4">
            Profile Summary
          </h2>

          <div className="space-y-3 text-gray-600">
            <p>
              <span className="font-medium">Name:</span> Arpit Gupta
            </p>
            <p>
              <span className="font-medium">Email:</span> arpit@email.com
            </p>
            <p>
              <span className="font-medium">Status:</span> Active
            </p>
          </div>

          <button className="mt-6 w-full bg-[#161E54] text-white py-2 rounded-lg hover:bg-[#0F163F] transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserOverview;
