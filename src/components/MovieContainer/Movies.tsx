
import React, { Component } from 'react';


import "../../css/Movie.css";
import { Link} from 'react-router-dom';
import { MoviePoster } from '../../dto/response/MoviePoster.interface';
interface IProps {
    movie: MoviePoster 
}

class MovieComponent extends Component<IProps, {}> {

    render() {

        return (
            
            <Link to={`/home/movie/${this.props.movie.id}`}>
                <div className="item-movie" style={{ width: "210px", overflow: "auto" }}>
                    <img width={190} src={`https://image.tmdb.org/t/p/original/${this.props.movie.poster_path}`} alt="" />
                    <p className="title-movie" >{this.props.movie.title}</p>
                    <p className="year-movie">{this.props.movie.release_date}</p>
                </div>
            </Link>
            
        );
    }
}


export default MovieComponent;