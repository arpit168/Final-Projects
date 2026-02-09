import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const restaurantId = useParams().id;

  const [restaurantData, setRestaurantData] = useState();

  const fetchRestaurantMenu = async () => {
    try {
      const res = await api.get(`/public/restaurant-menu/${restaurantId}/1`);
      setRestaurantData(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, [restaurantId]);

  return (
    <div className="min-h-screen bg-background text-text p-4">
      <div className="border border-buttons rounded-lg p-4 bg-background">
        <h2 className="text-xl font-semibold text-text mb-2">
          Restaurant Menu
        </h2>

        {!restaurantData ? (
          <p className="text-text/60">
            Loading menu...
          </p>
        ) : (
          <p className="text-text/70">
            Menu data loaded successfully.
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantDisplayMenu;
