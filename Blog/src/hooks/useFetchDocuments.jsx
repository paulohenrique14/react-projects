import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFetchDocuments = (docCollection) => {
    const [post, setPost] = useState([])

    const fetchedPost = collection(db, docCollection)

    const getPosts = async() => {
        try {
            const data = await getDocs(fetchedPost);
    
            setPost(data.docs.map((doc) => (
                {...doc.data(), id: doc.id}
            )))

            console.log('por favor funciona')    
        } catch (error) {
            console.log('erro ao trazer os dados ' + error)    
        }



    }

    useEffect(() => {
        getPosts
    }, [])

    // useEffect(() => {
    //     console.log(post)
    // }, [post])

    return {getPosts, post}

}