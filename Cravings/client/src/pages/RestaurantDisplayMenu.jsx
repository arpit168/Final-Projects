import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const { isLogin, role } = useAuth();
  const navigate = useNavigate();
  const data = useLocation().state;
  // console.log("Resturant Menu Page", data);

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
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
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

  // console.log(cart);

  useEffect(() => {
    cart && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetchMenuItems();
  }, [data]);

  return (
    <>
      {/* Restaurant Image */}
      <div className="max-w-2xl mx-auto mt-6 px-4">
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden">
          <img
            src={data.photo.url}
            alt=""
            className="w-full h-72 object-cover"
          />
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-10">
          Our Menu
        </h2>

        <div className="space-y-6">
          {menuItems &&
            menuItems.map((EachItem, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100"
              >
                <div className="flex gap-6">
                  <img
                    src={EachItem.images[0].url}
                    alt=""
                    className="w-44 h-44 object-cover rounded-xl"
                  />

                  <div className="flex justify-between w-full">
                    {/* LEFT INFO */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {EachItem.itemName}
                      </h3>

                      <p className="text-gray-600 mt-2">
                        {EachItem.description}
                      </p>
                      <div className="mt-4 space-y-1 text-sm text-gray-700">
                        <div>
                          <span className="font-semibold">Cuisine:</span>{" "}
                          {EachItem.cuisine}
                        </div>

                        <div>
                          <span className="font-semibold">Type:</span>{" "}
                          <span
                            className="capitalize px-3 py-1 rounded-full text-white text-xs"
                            style={{
                              backgroundColor:
                                EachItem.type === "veg" ? "#16a34a" : "#dc2626",
                            }}
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

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col justify-between items-end">
                      <div>
                        <span className="font-semibold text-gray-700">
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

                      <div className="text-3xl font-bold text-orange-600">
                        ₹{EachItem.price}
                      </div>

                      <button
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl font-semibold transition disabled:bg-gray-300"
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
        <div className="fixed bottom-6 w-full text-nowrap flex justify-center">
          <div className="bg-orange-600 text-white w-100 rounded-full shadow-2xl px-8 py-4  flex justify-between items-center">
            <div className="font-semibold text-lg">
              Items: {cart.cartItem.length}
            </div>

            <div className="flex items-center gap-6">
              <span className="font-bold text-xl">₹{cart.cartValue}</span>

              <button
                className="bg-white text-nowrap text-orange-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition"
                onClick={handleCheckout}
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
