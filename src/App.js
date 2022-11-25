import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./frontend/pages/Login/index.js";
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

  const [items, setItems] = useState(tempData || []);
  const [searchText, setSearchText] = useState("");

  /**
   * Last Item viewed
   */
  const [item, setItem] = useState({});

  /**
   * Basket will be stored in local storage
   *
   * Basket: array<item>
   * Item: obj
   * -
   */
  const [basket, setBasket] = useState([]);

  /**
   * User object will be stored in local storage
   *
   * User: obj
   * - token: str
   */
  const [user, setUser] = useState({});

  // on update of Items re-render homepage
  // useEffect(() => <Navigate to="/" />, [items]);

  // on initial page load, we'll attempt to grab
  // Item, Basket and User from local storeage
  useEffect(() => {
    const localStorageItem = localStorage.getItem("item");
    const localStorageUser = localStorage.getItem("user");
    const localStorageBasket = localStorage.getItem("basket");

    setItem(localStorageItem || item);
    setUser(localStorageUser || user);
    setBasket(localStorageBasket || basket);
  }, []);


  // if item is updated and none empty updated item in local storage
  useEffect(() => {
    if (item) localStorage
      .setItem("user", JSON.stringify(item));
  }, [item]);

  // if user is updated and none empty updated user in local storage
  useEffect(() => {
    if (user) localStorage
      .setItem("user", JSON.stringify(user));
  }, [user]);

  // if basket is updated and none empty updated basket in local storage
  useEffect(() => {
    if (basket) localStorage
      .setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home
          setSearchText={setSearchText}
          searchText={searchText}
          setUser={setUser}
          setItem={setItem}
          setItems={setItems}
          items={items} />} />
        <Route path="/item" element={<Item
          setSearchText={setSearchText}
          searchText={searchText}
          setUser={setUser}
          setBasket={setBasket}
          setItems={setItems}
          item={item} />} />
        <Route path='/basket' element={<BasketPage
          setUser={setUser}
          setBasket={setBasket} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
