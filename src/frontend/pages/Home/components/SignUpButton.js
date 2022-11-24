import { Link } from "react-router-dom";
import styles from "../components-styles/SignUp.module.css"

const SignUpButton = () => {
  return (
    <>
      <Link to="/signup" >
        <button className={styles.signup}>
          SignUp
        </button>
      </Link>
    </>
  );
};

export default SignUpButton;
