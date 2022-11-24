import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <>
      <Link to="/signup">
        <button>
          LogIn
        </button>
      </Link>
    </>
  );
};

export default LoginButton;
