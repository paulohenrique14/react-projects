import React, { useEffect } from 'react'
import { useQuery } from '../../hooks/useQuery'
import Post from '../../components/Post';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const EditPost = () => {

    const {getPosts, loading, error, post: posts} = useFetchDocuments('posts')

    const query = useQuery();

    const search = query.get('q');

    useEffect(() => {
        getPosts('id', '==', search)
        console.log(posts.length)
    },[])
  return (
    <div>
        <h1>Edite o post</h1>
        <p>Teste</p>
        {posts &&
            posts.map((post) => (
                <Post post={post} key={post.id}/>
                
            ))
        }
    </div>
  )
}

export default EditPost