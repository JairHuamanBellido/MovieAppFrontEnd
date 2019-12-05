import React, { Fragment } from 'react';

import './App.css';
import Login from "./Views/Login";

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Register from './Views/Register';
import Home from './Views/Home';





class App extends React.Component {



    render() {
        return (
            <Fragment>
                <Router>

                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route path="/home" component={Home} />

                        <Route exact path="/register">
                            <Register />
                        </Route>


                    </Switch>
                </Router>
            </Fragment>

        )
    }
}


export default App;
