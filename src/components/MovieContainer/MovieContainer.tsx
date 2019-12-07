import React, { Fragment } from "react";
import { UserContext } from "../../context/UserContext";
import MovieComponent from "./Movies";
import { updateState } from "../../shared/updateState";
import Autobind from "auto-bind";

interface IState {
    categorySelected: string;
}

export default class PopularMovieContainer extends React.Component<{}, IState> {

    constructor(props) {
        super(props);
        Autobind.react(this);

    }

    state: IState = {
        categorySelected: "Movies"
    }
    toggle(e) {
        console.log(e.target.id)
        this.setState(updateState<IState>("categorySelected", e.target.id));
    }

    opacity(key: any | string) {

        if (key === this.state.categorySelected) {
            return "rgba(255,255,255,1)";
        }
        return "rgba(255,255,255,.22)"
    }

    render() {
        
        return (
            <Fragment>

                <div className="trendingNowContainer">
                    <h2>Trends Now</h2>
                    <div className="nav-items">
                        <div className="item">
                            <p style={{ color: this.opacity("Movies") }} onClick={this.toggle} id="Movies" >Movies</p>
                            <div style={{display: (this.state.categorySelected==="Movies")?"initial":"none" }} className="indicator"></div>
                        </div>
                        <div className="item">
                            <p style={{ color: this.opacity("Tv") }} onClick={this.toggle} id="Tv" >Tv</p>
                            <div style={{display: (this.state.categorySelected==="Tv")?"initial":"none" }} className="indicator"></div>
                        </div>
                    </div>

                    <div className="listMoviesPopular" >



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