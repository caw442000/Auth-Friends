import axios from 'axios';

export const axios = () => {

  const token = window.localStorage.getItem('token');

  retun axios.create({
    headers: {
      authorization: token
    },
    baseURL: 'http://localhost:5000'
  });

};