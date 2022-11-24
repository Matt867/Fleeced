import SeachBar from "./components/SearchBar";
import Header from "./components/Header";
import SignUpButton from "./components/SignUpButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Banner from "./components/Banner";
import Items from "./components/Items";

const Home = ({ items, setItem }) => {
  return (
    <>
      <header>
        <Header />
        <SeachBar />
        <SignUpButton />
        {<LoginButton /> || <LogoutButton />}
        <Banner />
      </header>
      <main>
        <Items items={items} />
      </main>
    </>
  );
};

export default Home;
