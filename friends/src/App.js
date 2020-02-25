import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import AddFriendForm from './components/AddFriendForm';
import FriendsList from './components/FriendsList';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/friendslist">
          <FriendsList />
        </Route>
        <AddFriendForm/>
      </div>
    </Router>
  );
}

export default App;
