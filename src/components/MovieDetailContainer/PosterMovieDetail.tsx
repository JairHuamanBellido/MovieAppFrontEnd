import React, { Fragment } from 'react';
import { imguri } from '../../enviroment';

interface IProps {
    title: string,
    year: string,
    poster_path: string;
}

class PosterMovieDetail extends React.Component<IProps>{
    render() {
        return (
            <Fragment>
                <div className="posterMovieDetails">
                    <div className="poster">
                        <img src={`${imguri}${this.props.poster_path}`} width="256" alt="" />

                    </div>
                    <div className="details">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.year}</p>
                        <div className="btn-group">
                            <button className="watch-btn" >Watch</button>
                            <button className="collection-btn">Add to collection</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PosterMovieDetail;