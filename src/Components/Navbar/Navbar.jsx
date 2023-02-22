import { Cartwidget } from "../CartWidget/Cartwidget";
import { Logo } from "../Logo/Logo";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <h3 className={styles.titulo}>Zapas Mendoza</h3>
      <ul className={styles.containerList}>
        <a href="">Todas</a>
        <a href="">Deportivas</a>
        <a href="">Urbanas</a>
        <a href="">Ayuda</a>
      </ul>
      <a href=""className={styles.carrito}>Carrito</a> 
    </div>
  );
};
