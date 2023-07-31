import React from "react";
import styles from "./Product.module.scss";
import ProductDesc from "./components/ProductDesc/ProductDesc";
import ProductReview from "./components/ProductReview/ProductReview";
const Product = () => {
  return (
    <div className={styles.product}>
      <ProductDesc />
      <ProductReview />
    </div>
  );
};

export default Product;
