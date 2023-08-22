import React from "react";
import styles from "./AddProductDescription.module.scss";
import TextBox from "../../../../../components/TextBox/TextBox";
import Select from "../../../../../components/Select/Select";

const productOptions = {
  beans: "Coffee Beans",
  powder: "Coffee Powder",
};

const beansType = {
  arabia: "Arabic",
  african: "African",
};

const originType = {
  middleEast: "Middle East",
  indian: "Indian",
};

const AddProductDescription = () => {
  return (
    <div className={styles.addDescriptionWrapper}>
      <div className={styles.left}>Description</div>
      <div className={styles.addDesc}>
        <TextBox width="400px" label="Product name" />
        <div className={styles.textarea}>
          <div className={styles.textareaLabel}>Product description</div>
          <textarea type="textbox" />
        </div>
        <div className={styles.selectRow}>
          <div className={styles.selectElement}>
            <div className={styles.selectLabel}>Product type</div>
            <Select width="230px" theme="white" options={productOptions} />
          </div>
          <div className={styles.selectElement}>
            <div className={styles.selectLabel}>Beans type</div>
            <Select width="230px" theme="white" options={beansType} />
          </div>
          <div className={styles.selectElement}>
            <div className={styles.selectLabel}>Origin</div>
            <Select width="230px" theme="white" options={originType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDescription;
