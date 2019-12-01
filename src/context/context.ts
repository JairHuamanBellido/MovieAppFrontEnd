import React from "react";


let token =   localStorage.getItem("auth_token")

 export const MyContext =  React.createContext(token);