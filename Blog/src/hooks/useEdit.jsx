import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc, collection } from "firebase/firestore";

export const useEdit = (docCollection) => {
    const [error, setError]             = useState('')
    const [post, setPost]               = useState([])
    const [loading, setLoading]         = useState(false);

    const editedPost = collection(db, docCollection)



    const editPost = async(id, data) => {

        try {
            const docRef = await doc(editedPost, id) 
            //pega qual post que é {o data vem por parametro da chamada da funcao}
            //editedPost é onde mostra o banco e a tabela que é


            const updatedPost = await updateDoc(docRef, data);

            setLoading(true);
            setError('') 

            console.log('editou corretamente')

            setLoading(false)
            
        } catch (error) {


            setLoading(false);
            setError(error)
        }

    }

    return {editPost, error, loading}
}