import React from "react";
import styles from "./CustomerRow.module.scss";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import { ICONS } from "../../../../../icons";

const CustomerRow = ({ customer }) => {
  return (
    <div className={styles.customerRow}>
      <div className={styles.col1}>
        <Checkbox shadowed={true} />
      </div>
      <div className={styles.col2}>{customer?.first_name}</div>
      <div className={styles.col3}>{customer?.last_name}</div>
      <div className={styles.col4}>#8794564</div>
      <div className={styles.col5}>13 July, 2023</div>
      <div className={styles.col6}>marvinken@gmail.com</div>
      <div className={styles.col7}>+33 4544-8879</div>
      <div className={styles.col8}>
        {ICONS.pen}
        {ICONS.redTrash}
      </div>
    </div>
  );
};

export default CustomerRow;
