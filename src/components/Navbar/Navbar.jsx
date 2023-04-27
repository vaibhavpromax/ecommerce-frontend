import React from "react";

import styles from "./Navbar.module.scss";
import { ICONS } from "../../icons";
import Button from "../Button/Button";
const Navbar = ({ routes }) => {
  console.log(routes);
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>{ICONS.logo}</div>
        <div className={styles.name}>
          Un grain
          <br />
          dans la boîte
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.btn}>La box du moment</div>
        <div className={styles.btn}>Nous contacter</div>
        <div className={styles.btn}>Shop</div>
        <div className={styles.btn}>Se connecter</div>
        <Button className={styles.login}>S’enregistrer</Button>
      </div>
    </div>
  );
};

export default Navbar;
