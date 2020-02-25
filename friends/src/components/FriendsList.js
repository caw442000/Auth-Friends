import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = props => {
  const [friends, setFriends ] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
      console.log("this is the response for getting friends", res.data)
      setFriends(res.data)
    })
  },[]);
    
  
  return (
    <div>
      {friends.map(friend => (
        <div key={friend.id}>
          <h2>{friend.name}</h2>
          <p>{friend.age}</p>
          <p >{friend.email}</p>

        </div>
      ))}
    </div>
  );
};

export default FriendsList;
