import React from 'react'
import styles from './Section1.module.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { GiMicroscopeLens } from 'react-icons/gi'

const Section1 = (props) => {
  return (
    <div className={styles.container}>
        <img src="/imgs/youtube.png" alt="" />
        <div className={styles.search}>
        <p className={styles.ico}><AiOutlineSearch/></p>
          <p className={styles.searchText}>Pesquisa no Google ou escreva um URL</p>
          <p className={styles.ico}><BiMicrophone /></p>
          <p className={styles.ico}><GiMicroscopeLens /></p>
        </div>
    </div>
  )
}

export default Section1
