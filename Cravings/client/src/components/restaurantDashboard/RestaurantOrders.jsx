import React from "react";

const RestaurantOrders = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#0F172A]">
            Orders Management
          </h2>
          <p className="text-sm text-[#64748B] mt-1">
            Manage, track and update all customer orders in one place
          </p>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 text-center bg-[#F1F5F9] rounded-2xl border border-dashed border-[#CBD5E1]">

          <div className="w-24 h-24 rounded-full bg-[#2563EB] flex items-center justify-center shadow-md mb-6">
            <span className="text-4xl text-white">📦</span>
          </div>

          <p className="text-xl font-semibold text-[#0F172A]">
            No Orders Yet
          </p>

          <p className="text-sm text-[#64748B] mt-2 max-w-md">
            When customers place orders, they will appear here.  
            You’ll be able to accept, reject, and track them in real time.
          </p>

          <button className="mt-6 px-6 py-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl font-semibold transition shadow-md">
            Refresh Orders
          </button>

        </div>
      </div>
    </div>
  );
};

export default RestaurantOrders;
