import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MdCurrencyExchange } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="  sticky top-0 z-50 h-[10dvh] bg-blue-500  ">
        <div className="flex justify-between items-center  py-5  px-5">
          <div className="flex">
            <h1 className="text-4xl   font-bold text-white       font-serif ">
              My Projects
            </h1>
          </div>
          <div className="md:flex hidden  gap-5 text-light mt-5 me-15">
            <div>
              <Link
                to={"/Currency"}
                className="text-decoration-none text-xl text-white hover:text-yellow-300 font-serif flex hover:border-b-2 border-yellow "
              >
                <MdCurrencyExchange className=" text-white text-2xl hover:text-yellow-300" />
                Currency Convertor
              </Link>
            </div>

            <div>
              <Link
                to={"/register"}
                className="text-decoration-none text-xl text-white hover:text-yellow-300  flex  hover:border-b-2 border-yellow font-serif  "
              >
                <FaWpforms className="text-2xl text-white font-bold hover:text-yellow-300" />
                Registration-form
              </Link>
            </div>
          </div>
          <button
            className="md:hidden  text-white "
            onClick={() => setShow(!show)}
          >
            <BiMenuAltRight size={50} />
          </button>
        </div>
        {show && (
          <div className="bg-white md:px-0 md:py-0  py-10 px-2">
            <div className="md:hidden text-center text-light  grid grid-cols-1 ">
              <button onClick={() => setShow(false)} className="p-2 border  ">
                <Link to={"/Currency"} className="  font-serif flex text-2xl  ">
                  <MdCurrencyExchange className=" text-indigo-700  text-2xl" />
                  Currency Convertor
                </Link>
              </button>

              <button onClick={() => setShow(false)} className="p-2 border   ">
                <Link
                  to={"/register"}
                  className=" text-2xl text-black  flex  font-serif  "
                >
                  <FaWpforms className="text-2xl text-indigo-700 font-bold" />
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
