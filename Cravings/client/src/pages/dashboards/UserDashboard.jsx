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

  if (role !== "customer") {
    return (
      <div className="p-3">
        <div className="border border-(--color-secondary-hover) rounded shadow p-5 w-4xl mx-auto text-center bg-(--color-background)">
          <div className="flex justify-center mb-2">
            <RxCross2 className="text-3xl text-(--color-secondary)" />
          </div>
          <div className="text-xl text-(--color-text)">
            You are not logged in as Customer. Please login again.
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
        <UserSideBar
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
        {active === "overview" && <UserOverview />}
        {active === "profile" && <UserProfile />}
        {active === "orders" && <UserOrders />}
        {active === "transactions" && <UserTransactions />}
        {active === "helpdesk" && <UserHelpDesk />}
      </div>
    </div>
  );
};

export default UserDashboard;
