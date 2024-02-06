import { useEffect, useState } from 'react'
import { useFetchDocuments } from '../hooks/useFetchDocuments'
import { useQuery } from '../hooks/useQuery'
import Post from './Post';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Search = () => {
    const query = useQuery();

    const {getPosts, post: posts, loading, error} = useFetchDocuments('posts');

    const [formQuery, setFormQuery] = useState('')

    const search = query.get('q');

    useEffect(() => {
        getPosts('tagsArr', 'array-contains', search);
        setFormQuery(search)
    }, []);

  return (
    <div>
        {loading &&
            <div>
                <h1>Procurando...</h1>
            </div>
        }

        {posts && posts.length === 0 && !loading &&
            <div>
                <p>Não foram encontrados posts a partir da sua busca...</p>
                <Link to ='/'>Voltar</Link>
            </div>
        
        }
        

        {posts && posts.length >0 && 
            posts.map((post) => (
                <Post key={post.id} post={post}/>
            ))

        
        }
    </div>
    
  )
}

export default Search