import React, { useEffect } from 'react'

import { useQuery } from '../../hooks/useQuery'

import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import Post from '../../components/Post';

const ReadPost = () => {

    const {getPosts, loading, error, post: posts} = useFetchDocuments('posts')

    const query = useQuery();

    const search = query.get('q');

    useEffect(() => {
        getPosts('id', '==', search)
        console.log('pesquisou')
    }, [search])

  return (
    <div>
        <h2>Post</h2>
        <p>{search}</p>
        {posts && posts.length > 0 &&
            posts.map((post) => (
                <Post post = {post} key={post.id}/>
            ))
        }
    </div>
  )
}

export default ReadPost