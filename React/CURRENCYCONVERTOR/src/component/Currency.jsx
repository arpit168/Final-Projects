import React, { useState } from "react";
import CountryData from "../assets/CurrencyData.json";
import toast from "react-hot-toast";
import axios from "axios";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiCurrencyRupee } from "react-icons/hi2";
import { HiMiniCurrencyEuro } from "react-icons/hi2";
import { HiMiniCurrencyPound } from "react-icons/hi2";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromAmt, setFromAmt] = useState("");
  const [toAmt, setToAmt] = useState("");

  const swap = () => {
    // swap from and to

    let temp = from;
    setFrom(to);
    setTo(from);
  };

  const Convert = async () => {
    if (!from || !to || !fromAmt) {
      toast.error("Some Fields Missing");
      return;
    }
    try {
      const res = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from
          .split(" ")[0]
          .toLowerCase()}.json`
      );

      setToAmt(
        fromAmt *
          res.data[from.split(" ")[0].toLowerCase()][
            to.split(" ")[0].toLowerCase()
          ]
      );
    } catch (error) {}
  };

  return (
    <>
      <div className=" w-full bg-indigo-300  p-5  ">
        <div className="md:w-3xl bg-white rounded shadow border p-3 mx-auto space-y-5 w-75  ">
          <div className=" ">
            <div className="bg-blue-500 px-4 py-2 text-3xl text-white text-center flex justify-center items-center gap-4">
              <HiCurrencyRupee className="animate-[bounce_2s_infinite]" />
              <HiMiniCurrencyDollar className="animate-[bounce_3s_infinite]" />
              <span className="font-bold">Currency Convertor</span>
              <HiMiniCurrencyEuro className="animate-[bounce_4s_infinite]" />
              <HiMiniCurrencyPound className="animate-[bounce_5s_infinite]" />
            </div>
          </div>
          <div className=" flex gap-3 items-center">
            <label htmlFor="fromAmt" className="w-20">
              Amount :
            </label>
            <input
              type="text"
              name="fromAmt"
              value={fromAmt}
              onChange={(e) => setFromAmt(e.target.value)}
              placeholder="Enter the Amount to Convert"
              className="border rounded p-3 w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 relative">
            <div className="flex gap-3 border rounded px-3 py-2 relative">
              {from && (
                <img
                  src={`https://flagsapi.com/${from.split(" ")[1]}/flat/48.png`}
                  alt=""
                />
              )}
              <select
                name="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className=" p-3 overflow-hidden w-full focus:outline-none"
              >
                <option value="">-Select Country-</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
              <p className="absolute md:bottom-14 bottom-14 px-1 bg-white">
                From
              </p>
            </div>

            <div className="flex gap-3 border rounded px-3 relative">
              {to && (
                <img
                  src={`https://flagsapi.com/${to.split(" ")[1]}/flat/48.png`}
                  alt=""
                />
              )}
              <select
                name="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className=" p-3 overflow-hidden w-full focus:outline-none"
              >
                <option value="">-Select Country-</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
              <p className="absolute md:bottom-14 bottom-9 px-2 bg-white">To</p>
            </div>
          </div>
          <button
            className="absolute md:top-47 top-68.5 left-1/2 -translate-x-[50%] text-3xl"
            onClick={swap}
          >
            <MdSwapHorizontalCircle />
          </button>

          <div className="border flex" />

          <div className=" grid-cols-1 md:grid-cols-2 space-y-2 ">
            <div className="flex gap-3 items-center border  p-2 rounded me-2">
              <label htmlFor="toAmt">
                Converted Amount : {toAmt ? toAmt : " "}
              </label>
            </div>
            <button
              className="bg-green-300 text-green-900 hover:bg-green-600 hover:text-white px-4 py-2 border rounded hover:shadow-md w-full"
              onClick={Convert}
            >
              Convert
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
