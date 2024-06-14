import {useState, useEffect, useReducer} from 'react'
import {db} from '../firebase/config'
import { collection, addDoc, Timestamp, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export const useHandlePost = (docCollection) => {

    const [loading, setLoading]   = useState(false);
    const [error, setError]       = useState('');

    const navigate = useNavigate();

    const addPost = async(data) =>{
        setLoading(true)
        setError('')


                try {
                    const newPostData = { ...data, createdAt: Timestamp.now() };


                    const docRef = await addDoc(
                        collection(db, docCollection),
                        newPostData
                    );
            
                    const postId = docRef.id;
            
                    await updateDoc(docRef, { id: postId });
            
                    navigate('/');

        } catch (error) {
            setError(error)
        }

        setLoading(false)
        
    }

    const editPost = async(postId, data) => {
        
        setLoading(true)
        setError('')
        try {
            const postRef = doc(db, docCollection, postId)

            console.log(data)
            
            await updateDoc(postRef, data)

            navigate('/post/myposts')
            

        } catch (error) {
            setError(error)
            console.log(error)            
        }
    }

    const deletePost = async(postId, data) => {
        setLoading(false)
        setError('')

        try {
            const postRef = doc(db, docCollection, postId)

            await deleteDoc(postRef, data)

            navigate('/post/myposts')            
        } catch (error) {
            setError(error.message)
            
        }
    }

    return{
        addPost,
        loading,
        error,
        editPost,
        deletePost
    }
}