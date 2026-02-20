import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import api from '../config/Api'

const PromoCode = {
  NEW50: 50,
  SAVE20: 20,
  CRAVE10: 10,
};

const CheckoutPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(false);

  // Tax and charges calculation
  const TAX_RATE = 0.05; // 5% tax
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

  const handlePromoCodeApply = () => {
    const discountPercent = PromoCode[promoCode.toUpperCase()];
    if (discountPercent) {
      const { subtotal } = calculatePrices();
      const discountAmount = (subtotal * discountPercent) / 100;
      const newSubTotal = subtotal - discountAmount;

      console.log("Applying promo code:", {
        promoCode,
        discountPercent,
        discountAmount,
        oldSubTotal: subtotal,
        newSubTotal: newSubTotal,
      });
      setCart((prev) => ({
        ...prev,
        cartValue: newSubTotal,
      }));
      toast.success(
        `Promo code applied! You saved ₹${discountAmount.toFixed(2)}`,
      );
      setAppliedPromo(true);
    } else {
      toast.error("Invalid promo code");
    }
  };

  const GeneratePayload = () => {
    const { subtotal, tax, total } = calculatePrices();
    return {
      restaurantId: cart.resturantID,
      userId: user._id,
      items: [...cart.cartItem],
      orderValue: {
        subtotal,
        tax,
        total,
        discountType: promoCode,
        deliveryFee: 50,
        discountPercentage: PromoCode[promoCode.toUpperCase()],
        paymentMethod,
      },
      status: "pending",
      review: {},
    };
  };
  const handlePlaceOrder = async () => {
    if (!user || !cart) {
      toast.error("Session expired. Please login again.");
      navigate("/login");
      return;
    }

    setIsProcessing(true);

    //Payment gateway call

    const payload = GeneratePayload();
    console.log(payload);

    try {
      
      const res = await api.post("/user/placeorder",payload)
      toast.success(res.data.message);
      localStorage.removeItem("cart");
      navigate("/user-dashboard", { state: { tab: "orders" } });
    } catch (error) {
      console.error("Order placement error:", error);
      toast.error(error?.response?.data?.message || "Failed to place order");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!user || !cart) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  const { subtotal, tax, total } = calculatePrices();

 return (
  <div className="min-h-screen bg-[#F9FAFB] py-6 sm:py-10 px-4">
    <div className="max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111827]">
          Order Checkout
        </h1>
        <p className="text-gray-500 mt-2">
          Review your order and complete payment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Order Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E5E7EB]">
            <h2 className="text-xl font-semibold text-[#111827] mb-6">
              Order Summary
            </h2>

            <div className="space-y-5">
              {cart.cartItem.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row gap-5 border-b pb-5"
                >
                  {/* Image */}
                  <img
                    src={item.images?.[0]?.url}
                    alt={item.itemName}
                    className="w-full sm:w-28 h-28 object-cover rounded-xl"
                  />

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-[#111827]">
                      {item.itemName}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.cuisine} • {item.type}
                    </p>

                    <p className="mt-3 text-lg font-bold text-[#16A34A]">
                      ₹{item.price}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex sm:flex-col items-center justify-between gap-4">
                    
                    <button
                      onClick={() => handleRemoveItem(item._id)}
                      className="text-[#DC2626] hover:scale-110 transition"
                    >
                      <FaTrash />
                    </button>

                    <div className="flex items-center border border-[#E5E7EB] rounded-lg">
                      <button
                        onClick={() =>
                          handleQuantityChange(item._id, -1)
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="px-4 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item._id, 1)
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>

                    <p className="font-bold text-[#2563EB]">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#E5E7EB]">
            <h2 className="text-xl font-semibold text-[#111827] mb-4">
              Delivery Address
            </h2>

            <div className="bg-gray-50 p-4 rounded-xl border">
              <p className="font-semibold text-[#111827]">
                {user.fullName}
              </p>
              <p className="text-gray-600 mt-2">{user.address}</p>
              <p className="text-gray-600">
                {user.city}, {user.pin}
              </p>
              <p className="text-gray-600 mt-2">
                📞 {user.mobileNumber}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#E5E7EB] sticky top-6">
            
            <h2 className="text-xl font-semibold text-[#111827] mb-6">
              Price Details
            </h2>

            <div className="space-y-3 text-sm">
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
                <span>₹50</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-lg font-bold text-[#111827]">
                <span>Total</span>
                <span className="text-[#2563EB]">
                  ₹{total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Promo */}
            <div className="mt-6">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                disabled={appliedPromo}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB] disabled:bg-gray-100"
              />
              <button
                onClick={handlePromoCodeApply}
                className="w-full bg-[#2563EB] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:text-gray-300"
              >
                Apply Promo
              </button>
            </div>

            {/* Payment */}
            <div className="mt-6 border-t pt-6">
              <h3 className="font-semibold mb-3 text-[#111827]">
                Payment Method
              </h3>

              <div className="space-y-2 text-sm">
                {["credit-card", "upi", "wallet", "cod"].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value)
                      }
                    />
                    <span className="capitalize">
                      {method.replace("-", " ")}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Place Order */}
            <button
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className="w-full mt-6 bg-[#111827] text-white py-3 rounded-xl font-semibold hover:bg-black transition"
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default CheckoutPage;