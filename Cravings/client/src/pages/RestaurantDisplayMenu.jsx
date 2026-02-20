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

  /* ================= FETCH MENU ================= */
  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/public/restaurant/menu/${data._id}`);
      setMenuItems(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  /* ================= CLEAR CART ================= */
  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCart();
    setCartFlag([]);
  };

  /* ================= ADD TO CART ================= */
  const handleAddToCart = (NewItem) => {
    if (cart) {
      if (cart.resturantID === NewItem.resturantID) {
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
        resturantID: NewItem.resturantID,
        cartItem: [{ ...NewItem, quantity: 1 }],
        cartValue: Number(NewItem.price),
      });
      setCartFlag((prev) => [...prev, NewItem._id]);
    }
  };

  /* ================= CHECKOUT ================= */
  const handleCheckout = () => {
    isLogin && role === "customer"
      ? (localStorage.setItem("cart", JSON.stringify(cart)),
        navigate("/checkout-page"))
      : (toast.error("Please Login as Customer"), navigate("/login"));
  };

  /* ================= EFFECTS ================= */

  // Persist cart in localStorage
  useEffect(() => {
    cart && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch menu when restaurant changes
  useEffect(() => {
    fetchMenuItems();
  }, [data]);

  // ✅ NEW: Sync cartFlag from existing cart (Fix Back Navigation Issue)
  useEffect(() => {
    if (cart && cart.cartItem) {
      const ids = cart.cartItem.map((item) => item._id);
      setCartFlag(ids);
    }
  }, []);

  return (
    <>
      {/* ================= RESTAURANT IMAGE ================= */}
      <div className="max-w-7xl mx-auto mt-6 p-6 bg-white rounded-2xl shadow-lg border">
        <img
          src={data.photo.url}
          alt="Restaurant"
          className="w-60 h-60 object-cover rounded-xl mx-auto shadow-md"
        />
      </div>

      {/* ================= MENU SECTION ================= */}
      <div className="max-w-7xl mx-auto mt-6 p-8 bg-linear-to-br from-gray-50 to-white rounded-2xl shadow-xl border">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-8">
          🍽 Menu
        </h2>

        <div className="space-y-6">
          {menuItems &&
            menuItems.map((EachItem, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex gap-6">
                  <img
                    src={EachItem.images[0].url}
                    alt={EachItem.itemName}
                    className="w-44 h-44 object-cover rounded-xl shadow"
                  />

                  <div className="flex justify-between w-full">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {EachItem.itemName}
                      </h3>

                      <p className="text-gray-500 text-sm mt-2">
                        {EachItem.description}
                      </p>

                      <div className="mt-4 space-y-2 text-sm text-gray-700">
                        <div>
                          <span className="font-semibold text-gray-900">
                            Cuisine:
                          </span>{" "}
                          {EachItem.cuisine}
                        </div>

                        <div>
                          <span className="font-semibold text-gray-900">
                            Type:
                          </span>{" "}
                          <span
                            className="capitalize px-3 py-1 rounded-full text-white text-xs"
                            style={{
                              backgroundColor:
                                EachItem.type === "veg"
                                  ? "#16a34a"
                                  : "#dc2626",
                            }}
                          >
                            {EachItem.type}
                          </span>
                        </div>

                        <div>
                          <span className="font-semibold text-gray-900">
                            Serving Size:
                          </span>{" "}
                          {EachItem.servingSize}
                        </div>

                        <div>
                          <span className="font-semibold text-gray-900">
                            Preparation Time:
                          </span>{" "}
                          {EachItem.preparationTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                      <div>
                        <span className="font-semibold text-gray-900">
                          Availability:
                        </span>{" "}
                        <span
                          className={`capitalize px-3 py-1 rounded-full text-xs font-medium ${
                            EachItem.availability === "available"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {EachItem.availability}
                        </span>
                      </div>

                      <div className="text-3xl font-extrabold text-indigo-600">
                        ₹{EachItem.price}
                      </div>

                      <button
                        onClick={() => handleAddToCart(EachItem)}
                        disabled={cartFlag.includes(EachItem._id)}
                        className="mt-4 px-6 py-2 rounded-xl font-semibold text-white transition-all duration-300 
                        bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
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

      {/* ================= CART FLOATING BAR ================= */}
      {cart && (
        <div className="fixed bottom-6 w-full flex justify-center">
          <div className="bg-indigo-700 text-white w-3xl rounded-3xl shadow-2xl px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg">
                Items: {cart.cartItem.length}
              </span>

              <button
                onClick={handleClearCart}
                className="p-2 rounded-full hover:bg-white/20 transition"
              >
                <FaRegTrashAlt />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-bold text-lg">
                ₹ {cart.cartValue}
              </span>

              <button
                onClick={handleCheckout}
                className="bg-white text-indigo-700 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantDisplayMenu;
