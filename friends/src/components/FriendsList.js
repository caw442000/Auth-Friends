import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = props => {
  const [friends, setFriends ] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
      console.log("this is the response for getting friends", res)
      setFriends(res.data)
    })
  },[]);
    
  
  return (
    <div>
      <p>Friends List </p>
    </div>
  );
};

export default FriendsList;
