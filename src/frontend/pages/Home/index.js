import SeachBar from "./components/SearchBar";
import Header from "./components/Header";
import SignUpButton from "./components/SignUpButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import styles from "./components-styles/Header.module.css" ;
// import styles from "./components-styles/SignUp.module.css"


const Home = () => {
  return (
    <>
      <header>
        <Header />
        <SeachBar />
        <div className= {styles.btncontainer}>
           <SignUpButton />
          {<LoginButton /> || <LogoutButton />}
        </div>
       
      </header>
      <main></main>
    </>
  );
};

export default Home;
