import React from 'react'
import styles from './Section1.module.css'
import { BsEarbuds } from 'react-icons/bs';

const Section1 = (props) => {
  return (
    <div className={styles.container}>
        <img src="/imgs/youtube.png" alt="" />
        <div className={styles.search}>
          <p>Lupa</p>
          <p>pesquisa sei la o que</p>
          <p>icone</p>
          <p>icone</p>
          <p><BsEarbuds/></p>

        </div>
    </div>
  )
}

export default Section1
