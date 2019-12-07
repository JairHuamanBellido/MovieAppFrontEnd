import React from 'react';
import { Actor } from '../../dto/response/Actor.interface';
import { imguri } from '../../enviroment';


interface IProps {
    Actor: Actor
}

class ActorMovie extends React.Component<IProps> {
    render() {
        return (
            <div className="actor-item">

                <div className="avatar" style={{background: `url(${imguri}${this.props.Actor.profile_path})`}}> </div>
                <div className="details">

                    <p className="name-actor">{this.props.Actor.name}</p>
                    <p className="character-actor">{this.props.Actor.character}</p>
                </div>
            </div>
        );
    }
}

export default ActorMovie;