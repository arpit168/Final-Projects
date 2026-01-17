import React, { useState } from "react";
import UserSidebar from "../../components/userDashboard/UserSidebar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { TbChartTreemap } from "react-icons/tb";
import { RiProfileLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AnimatePresence , motion } from "motion/react";


const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(true);
  const sidebarVariants = {
  closed: {
    width: "5%",
    opacity: 1,
    transition: { duration: 0.5 }
  },
  open: {
    width: "20%",
    opacity: 1,
    transition: { duration: 0.5 }
  }
};
  const menuItems = [
    { key: "overview", title: "Overview", icon: <TbChartTreemap /> },
    { key: "profiles", title: "Profile", icon: <RiProfileLine /> },
    { key: "orders", title: "Orders", icon: <LuShoppingCart /> },
    { key: "transaction", title: "Transaction", icon: <TbTransactionRupee /> },
    { key: "helpdesk", title: "Help Desk", icon: <RiCustomerService2Fill /> },
  ];

  return (
    <div className="w-full  h-[90vh] flex relative overflow-hidden">
      <AnimatePresence>
  <motion.div
    variants={sidebarVariants}
    initial="closed"
    animate={open ? "open" : "closed"}
    exit="closed"
    className="h-full w-1/10   bg-cyan-50 border-e border-cyan-300  overflow-hidden"
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
  >
   
    {open && (
      <UserSidebar
        active={active}
        setActive={setActive}
        open={open}
      />
    )}
    

    {/* Icon Sidebar */}
    {!open && (
      <div className="mt-3 flex flex-col gap-3 py-2 ms-4  ">
       
        
       <div className="text-xl font-bold flex ms-3    ">
         <GiHamburgerMenu/> 
        </div>
        <hr />

        <div className="grid gap-2 ms-2 font-semibold  ">
          {menuItems.map((item, idx)=>(
            <button
            onClick={() => setActive(item.key )}  
            className={`flex gap-2 items-center p-3 rounded transition
    ${
      active === item.key
        ? "bg-cyan-600 text-white"
        : "bg-cyan-100 hover:bg-white"
    }`}
          >
            {item.icon}
            {open && item.title}
            
            
          </button>
          ))}
          

         
        </div>
      </div>
    )}
  </motion.div>
</AnimatePresence>

{/* Sidebar's Content area  */}


      <div className="flex-1 ms-3  overflow-auto">
        {active === "overview" && <UserOverview />}
        {active === "profiles" && <UserProfile />}
        {active === "orders" && <UserOrders />}
        {active === "transaction" && <UserTransaction />}
        {active === "helpdesk" && <UserHelpDesk />}
      </div>
    </div>
  );
};

export default UserDashboard;
