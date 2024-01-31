import React, { useEffect } from 'react'
import {collection, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useAuthValue } from '../../context/AuthContext'
import { getDocs } from 'firebase/firestore'
import { useState } from 'react'
import styles from './Dashboard.module.css'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {
  const postRef = collection(db, "posts")
  const [user] = useAuthValue();
  const [noPost, setNoPost] = useState(false);
  const { queryResult, getFilteredPosts} = useFetchDocuments('posts');

  useEffect(() => {
    const showData = async() => {
      await getFilteredPosts({ dbColumnName: 'uid', comparisonOperator: '==', value: user.uid });
      setNoPost(false)
    }

    showData();

    

    if (queryResult.length == 0) {
      setNoPost(true)
    }

  }, [])

  return (
    <div>
        <h1>Gerencie aqui suas postagens!</h1>

        <div className={styles.postContainer}>
          {queryResult.length > 0 && 
            queryResult.map((doc) => (
              <div key={doc.id} className={styles.postsContent}>   
                <h1>{doc.title}</h1>
                <img src={doc.image} alt="" />
                <p>{doc.body}</p>
              </div>
            ))
          }
          {noPost && 
          <div>
            <h2>Você não postou nada :(</h2>
          </div>
          }
        </div>
    </div>
  )
}

export default Dashboard