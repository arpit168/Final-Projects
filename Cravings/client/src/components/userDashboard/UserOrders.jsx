import React, { useEffect, useState } from "react";
import api from "../../config/Api";
import toast from "react-hot-toast";
import Loading from "../Loading";

const UserOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState();

  const fetchAllPlacedOrder = async () => {
    setIsLoading(true);
    console.log("Fetching User Placed Orders...");
    try {
      const res = await api.get("/user/placedorders");
      setOrders(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPlacedOrder();
    const interval = setInterval(() => {
      fetchAllPlacedOrder();
    }, 1000 * 10);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full bg-[#0f172a]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-[#0f172a] rounded-lg p-6 h-full overflow-y-auto">
      <div className="bg-[#1e293b] rounded-lg shadow-lg p-6 border border-[#334155]">
        <h2 className="text-2xl font-bold text-white mb-4">My Orders</h2>
        <div className="border border-[#334155] mt-3" />

        {!orders || orders.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-lg">No orders placed yet</p>
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#334155] border-b border-[#475569]">
                  <th className="text-left px-4 py-3 font-semibold text-gray-200">
                    Order Number
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-200">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-200">
                    Total Amount
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-200">
                    Items
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-200">
                    Date
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-200">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#334155] hover:bg-[#1e293b] transition"
                  >
                    <td className="px-4 py-3 text-gray-100 font-medium">
                      {order.orderNumber || order._id?.substring(0, 8)}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                          order.status === "completed"
                            ? "bg-green-900 text-green-400"
                            : order.status === "cancelled"
                            ? "bg-red-900 text-red-400"
                            : order.status === "pending"
                            ? "bg-yellow-900 text-yellow-400"
                            : "bg-blue-900 text-blue-400"
                        }`}
                      >
                        {order.status || "Pending"}
                      </span>
                    </td>

                    <td className="px-4 py-3 text-gray-100 font-semibold">
                      ₹{order.orderValue.total || 0}
                    </td>

                    <td className="px-4 py-3 text-gray-400">
                      {order.items?.length || 0} item
                      {order.items?.length !== 1 ? "s" : ""}
                    </td>

                    <td className="px-4 py-3 text-gray-400">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>

                    <td className="ps-4 py-3 text-gray-400">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                        Track Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserOrders;