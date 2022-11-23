import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./frontend/components/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
