import React from 'react'
import styles from './Post.module.css'

const Post = ({post}) => {
  return (
    <div className={styles.postContainer}>
        <img src={post.image} alt={post.title} />
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p><b>Criado por <span>{post.createdBy}</span></b></p>
        {post.tagsArr.map((tag) => (
            <span key={tag}>#{tag}</span>
        ))}
    </div>
  )
}

export default Post