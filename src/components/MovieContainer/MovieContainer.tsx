import React, { Fragment } from "react";
import { UserContext } from "../../context/UserContext";
import MovieComponent from "./Movies";
export default class PopularMovieContainer extends React.Component {
    render() {
        return (
            <Fragment>
                <div style={{ width: "80vw", overflow:"auto", color: "#ffffff" ,display:"flex", flexWrap:"wrap" }}>
                    <UserContext.Consumer>
                        {({ movies }) => (
                            movies.map(movie => (
                                <MovieComponent movie={movie} key={movie.id} />
                            ))
                        )}
                    </UserContext.Consumer>
                </div>
            </Fragment>
        )
    }
}
