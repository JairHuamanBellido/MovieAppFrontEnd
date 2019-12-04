import axios from "axios";
import { uri } from "../enviroment";

export class MoviesService{



    static async getPopular(){
        const res =  await axios.get(`${uri}/movies/popular`) 
        return res.data;
    }
}