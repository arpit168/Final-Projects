import React, { useState, useEffect } from "react";
import UserSidebar from "../../components/userDashboard/UserSidebar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import {
  TbChartTreemap,
  TbTransactionRupee,
} from "react-icons/tb";
import { RiProfileLine, RiCustomerService2Fill } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { AnimatePresence, motion } from "motion/react";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { key: "overview", icon: <TbChartTreemap /> },
    { key: "profiles", icon: <RiProfileLine /> },
    { key: "orders", icon: <LuShoppingCart /> },
    { key: "transaction", icon: <TbTransactionRupee /> },
    { key: "helpdesk", icon: <RiCustomerService2Fill /> },
  ];

  return (
    <div className="w-full h-[90vh] flex relative overflow-hidden">

      {/* MOBILE HAMBURGER */}
      {!isDesktop && (
        <button
          className="absolute top-3 left-3 z-50 text-2xl"
          onClick={() => setOpen(true)} setOpen={false}
        >
          <GiHamburgerMenu />
        </button>
      )}
      

     
      <AnimatePresence>
        {!isDesktop && open && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}

          />
        )}
      </AnimatePresence>

    
      <motion.div
        className="h-full bg-blue-950 border-e border-cyan-300 z-50"
        animate={{
          width: isDesktop ? (open ? "20%" : "5%") : open ? "70%" : "0%",
         
        }}
         onClick={()=>setOpen(false)}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => isDesktop && setOpen(true)}
        onMouseLeave={() => isDesktop && setOpen(false)}
      >


        {!isDesktop && open && (
          <button
            className="absolute top-3 right-3 text-white text-xl"
            onClick={() => setOpen(false)}
          >
            <RxCross2 />
          </button>
        )}



        {open && (
          <UserSidebar
            active={active}
            setActive={setActive}
            open={open}
           setOpen={setOpen}
          />
        )}




        {isDesktop && !open && (
          <div className="mt-15 flex flex-col gap-3 items-center">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                
                className={`p-3 rounded text-xl transition
                  ${
                    active === item.key
                      ? "bg-blue-900 text-white"
                      : "bg-blue-100 hover:bg-white"
                  }`}
              >
                {item.icon}
              </button>
            ))}
          </div>
        )}
      </motion.div>


          {/*  sidebar's Main content*/}
      <div className="flex-1 overflow-auto p-4 ms-5">
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
