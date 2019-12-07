import axios from "axios";
import { uri } from "../enviroment";
import { Movie } from "../dto/response/Movie.interface";

export class MoviesService{



    static async getPopular(){
        const res =  await axios.get(`${uri}/movies/popular`) 
        return res.data;
    }

    static async findById(id):Promise<Movie>{
        const res =  await axios.get(`${uri}/movies/${id}`);
        return res.data;
    }
}