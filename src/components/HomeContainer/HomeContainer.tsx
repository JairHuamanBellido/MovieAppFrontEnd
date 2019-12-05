import React, { Component, Fragment } from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import PopularMovieContainer from '../MovieContainer/MovieContainer';

import CollectionContainer from '../CollectionContainer/Collection';
import SideBarContainer from '../SidebarContainer/SidebarContainer';
import "../../css/Home.css"
import MovieDetails from '../../Views/MovieDetails';
class HomeContainer extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <div className="homeContainer">
                        <SideBarContainer />


                        <Switch>
                            <Route path="/home/popular" component={PopularMovieContainer} />

                            <Route path="/home/collection" component={CollectionContainer} />
                            <Route path="/home/movie/:id" component={MovieDetails} />

                        </Switch>
                    </div>
                </Router>



            </Fragment>
        );
    }
}

export default HomeContainer;