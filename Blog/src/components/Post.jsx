import React from 'react'
import styles from './Post.module.css'
import { useNavigate } from 'react-router-dom'



const Post = ({post}) => {

  const navigate = useNavigate();

  const handleSinglePost = () => {

    navigate('/post/?q='+post.id);
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
    </div>
  )
}

export default Post