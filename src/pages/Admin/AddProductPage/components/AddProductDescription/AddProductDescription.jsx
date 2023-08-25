import React from "react";
import styles from "./AddProductDescription.module.scss";
import TextBox from "../../../../../components/TextBox/TextBox";
import Select from "../../../../../components/Select/Select";

const productOptions = {
  Beans: "Coffee Beans",
  Powder: "Coffee Powder",
};

const beansType = {
  Arabia: "Arabic",
  African: "African",
};

const originType = {
  MiddleEast: "Middle East",
  Indian: "Indian",
};

const AddProductDescription = ({ productInfo, setProductInfo }) => {
  return (
    <div className={styles.addDescriptionWrapper}>
      <div className={styles.left}>Description</div>
      <div className={styles.addDesc}>
        <TextBox
          value={productInfo.name}
          setValue={(e) => setProductInfo({ ...productInfo, name: e })}
          width="400px"
          label="Product name"
        />
        <div className={styles.textarea}>
          <div className={styles.textareaLabel}>Product description</div>
          <textarea
            value={productInfo.description}
            onChange={(e) =>
              setProductInfo({ ...productInfo, description: e.target.value })
            }
            type="textbox"
          />
        </div>
        <div className={styles.selectRow}>
          <div className={styles.selectElement}>
            <div className={styles.selectLabel}>Product type</div>
            <Select
              value={productInfo.product_type}
              setValue={(e) => {
                setProductInfo({ ...productInfo, product_type: e });
              }}
              width="230px"
              theme="white"
              options={productOptions}
            />
          </div>
          <div className={styles.selectElement}>
            <div className={styles.selectLabel}>Beans type</div>
            <Select
              value={productInfo.beans_type}
              setValue={(e) => {
                setProductInfo({ ...productInfo, beans_type: e });
              }}
              width="230px"
              theme="white"
              options={beansType}
            />
          </div>
          <div className={styles.selectElement}>
            <div className={styles.selectLabel}>Origin</div>
            <Select
              value={productInfo.product_origin}
              setValue={(e) => {
                setProductInfo({ ...productInfo, product_origin: e });
              }}
              width="230px"
              theme="white"
              options={originType}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductDescription;
