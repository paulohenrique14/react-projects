import React from "react";
import styles from "./FavoritoLista.module.css"


const FavoritoLista = ({photo, content}) => {
  return (
      <li className={styles.container}>
        <img src={"/imgs/"+photo+".svg"} alt="" className={styles.image} />
        <p>{content}</p>
      </li> 
  );
};

export default FavoritoLista;
