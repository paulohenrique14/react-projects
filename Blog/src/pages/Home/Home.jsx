import React from 'react';
import { useState, useEffect } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const Home = () => {
  
  const [query, setQuery] = useState('');
  const {getPosts, post} = useFetchDocuments('posts')
  // const [posts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    getPosts();
  }

  // useEffect(() => {
  //   console.log('posts quentes do forno')
  //   console.log(post)
  // }, [post])

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
        {post && post.length >0 &&
          post.map((teste) => (
            <li key={teste.id}>{teste.createdBy}</li>
          ))
        }
    </div>
  )
}

export default Home