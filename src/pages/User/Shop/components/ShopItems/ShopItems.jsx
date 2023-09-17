import React, { useEffect, useState } from "react";
import styles from "./ShopItems.module.scss";
import ShopCategories from "../Categories/ShopCategories";
import Card from "../../../../../components/Card/Card";
import Skeleton from "../../../../../components/Skeleton/Skeleton";
import useShop from "../../../../../apis/useShop";

const tabOptions = [
  { value: "day", label: "Deal of the day" },
  { value: "popular", label: "Popular blends" },
  { value: "flavored", label: "Flavored" },
  { value: "single", label: "Single origin" },
];

const ShopItems = ({ filterOptions, fetchProducts, loading, searchValue }) => {
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
        {!loading ? (
          filterOptions
            ?.filter((item) => {
              return item?.name
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            })
            ?.map((prod) => {
              return <Card fetchProducts={fetchProducts} product={prod} />;
            })
        ) : (
          <>
            {new Array(8).fill(0).map((_, index) => (
              <Skeleton key={index} className={styles.loader} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ShopItems;
