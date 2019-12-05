
import React, { Component } from 'react';

import { Movie } from '../../dto/response/Movie.interface';

interface IProps {
    movie: Movie | any
}

class MovieComponent extends Component<IProps, {}> {
    render() {
        return (
            <div className="item" style={{width:"210px", overflow:"auto", margin: "24px 0"}}>
                <img width={190} src={`https://image.tmdb.org/t/p/original/${this.props.movie.poster_path}`} alt="" />
                <p>{this.props.movie.title}</p>
            </div>
        );
    }
}


export default MovieComponent;