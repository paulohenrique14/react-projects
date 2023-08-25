import React from 'react'
import styles from "./Section2Component.module.css";

const Section2Component = ({logo, site}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.imgContent}>
        <img src={"/imgs/"+logo+".svg"} alt="" className={styles.image}/>
      </div>
    
    <p>{site}</p>
    </div>
  )
}

export default Section2Component
