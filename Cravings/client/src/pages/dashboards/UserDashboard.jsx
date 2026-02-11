import React, { useState, useEffect } from "react";
import UserSideBar from "../../components/userDashboard/UserSidebar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransactions from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
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
  if (role !== "customer") {
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
            You are not logged in as a Customer.
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
        className={`bg-indigo-600 text-white shadow-lg transition-all duration-300
        ${isCollapsed ? "md:w-20 w-24" : "md:w-64 w-64"}`}
      >
        <UserSideBar
          active={active}
          setActive={setActive}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[85vh]">
            
            {active === "overview" && <UserOverview />}
            {active === "profile" && <UserProfile />}
            {active === "orders" && <UserOrders />}
            {active === "transactions" && <UserTransactions />}
            {active === "helpdesk" && <UserHelpDesk />}

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
