import React, { useState } from "react";
import styles from "./OrderRow.module.scss";
import { Link } from "react-router-dom";
import { ICONS } from "../../../../../icons";
import moment from "moment";
import { formatDate } from "../../../../../utils/dateFormatter";

const OrderRow = ({ order }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  console.log(order);
  return (
    <div className={styles.orderaccordion}>
      <div className={styles.orderrow}>
        <div className={styles.col1}>
          <div className={styles.row1}>
            <div className={styles.no}>
              Order #{order?.order_id?.substring(0, 4)}
            </div>
            <Link
              to={`/order/${order?.order_id}`}
              className={styles.viewdetails}
            >
              {" "}
              View details
            </Link>
          </div>
          <div className={styles.row2}>
            <div className={styles.orderdate}>
              {moment(order?.createdAt).format("DD MMM, YYYY")}
            </div>
            <div className={styles.shippingno}>Shipping No: 1234567889 </div>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.row1}>
            {order?.order_status} {ICONS.tick}
          </div>
          <div className={styles.row2}>
            {moment(order?.createdAt).format("DD MMM, YYYY")}
          </div>
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
          {order?.OrderItems?.map((oi, key) => {
            return (
              <div className={styles.orderItemRow}>
                <div className={styles.col1}>
                  <img src={oi?.Product?.Images[0]?.image_url} alt="coffee" />
                </div>
                <div className={styles.col2}>
                  <div className={styles.prodid}>
                    Product ID: #{oi?.Product?.product_id?.substring(0, 4)}
                  </div>
                  <div className={styles.productName}>{oi?.Product?.name}</div>
                </div>
                <div className={styles.col3}>Quantity: {oi?.item_quantity}</div>
                <Link className={styles.col4}>View Product</Link>
                <div className={styles.col5}>${oi?.Product?.selling_price}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OrderRow;
