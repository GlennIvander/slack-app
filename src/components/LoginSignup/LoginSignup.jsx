import React, { useState } from 'react'
import './LoginSignup.css'
import dota2 from '../Assets/dota2.png'
import user from '../Assets/user.png'
import email from '../Assets/email.png'
import password from '../Assets/password.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Log in");

  return (
    <div className="container">
        <div className="logo">
            <img src={dota2} alt="" className='dota2'/>
        </div>
        <div className="header">
            <div className="signup">{action}</div>
        </div>
        <div className="inputs">
            {action==="Log in"?<div></div>:<div className="input">
                <img src={user} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
            <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot">Forgot Password?</div>}
        <div className="submit-container">
            <div className={action === "Log in"?"submit red":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up"?"submit red":"submit"} onClick={()=>{setAction("Log in")}}>Log in</div>
        </div>
    </div>
  )
}

export default LoginSignup