import React, { Fragment } from "react";
import { MyContext } from "../context/context";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default class SideBar extends React.Component {
    render() {
        return (
            <Fragment>
                <AuthContext.Consumer>
                    {({ logout}) => (


                        <MyContext.Consumer>
                            {({ user, movies }) => (
                                <Fragment>
                                    <Link to="/home/popular">Last Movie</Link>
                                    <Link to="/home/collection">Collection</Link>
                                    <button onClick={logout} > Salir </button>
                                    <div>
                                        <h1>Movies</h1>
                                        <p>{user.username}</p>

                                    </div>
                                </Fragment>
                            )}
                        </MyContext.Consumer>
                    )}
                </AuthContext.Consumer>
            </Fragment>
        )
    }
}