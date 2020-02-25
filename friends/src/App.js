import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import NewFriendForm from './components/NewFriendForm';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login">
          <Login />
        </Route>
        <NewFriendForm/>
      </div>
    </Router>
  );
}

export default App;
