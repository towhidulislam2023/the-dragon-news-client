import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const userAuthContex = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const googleProvider= new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true)
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        
    }
    const sendEmailforvarification=()=>{
        return sendEmailVerification(auth.currentUser)
    }
    const loginWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const loginWithgithub=()=>{
        return signInWithPopup(auth,githubProvider)
    }
    const updateUserInfo=(name,photourl)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photourl||""
        })
    }
    const signout=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authInfo = {
        createUser,
         loginUser,
         user,
        sendEmailforvarification,
        updateUserInfo,
        signout,
        loginWithGoogle,
        loginWithgithub,
        loading
    }
    return (
        <>
            <userAuthContex.Provider value={authInfo}>
                {children}
            </userAuthContex.Provider>

        </>
    );
};

export default AuthProvider;