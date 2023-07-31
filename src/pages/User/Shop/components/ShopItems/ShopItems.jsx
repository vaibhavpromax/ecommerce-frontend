import React, { useEffect, useState } from "react";
import styles from "./ShopItems.module.scss";
import ShopCategories from "../Categories/ShopCategories";
import Card from "../../../../../components/Card/Card";
import useShop from "../../../../../apis/useShop";

const tabOptions = [
  { value: "day", label: "Deal of the day" },
  { value: "popular", label: "Popular blends" },
  { value: "flavored", label: "Flavored" },
  { value: "single", label: "Single origin" },
];

const ShopItems = () => {
  const [activeTab, setActiveTab] = useState(tabOptions[0].value);
  const [products, setProducts] = useState(null);
  const { getProducts, getProductsLoading } = useShop();

  const fetchProducts = async () => {
    getProducts((data) => {
      setProducts(data.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
        {products?.map((prod) => {
          return <Card  fetchProducts={fetchProducts} product={prod} />;
        })}
      </div>
    </div>
  );
};

export default ShopItems;
