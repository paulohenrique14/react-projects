import React from 'react';
import { useState, useEffect } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import styles from "./Home.module.css"
import { useAuthValue } from '../../context/AuthContext'
const Home = () => {
  
  const [query, setQuery] = useState('');
  const {getPosts, post: posts, queryResult, getFilteredPosts} = useFetchDocuments('posts');
  const [user] = useAuthValue();
  const [fromSearch, setFromSearch] = useState(false)
  // const [posts] = useState([])

  const handleSubmit = async(e) => {
    e.preventDefault();

    setFromSearch(false);

    await getFilteredPosts({ dbColumnName: 'tagsArr', comparisonOperator: 'array-contains', value: query });
    
    setFromSearch(true);
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

        <h1>Posts...</h1>

        {posts && posts.length == 0 &&
          <div>
            <p>Não foi achado nenhum post</p>
            <button>Seja o criador do primeiro!</button>
          </div>
        }

        {queryResult && queryResult.length == 0 && fromSearch &&
          <div>
            <p>Não foi achado nenhum post com a tag <b>{query}</b></p>
            <button>Seja o criador do primeiro!</button>
          </div>
        }

        <div className={styles.postContainer}>
          {queryResult.length > 0 &&
            queryResult.map((post) => (
              <div className={styles.postsContent} key={post.id}>
                <h1>{post.title}</h1>
                <img src={post.image} alt="" />
                <p>{post.body}</p>
                <span>{post.createdBy}</span>
                {/* <p>{post.tagsArr}</p> */}
              </div>
            ))
          }
          {posts && posts.length > 0 && !fromSearch &&
            posts.map((post) => (
              <div className={styles.postsContent} key={post.id}>
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