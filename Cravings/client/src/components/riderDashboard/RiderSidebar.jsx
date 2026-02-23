import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { FaHistory } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RiderSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const { setUser, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { key: "overview", title: "Overview", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icon: <ImProfile /> },
    { key: "current-order", title: "Current Order", icon: <TiShoppingCart /> },
    { key: "order-history", title: "Order History", icon: <FaHistory /> },
  ];

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      navigate("/");
      sessionStorage.removeItem("CravingUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  return (
    <div className="p-4 flex flex-col justify-between h-full bg-gray-800 text-gray-200">
      
      {/* Top Section */}
      <div>
        <div className="h-12 text-xl font-bold flex gap-4 items-center mb-4">
          <button
            className="hover:scale-105 transition duration-200 text-gray-300 hover:text-white"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <GiHamburgerMenu size={22} />
          </button>

          {!isCollapsed && (
            <span className="overflow-hidden text-nowrap tracking-wide">
              Rider Dashboard
            </span>
          )}
        </div>

        <hr className="border-gray-700" />

        {/* Menu Items */}
        <div className="py-6 space-y-4 w-full">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(item.key)}
              className={`flex gap-3 items-center text-base ps-3 rounded-xl h-11 w-full text-nowrap overflow-hidden duration-300 transition-all
                ${
                  active === item.key
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              `}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div>
        <button
          onClick={handleLogout}
          className="flex gap-3 items-center text-base ps-3 rounded-xl h-11 w-full duration-300 transition-all
          text-red-400 hover:bg-red-600 hover:text-white"
        >
          <MdLogout size={20} />
          {!isCollapsed && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default RiderSideBar;