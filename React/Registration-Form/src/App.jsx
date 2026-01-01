import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
       <Routes>
        <Route path="/" element={<Register/>}/>
       </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
