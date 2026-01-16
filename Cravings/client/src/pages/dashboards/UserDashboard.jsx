import React, { useState } from "react";
import UserSidebar from "../../components/userDashboard/UserSidebar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/userProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import { GiHamburgerMenu } from "react-icons/gi";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  return (
    <>
      <div className="w-full h-[90vh] flex ">
        <div className=" w-3/14 bg-(--color-background) ">
         
         <GiHamburgerMenu/> <UserSidebar active={active} setActive={setActive} />
        </div>
        <div className="b w-11/14">
        {active === 'overview' && <UserOverview/>}
        {active === 'profiles' && <UserProfile/>}
        {active === 'orders' && <UserOrders/>}
        {active === 'transaction' && <UserTransaction/>}
        {active === 'helpdesk' && <UserHelpDesk/>}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
