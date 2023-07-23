import React from "react";
import styles from "./Shop.module.scss";
import ShopFilter from "./components/ShopFilter/ShopFilter";
import ShopItems from "./components/ShopItems/ShopItems";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <ShopFilter />
      <ShopItems />
    </div>
  );
};

export default Shop;
