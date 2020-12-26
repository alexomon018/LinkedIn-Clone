import React, { useState } from 'react'
import './Login.css'

function Login({ register, loginToApp }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profilePicUrl, setProfilePicUrl] = useState('')

  return (
    <div className='login'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png'
        alt=''
      />
      <form>
        <input
          type='text'
          placeholder='Full name (required if registering)'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Profile pic URL'
          value={profilePicUrl}
          onChange={(e) => setProfilePicUrl(e.target.value)}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault()
            loginToApp(email, password)
          }}
        >
          Sign In
        </button>
      </form>
      <p>
        Not a member ?{' '}
        <span
          className='login__register'
          onClick={() => register(name, profilePicUrl, email, password)}
        >
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login
