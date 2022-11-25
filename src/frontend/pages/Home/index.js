import SeachBar from "./components/SearchBar";
import Header from "./components/Header";
import SignUpButton from "./components/SignUpButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import styles_Header from "./components-styles/Header.module.css";
import styles_homeItem from "./components-styles/Home-Item.module.css"
import Banner from "./components/Banner";
import Items from "./components/Items";
import NavBar from "./components/NavBar";

const Home = ({ loggedIn, items, setItem }) => {
  return (
    <>
      <header>
        <Header />
        <SeachBar />
        <div className={styles_Header.btncontainer}>
          {loggedIn && <SignUpButton />}
          {loggedIn && <LoginButton />}
          {!loggedIn && <LogoutButton />}
        </div>
      </header>
      <section>
        <NavBar />
      </section>
      <section>
        <Banner />
      </section>
      <main>
        <Items items={items} styles={styles_homeItem}/>
      </main>
      <footer className={styles_Header.footer}>
        <p> Created by Team TWO</p>
      </footer>
    </>
  );
};

export default Home;
