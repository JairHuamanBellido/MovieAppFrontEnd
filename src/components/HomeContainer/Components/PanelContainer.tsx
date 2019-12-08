import React, { Fragment } from 'react';
import "../../../css/Panel.css";
import { Movie } from '../../../dto/response/Movie.interface';
import { MoviesService } from '../../../service/movies.service';
import { updateState } from '../../../shared/updateState';
import { imguri } from '../../../enviroment';

interface IProps {
    movie: Movie
}


interface IState {
    movie: Movie
}
class PanelContainer extends React.Component<IProps, IState> {

    state: Readonly<IState> = {
        movie: {
            title: "",
            backdrop_path: "",
            id: -1,
            overview: "",
            poster_path: "",
            release_date: "",
            genres: [{ name: "" }],
            vote_average: 1

        }
    }

    componentDidMount() {
        MoviesService.findById(this.props.movie.id).then(data => {
          
            this.setState(updateState<IState>("movie", data))
        })
    }

    render() {

        return (
            <Fragment>
                <div style={{
                    background: `linear-gradient(90deg,rgba(29,32,59,.99),rgba(29,32,59,.01)100%,rgba(29,32,59,.01)),  url(${imguri}${this.state.movie.backdrop_path})`

                }} className="panelContainer">

                    <div className="panel-details">

                        <p className="genres">
                            {this.state.movie.genres.map(gen => gen.name).join(" | ")}
                        </p>
                        <div className="score">
                            <img src="/star.svg" alt="" />
                            <p>{this.state.movie.vote_average}</p>
                        </div>
                        <div className="overview">

                            <h1>{this.state.movie.title}</h1>
                            <p>{this.state.movie.overview}</p>


                        </div>

                        <div className="btn-group">
                            <button>View</button>
                        </div>

                    </div>

                </div>
            </Fragment>
        )
    }


}


export default PanelContainer;