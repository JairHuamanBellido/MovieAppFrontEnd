import Axios from "axios";
import { uri } from "../enviroment";
import { UserCreate } from "../dto/request/UserCreate.dto";

export class UserService {
    static async register(newUser: UserCreate) {
        await Axios({
            method: "post",
            headers: { "Content-type": "application/json" },
            url: `${uri}/users`,
            data: newUser
        });
    }

    static async authenticate({ username, password }) {
        return await Axios({
            method: "post",
            headers: { "Content-type": "application/json" },
            url: `${uri}/users/auth`,
            data: {
                username: username,
                password: password
            }
        }).then( data=>{
            localStorage.setItem("jwt",data.data.access_token);
            localStorage.setItem("id",data.data.user._id);
        });
    }

    static async validateJWT() {
        if (localStorage.getItem("jwt") == null) {
            return false;
        } else {
            return true;
        }
    }

    static async JWT(){
        const jwt = localStorage.getItem("jwt");

        return jwt;
    }
}
