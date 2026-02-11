import React from "react";

const RestaurantOrders = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-sm">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-100">Orders Management</h2>
          <p className="text-sm text-gray-300 mt-1">
            Manage, track and update all customer orders in one place
          </p>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 text-center bg-gray-700 rounded-2xl border border-dashed border-gray-600">

          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-md mb-6">
            <span className="text-4xl text-white">📦</span>
          </div>

          <p className="text-xl font-semibold text-gray-100">
            No Orders Yet
          </p>

          <p className="text-sm text-gray-300 mt-2 max-w-md">
            When customers place orders, they will appear here.  
            You’ll be able to accept, reject, and track them in real time.
          </p>

          <button className="mt-6 px-6 py-2.5 bg-secondary hover:bg-secondary-hover text-white rounded-xl font-semibold transition shadow-md">
            Refresh Orders
          </button>

        </div>
      </div>
    </div>
  );
};

export default RestaurantOrders;
