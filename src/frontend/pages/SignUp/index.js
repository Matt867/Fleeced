import Header from "../Home/components/Header";
import NavBar from "../Home/components/NavBar";

import SignUpButton from "../Home/components/SignUpButton"
import HomeButton from "../Home/components/HomeButton";

import styles_Header from "../Home/components-styles/Header.module.css"
import Login_styles from "../SignUp/component-styles/SignUp.module.css"

import React, { useState } from "react"
import { Link } from "react-router-dom"

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  async function onFormSubmit (e) {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3000/users/signup", {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: username,
              password: password,
              email: email
          })
      })

      const data = await response.text()

      if (response.status === 200) {
          window.localStorage.setItem('jwt', data)
          window.location.href = "/login"
      } else {
          console.log(response.status, data)
          setErrorMessage(data)
      }

    } catch (error) {
        setErrorMessage(error.message)
    }
  }


  return (
    <>
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
      <main className={Login_styles.main}>
        <section className={Login_styles.section}>
          <h2>Sign Up</h2>
          <form>
            <section className={Login_styles.info}>
              <div className="first-name">
                <label>First Name:*</label>
                <br />
                <input
                  required
                  type="text" />
              </div>
              <div className="last-name">
                <label>Last Name:*</label>
                <br />
                <input
                  required
                  type="text" />
              </div>
              <div className="username">
                <label>Username:*</label>
                <br />
                <input
                  required
                  type="text" />
              </div>
              <div className="password">
                <label>Password:*</label>
                <br />
                <input
                  required
                  type="password" />
              </div>
            </section>
            
          <br />
      <main>
        <h2>Sign Up</h2>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <div className="username">
            <label>Username:</label>
            <br />
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              type="text" />
          </div>
          <div className="email">
            <label>Email:</label>
            <br />
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              type="text" />
          </div>
          <div className="password">
            <label>Password:</label>
            <br />
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password" />
          </div>
          <div>
            <p>{errorMessage}</p>
          </div>
          <div className="login-signup">
            <button type="sumbit" className={Login_styles.signup}>Sign Up</button>
            <Link to="/login"><button className= {Login_styles.signin}>Log In</button></Link>
          </div>
        </form>
        </section>
      </main>
    </>
  )
}

export default SignUp;
