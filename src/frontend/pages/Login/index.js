import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  function onFormSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(response => {
      if (response.status !== 200) {
        throw new Error("Invalid username or password")
      }
      return response.text()
    })
      .then(data => {
        window.localStorage.setItem('jwt', data)
        window.location.href = "/"
      })
      .catch(error => {
        setErrorMessage(error.message)
        console.log(error.message)
      })
  };
  return <>
    <header>
      <h1>Fleeced</h1>
    </header>
    <main>
      <h2>Login</h2>
      <form
        onSubmit={e => onFormSubmit(e)}>

        <div className="username">
          <label>Username:</label>
          <br />
          <input
            required
            type="text"
            onChange={e => setUsername(e.target.value)} />
        </div>

        <div className="password">
          <label>Password:</label>
          <br />
          <input
            required
            type="password"
            onChange={e => setPassword(e.target.value)} />
        </div>

        <div>
          <p>{errorMessage}</p>
        </div>
        <div className="login-signUp">
          <button type="submit">Login</button>
          <Link to="/signup" ><button>Sign Up</button></Link>
        </div>
      </form>
    </main>
  </>
};
