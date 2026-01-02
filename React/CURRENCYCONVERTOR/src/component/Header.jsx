import React from "react";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiCurrencyRupee } from "react-icons/hi2";
import { HiMiniCurrencyEuro } from "react-icons/hi2";
import { HiMiniCurrencyPound } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 px-4 py-2 text-3xl text-white text-center flex justify-center items-center gap-4">
        <HiCurrencyRupee className="animate-[bounce_2s_infinite]" />
        <HiMiniCurrencyDollar className="animate-[bounce_3s_infinite]"/>
        <span className="font-bold">Currency Convertor</span>
        <HiMiniCurrencyEuro className="animate-[bounce_4s_infinite]"/>
        <HiMiniCurrencyPound className="animate-[bounce_5s_infinite]"/>
      </div>
    </>
  );
};

export default Header;