import React, { useState } from "react";
import { TbChartTreemap } from "react-icons/tb";
import { RiProfileLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSidebar = ({ active, setActive, open }) => {
  const menuItems = [
    { key: "overview", title: "Overview", icon: <TbChartTreemap /> },
    { key: "profiles", title: "Profile", icon: <RiProfileLine /> },
    { key: "orders", title: "Orders", icon: <LuShoppingCart /> },
    { key: "transaction", title: "Transaction", icon: <TbTransactionRupee /> },
    { key: "helpdesk", title: "Help Desk", icon: <RiCustomerService2Fill /> },
  ];
  return (
    <>
      <div className="p-3">
        
        <div className="md:text-xl text-xs  font-bold flex ms-3 items-center gap-2  ">
          <span className="font-serif text-white"> User_dashboard </span>
        </div>
        <hr />

        <div className="grid gap-2 ms-2 font-semibold mt-5 ">
          {menuItems.map((item, idx) => (
            <button
              onClick={() => setActive(item.key)}
              className={`flex gap-2 items-center p-2 rounded transition
    ${
      active === item.key
        ? "bg-blue-900 text-white"
        : "bg-blue-100 hover:bg-white"  
    }`}
            >
              {item.icon}
              {open && item.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
