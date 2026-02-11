import React from "react";

const RestaurantEarnings = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#0F172A]">
            Earnings & Transactions
          </h2>
          <p className="text-sm text-[#64748B] mt-1">
            Track your revenue, payouts, and transaction history
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Total Earnings */}
          <div className="bg-[#ECFDF5] border border-[#BBF7D0] rounded-xl p-5">
            <p className="text-sm text-[#16A34A] font-medium">
              Total Earnings
            </p>
            <p className="text-2xl font-bold text-[#0F172A] mt-2">
              ₹ 0
            </p>
          </div>

          {/* Pending Payout */}
          <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-5">
            <p className="text-sm text-[#F59E0B] font-medium">
              Pending Payout
            </p>
            <p className="text-2xl font-bold text-[#0F172A] mt-2">
              ₹ 0
            </p>
          </div>

          {/* Total Transactions */}
          <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-xl p-5">
            <p className="text-sm text-[#7C3AED] font-medium">
              Total Transactions
            </p>
            <p className="text-2xl font-bold text-[#0F172A] mt-2">
              0
            </p>
          </div>

        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 text-center bg-[#F1F5F9] rounded-2xl border border-dashed border-[#CBD5E1]">

          <div className="w-24 h-24 rounded-full bg-[#2563EB] flex items-center justify-center shadow-md mb-6">
            <span className="text-4xl text-white">💰</span>
          </div>

          <p className="text-xl font-semibold text-[#0F172A]">
            No Transactions Yet
          </p>

          <p className="text-sm text-[#64748B] mt-2 max-w-md">
            Once customers place orders and payments are processed,
            your earnings and transaction history will appear here.
          </p>

          <button className="mt-6 px-6 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-semibold transition shadow-md">
            Refresh Data
          </button>

        </div>

      </div>
    </div>
  );
};

export default RestaurantEarnings;
