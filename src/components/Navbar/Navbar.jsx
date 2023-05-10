import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.scss";
import { ICONS } from "../../icons";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";

const NAVBAR_COLORS = {
  transparent: "transparent",
  brown: "#917d6a",
};

const Navbar = ({ routes }) => {
  const [navbarColor, setNavbarColor] = useState(NAVBAR_COLORS.transparent);
  const location = useLocation();
  let transparentRoutes = [];
  let navbarRoutes = [];
  routes.forEach((route) => {
    if (!route.navbarVisible) navbarRoutes.push(route.link);
    if (route.transparentNavbar) transparentRoutes.push(route.link);
  });

  useEffect(() => {
    if (transparentRoutes.includes(location.pathname)) {
      setNavbarColor(NAVBAR_COLORS.transparent);
    } else {
      setNavbarColor(NAVBAR_COLORS.brown);
    }
  }, [location.pathname]);

  // useEffect(() => {
  //   const changeNavbarColor = () => {
  //     if (window.scrollY >= 80) {
  //       setNavbarColor(NAVBAR_COLORS.brown);
  //     }
  //   };
  //   window.addEventListener("scroll", changeNavbarColor);
  //   console.log(navbarColor);
  // }, [window]);

  console.log(navbarColor);
  return (
    <div
      style={{
        backgroundColor: navbarColor,
        display: navbarRoutes.includes(location.pathname) ? "none" : "flex",
      }}
      className={styles.navbar}
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
