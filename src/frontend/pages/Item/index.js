import Header from "./components/Header";
import SeachBar from "./components/SearchBar";
import SignUpButton from "./components/SignUpButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import styles_Header from "./components-styles/Header.module.css";
import ImageCard from "./components/ImageCard";
import StatsCard from "./components/StatsCard";
import HomeButton from "../Home/components/HomeButton";
import NavBar from "../Home/components/NavBar";

const Item = ({ user, item, setItem }) => {
  return (
    <>
      <header>
        <Header />
        <SeachBar />
        <div className={styles_Header.btncontainer}>
          {user && <SignUpButton />}
          {user && <LoginButton />}
          {!user && <HomeButton />}
          {!user && <LogoutButton />}
        </div>
      </header>
      <section>
        <NavBar />
      </section>
      <main>
        <div>
          <ImageCard src={item.src} alt={item.alt} />
        </div>
        <div>
          {/* <User item={item} /> */}
        </div>
        <div>
          <StatsCard item={item} />
        </div>
      </main>
    </>
  );
};

export default Item;
