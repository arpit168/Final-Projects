import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/Api";
import { toast } from "react-hot-toast";
import { motion } from "motion/react";

const OrderNowcopy = () => {
  const navigate = useNavigate();

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH RESTAURANTS ================= */
  const fetchAllRestaurant = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setRestaurants(res?.data?.data || []);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to fetch restaurants");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRestaurant();
  }, []);

  /* ================= NAVIGATE ================= */
  const handleRestaurantClick = (restaurant) => {
    navigate("/restaurantMenuCopy", { state: restaurant });
  };

  return (
    <div className="min-h-screen bg-background text-text px-6 py-10">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Order Now
        </h1>
        <p className="opacity-70 mt-3">
          Browse top restaurants and satisfy your cravings 🍽️
        </p>
      </div>

      {/* ================= LOADING ================= */}
      {loading && (
        <div className="text-center py-20">
          <div className="animate-pulse text-primary font-semibold">
            Loading restaurants...
          </div>
        </div>
      )}

      {/* ================= EMPTY STATE ================= */}
      {!loading && restaurants.length === 0 && (
        <div className="text-center py-20 opacity-70">
          No restaurants available at the moment.
        </div>
      )}

      {/* ================= RESTAURANT GRID ================= */}
      {!loading && restaurants.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {restaurants.map((restaurant) => (
            <motion.div
              key={restaurant._id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleRestaurantClick(restaurant)}
              className="bg-secondary rounded-3xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
            >

              {/* Restaurant Image */}
              <div className="h-40 bg-background flex items-center justify-center">
                {restaurant.image ? (
                  <img
                    src={restaurant.image}
                    alt={restaurant.restaurantName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="opacity-50 text-sm">
                    No Image Available
                  </span>
                )}
              </div>

              {/* Restaurant Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-3">
                  {restaurant.restaurantName}
                </h3>

                {/* Cuisine Tags */}
                <div className="flex flex-wrap gap-2">
                  {(restaurant.cuisine?.split(",") || [])
                    .slice(0, 2)
                    .map((cuisine, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-primary text-background capitalize"
                      >
                        {cuisine.trim()}
                      </span>
                    ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      )}

    </div>
  );
};

export default OrderNowcopy;
