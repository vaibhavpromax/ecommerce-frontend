import React from "react";
import styles from "./CustomerRow.module.scss";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import { ICONS } from "../../../../../icons";
import { formatDate } from "../../../../../utils/dateFormatter";
import useCustomer from "../../../../../apis/useCustomer";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

const CustomerRow = ({
  customer,
  selectedIds,
  setSelectedIds,
  fetchCustomers,
}) => {
  const { deleteCustomers } = useCustomer();
  const navigate = useNavigate();
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
      <div
        onClick={() => {
          window.location.href = `https://admin.ungraindanslaboite.com/customer/${customer?.user_id}`;
        }}
        style={{
          cursor: "pointer",
          color: "#B06934",
          textDecorationLine: "underline",
        }}
        className={styles.col4}
      >
        #{customer?.user_id?.split("-")[0]}
      </div>
      <div className={styles.col5}>
        {customer?.last_ordered
          ? moment(customer?.last_ordered).format("DD MMM, YYYY")
          : "Not Ordered"}
      </div>
      <div className={styles.col6}>{customer?.email}</div>
      <div className={styles.col7}>{customer?.phone_no}</div>
      <div className={styles.col8}>
        <span onClick={deleteCustomerHandler}>{ICONS.redTrash}</span>
      </div>
    </div>
  );
};

export default CustomerRow;
