
import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
      <div className="register-container">
          <p>Name:</p>
          <input type="text" placeholder='Name..' />
          <p>Email:</p>
          <input type="email" placeholder='Email..' />
          <p>Password:</p>
          <input type="password" />
          <a href="#" className='register-btn'>Create</a>
          <Link to={"login"}>Login</Link>
      </div>
  )
}
