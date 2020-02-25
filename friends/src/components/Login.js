import React, { useState } from 'react';


const Login = props => {
  const [credentials, setCredentials] = useState ({
    username:'',
    password:''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
    console.log(credentials)
  }

  const login = e => {
    e.preventDefault();

  }


  return(
    <div>
      <form onSubmit = {login}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label htmlFor="username">Password: </label>
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  )
}
export default Login;
