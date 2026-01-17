import React, { useState } from "react";
import UserSidebar from "../../components/userDashboard/UserSidebar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/userProfile";
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
  const [open, setOpen] = useState(true); // 👈 default open
  const sidebarVariants = {
  closed: {
    width: "5%",
    opacity: 0.5,
    transition: { duration: 0.3 }
  },
  open: {
    width: "20%",
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

  return (
    <div className="w-full  h-[90vh] flex relative overflow-hidden">
      <AnimatePresence>
  <motion.div
    variants={sidebarVariants}
    initial="closed"
    animate={open ? "open" : "closed"}
    exit="closed"
    className="h-full w-full  bg-white overflow-hidden"
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
      <div className="mt-14 flex flex-col gap-3 text-2xl ms-4  ">
        <TbChartTreemap
          className="bg-cyan-100 w-8  h-8 p-1.5 rounded cursor-pointer"
          onClick={() => setActive("overview")}
        />
        <RiProfileLine
          className="bg-cyan-100 w-8 h-8 p-1.5 rounded cursor-pointer"
          onClick={() => setActive("profile")}
        />
        <LuShoppingCart
          className="bg-cyan-100 w-8 h-8 p-1.5 rounded cursor-pointer"
          onClick={() => setActive("orders")}
        />
        <TbTransactionRupee
          className="bg-cyan-100 w-8 h-8 p-1.5 rounded cursor-pointer"
          onClick={() => setActive("transaction")}
        />
        <RiCustomerService2Fill
          className="bg-cyan-100 w-8 h-8 p-1.5 rounded cursor-pointer"
          onClick={() => setActive("helpdesk")}
        />
      </div>
    )}
  </motion.div>
</AnimatePresence>


      <div className="flex-1  overflow-auto">
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
