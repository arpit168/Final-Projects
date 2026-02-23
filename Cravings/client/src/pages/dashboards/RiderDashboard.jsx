import React, { useEffect, useState } from "react";
import RiderSideBar from "../../components/riderDashboard/RiderSidebar";
import RiderOverview from "../../components/riderDashboard/RiderOverview";
import RiderProfile from "../../components/riderDashboard/RiderProfile";
import RiderCurrentOrder from "../../components/riderDashboard/RiderCurrentOrder";
import RiderOrderHistory from "../../components/riderDashboard/RiderOrderHistory";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RiderDashboard = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  if (role !== "partner") {
    return (
      <div className="p-6 bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="border border-gray-700 rounded-xl shadow-lg p-8 w-full max-w-2xl text-center bg-gray-800">
          <div className="text-6xl text-red-500 mb-4">⊗</div>
          <div className="text-xl text-gray-200 font-medium">
            You are not logged in as Rider. Please login again.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[90vh] flex bg-gray-900 text-gray-200">
      
      {/* Sidebar */}
      <div
        className={`bg-gray-800 border-r border-gray-700 duration-300 ${
          isCollapsed ? "w-2/12" : "w-3/12"
        }`}
      >
        <RiderSideBar
          active={active}
          setActive={setActive}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>

      {/* Main Content */}
      <div
        className={`${
          isCollapsed ? "w-10/12" : "w-9/12"
        } duration-300 p-6 overflow-y-auto`}
      >
        <div className="bg-gray-800 rounded-xl shadow-md p-6 min-h-full border border-gray-700">
          {active === "overview" && <RiderOverview />}
          {active === "profile" && <RiderProfile />}
          {active === "current-order" && <RiderCurrentOrder />}
          {active === "order-history" && <RiderOrderHistory />}
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;