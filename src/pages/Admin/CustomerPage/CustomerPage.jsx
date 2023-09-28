import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./CustomerPage.module.scss";
import { ICONS } from "../../../icons";
import Button from "../../../components/Button/Button";
import OrderRow from "./components/OrderRow/OrderRow";
import useCustomer from "../../../apis/useCustomer";
const CustomerPage = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);
  const { getSingleCustomerInfo, getSingleCustomerLoading } = useCustomer();

  const fetchCustomer = async () => {
    await getSingleCustomerInfo(id, (data) => {
      console.log(data);
      setCustomer(data?.data);
    });
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  return (
    <div className={styles.customerPage}>
      <div className={styles.top}>
        <div className={styles.left}>
          <span className={styles.yellow}>Customers</span>
          {">>"} Customer #{customer?.user_id?.substring(0, 4)}
        </div>
        <div className={styles.right}>
          <Button>{ICONS.pen} Edit details</Button>
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
        <div className={styles.left}>
          <div className={styles.profilePicIcon}>
            <img src={customer?.profile_pic_url} alt="" />
          </div>

          <div className={styles.descGroup}>
            <div className={styles.label}>First name</div>
            <div className={styles.info}>{customer?.first_name}</div>
          </div>

          <div className={styles.descGroup}>
            <div className={styles.label}>Last name</div>
            <div className={styles.info}>{customer?.last_name}</div>
          </div>

          <div className={styles.descGroup}>
            <div className={styles.label}>Email</div>
            <div className={styles.info}>{customer?.email}</div>
          </div>
          {/*
          <div className={styles.descGroup}>
            <div className={styles.label}>Contact no.</div>
            <div className={styles.info}>{customer?.phone_no}</div>
          </div>
<div className={styles.descGroup}>
<div className={styles.label}>Address</div>
{customer?.Address?.map((addr, key) => {
  <div key={key} className={styles.info}>
  {addr.is_primary && (
                  <>
                  {addr?.street_no} {addr?.street_name} {addr?.city}
                  </>
                  )}
                  </div>;
                })}
                </div>
              */}

          <div className={styles.blockButton}>
            {ICONS.cancel}
            Add to Block list
          </div>
        </div>
        <div className={styles.right}>
          <h4>Previous orders</h4>

          <div className={styles.orderList}>
            {customer?.Orders?.map((order, index) => {
              return <OrderRow order={order} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
