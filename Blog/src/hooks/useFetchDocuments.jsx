import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFetchDocuments = (docCollection) => {
    const [error, setError]             = useState('')
    const [post, setPost]               = useState([])
    const [loading, setLoading]         = useState(false)

    const fetchedPost = collection(db, docCollection)

    const getPosts = async(fieldName = null, operator = null, value = null) => {
        try {

            setLoading(true)
            setError('')

            let data;

            if (fieldName !== null && operator !== null && value !== null) {

                const q    = query(fetchedPost, where(fieldName, operator, value))
                data = await getDocs(q);   

            }else{
                data = await getDocs(fetchedPost);

            }
            
            setPost(data.docs.map((doc) => ({...doc.data(), id: doc.id}))) 
            setLoading(false)
        } catch (error) {  
            setError(error)
            setLoading(false) 
        }
    }
    return {getPosts, post, loading, error}
}