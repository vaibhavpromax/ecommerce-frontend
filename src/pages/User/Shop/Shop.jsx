import React, { useEffect, useState } from "react";
import styles from "./Shop.module.scss";
import ShopFilter from "./components/ShopFilter/ShopFilter";
import ShopItems from "./components/ShopItems/ShopItems";
import useShop from "../../../apis/useShop";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { getProducts, getProductsLoading } = useShop();

  const fetchProducts = async () => {
    getProducts({ product_arr: null }, (data) => {
      setProducts(data.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // const [filter, setFilter] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div className={styles.shop}>
      <ShopFilter items={products} setFilteredProducts={setFilteredProducts} />
      <ShopItems
        filterOptions={filteredProducts}
        fetchProducts={fetchProducts}
      />
    </div>
  );
};

export default Shop;
