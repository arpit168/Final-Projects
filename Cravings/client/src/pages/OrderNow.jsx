import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import Loading from "../components/Loading";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderNow = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  const fetchAllRestaurants = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setRestaurants(res?.data?.data || []);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const handleRestaurantClick = (restaurantInfo) => {
    navigate("/restaurantMenu", { state: restaurantInfo });
  };

  if (loading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#F4F6F9] px-6 md:px-12 py-12">
     
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#1E293B]">
          Discover Restaurants
        </h1>
        <p className="text-gray-500 mt-2">
          Choose your favorite place and explore the menu.
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            onClick={() => handleRestaurantClick(restaurant)}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden"
          >
           
            <div className="relative h-52 overflow-hidden">
              <img
                src={restaurant.photo?.url}
                alt={restaurant.restaurantName}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

              <h2 className="absolute bottom-4 left-4 text-orange-500 leading-relaxed tracking-wider text-xl font-semibold">
                {restaurant.restaurantName}
              </h2>
            </div>

           
            <div className="p-5 space-y-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#2563EB]/10 text-[#2563EB] text-xs px-3 py-1 rounded-full font-medium">
                  {restaurant.cuisine}
                </span>

                <span className="bg-[#F97316]/10 text-[#F97316] text-xs px-3 py-1 rounded-full font-medium">
                  {restaurant.city}
                </span>
              </div>

              
              <div className="text-sm text-gray-600 space-y-1">
                <p>{restaurant.address}</p>
                <p>📞 {restaurant.mobileNumber}</p>
                <p>
                  Status:{" "}
                  <span
                    className={`font-medium ${
                      restaurant.isActive
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {restaurant.isActive ? "Active" : "Closed"}
                  </span>
                </p>
              </div>

              
              <div className="flex justify-end items-center text-[#F97316] font-semibold gap-2 transition-all duration-300 group-hover:gap-3">
                Explore Menu
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {!loading && restaurants.length === 0 && (
        <div className="text-center text-gray-500 mt-16 text-lg">
          No restaurants available.
        </div>
      )}
    </section>
  );
};

export default OrderNow;
