import React from "react";

const RestaurantEarnings = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-text">
            Earnings & Transactions
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Track your revenue, payouts, and transaction history
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Total Earnings */}
          <div className="bg-primary border border-primary-hover rounded-xl p-5">
            <p className="text-sm text-white font-medium">Total Earnings</p>
            <p className="text-2xl font-bold text-white mt-2">₹ 0</p>
          </div>

          {/* Pending Payout */}
          <div className="bg-secondary border border-secondary-hover rounded-xl p-5">
            <p className="text-sm text-white font-medium">Pending Payout</p>
            <p className="text-2xl font-bold text-white mt-2">₹ 0</p>
          </div>

          {/* Total Transactions */}
          <div className="bg-gray-700 border border-gray-600 rounded-xl p-5">
            <p className="text-sm text-purple-300 font-medium">Total Transactions</p>
            <p className="text-2xl font-bold text-white mt-2">0</p>
          </div>

        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 text-center bg-gray-900 rounded-2xl border border-dashed border-gray-700">

          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-md mb-6">
            <span className="text-4xl text-white">💰</span>
          </div>

          <p className="text-xl font-semibold text-text">
            No Transactions Yet
          </p>

          <p className="text-sm text-gray-400 mt-2 max-w-md">
            Once customers place orders and payments are processed,
            your earnings and transaction history will appear here.
          </p>

          <button className="mt-6 px-6 py-2.5 bg-secondary hover:bg-secondary-hover text-white rounded-xl font-semibold transition shadow-md">
            Refresh Data
          </button>

        </div>

      </div>
    </div>
  );
};

export default RestaurantEarnings;
