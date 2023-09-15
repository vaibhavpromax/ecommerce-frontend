import React from "react";
import styles from "./Tracker.module.scss";
import { ICONS } from "../../../../../../icons";
const STATUSES = [
  { label: "Order Placed", value: "PLACED", date: " ", rank: 1 },
  { label: "Processing", value: "PROCESSING", date: "", rank: 2 },
  { label: "Shipped", value: "SHIPPED", date: "", rank: 3 },
  // { label: "Order Cancelled", value: "CANCELLED", date: "", rank: 3 },
  { label: "Delivered", value: "DELIVERED", date: "", rank: 4 },
];
const Tracker = () => {
  return (
    <div className={styles.tracker}>
      <div className={styles.progressbarContainer}>
        <div className={styles.progressBar}>
          {STATUSES.map((s, i) => (
            <div className={`${styles.stepWrapper}`}>
              <div className={styles.stepCircle}>
                <span>{ICONS.tick}</span>
              </div>
              {i !== 0 && <div className={`${styles.stepLine}`}></div>}
            </div>
          ))}
        </div>
        <div className={styles.singleLabelContainer}>
          {STATUSES.map((s, i) => {
            return (
              <div className={`${styles.labelText}`}>
                <div className={styles.wrapper}>
                  {s.label}
                  <div className={styles.date}>19 July </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tracker;

// <div className={styles.activity}>
//   <div className={styles.icon}>{ICONS.cartFilled}</div>
//   <div className={styles.text}>
//     <h4>19 June</h4>
//     <h5>Order Placed</h5>
//   </div>
// </div>
// <div className={styles.activity}>
//   <div className={styles.icon}>{ICONS.truck}</div>
//   <div className={styles.text}>
//     <h4>21 June</h4>
//     <h5>Dispatched</h5>
//   </div>
// </div>
// <div className={styles.activity}>
//   <div className={styles.icon}>{ICONS.home}</div>
//   <div className={styles.text}>
//     <h4>21 June</h4>
//     <h5>Delivered</h5>
//   </div>
// </div>
