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
  const [from, setFrom] = useState("INR IN");
  const [to, setTo] = useState("USD US");
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
    if (from === to) {
      toast.error("Both Fields are same! ");
      return;
    }
    try {
      const res = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from
          .split(" ")[0]
          .toLowerCase()}.json`
      );
      console.log(res.data);

      setToAmt(
        (
          fromAmt *
          res.data[from.split(" ")[0].toLowerCase()][
            to.split(" ")[0].toLowerCase()
          ]
        ).toFixed(3)
      );
    } catch (error) {}
  };

  return (
    <>
      <div className="w-full  py-15   ">
        <div className=" w-full  p-5 pt-20   ">
          <div className="md:w-3xl bg-orange-100 rounded-br-full  rounded-tl-full shadow border p-3 mx-auto space-y-5 w-75  ">
            <div className=" ">
              <div className="bg-blue-500 px-4 py-2  md:text-3xl text-white text-center flex justify-center items-center gap-4">
                <span className="font-bold">Currency Convertor</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5  ">
              <div className=" bg-gray-100 border">
                <input
                  type="text"
                  name="fromAmt"
                  value={fromAmt}
                  onChange={(e) => setFromAmt(e.target.value)}
                  placeholder="Enter the Amount to Convert"
                  className="  p-3 w-full"
                />
              </div>
              <div className=" border p-2 rounded bg-gray-100  ">
                <label htmlFor="toAmt" >
                  Converted Amount : {toAmt ? toAmt : " "}
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 relative">
              <div className="flex gap-3 border rounded px-3 py-2 relative">
                {from && (
                  <img
                    src={`https://flagsapi.com/${
                      from.split(" ")[1]
                    }/flat/48.png`}
                    alt=""
                    className=""
                  />
                )}
                <select
                  name="from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className=" p-3 overflow-hidden w-full focus:outline-none"
                >
                  {CountryData.map((country, idx) => (
                    <option
                      value={country.CurrencyCode + " " + country.CountryCode}
                      key={idx}
                    >
                      {country.CountryName}
                    </option>
                  ))}
                </select>
                <p className="absolute md:bottom-14 bottom-14 px-1 bg-white animate-pulse">
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
                  {CountryData.map((country, idx) => (
                    <option
                      value={country.CurrencyCode + " " + country.CountryCode}
                      key={idx}
                    >
                      {country.CountryName}
                    </option>
                  ))}
                </select>
                <p className="absolute md:bottom-14 bottom-9 px-2 bg-white animate-pulse">
                  To
                </p>
              </div>
              <button
                className="absolute md:top-1/4 top-16 md:left-1/2 left-32 rotate-90 md:rotate-0 -translate-x-[50%] text-3xl hover:rotate-180 duration-150 cursor-pointer"
                onClick={swap}
              >
                <MdSwapHorizontalCircle />
              </button>
            </div>

            <div className="border flex" />

            <div className=" grid-cols-1 md:grid-cols-2 space-y-2 ">
              <button
                className="bg-green-500 text-green-200 hover:bg-green-600 hover:text-white px-4 py-2 border rounded hover:shadow-md w-full"
                onClick={Convert}
              >
                Convert
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
