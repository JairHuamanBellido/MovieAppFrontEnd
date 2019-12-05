import React, { Fragment } from "react";
import { UserContext } from "../../context/UserContext";
import MovieComponent from "./Movies";
import SearchbarContainer from "../searchbarContainer/SearchbarContainer";
export default class PopularMovieContainer extends React.Component {
    render() {
        return (
            <Fragment>
                <div style={{display:"flex", overflow: "auto", flexDirection:"column"}}>
                    <SearchbarContainer />
                    <div style={{ width: "80vw",  padding:"2em" ,color: "#ffffff", display: "flex", flexWrap: "wrap" }}>
                        <UserContext.Consumer>
                            {({ movies }) => (
                                movies.map(movie => (
                                    <MovieComponent movie={movie} key={movie.id} />
                                ))
                            )}
                        </UserContext.Consumer>
                    </div>
                </div>
            </Fragment>
        )
    }
}
