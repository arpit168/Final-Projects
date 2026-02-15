import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const data = useLocation().state;

  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [count, setCount] = useState(0);

  const fetchMenuItems = async () => {
    if (!data?._id) return;

    setLoading(true);
    try {
      const res = await api.get(`/public/restaurant/menu/${data._id}`);
      setMenuItems(res?.data?.data || []);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, [data]);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8F9FB] px-10 py-10 space-y-10">
      <div className="w-full bg-white rounded-2xl p-8 flex items-center gap-8 border shadow-md shadow-red-200 border-gray-100">
        <img
          src={data?.photo?.url}
          alt="restaurant"
          className="w-36 h-36 object-cover rounded-xl shadow-md"
        />
        <div>
          <h1 className="text-4xl font-bold text-[#1E293B]">{data?.name}</h1>
          <p className="text-gray-500 mt-3 text-lg">
            Discover our freshly prepared menu items.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold  text-[#0F172A] border-b-4 border-[#F97316] pb-2 inline-block">
          Menu
        </h2>
        <span className="text-sm bg-[#F97316] text-white px-4 py-1 rounded-full shadow">
          {menuItems.length} Items
        </span>
      </div>

      {loading && (
        <div className="text-center py-10 text-[#F97316] font-semibold text-lg">
          Loading menu...
        </div>
      )}

      <div className="w-full space-y-6 ">
        {menuItems.map((item) => (
          <div
            key={item._id}
            className="w-full bg-white rounded-2xl shadow-md p-6 flex justify-between gap-8 border border-gray-100 hover:shadow-xl hover:scale-101 transition duration-300  hover:shadow-blue-300"
          >
            <div className="flex gap-6">
              <img
                src={item?.images?.[0]?.url}
                alt={item?.itemName}
                className="w-32 h-32 object-cover rounded-lg shadow-sm"
              />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-[#1E293B]">
                  {item?.itemName}
                </h3>

                <p className="text-gray-600 max-w-xl">{item?.description}</p>

                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    {item?.cuisine}
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    {item?.servingSize}
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">
                    {item?.preparationTime}
                  </span>
                </div>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item?.availability === "available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item?.availability}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between items-end">
              <span className="text-2xl font-bold text-[#F97316]">
                ₹{item?.price}
              </span>



              {/* -------------------------------------------------------------------------------------- */}
              <div className="bg-orange-400 px-2 flex items-center gap-3 font-bold font-2xl rounded text-white">
                <button onClick={decrease} className=" text-2xl font-bold">
                  -
                </button>{" "}
                {count}
                <button onClick={increase} className="text-2xl font-bold">
                  +
                </button>
              </div>
              {/* ------------------------------------------------------------------------------------- */}



              <button className="bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-500 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {!loading && menuItems.length === 0 && (
        <div className="text-center text-gray-500 py-10 text-lg">
          No menu items available.
        </div>
      )}
    </div>
  );
};

export default RestaurantDisplayMenu;
