import React from "react";
import styles from "./Favorito.module.css";
import FavoritoLista from "./FavoritoLista";

const Favorito = () => {
  return (
    <div className={styles.Container}>
      <ul>
        <FavoritoLista photo="youtube" content="(15179) Youtube" />
        <FavoritoLista photo="gmail" content="gmail" />
        <FavoritoLista photo="linkedin" content="Linkedin" />
        <FavoritoLista photo="github" content="Github" />
      </ul>
    </div>
  );
};

export default Favorito;
