import { createContext, useContext , useEffect ,useState } from "react";
import {auth} from '../firebase'
import {createUserWithEmailAndPassword, signOut ,signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import userEvent from "@testing-library/user-event";
const AuthContext= createContext()

export function AuthContextProvider({children}){
    cosnt [user, Setuser]= useState({})

    function signUp(email,password)
    {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function logIn(){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut()
    {
        return signOut(auth)
    }

    useEffect (() => { 
        const unsubscribe = onAuthStateChanged (auth,(currentUser) => {
            setUser(currentUser) }) 
            return () => { 
                unsubscribe();
             }
    })

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}