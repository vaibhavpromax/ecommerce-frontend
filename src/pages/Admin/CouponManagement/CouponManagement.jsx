import React, { useState } from "react";
import styles from "./CouponManagement.module.scss";
import { ICONS } from "../../../icons";
import { TabNavSlider } from "../../../components/TabNavSlider/TabNavSlider";
import Checkbox from "../../../components/Checkbox/Checkbox";
import TextBox from "../../../components/TextBox/TextBox";
import Button from "../../../components/Button/Button";
import CouponRow from "./components/CouponRow/CouponRow";

const options = [
  { label: `All orders`, value: "all", pillValue: 345, pillColor: "#1E6B96" },
  { label: "New", value: "new", pillValue: 45, pillColor: "#771E96" },
];

const CouponManagement = () => {
  const [tabOption, setTabOption] = useState(options[0].value);

  return (
    <div className={styles.couponManagement}>
      {" "}
      <div className={styles.top}>
        <div className={styles.left}>Coupons</div>
        <div className={styles.right}>
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
      <div className={styles.topBar}>
        <div className={styles.searchbox}>
          <TextBox placeholder="Search here.." width="267px" />
          {ICONS.magnify}
        </div>
        <Button className={styles.btn} theme="WHITE">
          {ICONS.download} Export all
        </Button>
      </div>
      <div className={styles.couponList}>
        <div className={styles.listHeader}>
          <div className={styles.col1}>
            <Checkbox shadowed={true} />
          </div>
          <div className={styles.col2}>COUPON NAME</div>
          <div className={styles.col3}>COUPON CODE</div>
          <div className={styles.col4}>COUPON AMOUNT</div>
          <div className={styles.col5}>VALID FROM</div>
          <div className={styles.col6}>VALID THROUGH</div>
          <div className={styles.col7}>COUPON REDEEMED</div>
          <div className={styles.col8}>ACTIONS</div>
        </div>
        <div className={styles.list}>
          <CouponRow />
          <CouponRow />
          <CouponRow />
          <CouponRow />
          <CouponRow />
          <CouponRow />
          <CouponRow />
          <CouponRow />
          <CouponRow />
          <CouponRow />
          <CouponRow />
          <CouponRow />
        </div>
      </div>
    </div>
  );
};

export default CouponManagement;
