import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Currency from "./pages/Currency";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/currency" element={<Currency/>}/>
        <Route path="/register" element={<Register/>}/>
        
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;
