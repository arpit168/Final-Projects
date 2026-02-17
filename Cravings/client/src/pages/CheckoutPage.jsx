import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const CheckoutPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);

  const TAX_RATE = 0.05;
  const DELIVERY_CHARGE = 50;

  useEffect(() => {
    if (!user || !cart || cart.cartItem.length === 0) {
      toast.error("Cart is empty or session expired");
      navigate("/order-now");
    }
  }, []);

  const handleQuantityChange = (itemId, change) => {
    setCart((prev) => {
      const updatedItems = prev.cartItem.map((item) => {
        if (item._id === itemId) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return { ...prev, cartItem: updatedItems, cartValue: newTotal };
    });
  };

  const handleRemoveItem = (itemId) => {
    setCart((prev) => {
      const itemToRemove = prev.cartItem.find((item) => item._id === itemId);
      const newTotal =
        prev.cartValue - itemToRemove.price * itemToRemove.quantity;
      const updatedItems = prev.cartItem.filter((item) => item._id !== itemId);

      if (updatedItems.length === 0) {
        toast.error("Cart is now empty!");
        navigate("/order-now");
        return prev;
      }

      return { ...prev, cartItem: updatedItems, cartValue: newTotal };
    });
  };

  const calculatePrices = () => {
    const subtotal = cart?.cartValue || 0;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax + DELIVERY_CHARGE;
    return { subtotal, tax, total };
  };

  const handlePlaceOrder = async () => {
    if (!user || !cart) {
      toast.error("Session expired. Please login again.");
      navigate("/login");
      return;
    }

    setIsProcessing(true);
    try {
      toast.success("Order placed successfully!");
      localStorage.removeItem("cart");
      navigate("/userdashboard", { state: { tab: "orders" } });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to place order");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!user || !cart) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-xl text-gray-600 animate-pulse">
          Loading Checkout...
        </div>
      </div>
    );
  }

  const { subtotal, tax, total } = calculatePrices();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-gray-100 to-slate-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">
            🛒 Order Checkout
          </h1>
          <p className="text-gray-500 mt-3 text-lg">
            Review your order and complete the payment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            {/* Order Summary */}
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">
                Order Summary
              </h2>

              <div className="space-y-6">
                {cart.cartItem.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-5 border-b pb-5 hover:bg-gray-50 p-4 rounded-xl transition-all duration-300"
                  >
                    <img
                      src={
                        item.images?.[0]?.url ||
                        "https://via.placeholder.com/100"
                      }
                      alt={item.itemName}
                      className="w-24 h-24 object-cover rounded-xl shadow"
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800">
                        {item.itemName}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.cuisine} • {item.type}
                      </p>
                      <div className="text-lg font-semibold text-emerald-600 mt-2">
                        ₹{item.price}
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => handleRemoveItem(item._id)}
                        className="text-red-500 hover:text-red-700 p-2 transition"
                      >
                        <FaTrash />
                      </button>

                      <div className="flex items-center border-2 border-indigo-200 rounded-xl overflow-hidden shadow-sm">
                        <button
                          onClick={() => handleQuantityChange(item._id, -1)}
                          disabled={item.quantity === 1}
                          className="px-3 py-2 hover:bg-gray-100 transition disabled:opacity-40"
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="px-4 font-bold text-lg w-12 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item._id, 1)}
                          className="px-3 py-2 hover:bg-gray-100 transition"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>

                      <div className="text-right mt-2">
                        <p className="text-sm text-gray-500">Subtotal</p>
                        <p className="text-lg font-bold text-indigo-600">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-indigo-600 mb-6">
                Delivery Address
              </h2>

              <div className="bg-linear-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-xl">
                <p className="font-bold text-lg text-gray-800">
                  {user.fullName}
                </p>
                <p className="text-gray-600 mt-2">{user.address}</p>
                <p className="text-gray-600">
                  {user.city}, {user.pin}
                </p>
                <p className="text-gray-600 mt-2">📞 {user.mobileNumber}</p>
              </div>

              <button
                onClick={() =>
                  navigate("/user-dashboard", { state: { tab: "profile" } })
                }
                className="mt-4 text-indigo-600 hover:text-indigo-800 font-semibold transition"
              >
                ✎ Edit Address
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 sticky top-10">
              <h2 className="text-xl font-bold text-indigo-600 mb-6">
                Price Details
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (5%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>₹{DELIVERY_CHARGE.toFixed(2)}</span>
                </div>

                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">Total Amount</span>
                  <span className="text-3xl font-extrabold text-indigo-600">
                    ₹{total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Payment */}
              <div className="mb-6 border-t pt-6">
                <h3 className="font-bold mb-4 text-indigo-600">
                  Payment Method
                </h3>

                <div className="space-y-3 bg-gray-50 p-4 rounded-xl border">
                  {[
                    { id: "credit-card", label: "💳 Credit/Debit Card" },
                    { id: "upi", label: "📱 UPI" },
                    { id: "wallet", label: "👛 Digital Wallet" },
                    { id: "cod", label: "🏠 Cash on Delivery" },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      {method.label}
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
              >
                {isProcessing ? "Processing..." : "Place Order 🚀"}
              </button>

              <button
                onClick={() => navigate(-1)}
                className="w-full mt-4 text-indigo-600 font-semibold py-2 hover:text-indigo-800 transition"
              >
                ← Continue Shopping
              </button>
            </div>

            {/* Promo */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mt-8">
              <h3 className="font-bold mb-4 text-indigo-600">Promo Code</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 border-2 border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl shadow hover:bg-indigo-700 transition">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
