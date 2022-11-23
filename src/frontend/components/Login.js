import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <header>
        <h1>Fleeced</h1>
      </header>
      <main>
        <h2>Login</h2>
        <form
          onSubmit={e => {
            // fetch user with username and password
            return null
          }}>

          <div className="username">
            <label>Username:</label>
            <br />
            <input
              required
              type="text"
              onChange={e => setUsername(e.target.value)} />
          </div>

          <div className="password">
            <label>Pasword:</label>
            <br />
            <input
              required
              type="password"
              onChange={e => setPassword(e.target.value)} />
          </div>

          <br />

          <div className="login-signUp">
            <button type="submit">Login</button>
            <Link to="/signup" ><button>Sign Up</button></Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
