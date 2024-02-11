import React from 'react'
import styles from './Post.module.css'
import { useNavigate } from 'react-router-dom'
import { useDeletePost } from '../hooks/useDeletePost'



const Post = ({post, myPost = null}) => {

  const navigate = useNavigate();

  const {deletePost} = useDeletePost('posts')

  const handleSinglePost = () => {
    navigate('/post/?q=' + post.id);
  }

  const handleEditPost = () => {
    navigate('/post/edit/?q=' + post.id)
  }

  const handleDelete = () => {
    deletePost(post.id)

  }


  return (
    <div className={styles.postContainer}>
        <img src={post.image} alt={post.title} />
        <h1>{post.title}</h1>
        <p><b>Criado por <span>{post.createdBy}</span></b></p>
        {post.tagsArr.map((tag) => (
            <span key={tag}>#{tag}</span>
        ))}
        <button onClick={handleSinglePost}>Ler post</button>
        {myPost &&
          <div>
            <button onClick={handleEditPost}>Editar post</button>
            <button onClick={handleDelete}>Deletar post</button>
          </div>
        }

    </div>
  )
}

export default Post