import React, { useState } from "react";
import styles from "./ShopItems.module.scss";
import ShopCategories from "../Categories/ShopCategories";
import Card from "../../../../../components/Card/Card";

const tabOptions = [
  { value: "day", label: "Deal of the day" },
  { value: "popular", label: "Popular blends" },
  { value: "flavored", label: "Flavored" },
  { value: "single", label: "Single origin" },
];

const ShopItems = () => {
  const [activeTab, setActiveTab] = useState(tabOptions[0].value);

  return (
    <div className={styles.shopitems}>
      <div className={styles.category}>
        <ShopCategories
          tabOptions={tabOptions}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className={styles.list}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ShopItems;
