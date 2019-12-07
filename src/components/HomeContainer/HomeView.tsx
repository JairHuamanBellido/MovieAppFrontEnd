import React, {  Fragment } from 'react';
import { UserContext } from '../../context/UserContext';
import PanelContainer from './Components/PanelContainer';
import PopularMovieContainer from '../MovieContainer/MovieContainer';

export default class HomeView extends React.Component {

    render() {
        console.log(this.context.movies);
        return (
            <Fragment>
                <PanelContainer movie={this.context.movies[1]} />
                <PopularMovieContainer />
            </Fragment>
        );
    }
}




HomeView.contextType = UserContext;