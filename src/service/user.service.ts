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
    
}
