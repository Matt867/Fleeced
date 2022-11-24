import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./frontend/pages/Login";
import SignUp from "./frontend/pages/SignUp";
import Home from "./frontend/pages/Home";
import BasketPage from "./frontend/pages/Basket";

const tempData = [
  {
    img_url: 'https://m.media-amazon.com/images/I/71JCqgGdqUL._AC_AA360_.jpg',
    title: 'Ducks',
    quantity: 2,
    price: 20
  }
];

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(tempData || []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home items={items} setItem={setItem} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/basket' element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
