import React from "react";
import styles from "./ShopCategories.module.scss";
import { ICONS } from "../../../../../icons";

const ShopCategories = ({ activeTab, setActiveTab, tabOptions }) => {
  return (
    <div className={styles.shopcategories}>
      <div className={styles.left}>
        {tabOptions.map((option) => {
          return (
            <div
              className={`${activeTab === option.value ? styles.active : ""}  ${
                styles.taboption
              }`}
              onClick={() => {
                setActiveTab(option.value);
              }}
            >
              {option.label}
            </div>
          );
        })}
      </div>
      <div className={styles.right}>
        Sort by : Relevance {ICONS.dropDownArrow}
      </div>
    </div>
  );
};

export default ShopCategories;
