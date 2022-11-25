import Header from "./components/Header";
import SeachBar from "./components/SearchBar";
import SignUpButton from "./components/SignUpButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import ImageCard from "./components/ImageCard";
import StatsCard from "./components/StatsCard";

const Item = ({ item, setItem }) => {
  return (
    <>
      <header>
        <Header />
        <SeachBar />
        {loggedIn && <SignUpButton />}
        {loggedIn && <LoginButton />}
        {!loggedIn && <LogoutButton />}
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
