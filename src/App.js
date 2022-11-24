import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Basket from "./frontend/components/Basket";
import Login from "./frontend/components/Login";
import SignUp from "./frontend/components/SignUp";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
