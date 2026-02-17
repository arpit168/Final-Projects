import React, { useEffect, useState } from "react";

const UserOverview = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOrders([
        { id: 1, item: "Pizza", status: "Completed", amount: 499 },
        { id: 2, item: "Burger", status: "Pending", amount: 199 },
        { id: 3, item: "Pasta", status: "Completed", amount: 299 },
        { id: 4, item: "Sandwich", status: "Cancelled", amount: 149 },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-gray-300 text-lg">
        Loading Overview...
      </div>
    );
  }

  const totalOrders = orders.length;
  const completed = orders.filter(o => o.status === "Completed").length;
  const pending = orders.filter(o => o.status === "Pending").length;
  const cancelled = orders.filter(o => o.status === "Cancelled").length;
  const totalSpent = orders.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 p-6">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Welcome */}
        <div className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-white">Welcome Back 👋</h1>
          <p className="text-gray-400 mt-2">
            Here is a quick summary of your recent activity and performance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 text-center">
            <h2 className="text-sm text-gray-400">Total Orders</h2>
            <p className="text-3xl font-bold text-blue-400 mt-2">
              {totalOrders}
            </p>
          </div>

          <div className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 text-center">
            <h2 className="text-sm text-gray-400">Completed</h2>
            <p className="text-3xl font-bold text-green-400 mt-2">
              {completed}
            </p>
          </div>

          <div className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 text-center">
            <h2 className="text-sm text-gray-400">Pending</h2>
            <p className="text-3xl font-bold text-yellow-400 mt-2">
              {pending}
            </p>
          </div>

          <div className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 text-center">
            <h2 className="text-sm text-gray-400">Cancelled</h2>
            <p className="text-3xl font-bold text-red-400 mt-2">
              {cancelled}
            </p>
          </div>
        </div>

        {/* Total Spending */}
        <div className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-300">
            Total Spending
          </h2>
          <p className="text-3xl font-bold text-indigo-400 mt-2">
            ₹{totalSpent}
          </p>
        </div>

        {/* Recent Orders */}
        <div className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">
            Recent Orders
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-gray-700 text-gray-400">
                <tr>
                  <th className="py-2">Order ID</th>
                  <th>Item</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {orders.map(order => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-800 hover:bg-[#243045] transition"
                  >
                    <td className="py-3">{order.id}</td>
                    <td>{order.item}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === "Completed"
                            ? "bg-green-900 text-green-400"
                            : order.status === "Pending"
                            ? "bg-yellow-900 text-yellow-400"
                            : "bg-red-900 text-red-400"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>₹{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserOverview;
  