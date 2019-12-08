import React, { Fragment } from 'react';
import PanelContainer from './Components/PanelContainer';
import PopularMovieContainer from '../MovieContainer/MovieContainer';
import { UserContext } from '../../context/UserContext';

export default class HomeView extends React.Component {

    render() {
        console.log("renderizando")
        return (

            
                <UserContext.Consumer>
                    {({ movies }) => (
                        <Fragment>
                            <PanelContainer movie={movies[0]} />
                            <PopularMovieContainer />
                        </Fragment>
                    )}
                </UserContext.Consumer>
            
        );
    }
}




