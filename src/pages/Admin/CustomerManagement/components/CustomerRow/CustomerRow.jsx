import React from "react";
import styles from "./CustomerRow.module.scss";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import { ICONS } from "../../../../../icons";
import { formatDate } from "../../../../../utils/dateFormatter";
import useCustomer from "../../../../../apis/useCustomer";

const CustomerRow = ({
  customer,
  selectedIds,
  setSelectedIds,
  fetchCustomers,
}) => {
  const { deleteCustomers } = useCustomer();
  const deleteCustomerHandler = async () => {
    await deleteCustomers({ id_arr: [customer?.user_id] }, () => {
      fetchCustomers();
    });
  };

  const insertInFilterValuesHandler = (newValue) => {
    let flag = true;
    const newArr = selectedIds.filter((val) => {
      if (val == newValue) {
        flag = false;
        return;
      } else {
        return val;
      }
    });
    if (flag) {
      newArr.push(newValue);
    }
    return newArr;
  };
  return (
    <div className={styles.customerRow}>
      <div className={styles.col1}>
        <Checkbox
          checked={
            selectedIds.length > 0 && selectedIds.includes(customer?.user_id)
          }
          onChange={() => {
            setSelectedIds(insertInFilterValuesHandler(customer?.user_id));
          }}
          shadowed={true}
        />
      </div>
      <div className={styles.col2}>{customer?.first_name}</div>
      <div className={styles.col3}>{customer?.last_name}</div>
      <div className={styles.col4}>#{customer?.user_id.split("-")[0]}</div>
      <div className={styles.col5}>
        {customer?.last_ordered
          ? formatDate(customer?.last_ordered)
          : "Not Ordered"}{" "}
      </div>
      <div className={styles.col6}>{customer?.email}</div>
      <div className={styles.col7}>{customer?.phone_no}</div>
      <div className={styles.col8}>
        {ICONS.pen}
        <span onClick={deleteCustomerHandler}>{ICONS.redTrash}</span>
      </div>
    </div>
  );
};

export default CustomerRow;
