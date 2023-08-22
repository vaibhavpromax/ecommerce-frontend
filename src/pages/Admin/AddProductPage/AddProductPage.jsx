import React from "react";
import styles from "./AddProductPage.module.scss";
import Button from "../../../components/Button/Button";
import { ICONS } from "../../../icons";
import QuantityPricingShipping from "./components/QuantityPricingShipping/QuantityPricingShipping";
import AddProductDescription from "./components/AddProductDescription/AddProductDescription";

const AddProductPage = () => {
  return (
    <div className={styles.addProductPage}>
      <div className={styles.top}>
        <div className={` ${styles.yellow}`}>
          Product{" "}
          <span className={styles.left}>
            {" "}
            {`        `}
            {">>"} Product #1256
          </span>
        </div>
        <div className={styles.right}>
          {ICONS.bell}
          <div className={styles.profile}>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span className={styles.id}>Product #1256</span>{" "}
          <span className={styles.view}>View product</span>
          <div className={styles.date}>14 July, 2023 at 23:04</div>
        </div>
        <Button className={styles.saveBtn}>Save changes</Button>
      </div>
      <div className={styles.params}>
        <AddProductDescription />
        <QuantityPricingShipping />
      </div>
    </div>
  );
};

export default AddProductPage;
