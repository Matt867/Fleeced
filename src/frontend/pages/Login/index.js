
import Header from "../Home/components/Header";
import NavBar from "../Home/components/NavBar";

import SignUpButton from "../Home/components/SignUpButton"
import HomeButton from "../Home/components/HomeButton";

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { logIn } from "../../../front-end/backend-interactions/user.interactions"

import Login_styles from "./components/components-styles/LogIn.module.css"
import styles_Header from "../Home/components-styles/Header.module.css"


export default function Login ({setUser}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  function onFormSubmit (e) {
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
        setUser(data)
    })
    .catch(error => {
        setErrorMessage(error.message)
        console.log(error.message)
    })
  }



  return <>
      <header>
        <Header />
          <div className={styles_Header.btncontainer}>
            <SignUpButton />
            <HomeButton />
          </div>
        </header>
        <section>
          <NavBar />
        </section>
        
      <main>
        <section className={Login_styles.section}>
          <h2>WELCOME BACK!</h2>
        <form
          onSubmit={e => {
            onFormSubmit(e)
          }}>

          <div className="username">
            <label>Username:*</label>
            <br />
            <input
              required
              type="text"
              onChange={e => setUsername(e.target.value)} />
          </div>

          <div className={Login_styles.password}>
            <label>Password:*</label>
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
        </section>
        
      </main>
    </>
};
