import {useState, useEffect, useReducer} from 'react'
import {db} from '../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export const useHandlePost = (docCollection) => {
    const [loading, setLoading]   = useState(false);
    const [error, setError]       = useState('');

    const navigate = useNavigate();

    const addPost = async(data) =>{
        setLoading(true)
        setError('')

        try {
            const newPost = {...data, createdAt: Timestamp.now()}

            const insertedPost = await addDoc(
                collection(db, docCollection),
                newPost
            )

            navigate('/')
        } catch (error) {
            setError(error)
            console.log(error)
        }

        setLoading(false)
        
    }

    return{
        addPost,
        loading,
        error
    }
}