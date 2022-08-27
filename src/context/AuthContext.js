import { createContext, useContext , useEffect ,useState } from "react";
import {auth} from '../firebase'
import {createUserWithEmailAndPassword, signOut ,signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
const AuthContext= createContext()

export function AuthContextProvider({children}){
    const [user, Setuser]= useState({})

    function signUp(email,password)
    {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logOut()
    {
        return signOut(auth)
    }

    useEffect (() => { 
        const unsubscribe = onAuthStateChanged (auth,(currentUser) => {
            Setuser(currentUser) }) 
            return () => { 
                unsubscribe();
             }
    })

    return (
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}