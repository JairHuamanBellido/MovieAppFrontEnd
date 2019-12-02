import React, { Fragment } from "react";
import InputLogin from "../components/InputEspecial";

import { Link, Redirect } from "react-router-dom";
import { updateState } from "../shared/updateState";

import '../css/Login.css';
import { UserService } from "../service/user.service";
import AutoBind from "auto-bind";
import Home from "./Home";

interface IState {
    username: string,
    password: string,
    auth: boolean,
    error: boolean

}







export default class Login extends React.Component<{}, IState> {

    constructor(props) {
        super(props);
        AutoBind.react(this);
    }

    state: IState = {
        username: "",
        password: "",
        auth: false,
        error: false
    }
    async componentDidMount() {

        if (await UserService.validateJWT()) {

            this.setState(updateState<IState>("auth", true));
        }
        else {
            this.setState(updateState<IState>("auth", false));
        }


    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState(updateState<IState>(name, value));
    }

    async submit() {
        await UserService.authenticate(this.state).then(() => {
            this.setState(updateState<IState>("auth", true));

        }).catch(e => {
            this.setState(updateState<IState>("error", true))
        })
    }

    render() {
        if (!this.state.auth) {
            return (
                <Fragment>



                    <div className="form">

                        <InputLogin value={this.state.username}
                            handleChange={this.handleChange}
                            name="username"
                            isSecure={false}
                            textPlaceholder="usuario" />

                        <InputLogin value={this.state.password}
                            handleChange={this.handleChange}
                            name="password"
                            isSecure={true}
                            textPlaceholder="contraseña" />

                        <button onClick={this.submit}>Ingresar</button>
                        {this.state.error && <p>Error en las credenciales</p>}

                        <Link to="/register">Ir a registro</Link>
                    </div>


                </Fragment>
            )
        }
        return (<Redirect push to="/home" />)
    }
}