import React, { Fragment } from 'react';

import './App.css';
import Login from "./Views/Login";
import Home from "./Views/Home";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { MyContext } from "./context/context";
import Register from './Views/Register';




class App extends React.Component {



  render() {
    return (
      <Fragment>
        <Router>
        
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
        </Router>
      </Fragment>

    )
  }
}

App.contextType = MyContext

export default App;
