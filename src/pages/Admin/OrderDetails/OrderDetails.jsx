import React, { useEffect, useState } from "react";
import styles from "./OrderDetails.module.scss";
import Button from "../../../components/Button/Button";
import { ICONS } from "../../../icons";
import ProductOrderRow from "./components/ProductOrderRow/ProductOrderRow";
import useOrder from "../../../apis/useOrder";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../utils/dateFormatter";

const STATUSES = [
  { label: "Order Placed", value: "PLACED", date: " ", rank: 1 },
  { label: "Processing", value: "PROCESSING", date: "", rank: 2 },
  { label: "Shipped", value: "SHIPPED", date: "", rank: 3 },
  // { label: "Order Cancelled", value: "CANCELLED", date: "", rank: 3 },
  { label: "Delivered", value: "DELIVERED", date: "", rank: 4 },
];

const OrderDetails = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { getSingleOrderDetails } = useOrder();
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const fetchOrderDetails = async () => {
    await getSingleOrderDetails(id, (res) => {
      setOrder(res?.data);
      STATUSES.map((s, i) => {
        if (s.value == res?.data?.order_status) setCurrentStep(i);
      });
    });
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);
  console.log(order);

  return (
    <div className={styles.orderdetails}>
      <div className={styles.top}>
        <div className={styles.left}>
          <span className={styles.yellow}>Orders</span>
          {">>"} Order #{order?.order_id?.substring(0, 4)}
        </div>
        <div className={styles.right}>
          <Button>{ICONS.pen} Edit order</Button>
          {ICONS.bell}
          {/* 
          <div className={styles.profile}>
          <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
          />
          </div>
        */}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.btleft}>
          <div className={styles.btleftTop}>
            <div className={styles.btleftHeader}>
              Order #{order?.order_id?.substring(0, 4)}
            </div>
            <div className={styles.btleftBottom}>
              <div className={styles.proList}>
                {order?.OrderItems?.map((it, key) => {
                  return <ProductOrderRow product={it} />;
                })}
              </div>
              <div className={styles.hrLine}></div>
              <div className={styles.orderTotal}>
                <div className={styles.orderLeft}>
                  <div className={styles.orderLeftRowHead}>
                    Order comments: {ICONS.pen}
                  </div>
                  <div className={styles.orderLeftRowContent}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus aliquam eaque libero provident officiis.
                  </div>
                </div>
                <div className={styles.orderRight}>
                  <div className={styles.orderRightRow}>
                    <div className={styles.orderRightRowLeft}>Subtotal:</div>
                    <div
                      style={{ fontWeight: "600" }}
                      className={styles.orderRightRowRight}
                    >
                      ${order?.total_price}
                    </div>
                  </div>
                  <div className={styles.orderRightRow}>
                    <div className={styles.orderRightRowLeft}>Shipping:</div>
                    <div className={styles.orderRightRowRight}>
                      ${order?.shipping_price}
                    </div>
                  </div>
                  <div className={styles.orderRightRow}>
                    <div className={styles.orderRightRowLeft}>Total:</div>
                    <div
                      style={{ fontSize: "18px", fontWeight: "600" }}
                      className={styles.orderRightRowRight}
                    >
                      $
                      {parseFloat(order?.total_price) +
                        parseFloat(order?.shipping_price)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.orderHistory}>
            <div className={styles.btBottomHeader}>Order history:</div>

            <div className={styles.progressbarContainer}>
              <div className={styles.progressBar}>
                {STATUSES.map((s, i) => (
                  <div
                    className={`${styles.stepWrapper} ${
                      currentStep >= i ? styles.visitedStep : ""
                    }`}
                  >
                    <div className={styles.stepCircle}>
                      <span>{currentStep >= i && ICONS.tick}</span>
                    </div>
                    {i !== 0 && (
                      <div
                        className={`${styles.stepLine}
                   ${currentStep >= i ? styles.filled : ""}
                      `}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.singleLabelContainer}>
                {STATUSES.map((s, i) => {
                  return (
                    <div
                      className={`${styles.labelText} ${
                        currentStep > i ? styles.visited : ""
                      } ${currentStep === i ? styles.current : ""}`}
                    >
                      <div className={styles.wrapper}>
                        {s.label}
                        <div className={styles.date}>
                          {formatDate(order?.order_placed_date)}{" "}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btright}>
          <div className={styles.section}>
            <div className={styles.sectionheader}>Customer {ICONS.pen}</div>
            <div className={styles.sectionContent}>
              <div className={styles.secLeft}>
                <div className={styles.profile}>
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.secRight}>
                <div className={styles.name}>
                  {order?.User?.first_name + order?.User?.last_name}
                </div>
                <div className={styles.secContent}>{order?.User?.email}</div>

                <div className={styles.secContent}>Total orders: 11</div>
              </div>
            </div>
          </div>

          <div className={styles.hrRow}></div>
          <div className={styles.section}>
            <div className={styles.sectionheader}>
              Delivery Details {ICONS.pen}
            </div>
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Delivery Type:</div>
              <div className={styles.sectionDescRight}>Standard</div>
            </div>
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Address:</div>
              <div className={styles.sectionDescRight}>
                {order?.Address?.street_no +
                  " " +
                  order?.Address?.street_name +
                  " " +
                  order?.Address?.city +
                  " " +
                  order?.Address?.country +
                  " " +
                  order?.Address?.postal_code}
              </div>
            </div>
            //{" "}
            <div className={styles.sectionDescRow}>
              // <div className={styles.sectionDescLeft}>Tracking number:</div>
              //{" "}
              <div className={`${styles.yellow}  ${styles.sectionDescRight}`}>
                // #12783456 //{" "}
              </div>
              //{" "}
            </div>
          </div>

          <div className={styles.hrRow}></div>
          <div className={styles.section}>
            <div className={styles.sectionheader}>Payment info {ICONS.pen}</div>
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Payment method:</div>
              <div className={styles.sectionDescRight}>
                41 Quai des Belges, Martigues, Provence-Alpes-Côte d'Azur, 13500
              </div>
            </div>
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Transaction number:</div>
              <div className={`${styles.yellow}  ${styles.sectionDescRight}`}>
                9712783456
              </div>
            </div>
            <div className={styles.yellow}>
              {ICONS.download} Download invoice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
