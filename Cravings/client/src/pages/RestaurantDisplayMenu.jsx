import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaRegTrashAlt } from "react-icons/fa";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const { isLogin, role } = useAuth();
  const navigate = useNavigate();
  const data = useLocation().state;

  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [cartFlag, setCartFlag] = useState([]);

  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/public/restaurant/menu/${data._id}`);
      setMenuItems(res.data.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCart();
    setCartFlag([]);
  };

  const handleAddToCart = (NewItem) => {
    if (cart) {
      if (cart.resturantID === NewItem.resturantID._id) {
        setCart((prev) => ({
          ...prev,
          cartItem: [...prev.cartItem, { ...NewItem, quantity: 1 }],
          cartValue: Number(prev.cartValue) + Number(NewItem.price),
        }));
        setCartFlag((prev) => [...prev, NewItem._id]);
      } else {
        toast.error("Clear the cart first");
      }
    } else {
      setCart({
        resturantID: NewItem.resturantID._id,
        cartItem: [{ ...NewItem, quantity: 1 }],
        cartValue: Number(NewItem.price),
      });
      setCartFlag((prev) => [...prev, NewItem._id]);
    }
  };

  const handleCheckout = () => {
    isLogin && role === "customer"
      ? (localStorage.setItem("cart", JSON.stringify(cart)),
        navigate("/checkout-page"))
      : (toast.error("Please Login as Customer"), navigate("/login"));
  };

  useEffect(() => {
    cart && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetchMenuItems();
  }, [data]);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-slate-100 to-gray-200 pb-28">

      {/* Restaurant Banner */}
      <div className="max-w-xl mx-auto p-6 mt-6 bg-white rounded-2xl shadow-xl border border-gray-200">
        <img
          src={data.photo.url}
          alt=""
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>

      {/* Menu Section */}
      <div className="max-w-6xl mx-auto mt-8 px-6">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          🍽 Restaurant Menu
        </h2>

        <div className="space-y-6">
          {menuItems &&
            menuItems.map((EachItem, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">

                  {/* Image */}
                  <img
                    src={EachItem.images[0].url}
                    alt=""
                    className="w-full md:w-48 h-48 object-cover rounded-xl shadow"
                  />

                  {/* Details */}
                  <div className="flex justify-between w-full">

                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {EachItem.itemName}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        {EachItem.description}
                      </p>

                      <div className="mt-4 space-y-2 text-sm text-gray-600">
                        <div>
                          <span className="font-semibold">Cuisine:</span>{" "}
                          {EachItem.cuisine}
                        </div>

                        <div>
                          <span className="font-semibold">Type:</span>{" "}
                          <span
                            className={`capitalize px-3 py-1 rounded-full text-white text-xs ${
                              EachItem.type === "veg"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          >
                            {EachItem.type}
                          </span>
                        </div>

                        <div>
                          <span className="font-semibold">Serving Size:</span>{" "}
                          {EachItem.servingSize}
                        </div>

                        <div>
                          <span className="font-semibold">
                            Preparation Time:
                          </span>{" "}
                          {EachItem.preparationTime}
                        </div>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col justify-between items-end">

                      <div>
                        <span className="font-semibold text-sm">
                          Availability:
                        </span>{" "}
                        <span
                          className={`capitalize px-3 py-1 rounded-full text-xs font-semibold ${
                            EachItem.availability === "available"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {EachItem.availability}
                        </span>
                      </div>

                      <div className="text-2xl font-bold text-indigo-600 mt-4">
                        ₹{EachItem.price}
                      </div>

                      <button
                        className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        onClick={() => handleAddToCart(EachItem)}
                        disabled={cartFlag.includes(EachItem._id)}
                      >
                        {cartFlag.includes(EachItem._id)
                          ? "Added"
                          : "Add to Cart"}
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Floating Cart Bar */}
      {cart && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center px-4">
          <div className="bg-indigo-600 text-white rounded-3xl shadow-2xl w-full max-w-3xl py-4 px-6 flex justify-between items-center">

            <div className="flex items-center gap-4 font-semibold">
              <span>Items: {cart.cartItem.length}</span>
              <button
                className="p-2 rounded-full hover:scale-120 duration-300 hover:bg-white/20 transition"
                onClick={handleClearCart}
              >
                <FaRegTrashAlt />
              </button>
            </div>

            <div className="flex items-center gap-6 font-semibold">
              <span>₹ {cart.cartValue}</span>

              <button
                className="bg-white text-indigo-600 hover:scale-105 duration-500 px-6 py-2 rounded-xl font-bold hover:bg-gray-100 transition"
                onClick={handleCheckout}
              >
                Proceed to Checkout →
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDisplayMenu;
