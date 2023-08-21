import React from "react";
import styles from "./CouponRow.module.scss";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import { ICONS } from "../../../../../icons";

const CouponRow = () => {
  return (
    <div className={styles.couponRow}>
      <div className={styles.col1}>
        <Checkbox shadowed={true} />
      </div>
      <div className={styles.col2}>FLATDEAL23</div>
      <div className={styles.col3}>#127800</div>
      <div className={styles.col4}>Flat 20% </div>
      <div className={styles.col5}>13 July, 2023</div>
      <div className={styles.col6}>13 August, 2023</div>
      <div className={styles.col7}>792</div>
      <div className={styles.col8}>
        {ICONS.pen}
        {ICONS.redTrash}
      </div>
    </div>
  );
};

export default CouponRow;
