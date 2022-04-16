
import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
      <div className="login-container">
          <p>Email:</p>
          <input type="email" placeholder='Email..' />
          <p>Password:</p>
          <input type="password" />
          <a href="#" className='login-btn'>Login</a>
          <Link to={"register"}>Register</Link>
      </div>
  )
}
