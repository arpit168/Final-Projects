import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { RiProfileLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

const UserSidebar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold ">User Dashboard</div>
        <hr />

        <div className="grid gap-2 ms-2 font-semibold  mt-5 ">
          <button
            onClick={() => setActive("overview")}
            className={`flex gap-2 items-center p-2 rounded transition
    ${
      active === "overview"
        ? "bg-cyan-600 text-white"
        : "bg-cyan-100 hover:bg-white"
    }`}
          >
            <TbChartTreemap />
            Overview
          </button>

          <button
            onClick={() => setActive("profiles")}
            className={`flex gap-2 items-center p-2 rounded transition
    ${
      active === "profiles"
        ? "bg-cyan-600 text-white"
        : "bg-cyan-100 hover:bg-white"
    }`}
          >
            <RiProfileLine />
            Profile
          </button>

          <button
            onClick={() => setActive("orders")}
            className={`flex gap-2 items-center p-2 rounded transition
    ${
      active === "orders"
        ? "bg-cyan-600 text-white"
        : "bg-cyan-100 hover:bg-white"
    }`}
          >
            <LuShoppingCart />
            Orders
          </button>

          <button
            onClick={() => setActive("transaction")}
            className={`flex gap-2 items-center p-2 rounded transition
    ${
      active === "transaction"
        ? "bg-cyan-600 text-white"
        : "bg-cyan-100 hover:bg-white"
    }`}
          >
            <TbTransactionRupee />
            Transaction
          </button>

          <button
            onClick={() => setActive("helpdesk")}
            className={`flex gap-2 items-center p-2 rounded transition
    ${
      active === "helpdesk"
        ? "bg-cyan-600 text-white"
        : "bg-cyan-100 hover:bg-white"
    }`}
          >
            <RiCustomerService2Fill />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
