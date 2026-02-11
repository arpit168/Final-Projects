import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { BiSolidFoodMenu } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const RestaurantSideBar = ({
  active,
  setActive,
  isCollapsed,
  setIsCollapsed,
}) => {
  const { setUser, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { key: "overview", title: "Overview", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icon: <ImProfile /> },
    { key: "menu", title: "Menu", icon: <BiSolidFoodMenu /> },
    { key: "orders", title: "Orders", icon: <TiShoppingCart /> },
    { key: "earnings", title: "Earnings", icon: <FaMoneyBillWave /> },
    { key: "helpdesk", title: "Help Desk", icon: <RiCustomerService2Fill /> },
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
    <div className="p-4 flex flex-col justify-between h-full bg-[#111827] text-[#E5E7EB]">

      {/* Top Section */}
      <div>
        <div className="h-10 text-lg font-semibold flex gap-3 items-center">
          <button
            className="hover:scale-110 transition duration-200 ms-2"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {!isCollapsed ? (
              <RxCross2 className="text-2xl" />
            ) : (
              <HiMenuAlt2 className="text-2xl" />
            )}
          </button>
          {!isCollapsed && (
            <span className="overflow-hidden whitespace-nowrap">
              Restaurant Dashboard
            </span>
          )}
        </div>

        <hr className="border-[#1F2937] my-4" />

        <div className="space-y-4">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(item.key)}
              className={`flex gap-3 items-center text-base px-3 rounded-lg h-11 w-full whitespace-nowrap overflow-hidden transition-all duration-300
                ${
                  active === item.key
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "hover:bg-[#1E40AF] hover:text-white"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <button
          onClick={handleLogout}
          className="flex gap-3 items-center text-base px-3 rounded-lg h-11 w-full transition-all duration-300 text-red-400 hover:bg-red-600 hover:text-white"
        >
          <MdLogout className="text-lg" />
          {!isCollapsed && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default RestaurantSideBar;
