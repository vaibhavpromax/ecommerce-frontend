import React, { useState } from "react";
import styles from "./OrderRow.module.scss";
import { Link } from "react-router-dom";
import { ICONS } from "../../../../../icons";
import { formatDate } from "../../../../../utils/dateFormatter";

const OrderRow = ({ order }) => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <div className={styles.orderaccordion}>
      <div className={styles.orderrow}>
        <div className={styles.col1}>
          <div className={styles.row1}>
            <div className={styles.no}>Order #1234</div>
            <Link to={`/order/${order?.order_id}`} className={styles.viewdetails}> View details</Link>
          </div>
          <div className={styles.row2}>
            <div className={styles.orderdate}>
              {formatDate(order?.created_at)}
            </div>
            <div className={styles.shippingno}>Shipping No: 1234567889 </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.row1}>
            {order?.order_status} {ICONS.tick}
          </div>
          <div className={styles.row2}>30 June, 2023</div>
        </div>
        <div className={styles.col3}>
          <div className={styles.row1}> {ICONS.user} Customer details</div>
          <div className={styles.row2}> </div>
        </div>
        <div className={styles.col4}>
          <div className={styles.orderPrice}>${order?.total_price}</div>
          <div className={styles.orderStatus}>
            Status:{order?.payment_status}
          </div>
        </div>
        <div
          onClick={() =>
            setShowAccordion((prev) => {
              return !prev;
            })
          }
          className={styles.col5}
        >
          {ICONS.dropDownArrow}
        </div>
      </div>

      {showAccordion && (
        <div className={styles.orderItems}>
          <div className={styles.orderItemRow}>
            <div className={styles.col1}>
              <img
                src="https://thumbs.dreamstime.com/b/coffee-cup-sweets-delicious-vector-modern-icons-coffee-shop-coffee-house-colorful-template-cooking-restaurant-95959851.jpg"
                alt="coffee"
              />
            </div>
            <div className={styles.col2}>
              <div className={styles.prodid}>Product ID: #12348907</div>
              <div className={styles.productName}>African Kahawa blend</div>
            </div>
            <div className={styles.col3}>Quantity: 1</div>
            <Link className={styles.col4}>View Product</Link>
            <div className={styles.col5}>$24.55</div>
          </div>
          <div className={styles.orderItemRow}>
            <div className={styles.col1}>
              <img
                src="https://thumbs.dreamstime.com/b/coffee-cup-sweets-delicious-vector-modern-icons-coffee-shop-coffee-house-colorful-template-cooking-restaurant-95959851.jpg"
                alt="coffee"
              />
            </div>
            <div className={styles.col2}>
              <div className={styles.prodid}>Product ID: #12348907</div>
              <div className={styles.productName}>African Kahawa blend</div>
            </div>
            <div className={styles.col3}>Quantity: 1</div>
            <Link className={styles.col4}>View Product</Link>
            <div className={styles.col5}>$24.55</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderRow;
