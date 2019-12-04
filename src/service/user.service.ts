import Axios from "axios";
import { uri } from "../enviroment";
import { UserCreate } from "../dto/request/UserCreate.dto";
import { updateUser } from "../context/context";

export class UserService {



    static User;


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
            localStorage.setItem("username", data.data.user.username);
            localStorage.setItem("id", data.data.user._id);
            this.User = data.data.user;
            updateUser(data.data.user);
        });
    }

    static async validateJWT() {
        if (localStorage.getItem("jwt") == null) {
            
            return false;
        } else {
            return true;
        }
    }

    static getFromStorage(){

        return {
            jwt:localStorage.getItem("jwt"),
            id:localStorage.getItem("id"),
            username:localStorage.getItem("username")
        }
    }

    static JWT() {
        const jwt = localStorage.getItem("jwt");

        return jwt;
    }

    static getId(){
        const id =  localStorage.getItem("id");
        return id;
    }

    static removeJWT() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("id");
    }

    static getUsername(){
        const username =  localStorage.get("username");
        return username;
    }


    static async getUser(){
        const res  = await Axios({
            method: "get",
            url: `${uri}/users/${this.getId()}`,
            headers: {'Authorization': `Bearer ${this.JWT()}`}
        })

        return res.data;
    }
}
