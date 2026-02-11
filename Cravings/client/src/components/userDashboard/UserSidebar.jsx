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
    <div className="p-2 flex flex-col justify-between h-full bg-white border-r border-gray-200">
      <div>
        {/* Header */}
        <div className="h-10 text-xl font-bold flex gap-5 items-center mb-3 text-[#161E54]">
          <button
            className="ms-2 hover:scale-105 transition"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {!isCollapsed ? (
              <RxCross2 className="text-2xl text-[#161E54]" />
            ) : (
              <HiMenuAlt2 className="text-2xl text-[#161E54]" />
            )}
          </button>
          {!isCollapsed && <span className="overflow-hidden text-nowrap">User Dashboard</span>}
        </div>
        <hr className="border-gray-300" />

        {/* Menu */}
        <div className="py-6 space-y-5 w-full">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(item.key)}
              className={`flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full overflow-hidden duration-300
                ${
                  active === item.key
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                }`}
            >
              {item.icon}
              {!isCollapsed && item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full overflow-hidden duration-300
                   text-gray-600 hover:bg-gray-200 hover:text-gray-900"
      >
        <MdLogout />
        {!isCollapsed && "Logout"}
      </button>
    </div>
  );
};

export default UserSideBar;
