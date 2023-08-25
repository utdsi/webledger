
import './App.css';
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import ItemList from './ItemList'; // Import the ItemList component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <ItemList /> {/* Render the ItemList component */}
      </div>
    </Router>
  );
}

export default App;

