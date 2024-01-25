import { db } from '../firebase/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom';

export const useAuthentication = () => {
    const [authError, setAuthError] = useState(null);
    const [loading, setLoading]     = useState(null);
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const logout = () => {
        checkIfIsCancelled();

        signOut(auth)
    }

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);

        try {
            const {user} = await createUserWithEmailAndPassword (
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName
            });
            
        } catch (error) {

            let systemErrorMessage;
            console.log(error.message)
            if (error.message.includes('Passowrd')){
                systemErrorMessage = 'A senha precisa conter pelo menos 6 dígitos!'
            }else if (error.message.includes('email')){
                systemErrorMessage = 'Email invalido, favor verificar!'
            }else{
                systemErrorMessage = 'Ocorreu um erro. Tente novamente'
            }
            
            setAuthError(msgError)
        }

        setLoading(false);
    };

    const MudaLugar = (route) =>{
        <Navigate to = {route}/>
    }

    const login = async(data) => {
        checkIfIsCancelled();

        setLoading(true);
        setAuthError(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);

            setLoading(false)
            MudaLugar('/');
            
        } catch (error) {
            let systemErrorMessage;

            if (error.message.includes('auth/invalid-credential')){
                systemErrorMessage = 'Senha ou usuário incorreto. Favor verificar';
            } else{
                systemErrorMessage = 'Ocorreu um erro. Tente novamente.'
            }
            
            console.log('system error message: '+systemErrorMessage)

            setAuthError(systemErrorMessage)
            setLoading(false)   
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
   }, []);

   return {
    auth,
    createUser,
    authError,
    loading,
    logout,
    login
   }

}