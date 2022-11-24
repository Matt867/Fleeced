import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./frontend/pages/Login";
import SignUp from "./frontend/pages/SignUp";
import Home from "./frontend/pages/Home";
import BasketPage from "./frontend/pages/Basket";
import Item from "./frontend/pages/Item";

const tempData = [
  {
    img_url: 'https://m.media-amazon.com/images/I/71JCqgGdqUL._AC_AA360_.jpg',
    title: 'Ducks',
    price: 20
  },
  {
    img_url: 'https://m.media-amazon.com/images/I/71JCqgGdqUL._AC_AA360_.jpg',
    title: 'Cat',
    price: 3
  },
  {
    img_url: 'https://m.media-amazon.com/images/I/71JCqgGdqUL._AC_AA360_.jpg',
    title: 'Dog',
    price: 60
  },
];

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(tempData || []);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} items={items} setItem={setItem} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
        <Route path="/item" element={<Item setLoggedIn={setLoggedIn} />} />
        <Route path='/basket' element={<BasketPage setLoggedIn={setLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
