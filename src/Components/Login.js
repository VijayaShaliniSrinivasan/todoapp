import React from "react";
import './Home.css'
import './Login.css'

function Login() {

    return(
        <>
<div className="login-section">
             <div className="container">
                <div className="header">
                        <h1>Login</h1>
                   <div className="inputs">
                      <input type="text" placeholder="Login-Id"></input>
                   </div>

                   <div className="inputs">
                      <input type="text" placeholder="Password"></input>
                   </div>

                    <button className="btn">Submit</button>
                </div>
               
             </div>

             </div>
        </>
    )
    
}
export default Login