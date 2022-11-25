import { Link } from "react-router-dom";

const LogoutButton = () => {
  return (
    <>
      <Link to="/signup">
        <button>
          Logout
        </button>
      </Link>
    </>
  );
};

export default LogoutButton;
