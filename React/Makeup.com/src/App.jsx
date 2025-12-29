import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Product from "../src/pages/Product";
import Contact from "../src/Pages/Contact";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
