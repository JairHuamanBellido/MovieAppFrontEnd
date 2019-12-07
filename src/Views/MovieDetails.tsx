import React, { Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { Movie } from '../dto/response/Movie.interface';
import { MoviesService } from '../service/movies.service';
import { updateState } from '../shared/updateState';

import { imguri } from '../enviroment';

import "../css/MovieDetails.css";
import PosterMovieDetail from '../components/MovieDetailContainer/PosterMovieDetail';
import InfoMovie from '../components/MovieDetailContainer/InfoMovie';
import ActorMovie from '../components/MovieDetailContainer/ActorMovie';
interface IState {
    movie: Movie
}

class MovieDetails extends React.Component<RouteComponentProps<{ id?: string }>, IState> {
    state: IState = {
        movie: {
            backdrop_path: "",
            id: -1,
            overview: "",
            poster_path: "",
            release_date: "",
            title: "",
            genres: [{ name: "" }],
            vote_average: -1,
            actors: [{
                character: "",
                name: "",
                profile_path: ""
            }],
            runtime: -1

        }

    }

    async componentDidMount() {
        const movie = await MoviesService.findById(this.props.match.params.id);
        window.scroll(0,0);
        this.setState(updateState<IState>("movie", movie));
    }
    render() {

        
        return (
            <Fragment>
                <div className="moviedetails-container">

                    <div className="moviedetails-panel" style={{
                        background: `linear-gradient(rgba(28,31,57,.67)20%,rgba(28,31,57,.00),rgba(19,19,25,.00)50%,rgba(19,19,25,1)90%),url(${imguri}${this.state.movie.backdrop_path})`

                    }}>

                    </div>
                    <PosterMovieDetail poster_path={this.state.movie.poster_path} year={this.state.movie.release_date.slice(0, 4)} title={this.state.movie.title} />

                    <div className="aboutMovie">
                        <InfoMovie
                            duration={this.state.movie.runtime}
                            genres={this.state.movie.genres}
                            overview={this.state.movie.overview}
                            vote_average={this.state.movie.vote_average}
                        />


                        <div className="castContainer">
                            <h2>Cast</h2>
                            {this.state.movie.actors.map((actor,index) => (
                                <ActorMovie key={index} Actor={actor} />
                            ))}
                        </div>

                    </div>


                </div>

            </Fragment>
        );
    }
}

export default MovieDetails;