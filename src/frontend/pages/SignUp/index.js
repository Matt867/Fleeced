import Header from "../Home/components/Header";
import NavBar from "../Home/components/NavBar";

import SignUpButton from "../Home/components/SignUpButton"
import HomeButton from "../Home/components/HomeButton";

import styles_Header from "../Home/components-styles/Header.module.css"
import Login_styles from "../SignUp/component-styles/SignUp.module.css"

import React, { useState } from "react"
import { Link } from "react-router-dom"

const SignUp = () => {


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
