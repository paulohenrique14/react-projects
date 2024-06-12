import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {db} from '../firebase/config'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthentication = () => {
    const [loading, setLoading]   = useState(false);
    const [error, setError]       = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate()
     
    const auth = getAuth();

    const createUser = async(data) => {

        setError("")
        setLoading(true)

        try {

            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password)

            await updateProfile(user, {displayName: data.name, id: auth})

            navigate('/')
            
        } catch (error) {
            setError(error.message)  
            console.log(error.message)
        }
        setLoading(false)
    }

    const login = async(data) => {

        setLoading(true)
        setError('')
        console.log('antes do try')

        try {

            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)   
            const user           = userCredential.user;

            navigate('/')
        } catch (error) {
            setError(error.message)
            console.log(error.message)
            console.log('deu erro')
        }
        setLoading(false)    
    }

    const logout = async() => {
        try {
            
            await signOut(auth)

        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }
    }

    return {
        createUser,
        auth,
        loading,
        error,
        login,
        auth,
        logout
    }
}

