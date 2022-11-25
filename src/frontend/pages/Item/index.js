<<<<<<< HEAD
=======
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

>>>>>>> ef42ca69264ea9d88d6be91d35205972296d49e8
export default Item;
