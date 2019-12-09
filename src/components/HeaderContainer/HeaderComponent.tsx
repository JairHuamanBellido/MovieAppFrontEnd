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
class HeaderComponent extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        Autobind.react(this);
    }

    state: IState = {
        activeColor: "Popular"
    }

    toggle(e) {

        this.setState(updateState<IState>("activeColor", e.target.id));
    }

    opacity(key: any | string) {

        if (key === this.state.activeColor) {
            return "rgba(255,255,255,1)";
        }
        return "rgba(255,255,255,.22)"
    }

    render() {
        return (
            <Fragment>
                <div className="sidebar-component">

                    <div className="logo">
                        <h1>Movies</h1>

                    </div>
                    <div className="nav-items">

                        <Link id="Popular" style={{ color: this.opacity("Popular") }} onClick={this.toggle} to="/home/popular">Home</Link>
                        <Link id="Collection" style={{ color: this.opacity("Collection") }} onClick={this.toggle} to="/home/collection">Collection</Link>
                        <Link id="Search"  style={{color: this.opacity("Search")}} onClick={this.toggle} to="/home/search">Search</Link>
                    </div>
                    <div className="avatar">
                        <img src={`https://jairhuamanbellido.blob.core.windows.net/avatarimages/${this.props.user.username}.jpg`} alt="" />


                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HeaderComponent;