import { Actor } from "./Actor.interface";
import { Gender } from "./Gender.interface";
import { MoviePoster } from "./MoviePoster.interface";

export interface Movie{
    id?:number;
    backdrop_path?:string;
    poster_path?:string;
    overview?:string;
    title?:string;
    vote_average?:number;
    actors?:Actor[];
    release_date?:string;
    runtime?:number;
    genres?:Gender[];
    similarMovies?: MoviePoster[]
}