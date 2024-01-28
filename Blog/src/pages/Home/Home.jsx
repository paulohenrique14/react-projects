import React from 'react';
import { useState, useEffect } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import styles from "./Home.module.css"
const Home = () => {
  
  const [query, setQuery] = useState('');
  const {getPosts, post} = useFetchDocuments('posts')
  // const [posts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    getPosts();
  }

  return (
    <div>
        <h1>Home</h1>
        <p>Confiras nossos novos posts</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Ou pesquise por tags...'/>
          <button>Pesquisar</button>
        </form>
        <h1>Posts...</h1>
        {post && post.length == 0 &&
          <div>
            <p>Não foi achado nenhum post</p>
            <button>Seja o criador do primeiro!</button>
          </div>
        }
        <div className={styles.postContainer}>
          {post && post.length >0 &&
          post.map((post) => (
            <div className={styles.postsContent}>
              <h1>{post.title}</h1>
              <img src={post.image} alt="" />
              <p>{post.body}</p>
              <span>{post.createdBy}</span>
              {/* <p>{post.tagsArr}</p> */}
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default Home