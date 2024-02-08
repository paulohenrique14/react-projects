import { useEffect } from 'react'
import {collection } from 'firebase/firestore'
import { useAuthValue } from '../../context/AuthContext'
import { useState } from 'react'
import styles from './Dashboard.module.css'
import { db } from '../../firebase/config'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import Post from '../../components/Post'

const Dashboard = () => {
  const [user] = useAuthValue();
  const {getPosts, post: posts, error, loading} = useFetchDocuments('posts');

  useEffect(() => {
    getPosts('uid', '==', user.uid)
  }, [])

  return (
    <div>
        <h1>Gerencie aqui suas postagens!</h1>

        <div className={styles.postContainer}>

          {posts.length > 0 && 
            posts.map((post) => (
              <Post post={post} myPost={true}/>
            ))
          }

          {loading &&
            <div>
              <p>Carregando...</p>
            </div>
          }

          {!loading && posts.length == 0  && 
          <div>
            <h2>Você não postou nada :(</h2>
          </div>
          }

        </div>
    </div>
  )
}

export default Dashboard