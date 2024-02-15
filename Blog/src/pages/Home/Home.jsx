import React from 'react';
import { useState, useEffect } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useNavigate } from 'react-router-dom';
import styles from "./Home.module.css"
import { useAuthValue } from '../../context/AuthContext'
import Post from '../../components/Post';


const Home = () => {
  
  const [query, setQuery]                       = useState('');
  const {getPosts, post: posts, error, loading} = useFetchDocuments('posts');
  const [user]                                  = useAuthValue();

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    
    navigate('/post/search/?q='+ query)    //leva ao componente search. está assim porque está sem css
    
  }

  useEffect(() => {
    getPosts();
  },[])

  return (
    <div>
        <div className="headerComponents">
          <h1>Home</h1>
          <p>Confiras nossos novos posts</p>
        </div>

        
        <form onSubmit={handleSubmit} className={styles.searchTagsHome}>
          <input 
            type="text" 
            placeholder='Ou pesquise por tags...'
            value={query}
            onChange={((e) => setQuery(e.target.value))}
          />
           <button color='primary'>Pesquisar</button>

        </form>

        {posts && posts.length == 0 && !loading &&
          <div>
            <p>Não foi achado nenhum post</p>
            <button>Seja o criador do primeiro!</button>
          </div>
        }

        {loading && 
          <>
            <h1 className={styles.loadingPost}>Carregando...</h1>
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
              <Post key={post.id} post={post}/>
            ))
          }
        </div>
    </div>
  )
}

export default Home