import React from "react";
import styles from "./AdminProductRow.module.scss";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import { ICONS } from "../../../../../icons";

const AdminProductRow = () => {
  return (
    <div className={styles.productRow}>
      <div className={styles.col1}>
        <Checkbox shadowed={true} />
      </div>
      <div className={styles.col2}>#12340987</div>
      <div
        style={{ color: "#B06934", textDecorationLine: "underline" }}
        className={styles.col3}
      >
        Karadibetta Estate
      </div>
      <div className={styles.col4}>Coffee beans</div>
      <div className={styles.col5}>Arabica</div>
      <div className={styles.col6}>27 June, 2023</div>
      <div className={styles.col7}>29.25$</div>
      <div className={styles.col8}>2045</div>
      <div className={styles.col9}>
        {ICONS.pen}
        {ICONS.redTrash}
      </div>
    </div>
  );
};

export default AdminProductRow;
