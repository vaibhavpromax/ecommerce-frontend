import React, { useEffect, useState } from "react";
import styles from "./CustomerManagement.module.scss";
import { ICONS } from "../../../icons";
import { TabNavSlider } from "../../../components/TabNavSlider/TabNavSlider";
import Checkbox from "../../../components/Checkbox/Checkbox";
import TextBox from "../../../components/TextBox/TextBox";
import Button from "../../../components/Button/Button";
import CustomerRow from "./components/CustomerRow/CustomerRow";
import useCustomer from "../../../apis/useCustomer";

const options = [
  { label: `All orders`, value: "all", pillValue: 345, pillColor: "#1E6B96" },
  { label: "New", value: "new", pillValue: 45, pillColor: "#771E96" },
];

const CustomerManagement = () => {
  const [tabOption, setTabOption] = useState(options[0].value);
  const [customers, setCustomers] = useState([]);
  const { getCustomers, getCustomersLoading } = useCustomer();
  const fetchCustomers = async () => {
    getCustomers((res) => setCustomers(res?.data));
  };
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className={styles.orderManagement}>
      {" "}
      <div className={styles.top}>
        <div className={styles.left}>Customers</div>
        <div className={styles.right}>
          {ICONS.bell}
          <div className={styles.profile}>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
            />
          </div>
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
      <div className={styles.customerList}>
        <div className={styles.listHeader}>
          <div className={styles.col1}>
            <Checkbox shadowed={true} />
          </div>
          <div className={styles.col2}>FIRST NAME</div>
          <div className={styles.col3}>LAST NAME</div>
          <div className={styles.col4}>CUSTOMER ID</div>
          <div className={styles.col5}>LAST PURCHASE</div>
          <div className={styles.col6}>EMAIL</div>
          <div className={styles.col7}>PHONE</div>
          <div className={styles.col8}>ACTIONS</div>
        </div>
        <div className={styles.list}>
          {customers?.map((customer, key) => {
            return <CustomerRow customer={customer} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
