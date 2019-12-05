import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

class MovieDetails extends React.Component<RouteComponentProps<{id?:string}>,{}> {
    render() {
        
        console.log(this.props.match.params.id);
        return (
            <div>
    <h1 style={{color:"#fff"}}>Soy el movie Details {this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default MovieDetails;