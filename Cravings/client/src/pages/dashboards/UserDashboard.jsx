import React, { useState } from "react";
import UserSidebar from "../../components/userDashboard/UserSidebar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(true); // 👈 default open

  return (
    <div className="w-full h-[90vh] flex relative">

      {/* ✅ Hamburger (ALL screen sizes) */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-4 left-4 z-50 text-2xl scale-102 duration-1000 "
      >
        {open  ? <RxCross2 setOpen/> : <GiHamburgerMenu />}
      </button>
      

      {/* ✅ Sidebar */}
      <div
        className={`h-full bg-(--color-background)
          transition-all duration-300
          ${open ? "md:w-1/5 w-7/10" : "w-0 overflow-hidden"}
        `}
      >
        
        {open && (
          <UserSidebar active={active} setActive={setActive} />
        )}
      </div>

      {/* ✅ Main Content */}
      <div className="flex-1 p-6 ms-10">
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
