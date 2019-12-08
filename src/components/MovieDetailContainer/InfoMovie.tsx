import React from 'react';

import { Gender } from '../../dto/response/Gender.interface';

interface IProps {
    overview: string;
    vote_average: number;
    genres: Gender[]
    duration: number;

}

class InfoMovie extends React.Component<IProps> {
    render() {
        return (
            <div className="infoMovieContainer">
                <div className="storyline">
                    <h2>Storyline</h2>
                    <p>{this.props.overview}</p>
                </div>

                <div className="details">
                    <div className="score">
                        <h2>Rating</h2>
                        <div>
                            <img src="/star.svg" alt="" />
                            <p>{this.props.vote_average}</p>
                        </div>
                    </div>
                    <div className="duration">
                        <h2>Duration</h2>
                        <p>{this.props.duration} min</p>
                    </div>
                    <div className="geners">
                        <h2>Geners</h2>
                        <p>{this.props.genres.map(gender => gender.name).join(" | ")}</p>
                    </div>
                </div>


            </div>
        );
    }
}

export default InfoMovie;