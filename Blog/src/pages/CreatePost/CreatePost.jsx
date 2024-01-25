import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue} from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument';
 

const CreatePost = () => {
  const [title, setTitle]         = useState('');
  const [image, setImage]         = useState('');
  const [body, setBody]           = useState('');
  const [tags, setTags]           = useState('');
  const [formError, setFormError] = useState('');

  const [user] = useAuthValue()
  const {insertDocument, response} = useInsertDocument('posts');

  const handleSubmit = (e) => {
    e.preventDefault();
    


    insertDocument({
      title,
      image,
      body,
      tags, 
      uid: user.uid,
      createdBy: user.displayName
    })
  }


  return (
    <div>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e se divirta!</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título</span>
            <input 
              type="text" 
              name='title' 
              required 
              placeholder='Título' 
              onChange={(e) => setTitle(e.target.value)} 
              value={title}
            />
          </label>
          <br/>
          <label>
            <span>URL da imagem</span>
            <input 
              type="text" 
              name='image' 
              required 
              placeholder='Imagem' 
              onChange={(e) => setImage(e.target.value)} 
              value={image}
            />
          </label>
          <br/>
          <label>
            <span>Body</span>
            <textarea
              name='body' 
              required 
              placeholder='Conteúdo' 
              onChange={(e) => setBody(e.target.value)} 
              value={body}
              >
            </textarea>
          </label>
          <br/>
          <label>
            <span>Tags das imagens</span>
            <input 
              type="text" 
              name='image' 
              required 
              placeholder='Tags das imagens' 
              onChange={(e) => setTags(e.target.value)} 
              value={tags}
            />
          </label>
          <button className='btn'>Cadastrar</button>
            {response.error && 
            <p className='error'>{response.error}</p>
            }
        </form>
    </div>
  )
}

export default CreatePost