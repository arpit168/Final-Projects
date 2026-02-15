import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./pages/dashboards/UserDashboard";
import RiderDashboard from "./pages/dashboards/RiderDashboard";
import RestaurantDashboard from "./pages/dashboards/RestaurantDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import OrderNow from "./pages/OrderNow";
import RestaurantDisplayMenu from "./pages/RestaurantDisplayMenu";
import NotFound from "./pages/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Toaster />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/restaurantDashboard" element={<RestaurantDashboard />} />
        <Route path="/riderDashboard" element={<RiderDashboard />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/restaurant/:id" element={<RestaurantDisplayMenu />} />
        <Route path="/restaurantMenu" element={<RestaurantDisplayMenu />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
