import React, { useEffect, useState } from "react";
import styles from "./OrderManagement.module.scss";
import TextBox from "../../../components/TextBox/TextBox";
import { ICONS } from "../../../icons";
import { TabNavSlider } from "../../../components/TabNavSlider/TabNavSlider";
import Button from "../../../components/Button/Button";
import OrderRow from "./components/OrderRow/OrderRow";
import useOrder from "../../../apis/useOrder";
import Skeleton from "../../../components/Skeleton/Skeleton";

const options = [
  { label: `All orders`, value: "all", pillValue: 345, pillColor: "#1E6B96" },
  { label: "New", value: "new", pillValue: 45, pillColor: "#771E96" },
  { label: "Pending", value: "pending", pillValue: 345, pillColor: "#CDA92A" },
  {
    label: "Delivered",
    value: "delivered",
    pillValue: 45,
    pillColor: "#1E9663",
  },
];

const OrderManagement = () => {
  const [tabOption, setTabOption] = useState(options[0].value);
  const [searchValue, setSearchValue] = useState("");
  const [orders, setOrders] = useState(null);
  const { getAllOrders, getAllOrdersLoading } = useOrder();

  const fetchOrders = async () => {
    await getAllOrders((data) => {
      setOrders(data?.data);
    });
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className={styles.orders}>
      <div className={styles.top}>
        <div className={styles.left}>Orders</div>
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
          <TextBox
            value={searchValue}
            setValue={(e) => setSearchValue(e)}
            placeholder="Search here.."
            width="267px"
          />
          {ICONS.magnify}
        </div>
        <TabNavSlider
          width="550px"
          buttons={options}
          value={tabOption}
          setValue={setTabOption}
        />
        {/* 
        <Button className={styles.btn}>{ICONS.plus} Create new </Button>
        <Button className={styles.btn} theme="WHITE">
        {ICONS.download} Export all
        </Button>
      */}
      </div>
      <div className={styles.orderList}>
        {getAllOrdersLoading ? (
          <>
            {new Array(8).fill(0).map((_, index) => (
              <Skeleton key={index} className={styles.loader} />
            ))}
          </>
        ) : (
          <>
            {orders
              ?.filter((order) => {
                return order?.order_id
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              })
              ?.map((order, index) => {
                return <OrderRow order={order} key={index} />;
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
