import styles_homeItem from "./components-styles/Home-Item.module.css"
import styles_Header from "./components-styles/Header.module.css";

import SeachBar from "./components/SearchBar";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Items from "./components/Items";
import NavBar from "./components/NavBar";

import SignUpButton from "./components/SignUpButton";
import LogoutButton from "./components/LogoutButton";
import LoginButton from "./components/LoginButton";
import HomeButton from "./components/HomeButton";
import { useEffect, useState } from "react";

const Home = ({ setItem, setSearchText, searchText, setUser }) => {
  const [items, setItems] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/item/').then(
      (response) => response.json()
    ).then((data) => {
      console.log(data)
      setItems(data)
    }).catch((err) => setErrorMessage(err.message))
  }, [])

  const user = localStorage.getItem("user");
  return (
    <>
      <header>
        <Header />
        <SeachBar
          setItems={setItems}
          setSearchText={setSearchText}
          searchText={searchText} />
        <div className={styles_Header.btncontainer}>
          {!user && <SignUpButton />}
          {!user && <LoginButton />}
          {user && <HomeButton />}
          {user && <LogoutButton />}
        </div>
      </header>
      <section>
        <NavBar />
      </section>
      <section>
        <Banner />
      </section>
      <main>
        <Items
          setUser={setUser}
          setItem={setItem}
          items={items}
          count={items.length}
          styles={styles_homeItem} />
      </main>
      <footer className={styles_Header.footer}>
        <p> Created by Team TWO</p>
      </footer>
    </>
  );
};

export default Home;
