import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import Loading from "../components/Loading";
import { FaArrowRight } from "react-icons/fa";

const OrderNow = () => {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  const fetchAllRestaurants = async () => {
    try {
      setLoading(true);
      const res = await api.get("/public/allRestaurants");
      setRestaurants(res.data.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  if (loading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-200 px-4 sm:px-6 md:px-10 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Discover Restaurants
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            className="group bg-gray-300 rounded-2xl shadow-9xl hover:shadow-blue-950 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={restaurant.photo?.url}
                alt={restaurant.restaurantName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

              <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-md">
                {restaurant.restaurantName}
              </h2>
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-3">
              <div className="flex flex-wrap gap-2">
                <div className="bg-indigo-600/10 text-indigo-600 text-xs px-3 py-1 rounded-full font-medium">
                  {restaurant.cuisine}
                </div>

                <div className="bg-orange-500/10 text-orange-500 text-xs px-3 py-1 rounded-full font-medium">
                  {restaurant.city}
                </div>
              </div>

             <div className="grid gap-2">
               <div className="bg-gray-500/10 text-green-500 text-xs px-3 py-1 rounded-full font-medium w-fit">
                {restaurant.address}
              </div>

              <div className="bg-gray-500/10 text-red-500 text-xs px-3 py-1 rounded-full font-medium w-fit">
                {restaurant.mobileNumber}
              </div>
             </div>

              <div className="flex justify-end items-center text-orange-500 font-semibold gap-2 transition-all duration-300 group-hover:gap-3">
                Explore Menu
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderNow;
