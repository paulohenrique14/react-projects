import { useEffect, useState } from 'react'
import { useQuery } from '../../hooks/useQuery'
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useEdit } from '../../hooks/useEdit';
import styles from './EditPost.module.css'
import { createLogger } from 'vite';

const EditPost = () => {

    const {getPosts, loading, error, post: posts} = useFetchDocuments('posts');

    const {editPost, error: editError, loading: editLoading} = useEdit('posts')

    const [title, setTitle] = useState('');
    const [body, setBody]   = useState('');
    const [image,setImage]    = useState('');
    const [tags, setTags]   = useState([]);

    const [errorMessage, setErrorMessage] = useState('');


    const query = useQuery();

    const search = query.get('q');

    useEffect(() => {
        getPosts('id', '==', search);
    },[])

    useEffect(() => {
        if (posts.length){
            console.log(posts.length)
            setTitle(posts[0].title);
            setBody(posts[0].body)
           setImage(posts[0].image)
            
            const txtTags = posts[0].tagsArr.join(', ');
            setTags(txtTags)

        }
    },[posts])

    const handleUpdatePost = (e) => {
        e.preventDefault();
        console.log(tags)

        try {
            let url = newURL(image)
           setImage(url)
        } catch (error) {
            setErrorMessage('Erro! Favor adicionar uma URL válida.')
        }

        if (!title || !image || !body || !tags){
            setErrorMessage('Favor preencher todos os campos');
        }

        if (errorMessage){
            setErrorMessage(errorMessage)
            return
        }

        let tagsArr = tags.split(',').map((tag) => tag.toLowerCase().trim());

        const data = {
            title,
            body,
            image,
            tagsArr
        };

       editPost(posts[0].id, data) 
    }

  return (
    <div>

        <div className="headerComponents">
            <h1>Edite o post</h1>
            <p>Altere os dados como desejar!</p>
        </div>

        {loading &&
            <h2>Carregando...</h2>
        }
        {posts &&
            posts.map((post) => (
                <div key={post.id} className={styles.containerEditPost}>
                    <form onSubmit={handleUpdatePost}>
                        <label>
                            <span>Título</span>
                            <input 
                                type="text" 
                                name="title"
                                id='title'
                                defaultValue={title} 
                                onChange={((e) => setTitle(e.target.value))}
                            />
                        </label>
                        <label>
                            <span>Descrição</span>
                            <textarea 
                                name="body" 
                                id="body" 
                                defaultValue={body}
                                onChange={((e) => setBody(e.target.value))}
                            />
                        </label>

                        <label>
                            <span>URL da imagem</span>
                            <input 
                                type="text" 
                                name="image" 
                                id="image" 
                                defaultValue={image}                                    
                                onChange={((e) =>setImage(e.target.value))}
                            />
                        </label>

                        <label>
                            <span>Tags</span>
                            <input 
                                type="text" 
                                name="tags" 
                                id="tags" 
                                defaultValue={post.tagsArr}
                        />
                        </label>


                        <button>Salvar alterações</button>
                        {errorMessage &&
                            <p>{errorMessage}</p>
                        }
                        
                    </form>
                    
                </div>
            ))
        }
    </div>
  )
}

export default EditPost