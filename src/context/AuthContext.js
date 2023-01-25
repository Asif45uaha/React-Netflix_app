import {createContext,useContext,useEffect,useState} from "react";

import {auth,db} from '../firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";
import {setDoc,doc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({children}){
   const [user,setUser]=useState({});

   function SignUp(email,password){
        createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,'users',email),{
            savedShows : []
        })
    
   }
   function LogIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)
   }
   function LogOut(){
    return signOut(auth);
   }

   useEffect(()=>{
       const UnSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
       })
       return ()=>{
        UnSubscribe();
       }
   },[])
    return(
        <AuthContext.Provider value={{SignUp,LogIn,LogOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}
export function UserAuth(){
    return(
        useContext(AuthContext)
    )
}