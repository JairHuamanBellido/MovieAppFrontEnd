import React, { Fragment } from "react";
import InputLogin from "../components/InputEspecial";

import { Redirect } from "react-router-dom";
type LoginState = {
    username: string,
    password: string,
    auth: boolean
}
const updateState = <T extends string>(key: keyof LoginState, value: T) => (
    prevState: LoginState
): LoginState => ({
    ...prevState,
    [key]: value
})





export default class Login extends React.Component<{}, LoginState> {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submit =  this.submit.bind(this);
    }


    state: LoginState = {
        username: "",
        password: "",
        auth: false
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value
        this.setState(updateState(name, value));
    }

    submit() {
        this.setState({auth:true});
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
                    </div>

                }
            </Fragment>
        )
    }
}