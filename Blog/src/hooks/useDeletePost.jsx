import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc, collection } from "firebase/firestore";

export const useDeletePost = (docCollection) => {

    const deletedPost = collection(db, docCollection)

    const deletePost = async(postReference) => {

        await deleteDoc(doc(db, docCollection, postReference))

    }

    return {deletePost}

}