import './CSS/LoginSignup.css'

import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='your name'/>
          <input type='email' placeholder='your email'/>
          <input type='password' placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">prior account<span>logiin here</span></p>
        <div className="loginsignup-agree"></div>
        <input type='checkbox' name='' id=''/>
        <p>By continue with agring the privancy policy</p>
      </div>
    </div>
  )
}

export default LoginSignup
