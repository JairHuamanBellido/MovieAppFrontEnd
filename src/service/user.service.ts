import Axios from "axios";
import { uri } from "../enviroment";
import { UserCreate } from "../dto/request/UserCreate.dto";

export class UserService {
    static async register(newUser: UserCreate) {
        let formData = new FormData();

        formData.append("avatar", newUser.avatar, `${newUser.username}.jpg`);
        formData.append("username", newUser.username);
        formData.append("password", newUser.password);
        formData.append("firstName", newUser.firstName);
        formData.append("lastName", newUser.lastName);


        
        await Axios({
            method: "post",
            headers: {
                enctype: `multipart/form-data;boundary=${newUser.avatar.name}`
            },
            url: `${uri}/users`,
            data: formData
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
        }).then(data => {
            localStorage.setItem("jwt", data.data.access_token);
            localStorage.setItem("id", data.data.user._id);
        });
    }

    static async validateJWT() {
        if (localStorage.getItem("jwt") == null) {
            return false;
        } else {
            return true;
        }
    }

    static JWT() {
        const jwt = localStorage.getItem("jwt");

        return jwt;
    }

    static removeJWT() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("id");
    }
}
