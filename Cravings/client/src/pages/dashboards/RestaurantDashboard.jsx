import React, { useState, useEffect } from "react";
import RestaurantSideBar from "../../components/restaurantDashboard/RestaurantSidebar";
import RestaurantOverview from "../../components/restaurantDashboard/RestaurantOverview";
import RestaurantProfile from "../../components/restaurantDashboard/RestaurantProfile";
import RestaurantMenu from "../../components/restaurantDashboard/RestaurantMenu";
import RestaurantOrders from "../../components/restaurantDashboard/RestaurantOrders";
import RestaurantEarnings from "../../components/restaurantDashboard/RestaurantEarnings";
import RestaurantHelpDesk from "../../components/restaurantDashboard/RestaurantHelpDesk";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const UserDashboard = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  if (role !== "manager") {
    return (
      <div className="p-3">
        <div className="border border-(--color-secondary-hover) rounded shadow p-5 w-4xl mx-auto text-center bg-(--color-background)">
          <div className="flex justify-center mb-2">
            <RxCross2 className="text-3xl text-(--color-secondary)" />
          </div>
          <div className="text-xl text-(--color-text)">
            You are not logged in as Restaurant Manager. Please login again.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[90vh] flex overflow-hidden">
      {/* SIDEBAR */}
      <div
        className={`bg-(--color-primary) text-(--color-text) duration-300
        ${
          isCollapsed
            ? "md:w-3/60 w-10/60 overflow-hidden"
            : "md:w-10/60"
        }`}
      >
        <RestaurantSideBar
          active={active}
          setActive={setActive}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>

      {/* MAIN CONTENT */}
      <div
        className={`${
          isCollapsed
            ? "w-58/60"
            : "w-full md:overflow-scroll overflow-hidden md:opacity-100 opacity-50"
        } ms-2 overflow-auto duration-300 bg-(--color-background) text-(--color-text)`}
      >
        {active === "overview" && <RestaurantOverview />}
        {active === "profile" && <RestaurantProfile />}
        {active === "menu" && <RestaurantMenu />}
        {active === "orders" && <RestaurantOrders />}
        {active === "earnings" && <RestaurantEarnings />}
        {active === "helpdesk" && <RestaurantHelpDesk />}
      </div>
    </div>
  );
};

export default UserDashboard;
