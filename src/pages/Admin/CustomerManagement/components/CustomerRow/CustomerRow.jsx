import React from "react";
import styles from "./CustomerRow.module.scss";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import { ICONS } from "../../../../../icons";
import { formatDate } from "../../../../../utils/dateFormatter";

const CustomerRow = ({ customer }) => {
  return (
    <div className={styles.customerRow}>
      <div className={styles.col1}>
        <Checkbox shadowed={true} />
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
        {ICONS.redTrash}
      </div>
    </div>
  );
};

export default CustomerRow;
