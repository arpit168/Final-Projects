import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";

const OrderNow = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState();
  const [loading, setLoading] = useState(false);

  const fetchAllRestaurant = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setRestaurants(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRestaurant();
  }, []);

  const handleResturantClick = (restaurantID) => {
    navigate(`/restaurant/${restaurantID}`);
  };

  return (
    <>
      <div className="bg-background p-3 h-screen">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-3xl font-bold text-text">
            Order Now
          </h1>
          <p className="text-text/70 mt-2">
            Browse our menu and place your order now!
          </p>
        </div>

        {/* Restaurant List */}
        {restaurants ? (
          <div className="grid grid-cols-4 gap-3">
            {restaurants.map((restaurant, idx) => (
              <div
                key={idx}
                className="bg-background rounded p-3 cursor-pointer border border-buttons
                hover:shadow-lg hover:border-primary transition"
                onClick={() => handleResturantClick(restaurant._id)}
              >
                <div className="font-semibold text-text mb-2">
                  {restaurant.restaurantName}
                </div>

                <div className="flex gap-2 flex-wrap">
                  {restaurant.cuisine
                    .split(", ")
                    .slice(0, 2)
                    .map((cusine, idx) => (
                      <span
                        key={idx}
                        className="py-1 px-3 bg-secondary hover:bg-secondary-hover
                        text-buttons rounded-2xl text-sm capitalize transition"
                      >
                        {cusine.toLowerCase()}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-text/60">
            {loading ? "Loading restaurants..." : "No restaurants found"}
          </div>
        )}
      </div>
    </>
  );
};

export default OrderNow;
