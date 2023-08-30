import React from "react";
import styles from "./ProductOrderRow.module.scss";

const ProductOrderRow = ({ product }) => {
  return (
    <div className={styles.productOrder}>
      <div className={styles.col1}>
        <img
          src={product?.Product?.Images[0]?.image_url}
          // src="https://thumbs.dreamstime.com/b/coffee-cup-sweets-delicious-vector-modern-icons-coffee-shop-coffee-house-colorful-template-cooking-restaurant-95959851.jpg"
          alt="coffee"
        />
      </div>
      <div className={styles.col2}>
        <div className={styles.id}>
          Product ID: #{product?.Product?.product_id?.substring(0, 4)}
        </div>
        <div className={styles.name}>{product?.Product?.name}</div>
        <div className={styles.quant}>Quantity: {product?.item_quantity}</div>
      </div>
      <div className={styles.col3}>${product?.Product?.selling_price}</div>
    </div>
  );
};

export default ProductOrderRow;
