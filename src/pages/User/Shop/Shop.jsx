import React, { useEffect, useState } from "react";
import styles from "./Shop.module.scss";
import ShopFilter from "./components/ShopFilter/ShopFilter";
import ShopItems from "./components/ShopItems/ShopItems";
import useShop from "../../../apis/useShop";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { getProducts, getProductsLoading } = useShop();
  const [searchValue, setSearchValue] = useState("");

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
      <ShopFilter
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        items={products}
        setFilteredProducts={setFilteredProducts}
      />
      <ShopItems
        searchValue={searchValue}
        loading={getProductsLoading}
        filterOptions={filteredProducts}
        fetchProducts={fetchProducts}
      />
    </div>
  );
};

export default Shop;
