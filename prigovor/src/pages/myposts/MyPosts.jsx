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
      }, [posts])

  return (
    <div className='flex justify-center flex-col items-center mt-10'>
        <h1 className='text-6xl'>Meus posts</h1>
        <div className='p-10  flex justify-center items-center flex-col gap-5'>
        {posts.length > 0 &&
          posts.map((post) => (
            <Posts post = {post} modify = {true} response = {handleChildrenResponse}  />
          ))
        }
        {posts.length < 1 &&
        <p>comece a postar agora!</p>
        }
        </div>
    </div>
  )
}

export default MyPosts