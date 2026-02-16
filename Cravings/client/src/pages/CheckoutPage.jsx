import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || null,
  );

  useEffect(() => {
    if (!cart) {
      toast.error("Cart is empty");
      navigate("/");
    }
  }, [cart, navigate]);

  const updateCartState = (updatedItems) => {
    const updatedValue = updatedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    const updatedCart = {
      ...cart,
      cartItem: updatedItems,
      cartValue: updatedValue,
    };

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrease = (id) => {
    const updatedItems = cart.cartItem.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    updateCartState(updatedItems);
  };

  const handleDecrease = (id) => {
    const updatedItems = cart.cartItem
      .map((item) =>
        item._id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0); // remove if quantity 0

    if (updatedItems.length === 0) {
      localStorage.removeItem("cart");
      setCart(null);
      toast.success("Cart cleared");
      navigate("/");
    } else {
      updateCartState(updatedItems);
    }
  };

  const handleRemoveItem = (id) => {
    const updatedItems = cart.cartItem.filter((item) => item._id !== id);

    if (updatedItems.length === 0) {
      localStorage.removeItem("cart");
      setCart(null);
      toast.success("Cart cleared");
      navigate("/");
    } else {
      updateCartState(updatedItems);
    }
  };

  const handlePlaceOrder = () => {
    toast.success("Order Placed Successfully 🎉");
    localStorage.removeItem("cart");
    navigate("/");
  };

  if (!cart) return null;

  return (
    <div className="w-full min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* LEFT SIDE - CART ITEMS */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Order</h2>

          <div className="space-y-6">
            {cart.cartItem.map((item) => (
              <div key={item._id} className="flex gap-6 border-b pb-6">
                <img
                  src={item.images[0].url}
                  alt=""
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex justify-between w-full">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.itemName}
                    </h3>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => handleDecrease(item._id)}
                        className="w-8 h-8 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="font-semibold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleIncrease(item._id)}
                        className="w-8 h-8 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm font-medium mt-3">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Order Summary
          </h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>
                {cart.cartItem.reduce(
                  (total, item) => total + item.quantity,
                  0,
                )}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{cart.cartValue}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹40</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{cart.cartValue + 40}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Place Order
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full mt-3 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
