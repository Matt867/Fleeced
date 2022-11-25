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
        <h1>Fleeced</h1>
      </header>
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
            <button type="sumbit">Sign Up</button>
            <Link to="/login"><button>Log In</button></Link>
          </div>
        </form>
      </main>
    </>
  )
}

export default SignUp;
