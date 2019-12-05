import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../dto/response/User.interface';
import Autobind from "auto-bind";
import "../../css/Sidebar.css";
import { updateState } from '../../shared/updateState';
interface IProps {
    user: User | any,
    logout: any
}

interface IState {
    activeColor: string
}
class SidebarComponent extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        Autobind.react(this);
    }

    state: IState = {
        activeColor: "Popular"
    }

    toggle(e) {
        console.log(e.target.id)
        this.setState(updateState<IState>("activeColor", e.target.id));
    }

    opacity(key: any | string) {

        if (key == this.state.activeColor) {
            return "#53CEA4";
        }
        return "rgba(255,255,255,.22)"
    }

    render() {
        return (
            <Fragment>
                <div className="sidebar-component">


                    <div className="header">
                        <h1>Movies</h1>
                        <img src={`https://jairhuamanbellido.blob.core.windows.net/avatarimages/${this.props.user.username}.jpg`} alt="" />
                        <p>{this.props.user.firstName + " " + this.props.user.lastName}</p>

                    </div>
                    <div className="nav-items">

                        <Link id="Popular" style={{color:this.opacity("Popular")}}  onClick={this.toggle} to="/home/popular">Trending Movie</Link>
                        <Link id="Collection" style={{color:this.opacity("Collection")}}  onClick={this.toggle} to="/home/collection">My Collection</Link>
                        <button onClick={this.props.logout} > Salir </button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SidebarComponent;