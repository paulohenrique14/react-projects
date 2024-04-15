import React, { useState } from 'react' 
import { useSelector } from 'react-redux'
import { useGetPosts } from '../../hooks/useGetPosts';
import { useEffect } from 'react';
import Posts from '../../components/Posts';

const Home = () => {

  const {getPosts, posts, loading} = useGetPosts('/posts')

  const [error, setError] = useState('')
  const [queryPost, setQueryPost] = useState('');

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    getPosts()
  }, [])

  if (loading) {
    return <p>Carregando...</p>
  }

  const handleGetPost = async(e) => {
    e.preventDefault();

    if (queryPost === '') {
      getPosts();
      return;
    }

    getPosts('tagsArr', 'array-contains', queryPost) 
  }

  return (
    <div>
        
        <div className='w-full flex gap-2 flex-col justify-center items-center p-5'>
          <h1 className='text-6xl'>Home</h1>
          <p>Pesquise por tags!</p>
          <form onSubmit={handleGetPost} className='flex gap-2 w-2/4 justify-center'>
            <label className='flex flex-col'>
              <input 
                type="text"
                value={queryPost}
                onChange={((e)=> setQueryPost(e.target.value) )}
                className='h-full bg-white border border-primary px-4 py-2 focus:outline-none focus:border-primary-500 focus:border-2' 
              />
            </label>
            <button className='text-black border-2 px-4 py-1 border-primary hover:bg-primary hover:text-white transition-all duration-300'>Pesquisar</button>
          </form>
          {error && 
            <p>{error}</p>   
          }
        </div>

        <div className='p-10  flex justify-center items-center flex-col gap-5'>
        {posts.length > 0 &&
          posts.map((post) => (
              <Posts post={post}/>
          ))
        }
        </div>
        
    </div>
  )
}

export default Home