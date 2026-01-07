import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Product from "../src/Pages/Product";
import Contact from "../src/Pages/Contact";
import AOS from "aos";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import {Toaster} from "react-hot-toast"
import Error from "./Pages/error";
import useUiStore from "./store/useUiStore";

const App = () => {
  const {setShowHeader}= useUiStore();
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div onClick={()=>setShowHeader(false)}>
      <BrowserRouter>
      
      <Toaster position="top-center" reverseOrder={false}/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/*" element={<Error/>} />
          

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
