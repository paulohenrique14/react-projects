import { useState, useEffect } from "react";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
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
            let q;

            if (fieldName !== null && operator !== null && value !== null) {

                q  = query(fetchedPost, where(fieldName, operator, value)) 


            }else{

                q = query(fetchedPost, orderBy('createdAt', 'desc'))

            }

            data = await getDocs(q);
            
            setPost(data.docs.map((doc) => ({...doc.data(), id: doc.id}))) 
            setLoading(false)
        } catch (error) {  
            setError(error)
            setLoading(false) 
        }
    }
    return {getPosts, post, loading, error}
}