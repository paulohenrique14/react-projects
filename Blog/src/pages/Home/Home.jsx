import React from 'react';
import { useState, useEffect } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import styles from "./Home.module.css"
import { useAuthValue } from '../../context/AuthContext'
import Post from '../../components/Post';
const Home = () => {
  
  const [query, setQuery] = useState('');
  const {getPosts, post: posts, error, loading} = useFetchDocuments('posts');
  const [user] = useAuthValue();
  // const [posts] = useState([])

  const handleSubmit = async(e) => {
    e.preventDefault();

     getPosts('tagsArr', 'array-contains', query)
    
  }

  useEffect(() => {
    getPosts();
  },[])

  return (
    <div>
        <h1>Home</h1>
        <p>Confiras nossos novos posts</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Ou pesquise por tags...'
            value={query}
            onChange={((e) => setQuery(e.target.value))}
          />
          <button>Pesquisar</button>
        </form>

        <h2>Posts...</h2>

        {posts && posts.length == 0 && !loading &&
          <div>
            <p>Não foi achado nenhum post</p>
            <button>Seja o criador do primeiro!</button>
          </div>
        }

        {loading && 
          <>
            <h1>Carregando...</h1>
          </>
        }
        {error && 
          <div>
            <p>erro! {error}</p>
          </div>
        }

        <div className={styles.postContainer}>
          {posts && posts.length > 0  && !loading &&
            posts.map((post) => (
              <Post post={post}/>
            ))
          }
        </div>
    </div>
  )
}

export default Home