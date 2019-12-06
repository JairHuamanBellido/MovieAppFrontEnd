import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Movie } from '../dto/response/Movie.interface';
import { MoviesService } from '../service/movies.service';
import { updateState } from '../shared/updateState';

import { imguri } from '../enviroment';

import "../css/MovieDetails.css";
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
            title: ""
        }

    }

    async componentDidMount() {
        const movie = await MoviesService.findById(this.props.match.params.id);

        this.setState(updateState<IState>("movie", movie));
    }
    render() {

        console.log(this.props.match.params.id);
        return (
            <div className="moviedetails-container" style={{
                background: `linear-gradient(180deg,rgba(11,14,42,.53) , rgba(15,18,43,1) 70%),  url(${imguri}${this.state.movie.backdrop_path})`

            }}>
                <div className="header-movie-details">
                    <h1>{this.state.movie.title.toUpperCase()}</h1>
                    <p style={{color:"#53CEA4"}} >{this.state.movie.release_date.slice(0, 4)}</p>
                    <p className="overview-movie" style={{ width: "50%" }} >{this.state.movie.overview}</p>
                </div>
            </div>
        );
    }
}

export default MovieDetails;