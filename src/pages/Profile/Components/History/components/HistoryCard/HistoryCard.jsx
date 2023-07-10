import React from "react";
import styles from "./HistoryCard.module.scss";
import Button from "../../../../../../components/Button/Button";
import { ICONS } from "../../../../../../icons";
import { ReactComponent as TeaPacket } from "../../../../../../assets/TeaPacket.svg";
import Tracker from "./Tracker";

const HistoryCard = () => {
  return (
    <div className={styles.historyCard}>
      <div className={styles.upper}>
        <div className={styles.c1}>
          <h4>Order placed</h4>
          <h5>28 May, 2023</h5>
        </div>
        <div className={styles.c2}>
          <h4>Total</h4>
          <h5>$ 129.50</h5>
        </div>
        <div className={styles.c3}>
          <h4>Ship to</h4>
          <h5>Marseille</h5>
        </div>
        <div className={styles.c4}>
          <h4>Order ID</h4>
          <h5>#123-123-342</h5>
        </div>{" "}
        <div className={styles.c5}>
          <h4>Status</h4>
          <h5>Delivered,June 2</h5>
        </div>{" "}
        <div className={styles.ver}></div>
        <div className={styles.c6}>
          <h4>View Product</h4>
          <h5>Download Invoice</h5>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.s1}>
          <TeaPacket />
        </div>
        <div className={styles.s2}>
          <h4>African Kahawa blend</h4>
          <div className={styles.desc}>
            <div className={styles.a1}>Pack of 350gms</div>
            <div className={styles.smallvr}></div>
            <div className={styles.a1}>Box size 30x24 cm</div>
            <div className={styles.smallvr}></div>
            <div className={styles.a1}>Premium Arabica From Middle East</div>
          </div>
          <div className={styles.prodesc}>
            Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod
            tempor incididunt ut ero labore. Lorem ipsum dolor sit amet,
            consectetur adipisi elit, sed do eiusmod tempor incididunt ut ero
            labore. Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do
            eiusmod tempor incididunt ut ero labore. Lorem ipsum dolor sit
            amet...{" "}
          </div>
          <div className={styles.otherinfo}>
            <div className={styles.mr}>View more</div>
            <div className={styles.ret}>
              Return or replacement: Eligible through June 10
            </div>
          </div>

          <div className={styles.btnrow}>
            <Button>{ICONS.recycle}Order Again</Button>
            <Button theme="WHITE">{ICONS.star}Rate product</Button>
          </div>
        </div>
        <div className={styles.s3}></div>
        <div className={styles.s4}>
          <Tracker />
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
