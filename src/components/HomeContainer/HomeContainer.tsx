import React, { Component, Fragment } from 'react';
import SideBar from '../Sidebar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import PopularMovieContainer from '../MovieContainer/MovieContainer';

import CollectionContainer from '../CollectionContainer/Collection';

class HomeContainer extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <SideBar />
                    
                    <Router>

                        <Switch>
                            <Route exact path="/home/popular">
                                <PopularMovieContainer />
                            </Route>
                            <Route exact path="/home/collection">
                                <CollectionContainer />
                            </Route>

                        </Switch>
                    </Router>


                </div>
            </Fragment>
        );
    }
}

export default HomeContainer;