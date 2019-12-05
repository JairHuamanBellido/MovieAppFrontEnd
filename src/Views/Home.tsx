import React, { Fragment } from "react";
import AutoBind from "auto-bind";
import { UserService } from "../service/user.service";
import { Redirect } from "react-router";
import { updateState } from "../shared/updateState";
import { Movie } from "../dto/response/Movie.interface";
import { MoviesService } from "../service/movies.service";
import { UserContext } from "../context/UserContext";

import HomeContainer from "../components/HomeContainer/HomeContainer";
import { User } from "../dto/response/User.interface";
import { AuthContext } from "../context/AuthContext";

interface IState {
    logout: boolean;
    movies: Movie[];
    user: User

}
export default class Home extends React.Component {





    constructor(props) {
        super(props);
        AutoBind.react(this);


    }


    state: IState = {
        logout: false,
        movies: [],
        user: {
            _id: null,
            firstName: "",
            lastName: "",
            username: ""
        }
    }

    async componentDidMount() {
        if (! await UserService.validateJWT()) {
            this.Logout();
            
        }

        console.log("renderizando")

        const movies = await MoviesService.getPopular();
        const user = await UserService.getUser();

        this.setState(updateState<IState>("user", user));
        this.setState(updateState<IState>("movies", movies));





    }

    Logout() {
        UserService.removeJWT();
        this.setState(updateState<IState>("logout", true));
    }

    render() {
        
        if (!this.state.logout) {
            return (
                <Fragment>
                    <AuthContext.Provider value={{
                        logout: () => { this.Logout() }
                    }}>
                        <UserContext.Provider value={{
                            movies: this.state.movies,
                            user: this.state.user
                        }}>
                            <HomeContainer />

                        </UserContext.Provider>
                    </AuthContext.Provider>
                </Fragment>
            )
        }
        return <Redirect push to="/" />
    }
}
Home.contextType = UserContext;
Home.contextType = AuthContext;