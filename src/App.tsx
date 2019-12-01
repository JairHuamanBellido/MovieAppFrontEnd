import React from 'react';

import './App.css';
import Login from "./Views/Login";
import Home from "./Views/Home";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { MyContext } from "./context/context";

class App extends React.Component {


  
  render() {
    return (
      
        <Router>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Router>
      
    )
  }
}

App.contextType = MyContext

export default App;
