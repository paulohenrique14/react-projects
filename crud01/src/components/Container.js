import React from 'react'
import styles from "./Container.module.css";
import Section1 from './Section1';
import Section2 from './Section2';
const Container = () => {
  return (
    <div className={styles.container}>
    <Section1 />
    <Section2 />  
    </div>
  )
}

export default Container
