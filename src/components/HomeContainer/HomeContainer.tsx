import React, { Component, Fragment } from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


import CollectionContainer from '../CollectionContainer/Collection';
import SideBarContainer from '../SidebarContainer/SidebarContainer';
import "../../css/Home.css"
import MovieDetails from '../../Views/MovieDetails';

import HomeView from './HomeView';
import Search from '../../Views/Search';
class HomeContainer extends Component {

    render() {
        
        return (
            <Fragment>
                <Router>
                    <div className="homeContainer">
                        <SideBarContainer />
                        
                        
                        <Switch>
                            <Route path="/home/popular" component={HomeView} />

                            <Route path="/home/collection" component={CollectionContainer} />
                            <Route path="/home/movie/:id" component={MovieDetails} />
                            <Route exact path="/home/search" component={Search} />

                        </Switch>
                    </div>
                </Router>



            </Fragment>
        );
    }
}

export default HomeContainer;