import { Link } from "react-router-dom";
import styles from "../components-styles/LogIn.module.css"

const LoginButton = () => {
  return (
    <>
      <Link to="/signup" className={styles.LoginButton}>
        <button className={styles.enterbtn}>
          LogIn
        </button>
      </Link>
    </>
  );
};

export default LoginButton;
