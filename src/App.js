import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./frontend/pages/Login";
import SignUp from "./frontend/pages/SignUp";
import Home from "./frontend/pages/Home";
import BasketPage from "./frontend/pages/Basket";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/basket' element={<BasketPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
