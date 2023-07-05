import React from "react";
import styles from "./Wishlist.module.scss";
import Card from "../../components/Card/Card";

const Wishlist = () => {
  return (
    <div className={styles.wishlist}>
      <h5>Your wishlist</h5>

      <div className={styles.wishlistitems}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />  
        <Card />
      </div>
    </div>
  );
};

export default Wishlist;
