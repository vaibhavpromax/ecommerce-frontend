import React from "react";
import styles from "./QuantityPricingShipping.module.scss";
import TextBox from "../../../../../components/TextBox/TextBox";
const QuantityPricingShipping = () => {
  return (
    <div className={styles.qps}>
      <div className={styles.section}>
        <div className={styles.left}>Quantity & sizes</div>
        <div className={styles.right}>
          <div className={styles.unitInput}>
            <div className={styles.label}>Weight</div>
            <div className={styles.inputWrapper}>
              <input type="text" />
              <div className={styles.unit}>Gms</div>
            </div>
          </div>
          <div className={styles.unitInput}>
            <div className={styles.label}>Length</div>
            <div className={styles.inputWrapper}>
              <input type="text" />
              <div className={styles.unit}>cm</div>
            </div>
          </div>
          <div className={styles.unitInput}>
            <div className={styles.label}>Width</div>
            <div className={styles.inputWrapper}>
              <input type="text" />
              <div className={styles.unit}>cm</div>
            </div>
          </div>
          <div className={styles.unitInput}>
            <div className={styles.label}>Height</div>
            <div className={styles.inputWrapper}>
              <input type="text" />
              <div className={styles.unit}>cm</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.left}>Pricing</div>
        <div className={styles.right}>
          <TextBox label="Base price" />
          <TextBox label="Discount" />
          <TextBox label="Selling price" />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.left}>Shipping and delivery</div>
        <div className={styles.right}>
          <TextBox label="Shipping charges" />
        </div>
      </div>
    </div>
  );
};

export default QuantityPricingShipping;
