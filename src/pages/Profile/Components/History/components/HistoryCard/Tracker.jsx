import React from "react";
import styles from "./Tracker.module.scss";
import { ICONS } from "../../../../../../icons";

const Tracker = () => {
  return (
    <div className={styles.tracker}>
      <div className={styles.activity}>
        <div className={styles.icon}>{ICONS.cartFilled}</div>
        <div className={styles.text}>
          <h4>19 June</h4>
          <h5>Order Placed</h5>
        </div>
      </div>
      <div className={styles.activity}>
        <div className={styles.icon}>{ICONS.truck}</div>
        <div className={styles.text}>
          <h4>21 June</h4>
          <h5>Dispatched</h5>
        </div>
      </div>  
      <div className={styles.activity}>
        <div className={styles.icon}>{ICONS.home}</div>
        <div className={styles.text}>
          <h4>21 June</h4>
          <h5>Delivered</h5>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
