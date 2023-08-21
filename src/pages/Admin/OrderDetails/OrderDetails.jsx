import React from "react";
import styles from "./OrderDetails.module.scss";
import Button from "../../../components/Button/Button";
import { ICONS } from "../../../icons";
import ProductOrderRow from "./components/ProductOrderRow/ProductOrderRow";

const OrderDetails = () => {
  return (
    <div className={styles.orderdetails}>
      <div className={styles.top}>
        <div className={styles.left}>
          <span className={styles.yellow}>Orders</span>
          {">>"} Order #3433
        </div>
        <div className={styles.right}>
          <Button>{ICONS.pen} Edit order</Button>
          {ICONS.bell}
          <div className={styles.profile}>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.btleft}>
          <div className={styles.btleftTop}>
            <div className={styles.btleftHeader}>Order #1256</div>
            <div className={styles.btleftBottom}>
              <div className={styles.proList}>
                <ProductOrderRow />
                <ProductOrderRow />
                <ProductOrderRow />
                <ProductOrderRow />
                <ProductOrderRow />
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
                      $49.10
                    </div>
                  </div>
                  <div className={styles.orderRightRow}>
                    <div className={styles.orderRightRowLeft}>Shipping:</div>
                    <div className={styles.orderRightRowRight}>$4.10</div>
                  </div>
                  <div className={styles.orderRightRow}>
                    <div className={styles.orderRightRowLeft}>Total:</div>
                    <div
                      style={{ fontSize: "18px", fontWeight: "600" }}
                      className={styles.orderRightRowRight}
                    >
                      $98.10
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.orderHistory}>
            <div className={styles.btBottomHeader}>Order history:</div>

            <div className={styles.progressbarContainer}>
              <div className={styles.progressbar}>
              <div className={styles.step}>Order Placed</div>
              <div className={styles.step}>Processing</div>
              <div className={styles.step}>Shipping</div>
              <div className={styles.step}>Delivered</div>
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
                <div className={styles.name}>Vaibhav</div>
                <div className={styles.secContent}>
                  johnslovoskyii@gmail.com
                </div>
                <div className={styles.secContent}>
                  IP address : 98.155.40.227
                </div>
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
                41 Quai des Belges, Martigues, Provence-Alpes-Côte d'Azur, 13500
              </div>
            </div>
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Tracking number:</div>
              <div className={`${styles.yellow}  ${styles.sectionDescRight}`}>
                #12783456
              </div>
            </div>
          </div>
          <div className={styles.hrRow}></div>
          <div className={styles.section}>
            <div className={styles.sectionheader}>
              Shipping info {ICONS.pen}
            </div>
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Address:</div>
              <div className={styles.sectionDescRight}>
                41 Quai des Belges, Martigues, Provence-Alpes-Côte d'Azur, 13500
              </div>
            </div>
            <div className={styles.sectionDescRow}>
              <div className={styles.sectionDescLeft}>Contact number:</div>
              <div className={styles.sectionDescRight}>9712783456</div>
            </div>
            <div className={styles.yellow}>{ICONS.mapPin} View on map</div>
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
