import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <>
      <Link to="/signup">
        <button>
          SignUp
        </button>
      </Link>
    </>
  );
};

export default SignUpButton;
