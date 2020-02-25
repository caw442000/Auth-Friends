import axios from 'axios';

export const axios = () => {

  const token = window.localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: 'http://localhost:5000'
  });

};