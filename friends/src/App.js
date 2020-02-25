import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import AddFriendForm from './components/AddFriendForm';
import FriendsList from './components/FriendsList';
import './App.css';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friendslist">Friends List</Link>
        </nav>
        <Route exact path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/friendslist">
          <FriendsList />
        </PrivateRoute>
        <PrivateRoute path="/addfriend">
          <AddFriendForm/>
        </PrivateRoute>     
      </div>
    </Router>
  );
}

export default App;
