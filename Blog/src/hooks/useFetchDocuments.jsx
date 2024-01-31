import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFetchDocuments = (docCollection) => {
    const [post, setPost]               = useState([])
    const postRef                       = collection(db, "posts")
    const [queryResult, setQueryResult] = useState([])

    const fetchedPost = collection(db, docCollection)

    const getPosts = async() => {
        try {
            const data = await getDocs(fetchedPost);
    
            setPost(data.docs.map((doc) => ({...doc.data(), id: doc.id}))) 
            // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        } catch (error) {
            console.log('erro ao trazer os dados ' + error)    
        }
    }
            
    const getFilteredPosts = async({dbColumnName, comparisonOperator, value}) => {
        try {
            const q    = query(postRef, where(dbColumnName, comparisonOperator, value))
            const data = await getDocs(q);
    
            //console.log(data.docs.map(doc => ({id: doc.id, ...doc.data()})))
            setQueryResult(data.docs.map(doc => ({id: doc.id, ...doc.data()})))

        } catch (error) {
            console.log('erro ao trazer os dados' + error)
        }
    }
    return {getPosts, post, queryResult, getFilteredPosts}
}