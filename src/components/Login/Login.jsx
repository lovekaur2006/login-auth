import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './Login.css'

async function loginUser(credentials){
    return fetch('http://localhost:8080/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials)
    }

    )
    .then((data)=>data.json())
}



function Login({setToken}) {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=async e=>{
    e.preventDefault();
    const token= await loginUser({
        username,
        password
    })
    setToken(token);
}
  return (
   
    <div className='login-wrapper'>
          <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          
            <label>
                <p>UserName:</p>
                <input type="text" placeholder='Enter Email' onChange={(e)=>setUsername(e.target.value)} />
            </label>
            <label>
                <p>Password:</p>
                <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
Login.propTypes={
    setToken:PropTypes.func.isRequired
}
export default Login