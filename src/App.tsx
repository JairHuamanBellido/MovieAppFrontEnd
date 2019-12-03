import React from 'react';

import './App.css';
import Login from "./Views/Login";

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { MyContext } from "./context/context";
import Register from './Views/Register';
import Home from './Views/Home';




class App extends React.Component {



    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route exact path="/home" >
                        <Home />
                    </Route>

                    <Route exact path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>


        )
    }
}

App.contextType = MyContext

export default App;
