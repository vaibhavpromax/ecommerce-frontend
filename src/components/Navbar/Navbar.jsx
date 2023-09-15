import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.scss";
import { ICONS } from "../../icons";
import Button from "../Button/Button";
import { useLocation, useNavigate } from "react-router-dom";

const NAVBAR_COLORS = {
  transparent: "transparent",
  white: "white",
};

const Navbar = ({ routes }) => {
  const [navbarColor, setNavbarColor] = useState(NAVBAR_COLORS.transparent);
  const location = useLocation();
  const navigate = useNavigate();
  let transparentRoutes = [];
  let navbarRoutes = [];
  let allRoutes = [];
  routes.forEach((route) => {
    allRoutes.push(route.link);
    if (!route.navbarVisible) navbarRoutes.push(route.link);
    if (route.transparentNavbar) transparentRoutes.push(route.link);
  });

  useEffect(() => {
    if (transparentRoutes.includes(location.pathname)) {
      setNavbarColor(NAVBAR_COLORS.transparent);
    } else {
      setNavbarColor(NAVBAR_COLORS.white);
    }
  }, [location.pathname]);

  return (
    <div
      style={{
        backgroundColor: navbarColor,
        display:
          navbarRoutes.includes(location.pathname) ||
          !allRoutes.includes(location.pathname)
            ? "none"
            : "flex",
      }}
      className={styles.navbar}
    >
      <div className={styles.left}>{ICONS.namedLogo}</div>
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
            navigate("/wishlist");
          }}
          className={styles.btn}
        >
          {" "}
          {ICONS.heartOutline}Wishlist
        </div>
        <div
          onClick={() => {
            navigate("/cart");
          }}
          className={styles.btn}
        >
          {" "}
          {ICONS.cartOutline}Cart
        </div>
        <div
          onClick={() => {
            navigate("/profile");
          }}
          className={styles.profile}
        >
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
          <h5>Profile</h5>
          {ICONS.dropdownIcon}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
