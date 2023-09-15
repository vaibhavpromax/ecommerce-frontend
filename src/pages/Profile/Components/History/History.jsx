import React, { useEffect, useState } from "react";
import styles from "./History.module.scss";
import HistoryCard from "./components/HistoryCard/HistoryCard";
import Select from "../../../../components/Select/Select";
import Skeleton from "../../../../components/Skeleton/Skeleton";
import useProfileSettings from "../../../../apis/useSettings";

const month_options = {
  3: "Past 3 months",
  1: "Past Year",
};

const History = () => {
  const [select, setSelect] = useState(3);
  const [orders, setOrders] = useState([]);
  const { fetchOrderDetails, fetchordersLoading } = useProfileSettings();
  const fetchOrders = async () => {
    await fetchOrderDetails((data) => setOrders(data?.data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  console.log(orders);
  return (
    <div className={styles.history}>
      <div className={styles.header}>Order history</div>
      <div className={styles.select}>
        <Select
          theme="normal"
          dropdownarrow="triangularDropDown"
          options={month_options}
          value={select}
          setValue={(val) => {
            setSelect(val);
          }}
        />
      </div>

      <div className={styles.histories}>
        {fetchordersLoading ? (
          <Skeleton className={styles.loader} />
        ) : (
          <>
            {orders.length == 0 ? (
              <>No Orders Placed yet</>
            ) : (
              <>
                {orders?.map((order, index) => {
                  return <HistoryCard order={order} key={index} />;
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default History;
