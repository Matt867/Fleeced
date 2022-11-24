import SeachBar from "./components/SearchBar";
import Header from "./components/Header";
import SignUpButton from "./components/SignUpButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

const Home = () => {
  return (
    <>
      <header>
        <Header />
        <SeachBar />
        <SignUpButton />
        {<LoginButton /> || <LogoutButton />}
      </header>
      <main></main>
    </>
  );
};

export default Home;
