import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { BiSolidFoodMenu } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
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
    <>
      <div className="p-2 flex flex-col justify-between h-full ">
       <div>
              <div className="h-10 text-xl font-bold flex gap-2 items-center ">
               <button
                 className=" hover:scale-105 ms-3 "
                 onClick={() => setIsCollapsed(!isCollapsed)}
               >
                 {!isCollapsed ? (
                   <RxCross2 className="text-2xl" />
                 ) : (
                   <HiMenuAlt2 className="text-2xl" />
                 )}
               </button>
               {!isCollapsed && (
                 <span className="overflow-hidden text-nowrap ">Restaurant Dashboard</span>
               )}
             </div>
             <hr />
     
             <div className="py-6 space-y-5 w-full">
               {menuItems.map((item, idx) => (
                 <button
                   className={`flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300
                     ${
                       active === item.key
                         ? "bg-accent text-white"
                         : "hover:bg-accent/70 "
                     } 
                   `}
                   onClick={() => setActive(item.key)}
                   key={idx}
                 >
                   {item.icon}
                   {!isCollapsed && item.title}
                 </button>
               ))}
             </div>
       </div>
             <div>
                <button
            className="flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300 hover:bg-red-500 hover:text-white text-red-600"
            onClick={handleLogout}
          >
            <MdLogout />
            {!isCollapsed && "Logout"}
          </button>
             </div>
           </div>
    </>
  );
};

export default RestaurantSideBar;