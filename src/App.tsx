import React from 'react';

import './App.css';
import Login from "./Views/Login";

import { Route, BrowserRouter as Router} from 'react-router-dom'
import { MyContext } from "./context/context";
import Register from './Views/Register';
import Home from './Views/Home';
import Collection from './components/CollectionContainer/Collection';





class App extends React.Component {



    render() {
        return (

            <Router>

                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/home" >
                    <Home />
                </Route>

                <Route exact path="/collection" >
                    <Collection />
                </Route>

                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/home/popular">
                    <Home />
                </Route>
                <Route exact path="/home/collection">
                    <Home />
                </Route>
            </Router>


        )
    }
}

App.contextType = MyContext

export default App;
