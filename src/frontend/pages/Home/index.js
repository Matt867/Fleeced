import SeachBar from "./components/SearchBar";
import Header from "./components/Header";
import SignUpButton from "./components/SignUpButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import styles from "./components-styles/Header.module.css";
import Banner from "./components/Banner";
import Items from "./components/Items";

const Home = ({ loggedIn, items, setItem }) => {
  return (
    <>
      <header>
        <Header />
        <SeachBar />
        <div className={styles.btncontainer}>
          {loggedIn && <SignUpButton />}
          {loggedIn && <LoginButton />}
          {!loggedIn && <LogoutButton />}
        </div>
        <Banner />
      </header>
      <main>
        <Items items={items} />
      </main>
    </>
  );
};

export default Home;
