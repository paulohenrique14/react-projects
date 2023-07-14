import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.container}>
      <ul className={styles.containerUl}>
        <li className={styles.containerLi}>
          <a href="#">Menu</a>
        </li>
        <li className={styles.containerLi}>
          <a href="#">Contatos</a>
        </li>
        <li className={styles.containerLi}>
          <a href="#">Fórum</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
