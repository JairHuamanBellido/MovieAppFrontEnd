import React, { Fragment } from "react";
import InputLogin from "../components/InputEspecial";
import { updateState } from "../shared/updateState";
import { UserService } from "../service/user.service";
import { UserCreate } from "../dto/request/UserCreate.dto";
import AutoBind from "auto-bind";
interface IState {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}

export default class Register extends React.Component<{}, IState>{

    constructor(props) {
        super(props);
        AutoBind.react(this);
        
        
    }


    state: IState = {
        firstName: "",
        lastName: "",
        password: "",
        username: ""
    }

    handleChange(e) {

        const { name, value } = e.target;

        this.setState(updateState<IState>(name, value));
    }

    
    async submit() {
        
        
        await UserService.register(this.state).then(() => {
            console.log("Usuario creado");
        })

    }

    render() {
        return (
            <Fragment>

                <div>
                    <InputLogin
                        isSecure={false}
                        name="firstName"
                        textPlaceholder="name"
                        value={this.state.firstName}
                        handleChange={this.handleChange}

                    />
                    <InputLogin
                        isSecure={false}
                        name="lastName"
                        textPlaceholder="last Name"
                        value={this.state.lastName}
                        handleChange={this.handleChange}

                    />
                    <InputLogin
                        isSecure={false}
                        name="username"
                        textPlaceholder="username"
                        value={this.state.username}
                        handleChange={this.handleChange}

                    />
                    <InputLogin
                        isSecure={true}
                        name="password"
                        textPlaceholder="password"
                        value={this.state.password}
                        handleChange={this.handleChange}

                    />

                    <button onClick={this.submit}>Registrar</button>
                </div>
            </Fragment>
        )
    }
}