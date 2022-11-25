import { Link } from "react-router-dom";
import styles from "../components-styles/SignUp.module.css"

const HomeButton = () => {
  return (
    <>
      <Link to="/" className={styles.SignupButton}>
        <button className={styles.enterbtn}>
          Home
        </button>
      </Link>
    </>
  );
};

export default HomeButton;
