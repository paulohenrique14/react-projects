import React from 'react'
import {collection, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useAuthValue } from '../../context/AuthContext'
import { getDocs } from 'firebase/firestore'
import { useState } from 'react'

const Dashboard = () => {
  const postRef = collection(db, "posts")
  const [user] = useAuthValue();
  const {queryResult, setQueryResult} = useState([]);

  const handleSubmit = async() => {
    const q = query(postRef, where("uid", "==", user.uid))
    console.log(q)

    const data = await getDocs(q);

    setQueryResult(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }
  return (
    <div>
        <h1>Gerencie aqui suas postagens</h1>
        <button onClick={handleSubmit}>teste</button>
        {queryResult && 
            queryResult.docs.map((doc) => {
              // console.log(doc.id, "=>", doc.data())
              <>
                <h1>teste</h1>
              </>
            })
        }
    </div>
  )
}

export default Dashboard