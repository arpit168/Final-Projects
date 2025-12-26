import React from "react";
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between bg-primary text-light ">
        <h1>My website</h1>
        <div  className="fs-5 d-flex gap-3 text-light">
            <Link to={"/"} className="text-decoration-none text-light" >Home</Link>
            <Link to={"/about"} className="text-decoration-none text-light" >About</Link>
            <Link to={"/product"} className="text-decoration-none text-light">Product</Link>
            <Link to={"/contact"} className="text-decoration-none text-light" >Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
