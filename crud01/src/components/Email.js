import React from 'react'
import styles from './Email.module.css'
const Email = () => {
  return (
    <div className={styles.Container} >
        <p>Gmail</p>
        <p>Imagens</p>
        <div className={styles.icons}>
            <div className={styles.options}>
                <img src="/imgs/grade.svg" alt="" />
            </div>     
            <div className={styles.img}>
                <img src="/imgs/perfil.jpeg" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Email
