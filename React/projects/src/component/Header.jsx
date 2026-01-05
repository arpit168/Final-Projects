import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdCurrencyExchange } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import { ImMenu } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";



const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="  sticky top-0 z-50 h-[10dvh] bg-blue-500  ">
        <div className="flex justify-between items-center py-3 px-5">
          <div className="flex">
            <h1 className="text-4xl   font-bold text-white font-serif ">
              My Projects
            </h1>
          </div>
          <div className="md:flex hidden  gap-5 text-light mt-3 me-15">
            <div className="anokha text-xl text-white hover:text-yellow-300 hover:border-b-2 border-yellow  ">
              <Link
                to={"/Currency"}
                className="flex items-center "
              >
                <MdCurrencyExchange className=" me-1 text-2xl" />
                Currency Convertor
              </Link>
            </div>

            <div className="anokha text-xl text-white hover:text-yellow-300 hover:border-b-2 border-yellow">
              <Link
                to={"/register"}
                className="flex items-center  "
              >
                <FaWpforms className="text-2xl me-1" />
                Registration-form
              </Link>
            </div>
          </div>
          <button
            className="md:hidden  text-gray-200 "
            onClick={() => setShow(!show)}
          >
            {
                show? <RxCross2  size={30}/> :  <ImMenu size={30} />
            }
           
          </button>
        </div>
        {show && (
          <div className="bg-white md:px-0 md:py-0  py-10 px-2">
            <div className="md:hidden text-center text-light  grid grid-cols-1 ">
              <button onClick={() => setShow(false)} className="p-2 border  ">
                <Link to={"/Currency"} className="  font-serif flex text-sm  ">
                  <MdCurrencyExchange className=" me-2 mt-1 text-indigo-700  text-sm" />
                  Currency Convertor
                </Link>
              </button>

              <button onClick={() => setShow(false)} className="p-2 border   ">
                <Link
                  to={"/register"}
                  className=" text-sm text-black  flex  font-serif  "
                >
                  <FaWpforms className="me-2 mt-1 text-sm text-indigo-700 font-bold" />
                  Registration-form
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
