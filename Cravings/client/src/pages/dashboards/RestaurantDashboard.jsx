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

  // 🔴 Unauthorized View
  if (role !== "manager") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-2xl text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full">
              <RxCross2 className="text-4xl text-red-600" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Access Denied
          </h2>
          <p className="text-gray-600">
            You are not logged in as a Restaurant Manager.
            Please login with the correct account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex bg-gray-100 overflow-hidden">
      
      {/* SIDEBAR */}
      <div
        className={`bg-white border-r border-gray-200 shadow-sm transition-all duration-300
        ${isCollapsed ? "md:w-20 w-24" : "md:w-64 w-64"}`}
      >
        <RestaurantSideBar
          active={active}
          setActive={setActive}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className={`flex-1 overflow-y-auto transition-all duration-300`}>
        <div className="p-6">
          <div className="   rounded-2xl shadow-sm p-6 min-h-[85vh]">
            
            {active === "overview" && <RestaurantOverview />}
            {active === "profile" && <RestaurantProfile />}
            {active === "menu" && <RestaurantMenu />}
            {active === "orders" && <RestaurantOrders />}
            {active === "earnings" && <RestaurantEarnings />}
            {active === "helpdesk" && <RestaurantHelpDesk />}

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
