import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth, axios } from '../utils/axiosWithAuth';


const Login = props => {
  const history = useHistory();
  const [ credentials, setCredentials ] = useState ({
    username:'',
    password:''
  }); 
  const [ isLoading, setIsLoading ] = useState(false)

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
    console.log(credentials)
  }

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      console.log("this is res", res)
      window.localStorage.setItem('token', res.data.payload);
      history.push('/friendslist')
      
    })
    .catch(err => console.log("this is the error", err));

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
          type="password"
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
