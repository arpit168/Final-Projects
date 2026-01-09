import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import About from "./pages/About";
import Counter from "./Usestate/Counter";
import Form from "./Usestate/Form";
import Toggle from "./Usestate/Toggle";
import checkapi from "./Usestate/checkapi";
import Login from "./pages/Login";
import Timer from "./Usestate/Timer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
           <Route path="/toggle" element={<Toggle />} />
           <Route path="/checkapi" element={<checkapi/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/timer" element={<Timer/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
