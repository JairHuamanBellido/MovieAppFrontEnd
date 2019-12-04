import React from "react";


export const globalContext = {
    user: null,
    movies: null
};

export const updateUser = user => {
    globalContext.user = user;
};

export const updateMovies = movies => {
    globalContext.movies = movies;
};
export const MyContext = React.createContext({
    movies: [ ],
    user: {username:'e'}
});
