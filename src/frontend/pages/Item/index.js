import Header from "./components/Header";
import SeachBar from "./components/SearchBar";
import SignUpButton from "./components/SignUpButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import styles_Header from "./components-styles/Header.module.css";
import ImageCard from "./components/ImageCard";
import StatsCard from "./components/StatsCard";

const Item = ({ loggedIn, item, setItem }) => {
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
      <main>
        <div>
          <ImageCard src={item.src} alt={item.alt} />
        </div>
        <div>
          <StatsCard />
        </div>
      </main>
    </>
  );
};

export default Item;
