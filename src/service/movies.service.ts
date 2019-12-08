import axios from "axios";
import { uri } from "../enviroment";
import { Movie } from "../dto/response/Movie.interface";
import { MoviePoster } from "../dto/response/MoviePoster.interface";

export class MoviesService{



    static async getPopular(){
        const res =  await axios.get(`${uri}/movies/popular`) 
        return res.data;
    }

    static async findById(id):Promise<Movie>{
        const res =  await axios.get(`${uri}/movies/${id}`);
        return res.data;
    }


    static async findSimilarMovie(id): Promise<MoviePoster>{
        const res = await axios.get(`${uri}/movies/similar/${id}`)
        return res.data;
    }

}