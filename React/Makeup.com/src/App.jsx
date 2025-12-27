import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        

      </Routes>
      <Footer />
    </BrowserRouter>
   
    </>
  );
};

export default App;
