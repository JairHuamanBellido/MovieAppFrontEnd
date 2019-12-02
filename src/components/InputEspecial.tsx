import React, { Fragment } from "react";


type InputProps = {
    name: string,
    isSecure: boolean
    textPlaceholder: string,
    handleChange: any,
    value: any
}

export default class InputLogin extends React.Component<InputProps, {}>  {
    render() {
        return (

            <Fragment>
                <div className="field">
                    <input
                        type={this.props.isSecure ? "password" : "text"}
                        name={`${this.props.name}`}
                        id={`${this.props.name}`}
                        onChange={this.props.handleChange}
                        placeholder={"Ingrese su " + this.props.textPlaceholder}
                        value={this.props.value}
                    />
                </div>
            </Fragment>


        )
    }
}