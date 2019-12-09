import React, { Fragment } from 'react';
import "../css/Search.css"

import autoBind from 'auto-bind';
import { updateState } from '../shared/updateState';
import { MoviesService } from '../service/movies.service';
import { MoviePoster } from '../dto/response/MoviePoster.interface';
import MovieComponent from '../components/MovieContainer/Movies';

interface IState {
    moviename: string;
    movies: MoviePoster[]
}

class Search extends React.Component<{}, IState> {
    constructor(props) {
        super(props);

        autoBind.react(this);
    }

    state: IState = {
        moviename: "",
        movies: []
    }

    handleChange(e) {

        this.setState(updateState<IState>(e.target.id, e.target.value));
        if (e.target.value !== "") {
            MoviesService.findByName(e.target.value).then(data => {
                this.setState(updateState<IState>("movies", data))
            });
        } else {
            this.setState(updateState<IState>("movies", []));
        }

    }
    render() {
        return (
            <Fragment>
                <div className="searchContainer">
                    <h2>Search</h2>

                    <input type="text"
                        placeholder="Type some movie..."
                        name="moviename"
                        id="moviename" value={this.state.moviename} onChange={this.handleChange} />


                    {this.state.moviename &&

                        <Fragment>
                            <div className="results">

                                <h1>Resultados</h1>
                                <div className="foundMoviesResults">
                                    {this.state.movies.map((movie, index) => (
                                        <MovieComponent key={index} movie={movie} />
                                    ))}

                                </div>
                            </div>
                        </Fragment>

                    }
                </div>
            </Fragment>
        );
    }
}

export default Search;