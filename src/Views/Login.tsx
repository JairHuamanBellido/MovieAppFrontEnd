import React, { Fragment } from "react";
import InputLogin from "../components/InputEspecial";

import { Redirect, Link } from "react-router-dom";
import { updateState } from "../shared/updateState";

import '../css/Login.css';

interface IState {
    username: string,
    password: string,
    auth: boolean

}







export default class Login extends React.Component<{}, IState> {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }


    state: IState = {
        username: "",
        password: "",
        auth: false
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState(updateState<IState>(name, value));
    }

    submit() {
        this.setState({ auth: true });
    }

    render() {
        return (
            <Fragment>
                {this.state.auth ?

                    <Redirect to="/home" /> :
                    <div className="form">

                        <InputLogin value={this.state.username} handleChange={this.handleChange} name="username" isSecure={false} textPlaceholder="usuario" />
                        <InputLogin value={this.state.password} handleChange={this.handleChange} name="password" isSecure={true} textPlaceholder="contraseña" />
                        <button onClick={this.submit}>Entrar</button>
                        <Link to="/register">Ir a registro</Link>
                    </div>

                }
            </Fragment>
        )
    }
}