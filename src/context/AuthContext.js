import {createContext, useContext, useEffect, useState} from "react";
import {auth} from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

//this is for the function that registers a user
const AuthContext = createContext({
     register: ()=>Promise,
     login: ()=>Promise,
     signOut: ()=>Promise,
});

//create a custom hook that will consume the useContext hook;

export const useAuth = ()=> useContext(AuthContext);

const AuthContextProvider=({children})=>{

    //this function returns a function call which returns a promise that will create a user using firebase authentication
    const register = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOut = ()=>{
        return signOut(auth);
    }
  
    const value = {
        register,
        login,
        signOut,
    }
    return  (<AuthContext.Provider value={value}>
              {children}
         </AuthContext.Provider>)
}

export default AuthContextProvider;
