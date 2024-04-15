import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPosts } from '../../hooks/useGetPosts';
import { useEffect } from 'react';
import Posts from '../../components/Posts';

const MyPosts = () => {

    const {getPosts, posts, loading} = useGetPosts('/posts')

    const user = useSelector(state => state.user.user);

    useEffect(() => {
        getPosts('userID', '==', user.userId)
      }, [])

  return (
    <div className='flex justify-center flex-col items-center mt-10'>
        <h1 className='text-6xl'>Meus posts</h1>
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

export default MyPosts