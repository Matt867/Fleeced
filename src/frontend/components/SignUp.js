import React, { useState } from "react"
import { Link } from "react-router-dom"

const SignUp = () => {
    
    
    return (
        <>
            <header>
                <h1>Fleeced</h1>
            </header>
            <main>
                <h2>Sign Up</h2>
                <form>
                    <div className="first-name">
                        <label>First Name:</label>
                        <br />
                        <input 
                            required 
                            type="text" />
                    </div>
                    <div className="last-name">
                        <label>Last Name:</label>
                        <br />
                        <input 
                            required 
                            type="text" />
                    </div>
                    <div className="username">
                        <label>Username:</label>
                        <br />
                        <input 
                            required 
                            type="text" />
                    </div>
                    <div className="password">
                        <label>Password:</label>
                        <br />
                        <input 
                            required 
                            type="password" />
                    </div>
                    <br />
                    <div className="login-signup">
                        <button type="sumbit">Sign Up</button>
                        <Link to="/login"><button>Log In</button></Link>

                    </div>
                </form>
            </main>
        </>
    )
}

export default SignUp