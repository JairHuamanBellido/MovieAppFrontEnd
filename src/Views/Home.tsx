import React from "react";
import AutoBind from "auto-bind";
import { UserService } from "../service/user.service";
import { Redirect } from "react-router";
import { updateState } from "../shared/updateState";

interface IState {
    logout: boolean
}
export default class Home extends React.Component {





    constructor(props) {
        super(props);
        AutoBind.react(this);
    }
    state: IState = {
        logout: false
    }

    async componentDidMount(){
        if( ! await UserService.validateJWT()){
            this.Logout();
        }
    }

    Logout() {
        UserService.removeJWT();
        this.setState(updateState<IState>("logout", true));
    }

    render() {
        if (!this.state.logout) {
            return (
                <div>
                    <h1>Hola soy el home.</h1>
                    <button onClick={this.Logout} >Logout </button>
                </div>
            )
        }
        return <Redirect push to="/" />
    }
}