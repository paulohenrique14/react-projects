import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import {db} from '../firebase/config'
import { useState } from "react";
import { child } from "firebase/database";

export const useGetPosts = (docCollection) => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]) 
    const [search, setSearch] = useState('')

    const fetchedDoc = collection(db, docCollection); //mostrar de qual db e de qual tabela pegarei os dados

    const getPosts = async(fieldName = null, operator = null, value = null) => {
        setError('')
        setLoading(false)
        
        var data;
        var q;

        try {
            setLoading(true);
            setError('');

            if (fieldName !== null && operator !== null && value !== null) {
                q  = query(fetchedDoc, where(fieldName, operator, value)) 
            }else{
                q = query(fetchedDoc, orderBy('createdAt', 'desc'))
            }

            data = await getDocs(q);
    
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id}))) 
            setLoading(false)

        } catch (error) {  
            setError(error.message)
            setLoading(false) 
        }
    }
    return {getPosts, posts, loading, error}
}