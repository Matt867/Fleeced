import SeachBar from "./components/SearchBar";
import Header from "./components/Header";
import SignUpButton from "./components/SignUpButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import styles_Header from "./components-styles/Header.module.css";
import styles_homeItem from "./components-styles/Home-Item.module.css"
import Banner from "./components/Banner";
import Items from "./components/Items";

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
        <Banner />
      </section>
      <main>
        <Items items={items} styles={styles_homeItem}/>
      </main>
    </>
  );
};

export default Home;
