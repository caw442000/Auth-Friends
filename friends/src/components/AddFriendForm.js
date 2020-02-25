import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import cuid from 'cuid'
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriendForm = props => {
  const history = useHistory();
  const [friend, setFriend ] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = e => {
    e.preventDefault();
    setFriend({...friend, [e.target.name]: e.target.value})
  }

  const submitForm = e => {
    e.preventDefault();
    addFriend(friend);
    setFriend({name:"", age: "", email: ""})
    
  }

  const addFriend = friend => {
    const newFriend = {
      id: cuid(),
      name: friend.name,
      age: friend.age,
      email: friend.email
    }
    axiosWithAuth()
    .post('api/friends', newFriend)
    .then(res => {
      console.log("this is the response from adding friend", res)
      history.push('/friendslist')

    })
    .catch(err => console.log("error adding friend", err));

  }

  return (
    <div>
      <form onSubmit = {submitForm}>
      <label htmlFor="name">Friend's Name</label>
      <input 
        id="name" 
        name="name" 
        type="text"
        onChange={handleChanges}
        placeholder="Enter Friend's Name"
        value ={friend.name}
      />

      <label htmlFor="age">Friend's Age</label>
      <input 
        id="age" 
        name="age" 
        type="text"
        onChange={handleChanges}
        placeholder="Enter Friend's Age"
        value ={friend.age}
      />


      <label htmlFor="email">Friend's Email</label>
      <input 
        id="email" 
        name="email" 
        type="text"
        onChange={handleChanges}
        placeholder="Enter Friend's Email"
        value ={friend.email}
      />

      <button type="submit">Add Friend</button>

      </form>
    </div>
  );
};

export default AddFriendForm;
