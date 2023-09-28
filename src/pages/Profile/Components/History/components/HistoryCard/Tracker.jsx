import React, { useState, useEffect } from "react";
import styles from "./Tracker.module.scss";
import { ICONS } from "../../../../../../icons";
import moment from "moment";
const STATUSES = [
  {
    label: "Order Placed",
    value: "PLACED",
    rank: 1,
    icon: ICONS.cartFilled,
  },
  {
    label: "Processing",
    value: "PROCESSING",
    rank: 2,
    icon: ICONS.truck,
  },
  { label: "Shipped", value: "SHIPPED", date: "", rank: 3, icon: ICONS.truck },
  // { label: "Order Cancelled", value: "CANCELLED", date: "", rank: 3 },
  {
    label: "Delivered",
    value: "DELIVERED",
    rank: 4,
    icon: ICONS.home,
  },
];
const Tracker = ({ order }) => {
  const [orderStatus, setOrderStatus] = useState(STATUSES);

  useEffect(() => {
    const newArr = STATUSES.map((i) => {
      if (i.value === "PLACED") {
        return { ...i, date: order?.order_placed_date };
      } else if (i.value === "PROCESSING") {
        return { ...i, date: order?.processing_date };
      } else if (i.value === "SHIPPED") {
        return { ...i, date: order?.shipped_date };
      } else if (i.value === "DELIVERED") {
        return { ...i, date: order?.delivered_date };
      }
    }).filter((i) => {
      return i.date != null;
    });
    console.log(newArr);
    setOrderStatus(newArr);
  }, []);

  return (
    <div className={styles.tracker}>
      <div className={styles.progressbarContainer}>
        <div
          style={{ height: orderStatus.length == 3 ? "180px" : "250px" }}
          className={styles.progressBar}
        >
          {orderStatus.map((s, i) => (
            <div className={`${styles.stepWrapper}`}>
              <div className={styles.stepCircle}>
                <span>{s.icon}</span>
              </div>
              {i !== 0 && <div className={`${styles.stepLine}`}></div>}
            </div>
          ))}
        </div>
        <div
          style={{ height: orderStatus.length == 3 ? "180px" : "250px" }}
          className={styles.singleLabelContainer}
        >
          {orderStatus.map((s, i) => {
            return (
              <div className={`${styles.labelText}`}>
                <div className={styles.wrapper}>
                  {s.label}
                  <div className={styles.date}>
                    {" "}
                    {moment(s?.date).format("DD MMM, YYYY")}
                  </div>
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
