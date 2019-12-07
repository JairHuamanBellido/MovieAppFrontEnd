import React, { Fragment } from "react";
import { UserContext } from "../../context/UserContext";
import MovieComponent from "./Movies";

export default class PopularMovieContainer extends React.Component {
    render() {
        console.log(this.context.movies[6]);
        return (
            <Fragment>
                        
                <div className="trendingNowContainer">
                    <h2>Trends Now</h2>
                    <div className="nav-items">
                        <p>Movies</p>
                        <p>Tv</p>
                    </div>

                    <div style={{ width: "100vw", color: "#ffffff", display: "flex", flexWrap: "wrap" }}>

                        
                        
                        {this.context.movies.map(movie => (
                            <MovieComponent movie={movie} key={movie.id} />
                        ))}




                    </div>
                </div>
            </Fragment>
        )
    }
}



PopularMovieContainer.contextType = UserContext;