import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const { setUser, setIsLogin } = useAuth();

  const menuItems = [
    { key: "overview", title: "Overview", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profiles", icon: <ImProfile /> },
    { key: "orders", title: "Order", icon: <TiShoppingCart /> },
    { key: "transactions", title: "Transaction", icon: <TbTransactionRupee /> },
    { key: "helpdesk", title: "Help Desk", icon: <RiCustomerService2Fill /> },
  ];

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      sessionStorage.removeItem("CravingUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  return (
    <div className="h-full flex flex-col justify-between bg-[#111827] border-r border-[#1F2937] px-3 py-4">
      
      {/* Top Section */}
      <div className="flex flex-col h-full justify-between">
        
        <div>
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 text-gray-200">
            <button
              className="hover:scale-105 transition duration-300"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {!isCollapsed ? (
                <RxCross2 className="text-2xl text-gray-300" />
              ) : (
                <HiMenuAlt2 className="text-2xl text-gray-300" />
              )}
            </button>

            {!isCollapsed && (
              <h1 className="text-lg font-semibold tracking-wide">
                User Dashboard
              </h1>
            )}
          </div>

          <div className="h-px bg-[#1F2937] mb-4" />

       <div className="flex flex-col h-full justify-between">
           {/* Menu */}
          <div className="space-y-2">
            {menuItems.map((item, idx) => {
              const isActive = active === item.key;

              return (
                <button
                  key={idx}
                  onClick={() => setActive(item.key)}
                  className={`flex items-center gap-3 w-full h-11 rounded-xl px-3 text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#2563EB] text-white shadow-lg"
                      : "text-gray-300 hover:bg-[#1F2937] hover:text-white"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!isCollapsed && <span>{item.title}</span>}
                </button>
              );
            })}
          </div>
            {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full h-11 rounded-xl px-3 text-sm font-medium
                     text-gray-400 hover:bg-[#1F2937] hover:text-white transition-all duration-300"
        >
          <MdLogout className="text-lg" />
          {!isCollapsed && <span>Logout</span>}
        </button>
       </div>
        </div>

      
      </div>
    </div>
  );
};

export default UserSideBar;
