import {useState, useEffect, useReducer} from 'react'
import {db} from '../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

const initalState = {
    loading: null,
    error: null
}

const insertReducer = (state, action) => {
    switch(action.type) {
        case "LOADING":  
            return {loading: true, error: null}
        case "INSERTED_DOC":
            return {loading: false, error: null}
        case 'ERROR':
            return {loading: false, error: action.payload}
        default:
            return state;
    }
};

export const useInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initalState)

    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action);
        };
    };

    const insertDocument = async(document) => {
        try {
            const newDocument = {...document, createdAt: Timestamp.now()}   
    
            const insertedDocument = await addDoc(
                collection(db, docCollection),
                newDocument
            );
    
        } catch (error) {
            checkCancelBeforeDispatch({
                type: 'ERROR',
                payload: error.message
            });

            console.log(error)
            console.log(error.message)
        }
    }

    useEffect(() =>{
        setCancelled(true)
    }, [])

    return { insertDocument, response }

}





