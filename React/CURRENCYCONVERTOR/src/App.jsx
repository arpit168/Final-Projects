import React from "react";
import Currency from "./component/Currency";
import { Toaster } from "react-hot-toast";
import Header from "./component/Header";

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <Currency />
    </>
  );
};

export default App;
