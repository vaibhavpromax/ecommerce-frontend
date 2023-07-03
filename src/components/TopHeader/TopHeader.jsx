import React, { useEffect, useState } from "react";

import styles from "./TopHeader.module.scss";
import { ICONS } from "../../icons";
import Button from "../Button/Button";



const Navbar = () => {
 
  return (
    <div   className={styles.navbar}
    >
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
