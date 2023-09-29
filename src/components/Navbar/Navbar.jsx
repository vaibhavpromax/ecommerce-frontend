import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.scss";
import { ICONS } from "../../icons";
import Button from "../Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useShop } from "../../contexts/ShopContext";

const NAVBAR_COLORS = {
  transparent: "transparent",
  white: "white",
};

const Navbar = ({ routes }) => {
  // const [navbarColor, setNavbarColor] = useState(NAVBAR_COLORS.transparent);
  const location = useLocation();
  const { cartLength, wishlistLength } = useShop();
  const navigate = useNavigate();
  let allRoutes = [];
  routes.forEach((route) => {
    if (route.link == "/login" || route.link == "/register") return;
    else allRoutes.push(route.link);
    // if (!route.navbarVisible) navbarRoutes.push(route.link);
    // if (route.transparentNavbar) transparentRoutes.push(route.link);
  });
  allRoutes.push("product");

  // useEffect(() => {
  //   if (transparentRoutes.includes(location.pathname)) {
  //     setNavbarColor(NAVBAR_COLORS.transparent);
  //   } else {
  //     setNavbarColor(NAVBAR_COLORS.white);
  //   }
  // }, [location.pathname]);

  console.log(location);

  return (
    <div
      style={{
        // backgroundColor: navbarColor,
        display:
          allRoutes.includes(location.pathname) ||
          allRoutes.includes(location.pathname.split("/")[1])
            ? "flex"
            : "none",
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
          <div
            style={{
              display:
                (wishlistLength == 0 || location.pathname === "/wishlist") &&
                "none",
            }}
            className={styles.length}
          >
            {wishlistLength}
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/cart");
          }}
          className={styles.btn}
        >
          {" "}
          {ICONS.cartOutline}Cart
          <div
            style={{
              display:
                (cartLength == 0 || location.pathname === "/cart") && "none",
            }}
            className={styles.length}
          >
            {cartLength}
          </div>
        </div>
        {localStorage.getItem("user") && (
          <div
            onClick={() => {
              navigate("/profile");
            }}
            className={styles.profile}
          >
            <img
              src={
                JSON.parse(localStorage.getItem("user"))?.user?.profile_pic_url
              }
              alt=""
            />
            <h5>Profile {ICONS.dropdownIcon}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
