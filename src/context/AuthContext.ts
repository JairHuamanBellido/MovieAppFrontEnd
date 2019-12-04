import  {  createContext } from 'react';
import { IAuthContext } from './Interfaces/Authcontext.interface';



const store: IAuthContext = {
    logout: ()=>{}
}

export const AuthContext = createContext(store);
