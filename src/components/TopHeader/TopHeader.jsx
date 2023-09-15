import React, { useEffect, useState } from "react";

import styles from "./TopHeader.module.scss";
import { ICONS } from "../../icons";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className={styles.btn}
        >
          Shop
        </div>
        <div
          onClick={() => {
            navigate("/login");
          }}
          className={styles.btn}
        >
          Se connecter
        </div>
        <Button
          onClick={() => {
            navigate("/register");
          }}
          className={styles.login}
        >
          S’enregistrer
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
