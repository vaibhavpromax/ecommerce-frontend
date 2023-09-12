import React, { useState } from "react";
import styles from "./Shop.module.scss";
import ShopFilter from "./components/ShopFilter/ShopFilter";
import ShopItems from "./components/ShopItems/ShopItems";

const Shop = () => {
  const [filter, setFilter  ] = useState({});
  return (
    <div className={styles.shop}>
      <ShopFilter />
      <ShopItems />
    </div>
  );
};

export default Shop;
