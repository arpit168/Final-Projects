import React, { useState } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransactions from "../../components/userDashboard/UserTransaction"
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(true);
  

  return (
    <>
      <div className="w-full h-[90vh] flex overflow-hidden">
        <div
          className={`bg-blue-950 text-white duration-300  ${isCollapsed ? "md:w-3/60 w-10/60  overflow-hidden" : "md:w-10/60 "}  `}
        >
          <UserSideBar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
       
        <div className={`${isCollapsed ? "w-58/60  " : "w-full md:overflow-scroll overflow-hidden md:opacity-100 opacity-50  "}  ms-2 overflow-auto duration-300`}>
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transactions" && <UserTransactions />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;