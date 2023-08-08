import React from "react";
import styles from "./Favorito.module.css";
import FavoritoLista from "./FavoritoLista";

const Favorito = () => {
  return (
    <div className={styles.Container}>
      <ul>
        <FavoritoLista />
        <li>Youtube</li>
        <li>Gmail</li>
        <li>Instagram</li>
      </ul>
    </div>
  );
};

export default Favorito;
