import React from "react";
import styles from "./ProductOrderRow.module.scss";

const ProductOrderRow = () => {
  return (
    <div className={styles.productOrder}>
      <div className={styles.col1}>
        <img
          src="https://thumbs.dreamstime.com/b/coffee-cup-sweets-delicious-vector-modern-icons-coffee-shop-coffee-house-colorful-template-cooking-restaurant-95959851.jpg"
          alt="coffee"
        />
      </div>
      <div className={styles.col2}>
        <div className={styles.id}>Product ID: #12348907</div>
        <div className={styles.name}>African Kahawa blend</div>
        <div className={styles.quant}>Quantity: 1</div>
      </div>
      <div className={styles.col3}>$24.55</div>
    </div>
  );
};

export default ProductOrderRow;
